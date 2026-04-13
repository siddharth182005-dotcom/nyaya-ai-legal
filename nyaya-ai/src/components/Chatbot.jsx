import { useState, useEffect, useRef, useCallback } from "react";
import { getAIResponse, translations, suggestedQuestions } from "../services/api.js";

const STORAGE_KEY = "nyaya_chat_v2";

/** Renders plain-text AI response with bolding and line breaks — no external deps */
function BotMessage({ text }) {
  return (
    <div className="text-[13px] leading-relaxed space-y-1 text-gray-700 dark:text-gray-300">
      {text.split("\n").map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-1" />;
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i}>
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold text-gray-900 dark:text-white">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

export default function Chatbot({ open, setOpen, language }) {
  const [messages, setMessages] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
    catch { return []; }
  });
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const t = translations[language] || translations.en;
  const suggestions = suggestedQuestions[language] || suggestedQuestions.en;

  // Persist chat
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); }
    catch { /* storage full */ }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on open
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const sendMessage = useCallback(
    async (textOverride) => {
      const text = (textOverride ?? input).trim();
      if (!text || busy) return;
      setInput("");
      setBusy(true);

      const next = [...messages, { role: "user", content: text, id: `u${Date.now()}` }];
      setMessages(next);

      try {
        const reply = await getAIResponse(text);
        setMessages([...next, { role: "bot", content: reply, id: `b${Date.now()}` }]);
      } catch {
        setMessages([...next, { role: "bot", content: "Sorry, something went wrong. Please try again.", id: `b${Date.now()}` }]);
      } finally {
        setBusy(false);
      }
    },
    [input, busy, messages]
  );

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // ── Floating button ──────────────────────────────────────────────────────────
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-2xl shadow-2xl shadow-amber-400/30 dark:shadow-amber-900/40 hover:scale-105 active:scale-95 transition-all"
      >
        <span className="relative">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-amber-500" />
        </span>
        <span className="font-bold text-sm">{t.startChat}</span>
      </button>
    );
  }

  // ── Chat window ──────────────────────────────────────────────────────────────
  return (
    <div
      role="dialog"
      aria-label="Legal AI Chat"
      className="fixed bottom-6 right-6 z-50 flex flex-col w-[380px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-5rem)] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white flex-shrink-0">
        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-xl flex-shrink-0">⚖</div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm leading-none">{t.chatTitle}</p>
          <p className="text-white/70 text-xs mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full inline-block" />
            Online · Indian Law Expert
          </p>
        </div>
        <div className="flex gap-1 flex-shrink-0">
          {messages.length > 0 && (
            <button type="button" onClick={clearChat} title={t.clearChat}
              className="p-2 rounded-xl hover:bg-white/20 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          )}
          <button type="button" onClick={() => setOpen(false)} title="Close"
            className="p-2 rounded-xl hover:bg-white/20 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {/* Welcome + suggestions */}
        {messages.length === 0 && (
          <div className="text-center py-3">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3">⚖️</div>
            <p className="font-bold text-sm text-gray-900 dark:text-white">Namaste! 🙏</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4">Ask me any legal question about Indian law.</p>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 text-left mb-2">{t.suggestedTitle}</p>
            <div className="flex flex-col gap-1.5">
              {suggestions.map((q, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => sendMessage(q)}
                  className="text-left text-xs px-3 py-2.5 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 border border-amber-100 dark:border-amber-800/30 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message bubbles */}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            {msg.role === "bot" && (
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs flex-shrink-0 mb-0.5">⚖</div>
            )}
            <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm ${
              msg.role === "user"
                ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-tr-sm"
                : "bg-gray-100 dark:bg-gray-800 rounded-tl-sm"
            }`}>
              {msg.role === "bot" ? <BotMessage text={msg.content} /> : msg.content}
            </div>
          </div>
        ))}

        {/* Typing dots */}
        {busy && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs flex-shrink-0">⚖</div>
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
              {[0, 150, 300].map((d, i) => (
                <span key={i} style={{ animationDelay: `${d}ms` }}
                  className="w-2 h-2 bg-amber-500 rounded-full animate-bounce inline-block" />
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div className="flex-shrink-0 p-3 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-end gap-2 bg-gray-50 dark:bg-gray-800 rounded-2xl px-3 py-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t.chatPlaceholder}
            rows={1}
            aria-label="Message input"
            className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none focus:outline-none py-1 max-h-20 leading-relaxed"
          />
          <button
            type="button"
            onClick={() => sendMessage()}
            disabled={!input.trim() || busy}
            className="p-2.5 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:from-amber-600 hover:to-amber-700 active:scale-95 transition-all flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 dark:text-gray-600 mt-2">
          General information only · Not legal advice
        </p>
      </div>
    </div>
  );
}
