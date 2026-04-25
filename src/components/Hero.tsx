import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start px-[5vw] py-30 pt-[120px] pb-[80px] relative overflow-hidden">
      <div className="absolute inset-0 z-0 hero-noise pointer-events-none opacity-40" />
      
      {/* Background Orbs */}
      <div className="absolute w-[500px] h-[500px] bg-[rgba(255,94,94,0.12)] rounded-full blur-[80px] -top-[100px] -right-[100px] pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] bg-[rgba(255,212,100,0.08)] rounded-full blur-[80px] bottom-[50px] left-[10%] pointer-events-none" />
      <div className="absolute w-[250px] h-[250px] bg-[rgba(226,60,100,0.06)] rounded-full blur-[80px] top-[40%] right-[20%] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[rgba(255,94,94,0.1)] border border-[rgba(255,94,94,0.2)] rounded-full px-3.5 py-1.5 text-[0.78rem] text-[var(--accent1)] font-medium mb-8 relative z-1"
        >
        <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full shadow-[0_0_6px_#4ade80] pulse-animation" />
        Available for Freelance & Full-time
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="font-syne font-extrabold text-[clamp(4rem,12vw,9rem)] leading-[0.9] tracking-[-0.04em] mb-8 relative z-1"
      >
        <div className="text-[var(--text)]">Mohit</div>
        <div className="bg-linear-to-r from-[var(--accent1)] to-[var(--accent2)] bg-clip-text text-transparent">
          Kothari
        </div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="text-[clamp(1rem,2vw,1.25rem)] text-[var(--muted)] max-w-[480px] leading-[1.7] mb-10 relative z-1"
      >
        Graphic Designer crafting visual identities, social media campaigns, and brand experiences — 4+ years turning ideas into impactful design.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65 }}
        className="flex gap-4 flex-wrap relative z-1"
      >
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 bg-[var(--grad)] text-white border-none rounded-full px-7 py-3.5 text-[0.95rem] font-bold transition-all shadow-[0_8px_32px_rgba(255,94,94,0.2)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(255,94,94,0.3)] no-underline interactive"
        >
          <span>View Work</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-transparent text-[var(--text)] border border-[var(--border)] rounded-full px-7 py-3.5 text-[0.95rem] font-normal transition-all hover:border-[var(--accent1)] hover:bg-[rgba(255,94,94,0.06)] hover:-translate-y-0.5 no-underline interactive"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Stats - Desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="absolute right-[5vw] bottom-[60px] hidden lg:flex gap-12 z-1"
      >
        <div className="text-right">
          <div className="font-['Syne'] text-[2.2rem] font-bold bg-[var(--grad)] bg-clip-text text-transparent leading-none">4+</div>
          <div className="text-[0.75rem] text-[var(--muted)] mt-1">Years of Experience</div>
        </div>
        <div className="text-right">
          <div className="font-['Syne'] text-[2.2rem] font-bold bg-[var(--grad)] bg-clip-text text-transparent leading-none">10+</div>
          <div className="text-[0.75rem] text-[var(--muted)] mt-1">Clinic Brands</div>
        </div>
        <div className="text-right">
          <div className="font-['Syne'] text-[2.2rem] font-bold bg-[var(--grad)] bg-clip-text text-transparent leading-none">4</div>
          <div className="text-[0.75rem] text-[var(--muted)] mt-1">Companies</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-[5vw] flex items-center gap-3 text-[0.75rem] text-[var(--muted)] tracking-[0.1em] uppercase z-1"
      >
        <div className="w-10 h-[1px] bg-[var(--muted)] scroll-line-animation" />
        Scroll
      </motion.div>
    </section>
  );
}
