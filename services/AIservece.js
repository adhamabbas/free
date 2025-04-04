const axios = require("axios");

// Initialize the OpenRouter API client
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

/**
 * Function to generate a chat completion using OpenRouter's API
 * @param {string} prompt - The user's input message
 * @returns {Promise<string>} - The AI's response
 */
const generateChatCompletion = async (prompt) => {
  try {
    const response = await axios.post(
      `${OPENROUTER_BASE_URL}/chat/completions`,
      {
        model: "openrouter/quasar-alpha", // Specify the model
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: prompt, // Text-based question
              },
              {
                type: "image_url",
                image_url: {
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                },
              },
            ],
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Replace with your site URL.
          "X-Title": "<YOUR_SITE_NAME>", // Optional. Replace with your site name.
          "Content-Type": "application/json",
        },
      }
    );

    // Return the AI's response
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating chat completion:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = { generateChatCompletion };
