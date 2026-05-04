import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string };

const QUICK = [
  "What services do you offer?",
  "How do I file KRA tax returns?",
  "Pricing for web development?",
  "How to register a business?",
  "Talk to a human",
];

function answer(q: string): string {
  const t = q.toLowerCase();
  if (/(price|cost|pricing|charge|how much)/.test(t))
    return "Pricing depends on scope. Web development starts from KES 25,000, accounting packages from KES 8,000/month, and compliance services are quoted per request. Share your needs via the Contact page for a tailored quote.";
  if (/(web|website|app|development)/.test(t))
    return "We build responsive websites, e-commerce stores and custom web apps using modern frameworks. Visit our Services page or send a message and we'll send you a portfolio.";
  if (/(tax|kra|itax|return)/.test(t))
    return "We handle KRA PIN registration, monthly/annual returns filing, VAT, PAYE, and tax compliance. Bring your KRA credentials and we'll take it from there.";
  if (/(accounting|bookkeep|payroll|financ)/.test(t))
    return "Our accounting services include bookkeeping, payroll, financial reports, and audits. Plans are monthly retainers tailored to your business size.";
  if (/(register|business|company|incorporat|permit)/.test(t))
    return "We register companies (Ltd, sole proprietorship, partnerships), conduct name searches, file BRS forms and get business permits. Typical turnaround is 5–10 working days.";
  if (/(ntsa|logbook|vehicle|license)/.test(t))
    return "We assist with NTSA TIMS services: vehicle registration, logbook transfers, driving license renewal and search.";
  if (/(nssf|nhif|sha|compliance)/.test(t))
    return "We handle NSSF, SHA (formerly NHIF) and annual returns to keep your business compliant.";
  if (/(human|agent|call|talk|contact|reach)/.test(t))
    return "Sure! Call +254 720 510 167 or email letytechconsultancy@gmail.com. You can also use the Contact page form.";
  if (/(hour|open|time|when)/.test(t))
    return "We're open Mon–Fri 9:00 AM–6:00 PM, Saturday 9:00 AM–2:00 PM. Closed Sundays.";
  if (/(location|where|office|address)/.test(t))
    return "We're based in Nairobi, Kenya. See the map on our Contact page.";
  if (/(hi|hello|hey|habari|jambo)/.test(t))
    return "Hello! 👋 I'm Lety Assistant. Ask me about our tech, accounting, tax, or business registration services.";
  return "Great question! For specifics, please reach us at +254 720 510 167 or use the Contact form. I can help with services, pricing, tax, accounting, or business registration questions.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi! 👋 I'm Lety Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: answer(q) }]);
    }, 400);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-brand text-white shadow-brand grid place-items-center hover:scale-105 transition"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-2rem))] h-[540px] rounded-2xl bg-card shadow-brand border border-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-gradient-brand text-white px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 grid place-items-center font-bold">LT</div>
              <div>
                <div className="font-semibold">Lety Assistant</div>
                <div className="text-xs text-white/80 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400" /> Online — usually replies instantly
                </div>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-soft">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-brand text-white rounded-br-sm"
                      : "bg-white text-foreground rounded-bl-sm shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {messages.length <= 1 && (
              <div className="pt-2 flex flex-wrap gap-2">
                {QUICK.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white border border-border hover:border-primary hover:text-primary transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-border bg-card flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 rounded-full bg-secondary px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="h-10 w-10 rounded-full bg-gradient-brand text-white grid place-items-center hover:opacity-90"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
