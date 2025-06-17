import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import mongoose from "mongoose";
import Message from "./models/Message";
import Like from "./models/Like";
import Comments from "./models/Comments";
import notifyYou from "./notifyYou";

dotenv.config();

const app = express();
const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://my-web-portfolio-one-peach.vercel.app",
        "https://my-web-portfolio-xnsl.onrender.com"
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/api/search", async (req, res) => {
  const { q } = req.query;

  try {
    const response = await axios.get(`https://serpapi.com/search.json`, {
      params: {
        q,
        location: "Austin, Texas, United States",
        hl: "en",
        gl: "us",
        google_domain: "google.com",
        api_key: process.env.SERP_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({
      error: "Search failed",
      details: error.message,
    });
  }
});

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((error) => {
  console.error("Mongo connection error", error); 
  process.exit(1);
});

app.post("/api/message", async (req, res) => {
  try {
    const newMsg = new Message(req.body);
    await newMsg.save();
    await notifyYou(newMsg);
    res.status(201).json({ success: true, message: "Message received!"});
  } catch (error) {
    res.status(500).json({success: false, message: "Error saving message"});
  }
});

app.post("/api/like", async (req, res) => {
  try {
    const likeDoc = await Like.findOne();
    if (likeDoc) {
      likeDoc.count += 1;
      await likeDoc.save();
    } else {
      const newLike = new Like({ count: 1 });
      await newLike.save();
    }

    const updated = await Like.findOne();
    res.json({ count: updated?.count || 0 });
  } catch (error) {
    res.status(500).json({ message: "Error updating like" });
  }
});

app.get("/api/like", async (req, res) => {
  try {
    const like = await Like.findOne();
    res.json({ count: like?.count || 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching likes" });
  }
});

app.post("/api/comment", async (req, res) => {
  try {
    const { message } = req.body;
    const newComment = new Comments({ message, createdAt: new Date() });
    await newComment.save();
    await notifyYou(newComment);

    res.status(201).json({ success: true, message: "Comment saved" });
  } catch (error) {
    res.status(500).json({ message: "Error saving comment" });
  }
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
