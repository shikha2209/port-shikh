import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById(href.slice(1));

    setMobileMenuOpen(false);

    if (!target) return;

    // Wait for the mobile menu to start closing before calculating the target position.
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', href);
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
         <a href="#hero" onClick={handleNavClick('#hero')} className="text-2xl font-display font-bold tracking-tighter hover:opacity-80 transition-opacity">
          SS<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
             <a key={link.name} href={link.href} onClick={handleNavClick(link.href)} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
           <a href='#contact' onClick={handleNavClick('#contact')}>
            <Button className="rounded-full bg-linear-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 border-0 h-11 px-6">
              Hire Me
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden overflow-hidden"
          >
            {navLinks.map(link => (
              <a 
                key={link.name} 
                 href={link.href}
                 onClick={handleNavClick(link.href)}
                className="text-lg font-medium text-white/80 hover:text-white p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
             <a href="#contact" onClick={handleNavClick('#contact')} className="mt-2">
              <Button className="w-full rounded-xl bg-linear-to-r from-primary to-secondary h-12 text-base">
                Hire Me
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}