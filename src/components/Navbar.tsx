import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5vw] h-[68px] bg-[rgba(10,10,15,0.7)] backdrop-blur-[24px] border-bottom border-[var(--border)] transition-colors duration-400">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-[var(--grad)] flex items-center justify-center text-white font-syne font-black text-lg shadow-[0_8px_16px_rgba(124,92,252,0.4)] group-hover:scale-105 transition-transform">
            MK
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-extrabold text-[1.25rem] leading-none tracking-[-0.04em] text-[var(--accent1)]">
              Mohit Kothari
            </span>
            <span className="text-[0.6rem] text-[var(--muted)] tracking-[0.2em] uppercase font-medium">
              Graphic Designer
            </span>
          </div>
        </div>

        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-[0.85rem] font-medium tracking-[0.04em] uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="mailto:mohit.98.kothari@gmail.com"
            className="hidden sm:block bg-[var(--grad)] text-white border-none rounded-full px-5 py-2 text-[0.82rem] font-medium hover:opacity-85 hover:-translate-y-[1px] transition-all no-underline"
          >
            Hire Me
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-[var(--text)]"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[200] bg-[var(--bg)] flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 text-[var(--text)]"
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-syne text-[2rem] font-bold text-[var(--text)] no-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:mohit.98.kothari@gmail.com"
              className="bg-[var(--grad)] text-white border-none rounded-full px-8 py-3 text-[1.1rem] font-medium no-underline"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
