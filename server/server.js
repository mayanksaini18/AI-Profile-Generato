// server/server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from 'dotenv';
import path from "path";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_KEY) console.warn("GEMINI_API_KEY not set in .env");

app.use(cors());
app.use(express.json({ limit: "1mb" }));

// Serve your frontend (adjust path if your index.html is elsewhere)
app.use(express.static(path.join(process.cwd(), "public")));

// Proxy endpoint
app.post("/api/gemini", async (req, res) => {
  try {
    const { resume, responseSchema, systemPrompt } = req.body || {};
    if (!resume) return res.status(400).json({ error: "Missing resume field" });

    const sys = systemPrompt || "You are an expert Information Architect and Data Extractor.";
    const userQuery =
      `Analyze the following resume text and return the structured JSON object:\n\n--- RESUME TEXT ---\n${resume}\n---`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: { parts: [{ text: sys }] },
      generationConfig: { responseMimeType: "application/json", responseSchema }
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${GEMINI_KEY}`;

    const apiResp = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const json = await apiResp.json();
    if (!apiResp.ok) return res.status(apiResp.status).json(json);
    return res.json(json);
  } catch (err) {
    console.error("Proxy error", err);
    return res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
