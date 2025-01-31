# 🎬 CineList

A simple movie watchlist app that lets users search for movies via the OMDB API and save them to a watchlist. The watchlist persists between sessions using local storage.

## 🚀 Live Demo

[CineList on Netlify](https://cinelist-dev.netlify.app)

## 🛠️ Features

- 🔎 **Search Movies** – Fetch movies from the OMDB API based on user input.
- 🎞 **Movie Cards** – Display movie results in a clean, responsive layout.
- 📌 **Watchlist** – Save favorite movies to a separate watchlist.
- 🔄 **Persistent Storage** – Watchlist is saved in **local storage** to persist between refreshes.
- 🛣 **Navigation** – Use **React Router** to switch between search and watchlist views.
- 🎨 **Modern UI** – Styled with **Tailwind CSS** for a sleek design.

## 🏗️ Tech Stack

- **React** + **Vite** – Fast and efficient development.
- **Tailwind CSS** – Utility-first styling.
- **React Router** – Client-side navigation.
- **OMDB API** – Fetch movie data.
- **Local Storage** – Persist watchlist between sessions.
- **Netlify** – Live deployment.

## 📥 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cinelist.git
   cd cinelist
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Get an OMDB API Key:**  
   Sign up at [OMDB API](https://www.omdbapi.com/) and get an API key.
4. **Create a `.env` file in the root directory and add:**
   ```
   VITE_OMDB_API_KEY=your_api_key_here
   ```
5. **Run the development server:**
   ```bash
   npm run dev
   ```
6. **Visit:**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📌 Future Improvements

- ✅ Implement user authentication (e.g., Firebase Auth).
- ⭐ Allow users to rate or review movies.
- 🎭 Add movie details with trailers and additional info.
- 🌙 Dark mode toggle.

## 🤝 Contributing

Pull requests are welcome! If you'd like to improve the project, feel free to fork it and submit a PR.

## 📜 License

This project is licensed under the **GNU GENERAL PUBLIC LICENSE 3.0**. See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) file for details.

---

Happy watching! 🍿
