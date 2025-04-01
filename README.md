# Joke Teller App

A simple web application that tells programming jokes using the VoiceRSS API.

---

## Features

- Fetches random programming jokes from the JokeAPI
- Converts jokes to speech using the VoiceRSS API
- Securely handles API keys using environment variables
- Full-stack application with secure server-side API key management

## Live Demo

Check out the live application at: [https://joke-teller-kappa-gold.vercel.app/](https://joke-teller-kappa-gold.vercel.app/)

---

## Security Implementation

This application securely handles the VoiceRSS API key by:

- Storing it in a `.env` file locally which is not committed to version control
- Using dotenv to load environment variables on the server side
- Creating a server-side API endpoint that securely provides the key to the client
- Storing the API key as an environment variable on Vercel (for production)
- Never exposing the actual API key in client-side code or version control

---

## Deployment Architecture

The application is deployed on Vercel with:

- Frontend static files (HTML, CSS, JS) served from Vercel's global CDN
- Backend Express server converted to serverless functions
- Environment variables securely stored in Vercel's environment configuration
- Automatic deployments from the GitHub repository

---

## Setup for Local Development

1. Clone this repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file by copying the example:

   ```bash
   cp .env.example .env
   ```

4. Get a VoiceRSS API key from [voicerss.org](https://www.voicerss.org/)
5. Add your API key to the `.env` file:

   ```bash
   VOICERSS_API_KEY=your_api_key_here
   PORT=3000
   ```

6. Start the application:

   ```bash
   node server.js
   ```

7. Open your browser and navigate to `http://localhost:3000`

---

## Deploying to Vercel

1. Push the local changes in this repository to GitHub (ensure `.env` is in `.gitignore`)
2. Connect your GitHub repository to Vercel
3. Add your `VOICERSS_API_KEY` as an environment variable in Vercel's project settings
4. Deploy the project

## How It Works

- The Express server provides a secure endpoint (`/api/config`) that returns the API key
- The frontend fetches this key when the application starts
- When a user clicks the button, the application:
  1. Fetches a random joke from JokeAPI
  2. Sends the joke text and API key to VoiceRSS
  3. Plays the returned audio through the browser

---

## Conclusion

This application provides a fun and engaging way to learn programming jokes while also showcasing the power of secure environment variables and server-side API key management.
