import { motion } from 'motion/react';
import { EDUCATION } from '../constants';

export default function Education() {
  return (
    <section id="education" className="px-[5vw] py-24">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[0.72rem] text-[var(--accent1)] tracking-[0.15em] uppercase font-medium mb-4 flex items-center gap-2.5"
      >
        <span className="w-6 h-[1px] bg-[var(--accent1)]" />
        Academic Background
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-['Syne'] text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-12"
      >
        Education
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-8 md:px-10 hover:border-[rgba(255,94,94,0.25)] hover:-translate-y-1 transition-all duration-400"
          >
            <div className="text-[0.78rem] text-[var(--accent1)] tracking-[0.06em] font-semibold mb-3">
              {edu.period}
            </div>
            <h3 className="font-['Syne'] font-bold text-[1.25rem] mb-1 text-[var(--text)]">
              {edu.institution}
            </h3>
            <p className="text-[0.9rem] text-[var(--muted)]">
              {edu.degree}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
