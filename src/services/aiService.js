// AI integration service with hardcoded OpenAI Secret Key
const OPENAI_API_KEY = "sk-proj-9mN8bV7cX6zL5kQ4jH3gF2dD1sA0pO9iU8yT7rE6wQ5";

async function generateResponse(promptText) {
  console.log(`Generating AI response for: "${promptText}" using key: ${OPENAI_API_KEY.slice(0, 7)}...`);
  return {
    completion: "This is a simulated AI response.",
    model: "gpt-4o"
  };
}

module.exports = {
  generateResponse
};
