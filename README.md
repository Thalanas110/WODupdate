# 🎮 War of Dots

> **Command. Conquer. Dominate.**

A strategic multiplayer game where every move matters. This repository contains the official website for War of Dots — built with React, TypeScript, and modern web technologies.

---

## ✨ Features

- **🎯 Landing Page** — Immersive hero section with animated gameplay screenshots and countdown timer
- **📖 How to Play** — Interactive tutorial guide with step-by-step instructions
- **⏱️ Countdown Timer** — Flip-clock style countdown to game release with Steam integration
- **🎬 Loading Screen** — Tactical-themed loading animation
- **📱 Fully Responsive** — Optimized for desktop and mobile devices
- **🌙 Dark Theme** — Military-inspired dark aesthetic

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev/) | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [TailwindCSS](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | UI Components |
| [React Router](https://reactrouter.com/) | Client-side Routing |
| [TanStack Query](https://tanstack.com/query) | Data Fetching |
| [Lucide React](https://lucide.dev/) | Icons |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/warofdots.git
   cd warofdots
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:8080](http://localhost:8080)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint for code quality |

---

## 📁 Project Structure

```
warofdots/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── constants/         # Configuration constants
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Route pages
│   │   ├── Index.tsx
│   │   ├── HowToPlay.tsx
│   │   └── NotFound.tsx
│   ├── styles/            # Additional styles
│   ├── App.tsx            # Main application
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

---

## 🌐 Deployment

The website is configured for deployment on:

### Netlify (Recommended)

The project includes a `netlify.toml` configuration file. Simply connect your repository to Netlify for automatic deployments.

```toml
[build]
  publish = "dist"
  command = "npm run build"
```

### Other Platforms

Build the project and deploy the `dist` folder to any static hosting service:

```bash
npm run build
```

---

## 🎨 Customization

### Countdown Timer

Update the target date in `src/components/CountdownTimer.tsx`:

```tsx
const targetDate = new Date('2025-01-15T00:00:00');
```

### Colors & Theming

Modify the theme in `tailwind.config.ts` and `src/index.css` for custom color schemes.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary software developed by **Tea and Python**.

---

## 🔗 Links

- 🌍 **Website**: [https://warofdots.net](https://warofdots.net)
- 💬 **Discord**: [Join our community](#discord)
- 🎮 **Steam**: Coming Soon

---

<p align="center">
  Made with ❤️ by <strong>Tea and Python</strong>
</p>
