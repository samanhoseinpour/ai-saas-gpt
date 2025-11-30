# AI Article Summarizer (GPT SaaS)

Single-page React app that turns long-form articles into concise summaries using the RapidAPI Article Extractor and Summarizer (GPT-4) endpoint. Built as part of a university project.

## Features
- Paste any article URL to generate a short summary (3 paragraphs by default) via RapidAPI.
- Recent URLs are saved to localStorage for quick reuse, with click-to-copy support.
- Loading/error states and inline summary display.
- Built with Vite, React 18, Redux Toolkit Query, and TailwindCSS.

## Getting started
1) Install dependencies  
   `npm install`
2) Add your API key (RapidAPI Article Extractor and Summarizer)  
   Create a `.env` file at the repo root with:
   ```
   VITE_RAPID_API_ARTICLE_KEY=<your_rapidapi_key>
   ```
3) Run the dev server  
   `npm run dev` then open the printed local URL.

## Scripts
- `npm run dev` – start the Vite dev server.
- `npm run build` – production build to `dist/`.
- `npm run preview` – preview the production build.
- `npm run lint` – run ESLint.

## Usage
- Enter a full article URL and press ↵ to request a summary.
- Click a saved link in the history list to re-run its summary; click the copy icon to copy the URL.
- Summaries and history are stored in localStorage until you clear browser data.
