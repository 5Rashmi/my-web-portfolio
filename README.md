# 🪟 Rashmi's Web Portfolio

A personal portfolio inspired by Desktop interface — featuring draggable windows, custom animations, live search powered by SerpAPI, and a MongoDB-based contact system. Built using modern frontend/backend stacks.

## 🔗 Live Demo

🌐 [Visit Portfolio](https://my-web-portfolio-one-peach.vercel.app/)

---

## ✨ Features

- 🪟 **Windows-style UI** with draggable/resizable windows
- 🗂️ **Multi-window management** for About, Projects, Skills, Contact, and more
- 🔍 **Google-powered search** via [SerpAPI](https://serpapi.com/)
- 🎧 **Music search** via [DeezerAPI](https://deezerdevs-deezer.p.rapidapi.com/)
- 📩 **Contact form** that stores messages in MongoDB (Atlas)
- 🔄 Realtime toasts for success and errors using `react-hot-toast`
- 💾 Resume download with modern button design
- ⚡ Hosted on **Vercel** (frontend) and **Render** (backend)

---

## 🧑‍💻 Built With

- **Frontend**: React, TypeScript, Vite, Tailwind CSS  
- **Backend**: Node.js, Express, Mongoose  
- **Database**: MongoDB Atlas  
- **Search API**: [SerpAPI](https://serpapi.com/)  
- **Deployment**: Vercel (frontend), Render (backend)

---
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
