const express = require("express");
const { generateChatCompletion } = require("../services/AIservece");

const router = express.Router();

/**
 * POST /api/v1/ai/chat
 * Request Body: { "question": "What is AI?" }
 * Response: { "answer": "AI is..." }
 */
router.post("/chat", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    // Get AI response
    const answer = await generateChatCompletion(question);

    // Send the response back to the frontend
    res.status(200).json({ answer });
  } catch (error) {
    console.error("Error in /ai/chat route:", error);
    res.status(500).json({ error: "An error occurred while processing your request" });
  }
});

module.exports = router;