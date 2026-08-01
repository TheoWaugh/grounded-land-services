"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}
function renderMessageContent(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);

  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = href.startsWith("tel:") || href.startsWith("http");
      if (isExternal) {
        return (
          <a
            key={i}
            href={href}
            className="font-semibold underline text-[#C4922A] hover:text-amber-600 transition-colors"
          >
            {label}
          </a>
        );
      }
      return (
        <Link
          key={i}
          href={href}
          className="font-semibold underline text-[#C4922A] hover:text-amber-600 transition-colors"
        >
          {label}
        </Link>
      );
    }

    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={i}>{boldMatch[1]}</strong>;
    }

    return <span key={i}>{part}</span>;
  });
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Grounded Land Services assistant. Ask me about pricing, services, your specific project, or anything land-clearing related — I'm happy to help!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong. Please try again or call us at (512) 571-6700." },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again or call us at (512) 571-6700." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A840] to-[#C4922A] shadow-[0_8px_24px_-6px_rgba(196,146,42,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_28px_-4px_rgba(196,146,42,0.7)]"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[520px] max-h-[70vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-[#1d1d1f] to-[#0a0a0a] px-5 py-5 flex items-center gap-3 relative overflow-hidden">
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#C4922A]/10" />
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D4A840] to-[#C4922A] flex items-center justify-center text-xl flex-shrink-0 shadow-md relative z-10">
            🌲
          </div>
          <div className="relative z-10">
            <p className="text-white font-bold text-sm leading-tight">Grounded Land Services</p>
            <p className="text-white/50 text-xs flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              AI Assistant · Ask me anything
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#faf9f7]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4A840] to-[#C4922A] flex items-center justify-center text-xs flex-shrink-0 mr-2 mt-0.5">
                  🌲
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-[#0a0a0a] text-white rounded-2xl rounded-br-md"
                    : "bg-white border border-gray-100 shadow-sm text-[#1d1d1f] rounded-2xl rounded-bl-md"
                }`}
              >
                {renderMessageContent(m.content)}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4A840] to-[#C4922A] flex items-center justify-center text-xs flex-shrink-0 mr-2 mt-0.5">
                🌲
              </div>
              <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4922A] animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4922A] animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4922A] animate-bounce" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 p-3 bg-white">
          <div className="flex gap-2 items-center bg-[#f5f5f7] rounded-full pl-4 pr-1.5 py-1.5 focus-within:ring-2 focus-within:ring-[#C4922A]/40 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about pricing, services..."
              disabled={loading}
              className="flex-1 bg-transparent text-sm outline-none disabled:opacity-50 placeholder:text-gray-400"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4A840] to-[#C4922A] disabled:opacity-30 disabled:grayscale flex items-center justify-center flex-shrink-0 transition-all hover:shadow-md"
              aria-label="Send message"
            >
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19V5m0 0l-6 6m6-6l6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}