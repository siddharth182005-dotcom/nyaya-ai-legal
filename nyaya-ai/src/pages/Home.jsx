import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ResultCard from "../components/ResultCard.jsx";
import { searchLegal, getAllCategories, translations } from "../services/api.js";

function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 space-y-3 animate-pulse">
      <div className="h-5 w-28 bg-gray-100 dark:bg-gray-800 rounded-full" />
      <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-800 rounded-full" />
      <div className="space-y-2">
        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full" />
        <div className="h-3 w-5/6 bg-gray-100 dark:bg-gray-800 rounded-full" />
        <div className="h-3 w-4/6 bg-gray-100 dark:bg-gray-800 rounded-full" />
      </div>
      <div className="flex gap-2 pt-1">
        <div className="h-5 w-14 bg-gray-100 dark:bg-gray-800 rounded-full" />
        <div className="h-5 w-14 bg-gray-100 dark:bg-gray-800 rounded-full" />
      </div>
    </div>
  );
}

const STATS = [
  { icon: "📚", value: "500+", label: "Legal Topics" },
  { icon: "🌍", value: "5",    label: "Languages" },
  { icon: "⚖️", value: "50+",  label: "Acts Covered" },
  { icon: "👥", value: "10K+", label: "Users Helped" },
];

export default function Home({ language, setChatOpen }) {
  const [results, setResults]         = useState([]);
  const [loading, setLoading]         = useState(true);
  const [categories, setCategories]   = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showBookmarks, setShowBookmarks]   = useState(false);
  const [bookmarks, setBookmarks] = useState(() => {
    try { return JSON.parse(localStorage.getItem("nyaya_bookmarks") || "[]"); }
    catch { return []; }
  });

  const t = translations[language] || translations.en;

  useEffect(() => {
    setCategories([t.allCategories || "All", ...getAllCategories()]);
    (async () => {
      setLoading(true);
      const data = await searchLegal("");
      setResults(data);
      setLoading(false);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    try { localStorage.setItem("nyaya_bookmarks", JSON.stringify(bookmarks)); }
    catch { /* ignore */ }
  }, [bookmarks]);

  const handleSearch = async (query) => {
    setLoading(true);
    setActiveCategory(categories[0]);
    setShowBookmarks(false);
    const data = await searchLegal(query);
    setResults(data);
    setLoading(false);
  };

  const showAll = async () => {
    setShowBookmarks(false);
    setActiveCategory(categories[0]);
    setLoading(true);
    const data = await searchLegal("");
    setResults(data);
    setLoading(false);
  };

  const displayData = showBookmarks
    ? bookmarks
    : results.filter((r) =>
        activeCategory === categories[0] || r.category === activeCategory
      );

  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80')",
          }}
          role="img"
          aria-label="Lady Justice statue representing Indian law"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/88 via-amber-950/60 to-gray-900/88" />
        {/* Decorative blurs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            India&apos;s AI-Powered Legal Platform
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            AI Legal Assistant for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Everyone
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {t.heroSubtitle}
          </p>

          <SearchBar onSearch={handleSearch} language={language} />

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-sm md:max-w-xl mx-auto">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white/8 border border-white/10 backdrop-blur-sm rounded-2xl py-3 px-2 text-center"
              >
                <div className="text-xl mb-0.5">{s.icon}</div>
                <div className="text-xl font-black text-white">{s.value}</div>
                <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results Section ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {showBookmarks ? "🔖 Bookmarks" : t.results}
            </h2>
            <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2.5 py-0.5 rounded-full font-semibold">
              {displayData.length}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {bookmarks.length > 0 && (
              <button
                type="button"
                onClick={() => setShowBookmarks(!showBookmarks)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${
                  showBookmarks
                    ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                }`}
              >
                🔖 {t.bookmark} ({bookmarks.length})
              </button>
            )}
            <button
              type="button"
              onClick={() => setChatOpen(true)}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl text-sm font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md shadow-amber-200/40 dark:shadow-amber-900/30"
            >
              💬 {t.startChat}
            </button>
          </div>
        </div>

        {/* Category Filter */}
        {!showBookmarks && (
          <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-amber-500 text-white shadow-md shadow-amber-200/50 dark:shadow-amber-900/30"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-700 dark:hover:text-amber-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Cards grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : displayData.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-gray-500 dark:text-gray-400 text-base mb-4">{t.noResults}</p>
            <button
              type="button"
              onClick={showAll}
              className="text-amber-600 dark:text-amber-400 text-sm font-semibold hover:underline"
            >
              Show all topics
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayData.map((item) => (
              <ResultCard
                key={item.id}
                item={item}
                language={language}
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── CTA Banner ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-500 to-amber-700 p-8 md:p-12 text-white">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Need Personalised Legal Help? 🤝</h2>
            <p className="text-amber-100 text-sm mb-6 leading-relaxed">
              Chat with our AI assistant for instant guidance on your specific legal situation — available 24/7 in your preferred language.
            </p>
            <button
              type="button"
              onClick={() => setChatOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-700 rounded-2xl font-bold text-sm hover:bg-amber-50 transition-colors shadow-lg"
            >
              💬 Start Free Chat
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
