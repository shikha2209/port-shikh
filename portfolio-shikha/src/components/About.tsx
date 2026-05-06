import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const INFO_ROWS = [
  {
    icon: <Briefcase className="w-4 h-4" />,
    label: 'Currently At',
    value: 'Coditude, Pune',
    sub: 'Software Engineer · Oct 2022 – Present',
    color: 'text-primary',
    dot: true,
  },
  {
    icon: <GraduationCap className="w-4 h-4" />,
    label: 'Education',
    value: 'B.E. Computer Science',
    sub: 'CGPA 7.59 · Sri Parshuram Institute, Khandwa',
    color: 'text-secondary',
    dot: false,
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: 'Based In',
    value: 'Khandwa, Madhya Pradesh',
    sub: 'Open to remote & relocation',
    color: 'text-accent',
    dot: false,
  },
];

const STATS = [
  { value: '2+', label: 'Years' },
  { value: '10+', label: 'Projects' },
  { value: '8+', label: 'Skills' },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-7xl mx-auto relative z-10">
      {/* Decorative background number */}
      <div className="absolute left-0 top-16 text-[200px] font-display font-black text-white/2 leading-none select-none pointer-events-none hidden lg:block">
        01
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ─── LEFT: Editorial text block ─── */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-primary inline-block" />
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-8"
          >
            The{' '}
            <span className="relative inline-block">
              <span className="text-gradient">Story</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-1 left-0 right-0 h-0.75 bg-linear-to-r from-primary to-secondary origin-left rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed font-light mb-6"
          >
            I'm a <span className="text-white font-medium">Frontend Developer</span> who lives at the intersection of clean code and thoughtful design. With 2+ years at{' '}
            <span className="text-white font-medium">Coditude, Pune</span>, I build React-powered UIs that are fast, accessible, and a joy to use.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-lg text-muted-foreground leading-relaxed font-light mb-10"
          >
            From integrating RESTful APIs to crafting pixel-perfect mobile-first layouts, I bring both technical rigour and an eye for detail to every project I touch.
          </motion.p>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-8 mb-10"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-4xl font-display font-black text-white">{s.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-1">{s.label}</p>
                </div>
                {i < STATS.length - 1 && <div className="w-px h-10 bg-white/10" />}
              </div>
            ))}
          </motion.div>

          {/* Skill chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {['React', 'JavaScript', 'HTML5', 'CSS3','Material-UI' , 'Bootstrap', 'Java', 'Python'].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.32 + i * 0.04, type: 'spring' }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70 hover:text-white hover:border-primary/40 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT: Profile card ─── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-4 bg-linear-to-tr from-primary/20 via-secondary/10 to-accent/20 rounded-4xl blur-[60px] opacity-60" />

          <div className="relative rounded-4xl overflow-hidden border border-white/10 bg-white/3 backdrop-blur-sm">
            {/* Top banner */}
            <div className="relative h-28 bg-linear-to-r from-primary via-secondary to-accent overflow-hidden flex items-end px-8 pb-0">
              <div className="absolute inset-0 opacity-30" style={{backgroundImage:'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,0.03) 10px,rgba(255,255,255,0.03) 20px)'}} />
              {/* Avatar bubble sits on the border */}
              <div className="relative w-20 h-20 translate-y-0 rounded-2xl bg-linear-to-br from-white/20 to-white/5 backdrop-blur border-2 border-white/30 flex items-center justify-center shadow-xl">
                <span className="text-3xl font-display font-black text-white tracking-tighter">SS</span>
              </div>
            </div>

            <div className="pt-14 px-8 pb-8">
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white">Shikha Soni</h3>
                <p className="text-primary text-sm font-semibold mt-0.5">Frontend Developer</p>
              </div>

              {/* Info rows */}
              <div className="space-y-0 divide-y divide-white/5">
                {INFO_ROWS.map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4 py-5 group"
                  >
                    <div className={`mt-0.5 ${row.color} opacity-80 shrink-0`}>{row.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-0.5">{row.label}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-white font-semibold text-sm">{row.value}</p>
                        {row.dot && (
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs text-green-400 font-medium">Active</span>
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-xs mt-0.5">{row.sub}</p>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${row.color} opacity-0 group-hover:opacity-70 transition-opacity shrink-0 mt-1`} />
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-linear-to-r from-primary to-secondary text-white text-sm font-bold shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.5)] transition-shadow"
              >
                Let's Connect <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
