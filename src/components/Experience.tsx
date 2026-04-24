import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="px-[5vw] py-24 relative overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[0.72rem] text-[var(--accent1)] tracking-[0.15em] uppercase font-medium mb-4 flex items-center gap-2.5"
      >
        <span className="w-6 h-[1px] bg-[var(--accent1)]" />
        Career Path
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-['Syne'] text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-14"
      >
        Experiences
      </motion.h2>

      <div className="relative mt-14">
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--border)]" />

        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="pl-12 relative group"
            >
              {/* Dot */}
              <div
                className={`absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full border-2 border-[var(--accent1)] bg-[var(--bg)] shadow-[0_0_12px_rgba(124,92,252,0.4)] ${
                  exp.current ? 'bg-[var(--accent1)]' : ''
                }`}
              />

              <div className="flex flex-wrap items-start justify-between mb-1 gap-2">
                <h3 className="font-['Syne'] font-semibold text-[1.1rem] text-[var(--text)]">{exp.role}</h3>
                <span className="text-[0.82rem] text-[var(--accent1)] bg-[rgba(124,92,252,0.1)] border border-[rgba(124,92,252,0.2)] px-3 py-1 rounded-full font-normal">
                  {exp.company}
                </span>
              </div>
              
              <div className="text-[0.8rem] text-[var(--muted)] mb-3">{exp.date}</div>
              
              <p className="text-[var(--muted)] text-[0.92rem] leading-[1.7] max-w-[600px] mb-3">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-[var(--bg3)] text-[var(--muted)] text-[0.75rem] px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
