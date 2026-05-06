// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

// type Message = { from: 'bot' | 'user'; text: string };

// const QUICK_REPLIES = [
//   "Who are you?",
//   "What are your skills?",
//   "Tell me about your work",
//   "How to contact you?",
//   "View your projects",
// ];

// const getBotReply = (input: string): string => {
//   const q = input.toLowerCase();

//   if (q.match(/who|about|yourself|introduce/))
//     return "Hi! I'm Shikha Soni, a Frontend Developer with 2+ years of experience at Coditude, Pune. I specialize in React, JavaScript, HTML5, CSS3, and Bootstrap — building fast, responsive, and beautiful UIs. 🚀";

//   if (q.match(/skill|tech|stack|language|know/))
//     return "My core skills include:\n• React & JavaScript (ES6+)\n• HTML5, CSS3, Bootstrap\n• REST API Integration\n• Responsive & Mobile-First Design\n• Java, Python, C++\n• Git & Version Control";

//   if (q.match(/work|experience|job|company|coditude/))
//     return "I'm currently a Software Engineer at Coditude, Pune (Oct 2022 – Present). I design React UIs, integrate RESTful APIs, ensure responsive design, and collaborate with designers and backend teams. 💼";

//   if (q.match(/project|build|ecommerce|giftos/))
//     return "My key project is Ecommerce-Giftos — a fully functional React e-commerce app with dynamic cart, item management, and product data integration. I've also built responsive UI component libraries and API dashboards. 🛍️";

//   if (q.match(/education|degree|college|university|cgpa|study/))
//     return "I hold a B.E. in Computer Science Engineering from Sri Parshuram Institute of Technology & Research, Khandwa — with a CGPA of 7.59. 🎓";

//   if (q.match(/achievement|award|hackathon|ibm|badge/))
//     return "I've earned:\n🏆 JOB-A-THON — Analytics Vidhya (Sep 2021)\n🏅 IBM Badge — Data Science with Python";

//   if (q.match(/contact|email|phone|reach|hire|connect/))
//     return "You can reach me at:\n📧 shikhasoni2209@mail.com\n📞 +91 6264968375\n💼 LinkedIn: Shikha Soni\n\nOr scroll down to the Contact section!";

//   if (q.match(/location|based|city|place|where/))
//     return "I'm based in Khandwa, Madhya Pradesh, India. I'm open to remote work and relocation opportunities. 📍";

//   if (q.match(/hello|hi|hey|good|morning|afternoon|evening/))
//     return "Hey there! 👋 I'm Shikha's portfolio assistant. Ask me anything about her skills, experience, projects, or how to hire her!";

//   if (q.match(/thank|thanks/))
//     return "You're welcome! Feel free to ask anything else, or head to the Contact section to get in touch with Shikha directly. 😊";

//   if (q.match(/bye|goodbye|see you/))
//     return "Goodbye! Don't hesitate to reach out to Shikha — she'd love to hear from you! 👋";

//   if (q.match(/freelance|available|hire|opportunity|role|position/))
//     return "Shikha is open to Frontend Developer roles, freelance projects, and exciting collaborations! 🌟\n\nBest way to reach her:\n📧 shikhasoni2209@mail.com\n📞 +91 6264968375";

//   return "Great question! I'm not sure about that one. Try asking about Shikha's skills, experience, projects, education, or how to contact her. 💡";
// };

// export function Chatbot() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     { from: 'bot', text: "Hi! 👋 I'm Shikha's portfolio assistant. Ask me about her skills, projects, experience, or how to hire her!" }
//   ]);
//   const [input, setInput] = useState('');
//   const [typing, setTyping] = useState(false);
//   const bottomRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages, typing]);

//   const sendMessage = (text: string) => {
//     if (!text.trim()) return;
//     const userMsg: Message = { from: 'user', text: text.trim() };
//     setMessages(prev => [...prev, userMsg]);
//     setInput('');
//     setTyping(true);
//     setTimeout(() => {
//       setTyping(false);
//       setMessages(prev => [...prev, { from: 'bot', text: getBotReply(text) }]);
//     }, 900);
//   };

//   const handleKey = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
//   };

//   return (
//     <>
//       {/* Floating button */}
//       <motion.button
//         onClick={() => setOpen(o => !o)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_8px_30px_rgba(37,99,235,0.5)] flex items-center justify-center text-white cursor-pointer border-0"
//       >
//         <AnimatePresence mode="wait">
//           {open
//             ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="w-6 h-6" /></motion.span>
//             : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><MessageCircle className="w-6 h-6" /></motion.span>
//           }
//         </AnimatePresence>
//         {/* Pulse ring */}
//         {!open && (
//           <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
//         )}
//       </motion.button>

//       {/* Chat panel */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: 30, scale: 0.92 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 30, scale: 0.92 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 28 }}
//             className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/10 flex flex-col"
//             style={{ maxHeight: '70vh' }}
//           >
//             {/* Header */}
//             <div className="bg-gradient-to-r from-primary to-secondary px-5 py-4 flex items-center gap-3 shrink-0">
//               <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
//                 <Bot className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-white font-bold text-sm">Portfolio Assistant</p>
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
//                   <p className="text-white/80 text-xs">Ask me anything about Shikha</p>
//                 </div>
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0a0a12]">
//               {messages.map((msg, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.25 }}
//                   className={`flex items-end gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   {msg.from === 'bot' && (
//                     <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 mb-0.5">
//                       <Bot className="w-3.5 h-3.5 text-white" />
//                     </div>
//                   )}
//                   <div
//                     className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
//                       msg.from === 'user'
//                         ? 'bg-gradient-to-br from-primary to-secondary text-white rounded-br-sm'
//                         : 'bg-white/8 border border-white/10 text-white/90 rounded-bl-sm'
//                     }`}
//                   >
//                     {msg.text}
//                   </div>
//                   {msg.from === 'user' && (
//                     <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 mb-0.5">
//                       <User className="w-3.5 h-3.5 text-white" />
//                     </div>
//                   )}
//                 </motion.div>
//               ))}

//               {/* Typing indicator */}
//               {typing && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex items-end gap-2"
//                 >
//                   <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
//                     <Bot className="w-3.5 h-3.5 text-white" />
//                   </div>
//                   <div className="bg-white/8 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
//                     {[0, 1, 2].map(i => (
//                       <motion.span
//                         key={i}
//                         animate={{ y: [0, -5, 0] }}
//                         transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
//                         className="w-2 h-2 rounded-full bg-primary/70 inline-block"
//                       />
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//               <div ref={bottomRef} />
//             </div>

//             {/* Quick replies */}
//             <div className="px-3 py-2 bg-[#0a0a12] border-t border-white/5 flex gap-2 overflow-x-auto shrink-0 scrollbar-none">
//               {QUICK_REPLIES.map(r => (
//                 <button
//                   key={r}
//                   onClick={() => sendMessage(r)}
//                   className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors whitespace-nowrap cursor-pointer bg-transparent"
//                 >
//                   {r}
//                 </button>
//               ))}
//             </div>

//             {/* Input */}
//             <div className="px-3 py-3 bg-[#0c0c16] border-t border-white/10 flex items-center gap-2 shrink-0">
//               <input
//                 value={input}
//                 onChange={e => setInput(e.target.value)}
//                 onKeyDown={handleKey}
//                 placeholder="Type a message..."
//                 className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-primary/50 transition-colors"
//               />
//               <button
//                 onClick={() => sendMessage(input)}
//                 disabled={!input.trim()}
//                 className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white disabled:opacity-40 hover:shadow-[0_4px_15px_rgba(37,99,235,0.4)] transition-all cursor-pointer border-0 shrink-0"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
