import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";

const PROJECTS = [
 {
  title: "Personal Portfolio",
  description:
    "A responsive personal portfolio website built using HTML, CSS, and JavaScript to showcase projects, skills, and contact information with smooth navigation and modern UI design.",
  tech: ["HTML5", "CSS3", "JavaScript", "Git"],
  link: "https://shikha2209.github.io/portfolio.github.io/",
  github: "https://github.com/shikha2209",
  featured: true,
  period: "2024",
  highlights: [
    "Responsive design optimized for all devices",
    "Smooth scrolling and interactive user experience",
    "Project showcase with clean modern layout",
    "Custom styling and animations using CSS and JavaScript",
  ],
},
  {
  title: "Tic-Tac-Toe Game",
  description:
    "A classic Tic-Tac-Toe game built using HTML, CSS, and JavaScript with interactive gameplay, responsive design, and dynamic win detection functionality.",
  tech: ["HTML5", "CSS3", "JavaScript", "React"],
  link: "https://tic-tac-toe-react-kappa-three.vercel.app/",
  github: "https://github.com/shikha2209",
  featured: false,
  period: "2022",
  highlights: [
    "Interactive two-player gameplay experience",
    "Dynamic winner and draw detection logic",
    "Responsive and user-friendly interface design",
  ],
},
  {
  title: "Weather App",
  description:
    "A modern weather application that provides real-time weather updates, temperature details, humidity, wind speed, and location-based forecasts using live weather APIs.",
  tech: ["React", "JavaScript", "REST APIs", "CSS3"],
  link: "https://weather-app-github-io-nine.vercel.app/",
  github: "https://github.com/shikha2209",
  featured: false,
  period: "2026",
  highlights: [
    "Real-time weather data integration using APIs",
    "Search weather conditions by city name",
    "Responsive and clean user interface design",
  ],
}
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center">
          Work That <span className="text-gradient">Speaks</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -10 }}
            className="group relative glass-panel rounded-3xl p-8 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex-1 flex flex-col">
              {project.featured && (
                <div className="mb-4 inline-flex self-start px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                  Academic Project
                </div>
              )}
              {!project.featured && (
                <div className="mb-4 inline-flex self-start px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                  Personal Project
                </div>
              )}
              
              <span className="text-xs text-muted-foreground mb-2 block">{project.period}</span>
              <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed font-light text-sm">{project.description}</p>

              <ul className="space-y-1.5 mb-6">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/60">
                    <span className="text-primary mt-0.5">→</span>
                    {h}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group/link">
                  View Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
                <div className="flex gap-2 ml-auto">
                  <a href={project.github} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 transition-colors text-muted-foreground hover:text-white">
                    <GitBranch className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 transition-colors text-muted-foreground hover:text-white">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
