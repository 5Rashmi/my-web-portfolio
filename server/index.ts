import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import mongoose from "mongoose";
import Message from "./models/Message";

dotenv.config();

const app = express();
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());

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
    res.status(201).json({ success: true, message: "Message received!"});
  } catch (error) {
    res.status(500).json({success: false, message: "Error saving message"});
  }
});

app.get("/api/message", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({message: "Error receiving message"});
  }
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
