import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="px-[5vw] py-24 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="text-[0.72rem] text-[var(--accent1)] tracking-[0.15em] uppercase font-medium mb-4 flex items-center justify-center gap-2.5">
          <span className="w-6 h-[1px] bg-[var(--accent1)]" />
          Who I Am
          <span className="w-6 h-[1px] bg-[var(--accent1)]" />
        </p>
        <h2 className="font-syne text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-6">
          About Me
        </h2>
        <p className="text-[var(--muted)] text-[1.1rem] leading-[1.85] mb-8 mx-auto">
          I am a dedicated, organized, and systematic individual — a Graphic Designer with experience crafting compelling visual work. My reliability and adaptability make me a valuable collaborator who thrives across diverse creative challenges, from brand identity and social media to print and digital design.
        </p>
        <p className="text-[var(--muted)] text-[1.1rem] leading-[1.85] mb-12 mx-auto">
          Based in Udaipur, India — bringing creativity and precision to every project, whether it's for dermatology clinics, eyewear brands, real estate, or hospitality clients.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {['Brand Identity', 'Social Media', 'Logo Design', 'Print Design', 'UI Design', 'Adobe Suite'].map(tag => (
            <span
              key={tag}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-full px-5 py-2 text-[0.85rem] text-[var(--muted)] hover:border-[var(--accent1)] hover:text-[var(--accent1)] transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
