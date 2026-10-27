import { FormEvent, useEffect, useRef, useState } from 'react';

type Message = { role: 'user' | 'assistant'; text: string };

const SYSTEM_INSTRUCTION =
  "You are Tarun Kumar Sinha's AI portfolio assistant. Tarun is a BCA final year student at AIMT Greater Noida, Full-Stack MERN/PERN developer, AI and cybersecurity enthusiast, Uptricks Services intern, and hackathon builder (MarkWise, Alveros, VyaparLink). Answer concisely in 2-3 sentences max.";

const FALLBACK_ANSWERS: Record<string, string> = {
  about:
    'Tarun Kumar Sinha is a final-year BCA student at Accurate Institute of Management and Technology, Greater Noida. He is a Full-Stack MERN/PERN developer interested in AI and cybersecurity.',
  skills:
    'Tarun works with React, Node.js, Express, MongoDB, PostgreSQL, Python, and C++. He focuses on scalable web apps, secure architectures, and AI-powered platforms.',
  projects:
    'Tarun has built MarkWise, Alveros, and VyaparLink, along with other full-stack and AI-focused projects. You can explore them in the Originals section.',
  experience:
    'Tarun interned as a Full Stack Developer at Uptricks Services from December 2025 to February 2026, working on React components, REST APIs, PostgreSQL, MongoDB, and authentication.',
  contact:
    'You can connect with Tarun through LinkedIn or GitHub, both linked in the portfolio navigation. His email is taruntarun8010@gmail.com.',
  default:
    'I can tell you about Tarun’s skills, projects, education, experience, or contact details. Try asking about one of those.',
};

function getFallbackAnswer(question: string) {
  const query = question.toLowerCase();
  if (/(skill|stack|technology|tech|language)/.test(query)) return FALLBACK_ANSWERS.skills;
  if (/(project|built|build|markwise|alveros|vyaparlink|hackathon)/.test(query)) return FALLBACK_ANSWERS.projects;
  if (/(experience|intern|uptricks|work)/.test(query)) return FALLBACK_ANSWERS.experience;
  if (/(contact|email|linkedin|github|hire|reach)/.test(query)) return FALLBACK_ANSWERS.contact;
  if (/(about|who|education|study|college|bca|tarun)/.test(query)) return FALLBACK_ANSWERS.about;
  return FALLBACK_ANSWERS.default;
}

async function askGemini(question: string) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return null;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        contents: [{ role: 'user', parts: [{ text: question.slice(0, 500) }] }],
        generationConfig: { maxOutputTokens: 150, temperature: 0.4 },
      }),
    },
  );

  if (!response.ok) throw new Error(`Gemini request failed: ${response.status}`);
  const data = (await response.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Hi! Ask me about Tarun’s skills, projects, or experience.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setInput('');
    setMessages((current) => [...current, { role: 'user', text: question }]);
    setLoading(true);
    try {
      const answer = await askGemini(question);
      setMessages((current) => [
        ...current,
        { role: 'assistant', text: answer || getFallbackAnswer(question) },
      ]);
    } catch {
      setMessages((current) => [...current, { role: 'assistant', text: getFallbackAnswer(question) }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[140] sm:bottom-7 sm:right-7">
      {open && (
        <section
          className="mb-3 flex h-[min(70vh,460px)] w-[min(calc(100vw-2rem),360px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-2 shadow-2xl shadow-black/50"
          aria-label="Tarun AI assistant"
        >
          <header className="flex items-center justify-between border-b border-white/10 bg-ink-3 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-bone">Tarun&apos;s AI assistant</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-smoke">Portfolio guide</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-full p-1 text-mist transition hover:bg-white/10 hover:text-bone" aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto p-3" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${message.role === 'user' ? 'rounded-br-sm bg-crimson text-white' : 'rounded-bl-sm bg-ink-3 text-mist'}`}>
                  {message.text}
                </p>
              </div>
            ))}
            {loading && <p className="text-xs text-smoke">Thinking...</p>}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-white/10 p-3">
            <input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Tarun..." className="min-w-0 flex-1 rounded-xl border border-white/10 bg-ink px-3 py-2 text-sm text-bone placeholder:text-smoke focus:border-crimson focus:outline-none" aria-label="Message" />
            <button type="submit" disabled={loading || !input.trim()} className="rounded-xl bg-crimson px-3 text-white transition hover:bg-crimson-2 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Send message">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m4 4 16 8-16 8 3-8-3-8Z" /><path d="M7 12h13" /></svg>
            </button>
          </form>
        </section>
      )}
      <button type="button" onClick={() => setOpen((current) => !current)} className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-white shadow-lg shadow-crimson/30 transition hover:scale-105 hover:bg-crimson-2" aria-label={open ? 'Close AI chat' : 'Open AI chat'} aria-expanded={open}>
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.5-.8L4 20l1.5-4A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01" strokeLinecap="round" /></svg>
      </button>
    </div>
  );
}
