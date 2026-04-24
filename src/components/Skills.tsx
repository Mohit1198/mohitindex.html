import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="px-[5vw] py-24 bg-[var(--bg2)]">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[0.72rem] text-[var(--accent1)] tracking-[0.15em] uppercase font-medium mb-4 flex items-center gap-2.5"
      >
        <span className="w-6 h-[1px] bg-[var(--accent1)]" />
        What I Use
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-['Syne'] text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-8 overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:border-[rgba(124,92,252,0.4)] interactive"
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-[var(--grad)] opacity-0 group-hover:opacity-5 transition-opacity duration-400 pointer-events-none" />
            
            <div className="w-12 h-12 mb-5 flex items-center justify-center">
              <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain brightness-0 invert opacity-80" />
            </div>
            <h3 className="font-syne font-semibold text-[1.1rem] mb-4">{skill.name}</h3>
            
            <div className="w-full h-1 bg-[var(--border)] rounded-full mb-2 overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.width}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 + (idx * 0.1) }}
                className="h-full bg-[var(--grad)] rounded-full relative"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] translate-x-[-100%] animate-[shimmer_3s_infinite]" />
                <div className="absolute inset-0 bg-[var(--accent1)] opacity-40 blur-sm" />
              </motion.div>
            </div>
            
            <div className="flex justify-between items-center text-[0.8rem] text-[var(--muted)]">
              <span>{skill.sub}</span>
              <span className="font-bold text-[var(--accent1)] bg-[var(--accent1)]/10 px-2 py-0.5 rounded-full">{skill.width}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
