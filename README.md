# Sweet Letter Website 💌

A beautiful React + TypeScript website featuring a cute envelope with a teddy bear and a heartfelt letter about the moon's beauty.

## Features

- 🌓 Dark/Light theme toggle
- 🧸 Cute animated teddy bear with speech bubble
- 💌 Interactive envelope that opens on click
- 🌙 Beautiful letter with moon poetry
- ✨ Smooth animations and transitions
- 📱 Fully responsive design

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- CSS3 with animations

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

1. Update the `base` in `vite.config.ts` to match your repository name
2. Run:
```bash
npm run deploy
```

This will build and deploy your app to GitHub Pages.

## Project Structure

```
src/
├── components/
│   ├── ThemeContext.tsx   # Theme state management
│   └── ThemeToggle.tsx    # Theme toggle button
├── pages/
│   ├── EnvelopePage.tsx   # Landing page with envelope
│   └── LetterPage.tsx     # Letter page with moon poetry
├── styles/
│   ├── index.css          # Global styles and theme variables
│   ├── App.css
│   ├── ThemeToggle.css
│   ├── EnvelopePage.css
│   └── LetterPage.css
├── types/
│   └── theme.ts           # TypeScript type definitions
├── App.tsx
└── main.tsx
```

## License

MIT

