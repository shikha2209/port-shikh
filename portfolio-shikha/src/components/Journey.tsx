import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    year: "Oct 2022 – Present",
    role: "Software Engineer",
    company: "Coditude, Pune",
    desc: "Designed and implemented user interfaces using React, ensuring optimal performance and user engagement. Championed mobile-first responsive design across devices. Integrated RESTful APIs for dynamic data, optimized code performance, and collaborated closely with designers, backend developers, and stakeholders."
  },
  {
    year: "Jan 2022 – Mar 2024",
    role: "Academic Project Lead",
    company: "E-commerce — Ecommerce-Giftos",
    desc: "Built a fully functional e-commerce platform using React with dynamic cart functionality, item count management, and dummy product data. Conducted thorough testing and debugging to ensure smooth performance across all user flows."
  },
  {
    year: "Sep 2021",
    role: "Hackathon Participant",
    company: "JOB-A-THON — Analytics Vidhya",
    desc: "Competed in Analytics Vidhya's JOB-A-THON, applying problem-solving and technical skills in a timed competitive environment. Demonstrated ability to perform under pressure on real-world challenges."
  },
  {
    year: "2020 – 2022",
    role: "B.E. Computer Science Engineering",
    company: "Sri Parshuram Institute of Technology & Research, Khandwa",
    desc: "Graduated with CGPA 7.59. Developed strong foundations in data structures, algorithms, system design, web development and software engineering. Also earned an IBM Badge in Data Science with Python."
  }
];

export function Journey() {
  return (
    <section id="journey" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          The <span className="text-gradient">Journey</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary via-secondary to-transparent md:-translate-x-1/2 opacity-30" />

        <div className="space-y-12">
          {EXPERIENCES.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                
                {/* Center Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] transition-all duration-300 mt-1.5 md:mt-0"
                />

                {/* Left Side (Desktop) / Top Side (Mobile) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex ${isEven ? 'md:justify-end' : 'md:justify-start md:order-2'}`}
                >
                  <div className={`text-left ${isEven ? 'md:text-right' : ''}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-primary text-xs font-bold tracking-widest mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <h4 className="text-base text-white/60 mb-4">{item.company}</h4>
                  </div>
                </motion.div>

                {/* Right Side (Desktop) / Bottom Side (Mobile) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 md:px-12 mt-2 md:mt-0 ${isEven ? 'md:order-2' : 'md:order-1 md:text-right'}`}
                >
                  <div className="glass-panel p-6 rounded-2xl text-muted-foreground font-light leading-relaxed text-sm">
                    {item.desc}
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
