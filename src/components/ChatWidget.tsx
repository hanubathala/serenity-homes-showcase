import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string };

const quickReplies = [
  "Tell me about pricing",
  "Available floor plans?",
  "Schedule a site visit",
  "Project location",
];

const botReply = (q: string): string => {
  const s = q.toLowerCase();
  if (s.includes("price") || s.includes("cost") || s.includes("pricing"))
    return "Our 1.5 BHK & 2.5 BHK residences are competitively priced. Please share your phone number and our sales team will send a detailed price sheet.";
  if (s.includes("floor") || s.includes("plan") || s.includes("bhk"))
    return "We offer thoughtfully designed 1.5 BHK and 2.5 BHK units. You can view all layouts in the 'Floor Plans' section above.";
  if (s.includes("visit") || s.includes("schedule") || s.includes("tour"))
    return "We'd love to host you! Click the 'Schedule Site Visit' button at the top, or call us at +91 99999 99999.";
  if (s.includes("location") || s.includes("address") || s.includes("where"))
    return "Swasti Sri Serenity is located in a prime, well-connected neighborhood. See the 'Location' section for the map and connectivity.";
  if (s.includes("amenit") || s.includes("facilit"))
    return "Enjoy 25+ premium amenities — clubhouse, pool, gym, landscaped gardens, senior-friendly spaces and more. See the 'Amenities' section.";
  if (s.includes("contact") || s.includes("call") || s.includes("phone") || s.includes("email"))
    return "Reach us at +91 99999 99999 or sales@swastisriserenity.com. Our team responds within 24 hours.";
  if (s.includes("hi") || s.includes("hello") || s.includes("hey"))
    return "Hello! 👋 Welcome to Swasti Sri Serenity. How can I help you today?";
  return "Thanks for reaching out! For a detailed response, please share your contact via the Contact form, or call +91 99999 99999.";
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi! 👋 I'm the Serenity assistant. Ask me about pricing, floor plans, amenities or to schedule a visit." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: botReply(t) }]);
    }, 500);
  };

  return (
    <>
      {/* Floating toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl hover:scale-110 active:scale-95 transition-all grid place-items-center"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-background animate-pulse" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 left-6 z-40 w-[calc(100vw-3rem)] max-w-sm rounded-2xl border border-border bg-card shadow-2xl overflow-hidden animate-fade-in flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 grid place-items-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="font-semibold leading-tight">Serenity Assistant</p>
                <p className="text-xs opacity-90 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Online · Replies instantly
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <a href="tel:+919999999999" className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors rounded-lg py-1.5">
                <Phone size={12} /> Call
              </a>
              <a href="mailto:sales@swastisriserenity.com" className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors rounded-lg py-1.5">
                <Mail size={12} /> Email
              </a>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 max-h-80 overflow-y-auto p-4 space-y-3 bg-background/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs px-2.5 py-1 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-border bg-card flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-muted/50 border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              aria-label="Send"
              className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center hover:scale-105 active:scale-95 transition-transform"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
