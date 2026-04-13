// ── Legal Topics Database ─────────────────────────────────────────────────────
export const legalData = [
  {
    id: 1,
    title: "First Information Report (FIR)",
    description:
      "An FIR is a written complaint filed with police for cognizable offences. Under Section 154 CrPC, police are bound to register FIR. File at nearest police station, get a free copy. If police refuse, write to SP/DSP or approach Magistrate under Section 156(3) CrPC. Emergency: dial 112.",
    category: "Criminal Law",
    tags: ["FIR", "Police", "Complaint"],
  },
  {
    id: 2,
    title: "Right to Information (RTI)",
    description:
      "RTI Act 2005 empowers citizens to seek information from public authorities. File application to PIO with Rs.10 fee (BPL exempt) at rtionline.gov.in. Response within 30 days, 48 hours if life or liberty is involved. Appeal to First Appellate Authority if unsatisfied.",
    category: "Constitutional Rights",
    tags: ["RTI", "Government", "Transparency"],
  },
  {
    id: 3,
    title: "Consumer Protection Act 2019",
    description:
      "Protects consumers against unfair trade practices and defective products. File at edaakhil.nic.in. District Commission: up to Rs.1 Crore. State: Rs.1-10 Crore. National: above Rs.10 Crore. Toll-free helpline: 1800-11-4000. Send legal notice to seller first.",
    category: "Consumer Law",
    tags: ["Consumer", "Complaint", "Redressal"],
  },
  {
    id: 4,
    title: "Bail & Anticipatory Bail",
    description:
      "Bail is temporary release pending trial. Anticipatory bail (Section 438 CrPC) granted before arrest — apply in Sessions Court or High Court. Regular bail under Sections 436-439 CrPC. For non-bailable offences apply before Magistrate. If bail is denied, immediately appeal to higher court.",
    category: "Criminal Law",
    tags: ["Bail", "Arrest", "CrPC"],
  },
  {
    id: 5,
    title: "Property Registration & Stamp Duty",
    description:
      "All property transactions must be registered under Registration Act 1908. Stamp duty varies 5-7% by state. Always verify Encumbrance Certificate (EC) for loans or disputes. RERA registration mandatory for new under-construction projects. Verify 30 years of title history before buying.",
    category: "Property Law",
    tags: ["Property", "Registration", "Stamp Duty"],
  },
  {
    id: 6,
    title: "Domestic Violence Protection",
    description:
      "Protection of Women from Domestic Violence Act 2005 provides protection orders, residence orders, and monetary relief. Complaints can be filed with Protection Officers, police, or directly in Magistrate court. Women Helpline: 181. National Commission for Women: 7827170170.",
    category: "Family Law",
    tags: ["Domestic Violence", "Women Rights", "Protection"],
  },
  {
    id: 7,
    title: "Labour Rights & EPFO",
    description:
      "Workers are entitled to minimum wages, PF contribution (12% employer + 12% employee), gratuity after 5 years, and maternity benefits. File complaints at Shram Suvidha Portal. If salary unpaid: send legal notice, file with Labour Commissioner, approach Labour Court under Payment of Wages Act 1936.",
    category: "Labour Law",
    tags: ["Labour", "PF", "Wages"],
  },
  {
    id: 8,
    title: "Divorce & Mutual Consent",
    description:
      "Mutual consent divorce under Section 13B HMA requires 1-year separation. Courts may waive 6-month cooling period. Contested divorce grounds: cruelty, desertion for 2+ years, adultery, mental disorder. Alimony decided by court based on income. Child welfare is paramount in custody decisions.",
    category: "Family Law",
    tags: ["Divorce", "Marriage", "Family"],
  },
  {
    id: 9,
    title: "Cyber Crime & IT Act",
    description:
      "IT Act 2000 covers hacking, identity theft, cyberstalking, and online fraud. File complaints at cybercrime.gov.in or call 1930 (Cyber Crime Helpline). Section 66: data theft. Section 67: obscene content. Preserve screenshots, email headers, and bank statements as evidence.",
    category: "Cyber Law",
    tags: ["Cyber Crime", "Online Fraud", "IT Act"],
  },
  {
    id: 10,
    title: "GST & Tax Compliance",
    description:
      "GST registration mandatory if turnover exceeds Rs.40 lakhs (goods) or Rs.20 lakhs (services). File returns monthly or quarterly. Non-compliance attracts 18% interest plus penalties. Disputes are handled by the GST Appellate Authority. GST Helpline: 1800-103-4786.",
    category: "Tax Law",
    tags: ["GST", "Tax", "Compliance"],
  },
  {
    id: 11,
    title: "Writ Petitions in High Court",
    description:
      "Five types of writs: Habeas Corpus (illegal detention), Mandamus (public duty), Prohibition (lower court jurisdiction), Certiorari (quash order), Quo Warranto (public office). File directly in High Court or Supreme Court for fundamental rights violations.",
    category: "Constitutional Law",
    tags: ["Writ", "High Court", "Fundamental Rights"],
  },
  {
    id: 12,
    title: "Section 498A IPC — Cruelty",
    description:
      "Cognizable and non-bailable offence covering cruelty by husband or in-laws. Punishment: up to 3 years imprisonment plus fine. Complaint can be filed by wife, relatives, or any person. FIR filed directly at police station. Women Helpline: 1091. NCW Helpline: 7827170170.",
    category: "Criminal Law",
    tags: ["498A", "Cruelty", "Women"],
  },
];

// ── AI Responses ──────────────────────────────────────────────────────────────
const responses = {
  fir: `FIR — First Information Report

An FIR is the first step in India's criminal justice process.

Key Points:
• File at the nearest police station where the crime occurred
• Police are legally bound to register under Section 154 CrPC
• You are entitled to a FREE copy of the FIR immediately
• If police refuse: write complaint to SP/DSP or approach Magistrate under Section 156(3) CrPC

Your Rights After Arrest:
• Right to know grounds of arrest (Article 22)
• Right to legal counsel immediately upon arrest
• Must be produced before Magistrate within 24 hours

Emergency Numbers:
• Police: 100  |  Ambulance: 108
• National Emergency: 112  |  Women Helpline: 1091`,

  rti: `RTI — Right to Information Act 2005

How to File:
1. Write a simple application to the Public Information Officer (PIO)
2. Pay Rs.10 fee (BPL card holders are exempt)
3. Submit at department office or online at rtionline.gov.in

Timelines:
• Normal response: within 30 days
• Life or liberty involved: within 48 hours
• First Appeal: file if unsatisfied with response
• Second Appeal: to CIC/SIC within 90 days of First Appellate Authority order

Exemptions from RTI: national security matters, Cabinet papers, personal information without public interest

Tip: Be specific in your questions. Vague questions often get vague answers.`,

  divorce: `Divorce Laws in India

1. Mutual Consent Divorce (Section 13B HMA)
• Both parties must agree to separate
• Mandatory: 1-year separation period
• 6-month cooling period — courts may waive this
• Typical timeline: 6 to 18 months

2. Contested Divorce Grounds (Hindu Marriage Act):
• Cruelty — physical or mental
• Adultery
• Desertion for 2+ years
• Conversion of religion
• Mental disorder

Alimony: Court decides based on income, assets, and duration of marriage.
Maintenance during proceedings: claim under Section 125 CrPC.

Child Custody: Child's welfare is the paramount consideration.
Both parents have equal rights. Courts may allow joint custody.`,

  bail: `Bail in India — Know Your Rights

Anticipatory Bail (Section 438 CrPC):
• Applied BEFORE arrest when you fear arrest
• Filed in Sessions Court or High Court
• Must show a reasonable apprehension of arrest
• Conditions may be imposed by the court

Regular Bail (After Arrest):
• Bailable offences: you have a right to bail (Section 436)
• Non-bailable: apply before Magistrate or Sessions Court
• Factors considered: nature of crime, criminal history, flight risk

Common Bail Conditions:
• Appear before court when summoned
• Surrender passport to court
• Do not tamper with evidence or approach witnesses
• Do not leave the city or country without permission

If bail is denied: appeal immediately to the High Court.`,

  consumer: `Consumer Rights in India

Your 6 Consumer Rights:
• Right to Safety  • Right to Information
• Right to Choose  • Right to be Heard
• Right to Redressal  • Right to Consumer Education

Where to File Your Complaint:
• District Commission: claims up to Rs.1 Crore
• State Commission: Rs.1 Crore to Rs.10 Crore
• National Commission: above Rs.10 Crore

Online Filing: edaakhil.nic.in
Helpline: 1800-11-4000 (Toll-Free)

Documents Required:
• Purchase receipt or invoice
• Warranty card (if applicable)
• All correspondence with seller

Tip: Send a legal notice to the seller first — many disputes resolve without court!
Time limit: file complaint within 2 years of the cause of action.`,

  salary: `Salary Non-Payment — Employee Rights

Immediate Steps:
1. Send a formal written legal notice to employer (give 15-30 days to respond)
2. File complaint at District or State Labour Commissioner office
3. Approach Labour Court under Payment of Wages Act 1936
4. File civil recovery suit for larger amounts

Evidence to Collect:
• Appointment letter and job offer
• Salary slips and bank statements
• All email/written communication with employer

Useful Contacts:
• Shram Suvidha Portal: shramsuvidha.gov.in
• Labour Helpline: 1800-11-2066 (Toll-Free)
• EPFO Helpline: 1800-118-005

Time Limit: Must file within 3 years of salary dues arising.`,

  property: `Property Law in India

Before Buying — Must Check:
• Encumbrance Certificate (EC) — confirms no loans or legal disputes
• Property Tax receipts — must be up to date
• Approved building plan from local authority
• For new projects: RERA registration number

Registration Process:
1. Verify all title documents and get EC for last 30 years
2. Get sale deed drafted by a qualified advocate
3. Pay stamp duty (typically 5-7% of market value, varies by state)
4. Register at Sub-Registrar's office with both parties and 2 witnesses

RERA Complaints:
• Builder delays or quality issues: file at state RERA website
• Builders must deliver on time or pay interest at 10.75% p.a.

Tip: Never pay more than 10% advance before sale agreement is signed.`,

  default: `Welcome to NyayaAI — Your Indian Legal Assistant

I can help you with:

Criminal Law — FIR, Bail, IPC Sections, Anticipatory Bail
Family Law — Divorce, Child Custody, Maintenance, Domestic Violence
Property Law — Registration, RERA, Stamp Duty, Land Disputes
Consumer Rights — Complaints, Refunds, Defective Products
Labour Law — Salary Issues, PF, Gratuity, Wrongful Termination
Cyber Crime — Online Fraud, IT Act, Cyberstalking
Constitutional Rights — RTI, Writ Petitions, Fundamental Rights
Tax Law — GST Registration, Compliance, Disputes

Try asking me:
• "What is an FIR and how do I file one?"
• "How do I get a divorce in India?"
• "My employer is not paying my salary"
• "How to file a consumer complaint?"
• "What are my rights if I am arrested?"

Note: This is general legal information for education only.
For your specific situation, please consult a qualified advocate.`,
};

// ── Translations ──────────────────────────────────────────────────────────────
export const translations = {
  en: {
    heroTitle: "AI Legal Assistant for Everyone",
    heroSubtitle:
      "Get instant legal guidance in plain language. Understand your rights, navigate Indian law, and find the help you need.",
    searchPlaceholder: "Search legal topics... (e.g. FIR, Divorce, RTI, Bail)",
    chatTitle: "Legal AI Assistant",
    chatPlaceholder: "Ask a legal question...",
    suggestedTitle: "Suggested Questions",
    learnMore: "Learn More",
    bookmark: "Bookmark",
    bookmarked: "Bookmarked",
    copy: "Copy",
    copied: "Copied!",
    send: "Send",
    about: "About",
    home: "Home",
    results: "Legal Topics",
    noResults: "No results found. Try different keywords.",
    startChat: "Chat with Legal AI",
    clearChat: "Clear Chat",
    allCategories: "All",
  },
  hi: {
    heroTitle: "सभी के लिए AI कानूनी सहायक",
    heroSubtitle:
      "सरल भाषा में तुरंत कानूनी मार्गदर्शन पाएं। अपने अधिकार जानें और भारतीय कानून को समझें।",
    searchPlaceholder: "कानूनी विषय खोजें... (जैसे FIR, तलाक, RTI, जमानत)",
    chatTitle: "कानूनी AI सहायक",
    chatPlaceholder: "कोई कानूनी प्रश्न पूछें...",
    suggestedTitle: "सुझाए गए प्रश्न",
    learnMore: "और जानें",
    bookmark: "बुकमार्क",
    bookmarked: "बुकमार्क किया",
    copy: "कॉपी",
    copied: "कॉपी हो गया!",
    send: "भेजें",
    about: "हमारे बारे में",
    home: "होम",
    results: "कानूनी परिणाम",
    noResults: "कोई परिणाम नहीं मिला।",
    startChat: "AI से चैट करें",
    clearChat: "चैट साफ करें",
    allCategories: "सभी",
  },
  bn: {
    heroTitle: "সকলের জন্য AI আইনি সহায়তা",
    heroSubtitle:
      "সহজ ভাষায় তাৎক্ষণিক আইনি নির্দেশনা পান। আপনার অধিকার জানুন।",
    searchPlaceholder: "আইনি বিষয় খুঁজুন... (যেমন FIR, বিবাহবিচ্ছেদ, RTI)",
    chatTitle: "আইনি AI সহায়তাকারী",
    chatPlaceholder: "একটি আইনি প্রশ্ন জিজ্ঞাসা করুন...",
    suggestedTitle: "প্রস্তাবিত প্রশ্ন",
    learnMore: "আরও জানুন",
    bookmark: "বুকমার্ক",
    bookmarked: "বুকমার্ক করা হয়েছে",
    copy: "কপি",
    copied: "কপি হয়েছে!",
    send: "পাঠান",
    about: "আমাদের সম্পর্কে",
    home: "হোম",
    results: "আইনি ফলাফল",
    noResults: "কোনো ফলাফল পাওয়া যায়নি।",
    startChat: "AI-এর সাথে চ্যাট করুন",
    clearChat: "চ্যাট মুছুন",
    allCategories: "সব",
  },
  ta: {
    heroTitle: "அனைவருக்கும் AI சட்ட உதவியாளர்",
    heroSubtitle:
      "எளிய மொழியில் உடனடி சட்ட வழிகாட்டுதல் பெறுங்கள்.",
    searchPlaceholder: "சட்ட தலைப்புகளை தேடுங்கள்...",
    chatTitle: "சட்ட AI உதவியாளர்",
    chatPlaceholder: "ஒரு சட்ட கேள்வி கேளுங்கள்...",
    suggestedTitle: "பரிந்துரைக்கப்பட்ட கேள்விகள்",
    learnMore: "மேலும் அறிக",
    bookmark: "புக்மார்க்",
    bookmarked: "புக்மார்க் செய்யப்பட்டது",
    copy: "நகலெடு",
    copied: "நகலெடுக்கப்பட்டது!",
    send: "அனுப்பு",
    about: "எங்களைப் பற்றி",
    home: "முகப்பு",
    results: "சட்ட முடிவுகள்",
    noResults: "முடிவுகள் இல்லை.",
    startChat: "AI உடன் உரையாடுங்கள்",
    clearChat: "அரட்டையை அழி",
    allCategories: "அனைத்தும்",
  },
  te: {
    heroTitle: "అందరికీ AI న్యాయ సహాయకుడు",
    heroSubtitle:
      "సాధారణ భాషలో తక్షణ న్యాయ మార్గదర్శకత్వం పొందండి.",
    searchPlaceholder: "న్యాయ అంశాలు వెతకండి...",
    chatTitle: "న్యాయ AI సహాయకుడు",
    chatPlaceholder: "న్యాయ ప్రశ్న అడగండి...",
    suggestedTitle: "సూచించిన ప్రశ్నలు",
    learnMore: "మరింత తెలుసుకోండి",
    bookmark: "బుక్‌మార్క్",
    bookmarked: "బుక్‌మార్క్ చేయబడింది",
    copy: "కాపీ",
    copied: "కాపీ అయింది!",
    send: "పంపు",
    about: "మా గురించి",
    home: "హోమ్",
    results: "న్యాయ ఫలితాలు",
    noResults: "ఫలితాలు కనుగొనబడలేదు.",
    startChat: "AI తో చాట్ చేయండి",
    clearChat: "చాట్ క్లియర్",
    allCategories: "అన్నీ",
  },
};

// ── Suggested questions per language ─────────────────────────────────────────
export const suggestedQuestions = {
  en: [
    "What is an FIR and how to file it?",
    "How to file for divorce in India?",
    "What are my rights if arrested?",
    "How to file RTI application?",
    "My employer is not paying my salary",
    "How to file a consumer complaint?",
  ],
  hi: [
    "FIR क्या है और कैसे दर्ज करें?",
    "भारत में तलाक कैसे लें?",
    "गिरफ्तारी पर मेरे अधिकार क्या हैं?",
    "RTI आवेदन कैसे करें?",
    "नियोक्ता वेतन नहीं दे रहा — क्या करें?",
  ],
  bn: [
    "FIR কি এবং কিভাবে দায়ের করবেন?",
    "ভারতে তালাক কিভাবে নেবেন?",
    "গ্রেফতার হলে আমার অধিকার কী?",
    "RTI আবেদন কিভাবে করবেন?",
  ],
  ta: [
    "FIR என்றால் என்ன? எப்படி தாக்கல் செய்வது?",
    "இந்தியாவில் விவாகரத்து எப்படி பெறுவது?",
    "கைது செய்யப்பட்டால் என் உரிமைகள் என்ன?",
  ],
  te: [
    "FIR అంటే ఏమిటి? ఎలా నమోదు చేయాలి?",
    "భారతదేశంలో విడాకులు ఎలా తీసుకోవాలి?",
    "అరెస్ట్ అయితే నా హక్కులు ఏమిటి?",
  ],
};

// ── Public API functions ──────────────────────────────────────────────────────
export async function searchLegal(query) {
  await new Promise((r) => setTimeout(r, 600));
  if (!query.trim()) return legalData;
  const q = query.toLowerCase();
  return legalData.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

export async function getAIResponse(message) {
  await new Promise((r) => setTimeout(r, 900 + Math.random() * 600));
  const m = message.toLowerCase();
  if (m.includes("fir") || m.includes("first information report")) return responses.fir;
  if (m.includes("rti") || m.includes("right to information")) return responses.rti;
  if (m.includes("divorce") || m.includes("talak") || m.includes("separation")) return responses.divorce;
  if (m.includes("bail") || m.includes("arrest") || m.includes("custody") || m.includes("jamaanat")) return responses.bail;
  if (m.includes("consumer") || m.includes("product") || m.includes("refund") || m.includes("defect")) return responses.consumer;
  if (m.includes("salary") || m.includes("wages") || m.includes("employer") || m.includes("pay") || m.includes("job")) return responses.salary;
  if (m.includes("property") || m.includes("land") || m.includes("house") || m.includes("rera") || m.includes("stamp")) return responses.property;
  return responses.default;
}

export function getAllCategories() {
  return [...new Set(legalData.map((d) => d.category))];
}
