const FEATURES = [
  { icon: "🤖", t: "AI-Powered Answers",  d: "Instant, structured answers on Indian law — FIR, Bail, RTI, Divorce, Consumer Rights and more." },
  { icon: "🌍", t: "5 Indian Languages",  d: "English, Hindi (हिन्दी), Bengali (বাংলা), Tamil (தமிழ்), Telugu (తెలుగు)." },
  { icon: "🎤", t: "Voice Input",          d: "Speak your legal question using the microphone. Supports regional Indian language recognition." },
  { icon: "🔖", t: "Bookmark Topics",      d: "Save important legal topics to your local browser storage for quick future reference." },
  { icon: "📱", t: "Fully Responsive",     d: "Designed mobile-first — works perfectly on phones, tablets, and desktops." },
  { icon: "🔒", t: "Privacy First",        d: "All chat history and bookmarks are stored on your device only. Nothing is sent to any server." },
];

const LAWS = [
  "Indian Penal Code (IPC)", "Code of Criminal Procedure (CrPC)",
  "Constitution of India", "Consumer Protection Act 2019",
  "RTI Act 2005", "Hindu Marriage Act 1955",
  "IT Act 2000", "DV Protection Act 2005",
  "Payment of Wages Act", "RERA Act 2016",
  "GST Acts", "Labour Codes 2020",
  "Transfer of Property Act", "Registration Act 1908",
  "Negotiable Instruments Act", "Arbitration & Conciliation Act",
];

const TECH = [
  { icon: "⚛️", name: "React 18",     desc: "Functional components + Hooks" },
  { icon: "🎨", name: "Tailwind CSS", desc: "Utility-first responsive styling" },
  { icon: "🔀", name: "React Router", desc: "Client-side SPA routing" },
  { icon: "⚡", name: "Vite 5",       desc: "Lightning-fast dev build tool" },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold mb-5">
          About NyayaAI
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-5 leading-tight">
          Making Indian Law{" "}
          <span className="text-amber-600 dark:text-amber-400">Accessible</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          NyayaAI (न्याय AI) bridges the gap between common citizens and complex Indian legal
          processes. We believe every Indian deserves to understand their rights — regardless
          of language, literacy, or economic status.
        </p>
      </div>

      {/* Mission / Vision / Values */}
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { icon: "🎯", title: "Our Mission", color: "amber",  desc: "Democratise access to legal information across India, empowering every citizen regardless of language, literacy, or economic status." },
          { icon: "👁️", title: "Our Vision",  color: "blue",   desc: "A future where no Indian citizen is denied justice due to lack of legal awareness. Every person should know their rights." },
          { icon: "💫", title: "Our Values",  color: "green",  desc: "Accuracy, accessibility, and empathy. Reliable legal information with full acknowledgement of AI limitations." },
        ].map(({ icon, title, color, desc }) => (
          <div
            key={title}
            className={`rounded-2xl p-6 border bg-${color}-50 dark:bg-${color}-900/10 border-${color}-200 dark:border-${color}-800/30`}
          >
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-7 text-center">Platform Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.t}
              className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-lg hover:shadow-amber-100/40 dark:hover:shadow-amber-900/10 transition-all"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">{f.icon}</div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">{f.t}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Laws Covered */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl font-black text-white mb-2">Laws &amp; Acts Covered</h2>
        <p className="text-gray-400 text-sm mb-7">
          NyayaAI covers a broad range of Indian legislation and legal frameworks.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {LAWS.map((law) => (
            <span
              key={law}
              className="px-3 py-1.5 bg-white/8 text-gray-200 border border-white/10 rounded-xl text-xs font-medium hover:bg-amber-500/20 hover:border-amber-500/30 hover:text-amber-300 transition-colors cursor-default"
            >
              {law}
            </span>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-7 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TECH.map((tech) => (
            <div
              key={tech.name}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 text-center hover:border-amber-300 dark:hover:border-amber-700 transition-colors"
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <div className="font-bold text-gray-900 dark:text-white text-sm">{tech.name}</div>
              <div className="text-gray-400 text-xs mt-1">{tech.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-2xl p-6 flex gap-4">
        <div className="text-2xl flex-shrink-0">⚠️</div>
        <div>
          <h3 className="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1.5">Legal Disclaimer</h3>
          <p className="text-amber-800 dark:text-amber-400 text-sm leading-relaxed">
            NyayaAI provides general legal information for educational purposes only.
            This is <strong>NOT legal advice</strong>. Every legal situation is unique and
            requires professional evaluation. For specific legal matters, please consult a
            qualified advocate licensed to practice in the relevant jurisdiction. Information
            here should not substitute professional legal counsel.
          </p>
        </div>
      </div>
    </div>
  );
}
