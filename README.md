# KunjCare - Mental Health Practice Website

A modern, responsive website for KunjCare psychotherapy practice featuring an AI-powered health assistant.

## Features

- 🏥 Professional therapy practice website
- 🤖 AI Health Assistant powered by OpenAI
- 📱 Mobile-responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Add your OpenAI API key to `.env`:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

### 3. Get OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy the key and add it to your `.env` file

### 4. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## AI Health Assistant

The AI assistant provides:
- General mental health information
- Stress management tips
- Therapy guidance
- Professional referrals to Ms. Rimjhim

**Important**: The AI provides general information only and always recommends consulting with Ms. Rimjhim for professional mental health support.

## Contact Information

- **Email**: kunjcare@gmail.com
- **Phone/WhatsApp**: +91-6006763586
- **Practitioner**: Ms. Rimjhim (Licensed Clinical Psychologist - RCI)

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- OpenAI API
- Lucide React Icons

## Deployment

For production deployment, make sure to:
1. Set the `VITE_OPENAI_API_KEY` environment variable
2. Build the project: `npm run build`
3. Deploy the `dist` folder to your hosting service

## Security Note

Never commit your `.env` file or API keys to version control. The `.env` file is already included in `.gitignore`.