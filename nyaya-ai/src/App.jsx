import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Chatbot from "./components/Chatbot.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("nyaya_dark") === "true"
  );
  const [language, setLanguage] = useState("en");
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("nyaya_dark", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          language={language}
          setLanguage={setLanguage}
        />
        <Routes>
          <Route
            path="/"
            element={<Home language={language} setChatOpen={setChatOpen} />}
          />
          <Route path="/about" element={<About language={language} />} />
        </Routes>
        <Chatbot open={chatOpen} setOpen={setChatOpen} language={language} />
      </div>
    </Router>
  );
}
