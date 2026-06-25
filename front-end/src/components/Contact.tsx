import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  t: any;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("sending");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_o2yfybo";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ji4567i";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "sTFZPGbDhcXo4H1fk";

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Gilank",
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status !== 200) {
        throw new Error("Failed to send message via EmailJS");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-28 md:py-40 bg-canvas relative">
      {/* Subtle organic bg blur */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full bg-accent/3 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
              {t.contact.subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              {t.contact.title}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-[45ch]">
              {t.contact.description}
            </p>

            {/* Simple Text Contact Details */}
            <div className="space-y-4 font-mono text-xs md:text-sm text-zinc-500 border-t border-white/5 pt-8">
              <div>
                <span className="text-white/40 block">Email:</span>
                <a href="mailto:gilankdev@gmail.com" className="text-white/80 hover:text-accent transition-colors">
                  gilankdev@gmail.com
                </a>
              </div>
              <div>
                <span className="text-white/40 block">Location:</span>
                <span className="text-white/80">Tangerang Selatan, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Column - Bento 2.0 Form Card */}
          <div className="p-8 md:p-10 rounded-[2.5rem] liquid-glass hover-glow-white transition-all duration-500 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === "sending"}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-accent/45 text-white text-sm outline-none transition-all disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "sending"}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-accent/45 text-white text-sm outline-none transition-all disabled:opacity-50"
                  placeholder="name@example.com"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={status === "sending"}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-accent/45 text-white text-sm outline-none transition-all disabled:opacity-50 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button with Tactile Push Feedback */}
              <button
                type="submit"
                disabled={status === "sending" || !name || !email || !message}
                className="group relative flex items-center justify-center gap-2 w-full py-4 bg-accent hover:bg-accent-hover disabled:bg-white/[0.02] disabled:border-white/5 text-canvas disabled:text-white/30 font-bold rounded-full transition-all duration-300 transform active:scale-98 cursor-pointer disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent/10"
              >
                <Send className="w-4 h-4" />
                <span>
                  {status === "sending" ? t.contact.sendingButton : t.contact.sendButton}
                </span>
              </button>

              {/* Alerts (Success / Error) */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-accent-muted border border-accent/20 text-accent text-sm"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{t.contact.success}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-red-950/20 border border-red-500/20 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{t.contact.error}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
