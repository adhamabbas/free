// services/AIservece.js
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Function to generate a chat completion using OpenAI's API
 * @param {string} prompt - The user's input message
 * @returns {Promise<string>} - The AI's response
 */
const generateChatCompletion = async (prompt) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error generating chat completion:", error);
    throw error;
  }
};

module.exports = { generateChatCompletion };