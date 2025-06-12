import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
}));

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
  console.log("Using SerpAPI Key:", process.env.SERP_API_KEY);

    res.json(response.data);
  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({
      error: "Search failed",
      details: error.message,
    });
  }
});


const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
