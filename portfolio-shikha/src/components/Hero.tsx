import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';



export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="relative min-h-svh flex flex-col items-center justify-center pt-20 pb-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center max-w-5xl px-6 w-full"
      >
        <motion.h1 variants={itemVariants} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter leading-[1.1]">
          Hey, I'm <br className="md:hidden" />
          <span className="text-gradient">Shikha Soni</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
          I craft interfaces users love — pixel-perfect, performant & purposeful.
        </motion.p>
        
        <motion.div variants={itemVariants} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <div className="glass-panel px-5 py-2.5 rounded-full text-sm font-medium tracking-wide">Frontend Developer</div>
          <div className="glass-panel px-5 py-2.5 rounded-full text-sm font-medium tracking-wide">React Specialist</div>
          <div className="glass-panel px-5 py-2.5 rounded-full text-sm font-medium tracking-wide text-accent">2+ Years Exp</div>
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a href="#projects" className="w-full sm:w-auto">
            <Button size="lg" className="w-full rounded-full gap-2 bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              View My Work <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full rounded-full gap-2">
              <Download className="w-5 h-5" /> Contact Me
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Tech Badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block z-0">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] glass-panel px-4 py-2 rounded-2xl text-sm font-bold opacity-70"
        >
          React
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] left-[10%] glass-panel px-4 py-2 rounded-2xl text-sm font-bold opacity-70"
        >
          JavaScript
        </motion.div>
        <motion.div 
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[25%] right-[15%] glass-panel px-4 py-2 rounded-2xl text-sm font-bold opacity-70"
        >
          HTML5 / CSS3
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[65%] right-[10%] glass-panel px-4 py-2 rounded-2xl text-sm font-bold opacity-70"
        >
          Bootstrap
        </motion.div>
         <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[45%] right-[10%] glass-panel px-4 py-2 rounded-2xl text-sm font-bold opacity-70"
        >
          Material UI
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
