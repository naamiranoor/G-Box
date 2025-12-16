<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# GBox — Run & Deploy

This repo contains the GBox single-page app. All AI provider-specific
integrations have been removed from the client to make the project safe to
deploy. You can run locally or deploy to Vercel quickly.

## Run locally

Prerequisites: Node.js

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Deploy to Vercel

You can deploy the app to Vercel (static build):

1. Install the Vercel CLI (optional):

```bash
npm i -g vercel
```

2. From the project root, run:

```bash
vercel --prod
```

Vercel will detect the build command (`npm run build`) and deploy the `dist/`
output as a static site.

If you use a server-side AI proxy in the future, add the endpoint URL to Vercel
environment variables (do NOT add API keys to client-side envs).
