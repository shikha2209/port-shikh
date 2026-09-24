import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, MessageCircle, Send, User, X } from 'lucide-react';

type Message = {
  id: number;
  from: 'bot' | 'user';
  text: string;
};

const QUICK_REPLIES = [
  'Who are you?',
  'What are your skills?',
  'Tell me about your work',
  'How can I contact you?',
];

const getBotReply = (input: string): string => {
  const question = input.toLowerCase();

  if (/who|about|yourself|introduce/.test(question)) {
    return "Hi! I'm Shikha Soni, a Frontend Developer with 2+ years of experience at Coditude. I specialize in React, JavaScript, HTML5, CSS3, and Bootstrap.";
  }

  if (/skill|tech|stack|language|know/.test(question)) {
    return 'My core skills include React, JavaScript, HTML5, CSS3, Bootstrap, REST API integration, responsive design, Java, Python, C++, and Git.';
  }

  if (/work|experience|job|company|coditude/.test(question)) {
    return "I'm currently a Software Engineer at Coditude, Pune. I build React interfaces, integrate REST APIs, optimize performance, and work with design and backend teams.";
  }

  if (/project|build|ecommerce|giftos/.test(question)) {
    return "I've built a personal portfolio, a React Tic-Tac-Toe game, a weather app with live API data, and Ecommerce-Giftos with dynamic cart functionality.";
  }

  if (/education|degree|college|university|study/.test(question)) {
    return 'I hold a B.E. in Computer Science Engineering from Sri Parshuram Institute of Technology & Research, Khandwa, with a CGPA of 7.59.';
  }

  if (/contact|email|phone|reach|hire|connect/.test(question)) {
    return 'You can reach Shikha at shikhasoni2209@mail.com or +91 6264968375. You can also use the Contact section below.';
  }

  if (/location|based|city|place|where/.test(question)) {
    return "I'm based in Khandwa, Madhya Pradesh, India, and I'm open to remote work and relocation opportunities.";
  }

  if (/hello|hi|hey|good morning|good afternoon|good evening/.test(question)) {
    return "Hey there! I'm Shikha's portfolio assistant. Ask me about her skills, experience, projects, or how to hire her.";
  }

  if (/thank|thanks/.test(question)) {
    return "You're welcome! Feel free to ask anything else.";
  }

  return "I can tell you about Shikha's skills, experience, projects, education, location, or contact details. What would you like to know?";
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: 'bot',
      text: "Hi! I'm Shikha's portfolio assistant. Ask me about her skills, projects, experience, or how to hire her.",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messageId = useRef(2);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText || typing) return;

    setMessages((current) => [
      ...current,
      { id: messageId.current++, from: 'user', text: trimmedText },
    ]);
    setInput('');
    setTyping(true);

    window.setTimeout(() => {
      setTyping(false);
      setMessages((current) => [
        ...current,
        { id: messageId.current++, from: 'bot', text: getBotReply(trimmedText) },
      ]);
    }, 650);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        aria-label={open ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-0 bg-linear-to-br from-primary to-secondary text-white shadow-[0_8px_30px_rgba(37,99,235,0.5)] sm:bottom-6 sm:right-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span className="absolute inset-0 -z-10 rounded-full bg-primary/40 animate-ping" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Portfolio assistant"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-[5.25rem] right-4 z-50 flex w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a12] shadow-[0_25px_60px_rgba(0,0,0,0.6)] sm:bottom-24 sm:right-6"
            style={{ maxHeight: 'min(70vh, 620px)' }}
          >
            <div className="flex shrink-0 items-center gap-3 bg-linear-to-r from-primary to-secondary px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Portfolio Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-300" />
                  <p className="text-xs text-white/80">Ask me about Shikha</p>
                </div>
              </div>
            </div>

            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-end gap-2 ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.from === 'bot' && (
                    <div className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary">
                      <Bot className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${message.from === 'user' ? 'rounded-br-sm bg-linear-to-br from-primary to-secondary text-white' : 'rounded-bl-sm border border-white/10 bg-white/8 text-white/90'}`}>
                    {message.text}
                  </div>
                  {message.from === 'user' && (
                    <div className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <User className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {typing && (
                <div className="flex items-end gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-white/10 bg-white/8 px-4 py-3">
                    {[0, 1, 2].map((item) => (
                      <motion.span key={item} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: item * 0.15 }} className="h-2 w-2 rounded-full bg-primary/70" />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-white/5 px-3 py-2">
              {QUICK_REPLIES.map((reply) => (
                <button key={reply} type="button" onClick={() => sendMessage(reply)} disabled={typing} className="shrink-0 whitespace-nowrap rounded-full border border-primary/30 bg-transparent px-3 py-1.5 text-xs text-primary transition-colors hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50">
                  {reply}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex shrink-0 items-center gap-2 border-t border-white/10 bg-[#0c0c16] px-3 py-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                aria-label="Message for portfolio assistant"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary/50"
              />
              <button type="submit" aria-label="Send message" disabled={!input.trim() || typing} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-0 bg-linear-to-br from-primary to-secondary text-white transition-all hover:shadow-[0_4px_15px_rgba(37,99,235,0.4)] disabled:cursor-not-allowed disabled:opacity-40">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}