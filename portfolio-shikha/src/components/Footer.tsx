export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-display font-bold tracking-tighter text-white/80">
          SS<span className="text-primary">.</span>
        </div>
        
        <p className="text-muted-foreground text-sm font-light text-center">
          Built with React, Tailwind & Framer Motion. <br className="md:hidden"/> Designed with passion.
        </p>
        
        <p className="text-white/40 text-sm font-medium">
          &copy; {new Date().getFullYear()} Shikha Soni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
