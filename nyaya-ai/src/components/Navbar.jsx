import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector.jsx";
import { translations } from "../services/api.js";

export default function Navbar({ darkMode, setDarkMode, language, setLanguage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const t = translations[language] || translations.en;

  const linkClass = (path) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
      pathname === path
        ? "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400"
        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-amber-100 dark:border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-lg shadow-md shadow-amber-200/50 dark:shadow-amber-900/30 group-hover:scale-105 transition-transform">
              ⚖
            </div>
            <div className="leading-none">
              <div className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                Nyaya<span className="text-amber-600">AI</span>
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5">Legal Assistant</div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className={linkClass("/")}>{t.home}</Link>
            <Link to="/about" className={linkClass("/about")}>{t.about}</Link>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 ml-auto">
            <LanguageSelector language={language} setLanguage={setLanguage} />

            {/* Dark Mode */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle dark mode"
              className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 py-2 space-y-1">
            <Link to="/" className="block px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-xl" onClick={() => setMobileOpen(false)}>{t.home}</Link>
            <Link to="/about" className="block px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-xl" onClick={() => setMobileOpen(false)}>{t.about}</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
