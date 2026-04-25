import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PROJECTS as STATIC_PROJECTS, Project } from '../constants';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>(STATIC_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/behance-projects');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setProjects(data);
          }
        }
      } catch (error) {
        console.error('Failed to sync with Behance:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

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
          {loading && (
            <div className="text-[0.7rem] text-[var(--muted)] flex items-center gap-2 px-4">
              <div className="w-1.5 h-1.5 bg-[var(--accent1)] rounded-full animate-pulse" />
              Syncing with Behance...
            </div>
          )}
          <a
            href="https://www.behance.net/montykothari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-[var(--text)] border border-[var(--border)] rounded-full px-6 py-3 text-[0.85rem] font-normal transition-all hover:border-[var(--accent1)] hover:bg-[rgba(255,94,94,0.08)] no-underline interactive"
          >
            View on Behance →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`group bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(255,94,94,0.4)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)] interactive ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg3)]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-br from-[rgba(255,94,94,0.4)] to-[rgba(255,212,100,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center text-white">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="w-12 h-12 rounded-full bg-white text-[var(--accent1)] flex items-center justify-center text-xl shadow-xl"
                >
                  ↗
                </motion.div>
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
