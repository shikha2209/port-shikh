import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Link, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import toast from 'react-hot-toast';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Let's Build <span className="text-gradient">Something</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Open to Frontend Developer roles, freelance projects, and exciting collaborations. Let's talk!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          <a href="mailto:shikhasoni2209@mail.com" className="flex items-center gap-6 p-6 rounded-3xl glass-panel hover:border-primary/50 transition-all duration-300 hover:bg-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Email Me</p>
              <p className="text-base font-medium text-white group-hover:text-primary transition-colors break-all">shikhasoni2209@mail.com</p>
            </div>
          </a>
          
          <a href="tel:+916264968375" className="flex items-center gap-6 p-6 rounded-3xl glass-panel hover:border-secondary/50 transition-all duration-300 hover:bg-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Phone className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Call Me</p>
              <p className="text-base font-medium text-white group-hover:text-secondary transition-colors">+91 6264968375</p>
            </div>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-3xl glass-panel hover:border-accent/50 transition-all duration-300 hover:bg-white/10 group">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Link className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">LinkedIn</p>
              <p className="text-base font-medium text-white group-hover:text-accent transition-colors">Shikha Soni</p>
            </div>
          </a>

          <div className="p-6 rounded-3xl glass-panel border border-white/5">
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-semibold">Location</p>
            <p className="text-white font-medium">Khandwa, Madhya Pradesh</p>
            <p className="text-muted-foreground text-sm mt-1">Open to remote & relocation</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 p-8 md:p-10 rounded-3xl glass-panel space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-100 h-100 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Your Name</label>
              <Input 
                required 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Your Email</label>
              <Input 
                required 
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com" 
              />
            </div>
          </div>
          
          <div className="space-y-2 relative z-10">
            <label className="text-sm font-medium text-white/80">Message</label>
            <Textarea 
              required 
              rows={6} 
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              placeholder="Tell me about your project or opportunity..."
            />
          </div>

          <Button 
            type="submit" 
            disabled={sending} 
            className="w-full h-14 text-base rounded-xl bg-linear-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all relative z-10 border-0"
          >
            {sending ? "Sending..." : "Send Message"} <Send className="w-5 h-5 ml-2" />
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
