import type { ProjectType } from "../types/projectType";

export const projectsData: ProjectType[] = [
  {
    title: "AuraVerse",
    type: "Web App",
    status: "Ongoing",
    Icon: "/icons/project-logos/aura-verse.png",
    description:`AuraVerse is an intelligent, mood-driven recommendation platform designed to understand emotions and respond with personalized suggestions. From music and books to movies and ambient settings, AuraVerse creates a tailored experience by interpreting user input using natural language processing (NLP).

Built with a modern full-stack architecture — including Next.js, TypeScript, Express, and MongoDB — the platform ensures security, speed, and scalability across all layers.

🔹 Key Features

🧠 Emotion Parsing AI – Uses NLP to analyze user moods and interpret emotional context in real-time.
🔐 Secure Auth System – Protects user data with JWT and bcrypt-based authentication.
👤 Custom User Profiles – Users can personalize their avatar, name, and bio for a richer experience.
📚🎶📽️ Smart Recommendations – Curates books, music, and movies based on mood analysis.
🌐 Modern Frontend – Developed with Next.js and TypeScript for a fast, responsive interface.
🗂️ Modular Backend – Combines Express and Flask APIs for flexible and scalable data handling.
📊 Dynamic Mood Responses – Instantly reacts to user-selected moods with tailored content.
🛡️ Built-in Security & Performance – Backend designed with performance, scalability, and protection in mind.

AuraVerse bridges emotional intelligence with tech innovation, offering a deeply personalized and immersive web experience. 🚀`,
    stack: ["MERN", "NextJS", "Typescript", "Tailwind CSS", "Flask"],
    githubLink: "https://github.com/5Rashmi/aura-verse",
  },
  {
    title: "Personal Anime Watchlist",
    type: "Web App",
    status: "Completed",
    Icon: "/icons/project-logos/paw.png",
    description: `Personal Anime Watchlist is a MERN stack web application designed for anime enthusiasts to efficiently manage and track their watchlists. Built with React, TypeScript, Chakra UI, MongoDB, Express.js, and Node.js, the project provides an intuitive and dynamic interface with secure backend functionalities.

🔹 Features
📖 Anime Entry Management – Add, update, and remove anime entries while storing details such as title, genre, and viewing status.

🗂 Categorization & Filtering – Organize anime by watching, completed, dropped, or using custom tags for better navigation.

✨ Responsive UI – Chakra UI ensures a visually cohesive and accessible experience with reusable, customizable components.

🔍 Search & Sorting – Easily search for specific anime titles and sort entries based on preferences.

🔒 Authentication & Security – Secured user accounts with JWT authentication and bcrypt hashing for password protection.

💾 Persistent Storage – Data is stored in MongoDB, ensuring retrieval and continuity across sessions.

⚡ API Integrations – Potential integration with external anime APIs like MyAnimeList or AniList for fetching live data.

With a modular and scalable architecture, this project showcases efficient state management, reusable UI components, and secure backend operations, making it a strong addition to your portfolio. 🚀`,
    stack: ["MERN", "Chakra UI", "Vite", "Typescript"],
    githubLink: "https://github.com/5Rashmi/Personal-Anime-Watchlist",
    deploy: "https://personal-anime-watchlist-frontend.onrender.com/",
  },
  {
    title: "ArtHub Connect",
    type: "Android App",
    status: "Completed",
    Icon: "https://github.com/user-attachments/assets/48e56321-e7d6-43f6-b0d2-9a85f09a5662",
    description: `ArtHub Connect is a mobile application developed using Android Studio, Kotlin, and Firebase, designed for artists to showcase their work, engage with a creative community, and collaborate seamlessly.

🔹 Key Features
🎨 Artist Profiles – Users can create and personalize their profiles, displaying their artwork, bio, and creative journey.

📂 Portfolio Management – A seamless interface for uploading, categorizing, and organizing digital artworks.

💬 Community Interaction – Features like comments, likes, and messaging encourage engagement between artists.

🔒 Secure Authentication – Firebase Authentication ensures safe user login, supporting email and social login options.

☁️ Cloud Storage – Firebase Storage enables efficient media hosting for artwork uploads.

📜 Real-Time Updates – Firebase Firestore ensures instant synchronization across all connected devices.

🔍 Search & Discovery – Users can explore artists, artwork categories, and trending content with an intuitive search system.

💬 Live Chat Section – A real-time chat feature allows registered users to communicate, fostering collaboration and artistic discussions.

With a modern and scalable architecture, ArtHub Connect leverages Firebase's real-time capabilities to offer seamless interaction while maintaining a fluid and responsive UI powered by Kotlin. 🚀`,
    stack: ["Android Studio", "Kotlin", "Firebase"],
    githubLink: "https://github.com/5Rashmi/ArtHub-Connect",
  },
  {
    title: "Shadows Of Starhaven",
    type: "Unity Game",
    status: "Completed",
    Icon: "/icons/project-logos/sos.png",
    description: `Shadows Of Starhaven is a 3D action-adventure FPS game, designed to deliver an immersive gameplay experience with dynamic combat mechanics and an engaging storyline. Developed with advanced rendering techniques, the game combines fast-paced shooting mechanics with exploration-driven gameplay.

🔹 Key Features
🎮 First-Person Combat – Players engage in intense battles, utilizing a variety of weapons and abilities.

🌍 Expansive World – A richly detailed environment encourages exploration and discovery.

🧩 Puzzle & Strategy Elements – Players must solve challenges and navigate obstacles to progress.

🔊 Immersive Sound Design – High-quality audio enhances the atmosphere and tension of the game.

⚡ Optimized Performance – Designed for smooth gameplay with efficient rendering and physics integration.

With a focus on fluid mechanics, engaging level design, and strategic combat, Shadows Of Starhaven showcases expertise in game development and interactive storytelling. 🚀`,
    stack: ["Unity", "C#"],
    githubLink: "https://github.com/5Rashmi/Shadows-Of-Starhaven",
  },
  {
    title: "Tic-Tac-Toe",
    type: "Web Game",
    status: "Completed",
    Icon: "/icons/project-logos/tic-tac-toe.png",
    description: `Tic-Tac-Toe is a classic two-player strategy game, developed with smooth gameplay mechanics, responsive UI, and dynamic visuals. The project enhances the traditional experience with modern touches, including lighting effects for a more engaging interface.

🔹 Key Features
❌⭕ Classic Gameplay – Players take turns marking X or O on a 3x3 grid, aiming to form a winning line.

🧠 AI Opponent (if implemented) – Option to play against a computer opponent with varying difficulty levels.

✨ Lighting Effects – Interactive lighting features enhance the visual experience, providing dynamic feedback for moves, wins, and transitions.

🎨 Clean UI Design – A minimalist and user-friendly interface improves accessibility and engagement.

🔄 Restart & Reset Options – Players can restart the game or reset the board at any time.

📜 Win/Loss Detection – The game automatically detects wins, losses, and draws, applying visual indicators.

⚡ Optimized Performance – Ensures smooth animations and efficient state management for seamless gameplay.

The addition of lighting effects enhances interactivity, making the gameplay visually striking and immersive. With structured and scalable code, Tic-Tac-Toe showcases expertise in game logic implementation, UI design, and interactive user experiences. 🚀`,
    stack: ["Vanilla JS", "CSS", "HTML"],
    githubLink: "https://github.com/5Rashmi/tic-tac-toe",
    deploy: "https://5rashmi.github.io/tic-tac-toe/src/"
  },
];
