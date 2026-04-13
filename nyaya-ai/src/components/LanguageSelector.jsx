import { useState, useRef, useEffect } from "react";

const LANGUAGES = [
  { code: "en", native: "English", flag: "🇬🇧", label: "English" },
  { code: "hi", native: "हिन्दी",  flag: "🇮🇳", label: "Hindi" },
  { code: "bn", native: "বাংলা",   flag: "🇮🇳", label: "Bengali" },
  { code: "ta", native: "தமிழ்",   flag: "🇮🇳", label: "Tamil" },
  { code: "te", native: "తెలుగు",  flag: "🇮🇳", label: "Telugu" },
];

export default function LanguageSelector({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-amber-400 dark:hover:border-amber-600 transition-colors"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.native}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-50 fade-in">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                language === lang.code
                  ? "bg-amber-50 dark:bg-amber-900/25 text-amber-700 dark:text-amber-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <div className="text-left leading-tight">
                <div>{lang.native}</div>
                <div className="text-xs text-gray-400 font-normal">{lang.label}</div>
              </div>
              {language === lang.code && (
                <svg className="w-4 h-4 ml-auto text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
