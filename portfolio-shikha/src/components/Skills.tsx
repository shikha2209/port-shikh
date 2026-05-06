import { motion } from "framer-motion";
import { Code2, Layers, Wrench } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["JavaScript", "HTML5", "CSS3", "Java", "Python", "C++"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-6 h-6 text-secondary" />,
    skills: ["React", "Bootstrap", "Material-UI", "REST APIs"]
  },
  {
    title: "Core Competencies",
    icon: <Wrench className="w-6 h-6 text-accent" />,
    skills: ["Responsive Design", "API Integration", "Debugging", "System Design", "Web Services", "Software Testing", "System Scalability", "Git"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Built <span className="text-gradient">With</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg font-light max-w-xl mx-auto">
          A focused set of skills — expertly applied to build fast, accessible, beautiful web experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_GROUPS.map((group, groupIdx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: groupIdx * 0.2 }}
            className="glass-panel p-8 rounded-3xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              {group.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{group.title}</h3>
            
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.1 * i + (groupIdx * 0.2) }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-xl bg-background border border-white/10 text-sm font-medium text-white/80 hover:text-white hover:border-primary/50 transition-colors cursor-default shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 glass-panel rounded-3xl p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">🏆 Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "JOB-A-THON",
              subtitle: "Analytics Vidhya — September 2021",
              desc: "Participated and performed in the competitive hiring hackathon conducted by Analytics Vidhya.",
              color: "from-primary/20 to-transparent"
            },
            {
              title: "IBM Badge — Data Science with Python",
              subtitle: "IBM Certification",
              desc: "Earned the IBM professional badge demonstrating competency in Data Science using Python.",
              color: "from-secondary/20 to-transparent"
            }
          ].map((ach, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-2xl bg-linear-to-br ${ach.color} border border-white/10`}
            >
              <h4 className="text-lg font-bold text-white mb-1">{ach.title}</h4>
              <p className="text-xs text-primary font-semibold mb-3 uppercase tracking-wider">{ach.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{ach.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
