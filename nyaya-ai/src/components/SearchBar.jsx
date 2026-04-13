import { useState, useEffect, useRef } from "react";
import { translations } from "../services/api.js";

export default function SearchBar({ onSearch, language }) {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const recognitionRef = useRef(null);
  const t = translations[language] || translations.en;

  useEffect(() => {
    setVoiceSupported(!!(window.SpeechRecognition || window.webkitSpeechRecognition));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  const startVoice = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    if (listening) { recognitionRef.current?.stop(); return; }

    const locales = { hi: "hi-IN", bn: "bn-IN", ta: "ta-IN", te: "te-IN", en: "en-IN" };
    const rec = new SR();
    recognitionRef.current = rec;
    rec.lang = locales[language] || "en-IN";
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    rec.onresult = (e) => {
      const txt = e.results[0][0].transcript;
      setQuery(txt);
      onSearch(txt);
    };
    rec.start();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto" role="search">
      <div className="relative flex items-center">
        <svg className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          aria-label="Search legal topics"
          className="w-full pl-12 pr-36 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-white/20 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-xl shadow-black/10 text-sm transition-all"
        />

        <div className="absolute right-2 flex items-center gap-1">
          {voiceSupported && (
            <button
              type="button"
              onClick={startVoice}
              title="Voice search"
              className={`p-2.5 rounded-xl transition-all ${
                listening
                  ? "bg-red-500 text-white animate-pulse"
                  : "text-gray-400 hover:bg-white/20 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-white text-amber-700 rounded-xl text-sm font-bold hover:bg-amber-50 transition-colors shadow-sm active:scale-95"
          >
            Search
          </button>
        </div>
      </div>

      {listening && (
        <p className="mt-2 text-center text-xs text-red-300 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-ping" />
          Listening... speak now
        </p>
      )}
    </form>
  );
}
