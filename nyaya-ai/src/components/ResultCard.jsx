import { useState } from "react";
import { translations } from "../services/api.js";

const CAT_COLORS = {
  "Criminal Law":        "bg-red-100    text-red-700    dark:bg-red-900/30    dark:text-red-400",
  "Constitutional Rights":"bg-blue-100  text-blue-700   dark:bg-blue-900/30   dark:text-blue-400",
  "Constitutional Law":  "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  "Consumer Law":        "bg-green-100  text-green-700  dark:bg-green-900/30  dark:text-green-400",
  "Property Law":        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Family Law":          "bg-pink-100   text-pink-700   dark:bg-pink-900/30   dark:text-pink-400",
  "Labour Law":          "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Cyber Law":           "bg-cyan-100   text-cyan-700   dark:bg-cyan-900/30   dark:text-cyan-400",
  "Tax Law":             "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
};

export default function ResultCard({ item, language, bookmarks, setBookmarks }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const t = translations[language] || translations.en;
  const isBookmarked = bookmarks.some((b) => b.id === item.id);
  const catClass = CAT_COLORS[item.category] || "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`${item.title}\n\n${item.description}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  const toggleBookmark = () => {
    setBookmarks(
      isBookmarked ? bookmarks.filter((b) => b.id !== item.id) : [...bookmarks, item]
    );
  };

  const LIMIT = 140;
  const showExpand = item.description.length > LIMIT;
  const displayDesc = expanded || !showExpand ? item.description : item.description.slice(0, LIMIT) + "…";

  return (
    <article className="group flex flex-col gap-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-100/40 dark:hover:shadow-amber-900/10 hover:border-amber-200 dark:hover:border-amber-800/50 transition-all duration-300">

      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${catClass}`}>
            {item.category}
          </span>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Action buttons — always visible on mobile, hover on desktop */}
        <div className="flex gap-1 flex-shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={toggleBookmark}
            title={isBookmarked ? t.bookmarked : t.bookmark}
            className={`p-2 rounded-xl transition-all ${
              isBookmarked
                ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
                : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-amber-500"
            }`}
          >
            <svg className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            title={copied ? t.copied : t.copy}
            className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-amber-500 transition-all"
          >
            {copied ? (
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">{displayDesc}</p>

      {showExpand && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-amber-600 dark:text-amber-400 text-xs font-semibold hover:underline self-start"
        >
          {expanded ? "Show less ↑" : `${t.learnMore} →`}
        </button>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-50 dark:border-gray-800/60">
        {item.tags.map((tag) => (
          <span key={tag} className="text-[11px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
