# ⚖️ NyayaAI — AI-Powered Legal Assistant for India

> **Nyaya (न्याय)** means *Justice* in Sanskrit.

A modern, production-ready web application that makes Indian legal information accessible to all — in 5 languages, with AI-powered chat.

---

## 🚀 Quick Start (VS Code)

### Prerequisites
- **Node.js 18+** → Download from https://nodejs.org
- **npm** (included with Node.js)
- **VS Code** → Download from https://code.visualstudio.com

### Steps to Run

```bash
# 1. Open this folder in VS Code
#    File → Open Folder → select nyaya-ai-legal

# 2. Open integrated terminal
#    Terminal → New Terminal  (or Ctrl + `)

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev

# 5. Open your browser at:
#    http://localhost:3000
```

The app will automatically open in your browser. Hot-reload is enabled — any file change reflects instantly.

### Build for Production

```bash
npm run build     # creates /dist folder
npm run preview   # preview the production build locally
```

---

## 📁 Folder Structure

```
nyaya-ai-legal/
├── .vscode/
│   ├── settings.json        ← VS Code editor settings
│   ├── extensions.json      ← Recommended extensions
│   └── launch.json          ← Chrome debugger config
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           ← Sticky nav, dark mode, mobile menu
│   │   ├── SearchBar.jsx        ← Search input + voice-to-text
│   │   ├── ResultCard.jsx       ← Legal topic card (bookmark, copy)
│   │   ├── Chatbot.jsx          ← ChatGPT-style AI chat window
│   │   └── LanguageSelector.jsx ← Dropdown for 5 Indian languages
│   │
│   ├── pages/
│   │   ├── Home.jsx             ← Hero + search + results grid + CTA
│   │   └── About.jsx            ← Platform info, features, disclaimer
│   │
│   ├── services/
│   │   └── api.js               ← Legal data, AI responses, translations
│   │
│   ├── App.jsx                  ← Root component, routing, global state
│   ├── main.jsx                 ← React entry point
│   └── index.css                ← Tailwind base + custom utilities
│
├── index.html                   ← HTML template
├── package.json                 ← Dependencies and scripts
├── vite.config.js               ← Vite build configuration
├── tailwind.config.js           ← Tailwind CSS configuration
├── postcss.config.js            ← PostCSS configuration
├── .prettierrc                  ← Code formatting rules
└── .gitignore
```

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🤖 AI Chatbot | ChatGPT-style chat with typing animation, persistent history |
| 🔍 Legal Search | Real-time search across 12+ legal topics with category filter |
| 🌍 5 Languages | English, Hindi, Bengali, Tamil, Telugu |
| 🎤 Voice Input | Web Speech API with Indian language locale codes |
| 🔖 Bookmarks | Save topics to localStorage, persist across sessions |
| 📋 Copy to Clipboard | One-click copy of any legal card content |
| 🌙 Dark Mode | Persistent dark/light mode toggle |
| 💀 Skeleton UI | Loading animation while data fetches |
| 📱 Responsive | Mobile-first, works on all screen sizes |
| 💾 Persistent Chat | Chat history saved in localStorage |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2 | UI framework (functional components + hooks) |
| React Router | 6.22 | Client-side routing |
| Tailwind CSS | 3.4 | Utility-first styling |
| Vite | 5.1 | Build tool and dev server |
| Web Speech API | Browser native | Voice input (no library needed) |

> **Note:** This project uses zero heavyweight dependencies. No Redux, no Axios, no chart libraries — just React + Tailwind + browser APIs.

---

## 🏗️ Architecture

```
User Browser
    │
    ▼
React App (Vite Dev Server: localhost:3000)
    │
    ├── App.jsx (Router + Global State)
    │       ├── darkMode (localStorage persisted)
    │       ├── language (state)
    │       └── chatOpen (state)
    │
    ├── Navbar.jsx
    ├── Pages (Home / About)
    │       └── Components (SearchBar, ResultCard)
    ├── Chatbot.jsx (floating overlay)
    │
    └── services/api.js
            ├── legalData[]        (mock legal database)
            ├── searchLegal()      (filtered search with 600ms delay)
            ├── getAIResponse()    (keyword-matched AI responses)
            └── translations{}    (5-language UI strings)
```

### Key Design Decisions

1. **No backend needed** — All data is in `api.js`. Swap mock functions for real Anthropic API with one file change.
2. **localStorage for persistence** — Chat history, bookmarks, and dark mode survive page refresh without a database.
3. **No external markdown library** — The `BotMessage` component in `Chatbot.jsx` handles `**bold**` and newlines natively, avoiding ESM compatibility issues.
4. **Voice input is browser-native** — Uses `window.SpeechRecognition` / `window.webkitSpeechRecognition`, no npm package needed.

---

## 🔌 Connecting Real Anthropic Claude API

Replace `getAIResponse` in `src/services/api.js`:

```js
export async function getAIResponse(message) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: "You are an expert Indian legal assistant. Provide clear, structured answers about Indian law in plain language. Always mention relevant section numbers, helpline numbers, and practical next steps.",
      messages: [{ role: "user", content: message }],
    }),
  });
  const data = await response.json();
  return data.content[0].text;
}
```

Create `.env` file:
```
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

---

## 🔮 Future Scope

- [ ] Real Anthropic Claude API integration
- [ ] User authentication (Firebase / Supabase)
- [ ] PDF export of legal summaries
- [ ] Lawyer directory + booking
- [ ] Push notifications for case updates
- [ ] PWA / offline mode
- [ ] Legal document template generator
- [ ] WhatsApp / Telegram bot interface

---

## ⚠️ Disclaimer

NyayaAI provides general legal information for **educational purposes only**. This is **NOT legal advice**. For specific legal matters, please consult a qualified advocate.

---

*Built with ❤️ for India's 1.4 billion citizens — because justice should be accessible to all.*
