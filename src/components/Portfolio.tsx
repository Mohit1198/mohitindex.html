import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS as STATIC_PROJECTS, Project } from '../constants';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="px-[5vw] py-24 bg-[var(--bg2)]">
      <div className="flex flex-wrap items-end justify-between mb-12 gap-4">
        <div>
          <p className="text-[0.72rem] text-[var(--accent1)] tracking-[0.15em] uppercase font-medium mb-4 flex items-center gap-2.5">
            <span className="w-6 h-[1px] bg-[var(--accent1)]" />
            Selected Work
          </p>
          <h2 className="font-syne text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.03em] leading-[1.1]">
            Projects <span className="bg-[var(--grad)] bg-clip-text text-transparent">Portfolio</span>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.behance.net/montykothari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-[var(--text)] border border-[var(--border)] rounded-full px-6 py-3 text-[0.85rem] font-normal transition-all hover:border-[var(--accent1)] hover:bg-[rgba(124,92,252,0.08)] no-underline interactive"
          >
            View on Behance →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STATIC_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`group bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:border-[rgba(124,92,252,0.35)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.4)] interactive ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg3)]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-br from-[rgba(124,92,252,0.7)] to-[rgba(79,159,255,0.7)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center text-white text-2xl">
                ↗
              </div>
            </div>

            <div className="p-6 md:p-7">
              <div className="text-[0.7rem] text-[var(--accent1)] tracking-[0.1em] uppercase font-semibold mb-1">
                {project.cat}
              </div>
              <h3 className="font-syne font-semibold text-[1.1rem] mb-1 leading-snug">{project.title}</h3>
              <p className="text-[0.82rem] text-[var(--muted)] line-clamp-2 leading-relaxed">{project.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
