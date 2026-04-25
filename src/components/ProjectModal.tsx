import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../constants';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[500] bg-[rgba(0,0,0,0.85)] backdrop-blur-[12px] flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[var(--bg2)] border border-[var(--border)] rounded-[20px] max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative scrollbar-hide"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 bg-[var(--surface)] border border-[var(--border)] rounded-full cursor-pointer flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="mb-6">
              <div className="text-[0.72rem] text-[var(--accent1)] tracking-[0.1em] uppercase mb-2 font-medium">
                {project.cat}
              </div>
              <h3 className="font-['Syne'] font-bold text-[1.8rem] text-[var(--text)] leading-tight">
                {project.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden mb-6 bg-[var(--bg3)] aspect-video">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[var(--muted)] text-[1rem] leading-[1.8] mb-8">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-md px-3 py-1 text-[0.78rem] text-[var(--muted)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--grad)] text-white px-7 py-3 rounded-full text-[0.95rem] font-medium transition-all hover:opacity-90 no-underline"
            >
              View on Behance
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
