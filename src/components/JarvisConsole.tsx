import { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Terminal as TermIcon, 
  Sparkles, 
  HelpCircle, 
  RefreshCw, 
  Volume2, 
  Lock, 
  X,
  Radio
} from "lucide-react";
import { ChatMessage } from "../types";

// HTML5 Synthesized Audio Oscillator sound generator for futuristic cyber interface feedback
const playCyberBeep = (frequency = 900, duration = 0.08, type: OscillatorType = "sine") => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = frequency;

    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Silently proceed if browser blocks sound interaction initially
  }
};

// Complete, robust client-side semantic matching response generator in case backend API is not present (e.g. Vercel static hosting)
const getLocalJarvisResponse = (userPrompt: string): string => {
  const query = userPrompt.toLowerCase().trim();

  // 1. PROJECTS & SPECIALIZED SYTEMS
  if (query.includes("agrismart") || query.includes("farm") || query.includes("crop") || query.includes("agri")) {
    return `🤖 **AgriSmart AI - Smart Farming Assistant (01/2026 — 03/2026)**
    
• **Overview**: An AI-powered precision agriculture platform helping farmers diagnose plant pathology and optimize soil nutrients.
• **Core Capabilities**: Real-time crop leaf disease detection using a custom-trained Convolutional Neural Network (CNN) across 35 disease classes, soil chemical composition analysis, and direct NPK/fertilizer recommendations.
• **Tech Stack**: Python, FastAPI, React.js, Computer Vision, Plant Pathology CNN, and XGBoost.
• **Metrics**: Fully responsive full-stack platform integrated into standard farming HUD dashboards.`;
  }

  if (query.includes("fake news") || query.includes("propaganda") || query.includes("news") || query.includes("bias")) {
    return `🤖 **Fake News Detector (01/2025 — 02/2025)**
    
• **Overview**: An NLP-based intelligence model that inspects text articles to flag bias, propaganda, or fraudulent news.
• **Core Capabilities**: Performs extensive text preprocessing including tokenization, NLTK stopword cleansing, stemming/lemmatization, and uses TF-IDF Vectorization to feed supervised Machine Learning classifiers.
• **Tech Stack**: Python, NLP libraries, Scikit-Learn, NLTK, Random Forest, and Decision Trees.
• **Metrics**: Reached **96.4% testing accuracy** against an evaluation corpus of 20,000+ benchmark articles.`;
  }

  if (query.includes("disease") || query.includes("medical") || query.includes("symptom") || query.includes("health") || query.includes("predict")) {
    return `🤖 **Disease Prediction AI (01/2026 — 02/2026)**
    
• **Overview**: Healthcare support system predicting potential medical diagnoses based on user, sensory, or historical symptom datasets.
• **Core Capabilities**: Analyzes lists of user symptoms mapping to 135+ disease classes. Employs advanced classification models to provide confidence-score breakdowns of possible diagnoses.
• **Tech Stack**: Python, Flask, Pandas, Scikit-Learn (SVM Classifier, Random Forest, Decision Tree).
• **Performance**: High reliability scoring (**94.8% diagnostic precision**) with prompt local processing latency under **15ms**.`;
  }

  if (query.includes("speech") || query.includes("emotion") || query.includes("voice") || query.includes("audio") || query.includes("vocal") || query.includes("acoustic")) {
    return `🤖 **Speech Emotion Recognition System (01/2025 — 03/2025)**
    
• **Overview**: High-fidelity acoustic intelligence model designed to recognize and categorize human emotional states from voice signals.
• **Core Capabilities**: Extracts multi-dimensional audio characteristics like Mel-Frequency Cepstral Coefficients (MFCCs), chroma features, and spectral contrast using Librosa, training multi-layer perceptrons to classify happy, sad, angry, surprised, or fearful states.
• **Tech Stack**: Python, Librosa, Audio Feature Extraction, Multi-Layer Perceptron (MLP), and FastAPI.
• **Metrics**: Attained a stellar **91.2% F1-score** on standard acoustic test-benches (24.5 kHz audio sampling).`;
  }

  if (query.includes("credit") || query.includes("scoring") || query.includes("loan") || query.includes("bank") || query.includes("risk")) {
    return `🤖 **Credit Scoring Model (02/2026 — 03/2026)**
    
• **Overview**: Predictive pipeline grading loan applicant creditworthiness to assess default probabilities.
• **Core Capabilities**: Analyzes user debt ratios, historical late payments, income stability thresholds, and demographic metrics using supervised classification trees. Supports automated risk clustering.
• **Tech Stack**: Python, Pandas, Scikit-Learn, Random Forest, FastAPI, and MongoDB.
• **Performance**: Achieved **0.93 ROC-AUC score** in test classification validation pipelines.`;
  }

  if (query.includes("project") || query.includes("portfolio") || query.includes("systems") || query.includes("work")) {
    return `🤖 **Rupanand's High-Dimension Systems Directory**:
    
1. **AgriSmart AI (01/2026 - 03/2026)**: Smart IoT farming assistant & Plant Disease Leaf CNN classifier.
2. **Fake News Detector (01/2025 - 02/2025)**: NLP system detecting deceptive publications with a 96.4% scoring accuracy.
3. **Disease Prediction AI (01/2026 - 02/2026)**: Diagnostic symptom predictor mapping 135+ disease classes with 15ms latency.
4. **Speech Emotion Recognition (01/2025 - 03/2025)**: Librosa audio feature-extraction and multi-layered neural perceptron classifier.
5. **Credit Scoring Model (02/2026 - 03/2026)**: Risk assessment automation grading default risk categories.
    
*Type or select any specific project name for expanded telemetry details!*`;
  }

  // 2. EDUCATION & GENERAL DETAILS
  if (query.includes("gpa") || query.includes("gudlavalleru") || query.includes("college") || query.includes("education") || query.includes("university") || query.includes("degree") || query.includes("qualification") || query.includes("credential")) {
    return `🎓 **Education Profile -- Rupanand Palakurthi**:
    
• **Degree**: Bachelor of Technology (B.Tech) in **Artificial Intelligence & Machine Learning**
• **Institution**: Seshadri Rao Gudlavalleru Engineering College, Gudlavalleru, Andhra Pradesh, India.
• **Academic Standings**: **GPA: 7.59** (Undergraduate AIML coursework)
• **Timeline**: 07/2024 to Present (Active candidate)`;
  }

  // 3. EXPERIENCE SPECIFIC
  if (query.includes("experience") || query.includes("job") || query.includes("intern") || query.includes("career") || query.includes("work history") || query.includes("nasscom") || query.includes("smartbridge") || query.includes("inamigos")) {
    return `💼 **Professional Career Telemetry**:
    
1. **AI & Web Development Intern** (05/2026 — Present)
   *Organization*: **inamigos foundation** (Chhattisgarh, India - Remote)
   *Deliverables*:
   - Engineered intelligent AI-powered web environments using Python and full-stack utilities.
   - Connected machine learning pipelines with FastAPI and responsive React layouts.
   - Conducted debugging, structural refactoring, and agile code streams.
   
2. **AWS Cloud Computing Virtual Intern** (01/2026 — 03/2026)
   *Organization*: **NASSCOM FutureSkills Prime & SmartBridge**
   *Deliverables*:
   - Deployed active virtualization nodes, security parameters, VPC networking, and cloud storage systems.
   - Designed scalable architectures complying with standard AWS Cloud Practitioner protocols.`;
  }

  // 4. CERTIFICATIONS
  if (query.includes("certif") || query.includes("diploma") || query.includes("license") || query.includes("badge")) {
    return `📜 **Verified Telemetry Certifications**:
    
• **Machine Learning using Python** - Simplilearn SkillUp (11/2024)
• **AWS Cloud Computing Virtual Internship** - SmartBridge & NASSCOM (01/2026)
• **Introduction to Generative AI Studio** - Google Cloud via Simplilearn (08/2025)
• **Introduction to Image Generation** - Google Cloud via Simplilearn (09/2024)
• **Python Software, Application, Games, Automation** - Udemy Standard (05/2025)
• **Website UI/UX Designing using ChatGPT** - Simplilearn SkillUp (12/2025)
• **AI Agents for Beginners** - Simplilearn (12/2025)
• **Introduction to Large Language Models** - Google Cloud via Simplilearn (12/2025)`;
  }

  // 5. SKILLS SPECIFIC
  if (query.includes("skill") || query.includes("tech") || query.includes("languages") || query.includes("python") || query.includes("react") || query.includes("stack") || query.includes("fastapi") || query.includes("flask") || query.includes("node") || query.includes("database") || query.includes("mongodb")) {
    return `🛠️ **Interactive Skills Portfolio**:
    
• **Core Programming**: Python, ESNext JavaScript, HTML5/CSS3
• **AI / Deep Learning / ML**: Natural Language Processing (NLP), Convolutional Neural Networks (CNN/Librosa), Predictive Modeling, Data cleansing & SciKit-Learn features.
• **Web Engineering**: React.js (modern SPA architectures), Tailwind CSS, Node.js/Express, FastAPI, Flask frameworks.
• **Databases / Automation**: MongoDB, MySQL, and N8n workflow-automations.
• **Developer Tools**: Git/GitHub, Visual Studio Code workspace environments.`;
  }

  // 6. CONTACT / INTERACTION RULES
  if (query.includes("contact") || query.includes("hire") || query.includes("email") || query.includes("phone") || query.includes("linkedin") || query.includes("number") || query.includes("call") || query.includes("address") || query.includes("coordinates") || query.includes("recruit")) {
    return `📞 **Direct Communication Terminal**:
    
• **Email**: [rupanandpalakurthi@gmail.com](mailto:rupanandpalakurthi@gmail.com)
• **Phone**: [+91 70950 52818](tel:+917095052818)
• **Location**: Machilipatnam, Andhra Pradesh, India // UTC+05:30 (IST)
• **LinkedIn**: [Rupanand's Profile](https://linkedin.com/in/rupanandpalakurthi)
• **GitHub Core**: [rupanandpalakurthi on GitHub](https://github.com/rupanandpalakurthi)
• **Availability**: Open to immediate Internships, Remote junior roles, or full-time associate tracks globally.`;
  }

  // 7. GREETINGS
  if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("greetings") || query.includes("yo") || query.includes("who are you") || query.includes("jarvis")) {
    return `Greetings. I am J.A.R.V.I.S., Rupanand's interactive 2035 system Core. Currently interfacing on client-terminal direct mode.
    
My active database is complete. You can ask me regarding Rupanand's B.Tech AIML studies, machine learning projects (like **AgriSmart AI** or **Speech Emotion Recognition**), NASSCOM internships, or how to reach him directly.
    
*How may I assist your telemetry search today?*`;
  }

  // GENERAL OVERVIEW FALLBACK
  return `🤖 **Client-Node Telemetry Processed**:
  
I have analyzed your request regarding Rupanand's workspace catalog. As his system core (running on secure static edge mode), I hold records for:
- **Education**: B.Tech in AI & Machine Learning at Gudlavalleru College (7.59 GPA).
- **Core Projects**: AgriSmart AI (Plant pathology Leaf CNN), Speech Emotion Detector, and Credit Scoring models.
- **Internships**: AI & Web Intern at inamigos foundation & AWS Cloud Intern at NASSCOM.
- **Capabilities**: Expert-level Python scripting, automated N8n workflows, React, and FastAPI backends.
  
Feel free to ask me about any specific project details, certification lists, or get his contact links directly!`;
};

// Simple helper to parse inline **bold text** into structured JSX highlight spans
const formatLineWithBold = (line: string) => {
  if (!line.includes("**")) return line;
  const parts = line.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} className="text-cyan-400 font-bold tracking-wide">
          {part}
        </strong>
      );
    }
    return part;
  });
};

// Complete custom log formatting module representing futuristic tabular streams
const renderCyberMessage = (content: string) => {
  return content.split("\n").map((line, i) => {
    const trimmedLine = line.trim();
    if (!trimmedLine) return <div key={i} className="h-2" />;

    const isBullet = trimmedLine.startsWith("•") || trimmedLine.startsWith("-") || trimmedLine.startsWith("*");
    const rawContent = isBullet ? trimmedLine.replace(/^[-•*]\s*/, "") : line;
    const formattedText = formatLineWithBold(rawContent);

    if (isBullet) {
      return (
        <div key={i} className="flex items-start gap-2 pl-3 mt-1.5 text-slate-300">
          <span className="text-cyan-400/80 select-none animate-pulse">•</span>
          <p className="flex-1 text-slate-300 leading-relaxed font-sans text-[13px]">{formattedText}</p>
        </div>
      );
    }

    return (
      <p key={i} className={`mt-1 text-slate-200 leading-relaxed text-[13px] ${line.startsWith("🤖") ? "font-display font-medium text-cyan-300" : "font-sans"}`}>
        {formattedText}
      </p>
    );
  });
};

export default function JarvisConsole() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-system",
      role: "assistant",
      content: "System diagnostics completed. All quantum cores online. Greetings, I am JARVIS, representation of Rupanand Palakurthi's developmental core. My databases are live. Instruct me on which telemetry coordinates you would like to analyze, or ask me anything regarding Rupanand's AI/ML engineering capabilities.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [audioFeedback, setAudioFeedback] = useState(true);
  
  // Smart detection: Run in pure static mode if on Vercel host OR if the server-endpoint has previously failed.
  const [useLocalOnly, setUseLocalOnly] = useState<boolean>(() => {
    try {
      const hostname = window.location.hostname;
      return hostname.includes("vercel") || hostname.includes("netlify") || hostname.includes("github.io");
    } catch (e) {
      return false;
    }
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isPending]);

  // Cyber sound trigger wrapper
  const triggerAudioBeep = (freq = 850, dur = 0.08) => {
    if (audioFeedback) playCyberBeep(freq, dur);
  };

  const presetQueries = [
    { label: "Check GPA & College", query: "What are your education credentials, college, and B.Tech GPA?" },
    { label: "AWS Cloud Intern", query: "Explain your experience at NASSCOM and AWS Cloud Computing Internship" },
    { label: "AgriSmart AI details", query: "Explain the AgriSmart AI smart farming project details" },
    { label: "Google Cloud Certifications", query: "What Google Cloud or AWS certifications do you possess?" },
    { label: "Hiring Coordinates", query: "How can I contact or hire Rupanand Palakurthi?" }
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isPending) return;

    triggerAudioBeep(1000, 0.06);

    const userMsg: ChatMessage = {
      id: "usr-" + Date.now(),
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsPending(true);

    // Bypass network fetch completely in static hosting situations to prevent 404 network warnings and keep it instantaneous
    if (useLocalOnly) {
      setTimeout(() => {
        const localReply = getLocalJarvisResponse(textToSend);
        triggerAudioBeep(650, 0.12);
        setMessages(prev => [
          ...prev,
          {
            id: "jarvis-local-" + Date.now(),
            role: "assistant",
            content: localReply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        setIsPending(false);
      }, 550);
      return;
    }

    try {
      const payloadMessages = [...messages, userMsg].map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages })
      });

      if (!res.ok) {
        throw new Error("Core connection interrupted.");
      }

      const data = await res.json();
      
      triggerAudioBeep(650, 0.15);

      setMessages(prev => [
        ...prev,
        {
          id: "jarvis-" + Date.now(),
          role: "assistant",
          content: data.text || "Connection loss detected from AI Core.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err: any) {
      console.warn("API Node unavailable. Resolving response via local Edge telemetry model.", err);
      
      // Cache the endpoint loss state to bypass network streams on all future chats
      setUseLocalOnly(true);

      const localReply = getLocalJarvisResponse(textToSend);
      triggerAudioBeep(750, 0.12);

      setMessages(prev => [
        ...prev,
        {
          id: "jarvis-local-" + Date.now(),
          role: "assistant",
          content: localReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsPending(false);
    }
  };

  const clearConsoleLogs = () => {
    triggerAudioBeep(400, 0.1);
    setMessages([
      {
        id: "sys-reboot",
        role: "assistant",
        content: "JARVIS session history purged. Kernel reinitialized. Standing by.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div id="jarvis-ai-terminal" className="glass-panel-cyan rounded-2xl overflow-hidden border border-cyan-500/20 flex flex-col h-[520px] shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative">
      
      {/* HUD System Header Bar */}
      <div className="bg-slate-950/90 py-3 px-5 border-b border-cyan-500/25 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          </div>
          <span className="font-display text-xs tracking-[0.2em] font-black text-white flex items-center gap-1.5 uppercase">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> JARVIS v2.35 CORE INTELLIGENCE
          </span>
        </div>

        {/* Console control options */}
        <div className="flex items-center gap-3">
          
          {/* Beep sound toggle */}
          <button
            onClick={() => {
              setAudioFeedback(!audioFeedback);
              if(!audioFeedback) playCyberBeep(900, 0.05);
            }}
            title={audioFeedback ? "Disable Beep Synth" : "Enable Beep Synth"}
            className={`p-1.5 rounded hover:bg-slate-900 transition-all cursor-pointer ${audioFeedback ? "text-cyan-400":"text-slate-500"}`}
          >
            <Volume2 className="w-4 h-4" />
          </button>

          {/* Wipe log button */}
          <button
            onClick={clearConsoleLogs}
            title="Purge Console History"
            className="p-1.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-900 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Grid Background Overlay */}
      <div className="absolute inset-0 bg-grid-shift opacity-5 pointer-events-none" />

      {/* Chat Logs Window Panel */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4 font-mono text-xs md:text-sm bg-slate-950/70 relative z-10">
        {messages.map((msg) => {
          const isUser = msg.role === "user";
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? "items-end text-right" : "items-start text-left"} space-y-1 animate-fade-in`}
            >
              {/* Name Tag */}
              <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-wider">
                <span>{isUser ? "Visitor Index" : "J.A.R.V.I.S. (2035 Core)"}</span>
                <span>•</span>
                <span>{msg.timestamp}</span>
              </div>

              {/* Speech container */}
              <div
                className={`max-w-[85%] rounded-xl p-3 md:p-4 leading-relaxed ${
                  isUser
                    ? "bg-cyan-950/50 text-cyan-200 border border-cyan-500/35 rounded-tr-none text-shadow-cyan"
                    : "bg-slate-900/40 text-slate-300 border border-slate-800 rounded-tl-none whitespace-pre-line"
                }`}
              >
                {isUser ? (
                  msg.content
                ) : (
                  renderCyberMessage(msg.content)
                )}
              </div>
            </div>
          );
        })}

        {isPending && (
          <div className="flex items-center gap-2.5 text-cyan-400 animate-pulse font-bold tracking-widest text-[11px] py-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            CORE_SIGNAL_STREAM PROCESS IN PROGRESS...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Preset Suggestion Chips Panel */}
      <div className="p-3 bg-slate-950/80 border-t border-slate-900 relative z-10 flex gap-1.5 overflow-x-auto no-scrollbar">
        {presetQueries.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(item.query)}
            className="flex-shrink-0 px-3 py-1 text-[11px] font-mono rounded-lg bg-slate-900 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 cursor-pointer transition-all"
          >
            <HelpCircle className="w-3 h-3 text-cyan-500 inline mr-1" /> {item.label}
          </button>
        ))}
      </div>

      {/* Message Submission Area */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputValue);
        }}
        className="p-4 bg-slate-950/95 border-t border-cyan-500/25 relative z-10 flex gap-3 items-center"
      >
        <div className="flex-1 relative">
          <input
            type="text"
            id="jarvis-terminal-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => triggerAudioBeep(880, 0.04)}
            placeholder="Instruct JARVIS (e.g. 'Show me his Flask projects' or type hello)..."
            className="w-full font-mono text-sm bg-slate-900 border-glow-cyan text-white rounded-xl py-3 pl-4 pr-10 focus:outline-none transition-all placeholder:text-slate-500"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] text-cyan-500/40 select-none font-bold font-mono">
            SYS_CMD
          </span>
        </div>

        <button
          type="submit"
          id="send-cmd-btn"
          disabled={!inputValue.trim() || isPending}
          className="p-3 rounded-xl bg-cyan-500 text-slate-950 font-bold transition-all hover:bg-white disabled:opacity-40 disabled:hover:bg-cyan-400 cursor-pointer shadow-[0_0_15px_rgba(6,182,125,0.25)] flex items-center justify-center border-none"
        >
          <Send className="w-4 h-4 text-slate-950" />
        </button>
      </form>
    </div>
  );
}
