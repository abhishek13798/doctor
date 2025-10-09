// API Configuration
export const API_CONFIG = {
  // Use environment variable for security
  OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY || '',
};

// For production, you should use environment variables:
// export const API_CONFIG = {
//   OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY,
//   OPENAI_API_URL: 'https://api.openai.com/v1/chat/completions'
// };
