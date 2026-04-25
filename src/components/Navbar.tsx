import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
      <motion.nav 
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5vw] h-[68px] bg-[rgba(10,10,15,0.7)] backdrop-blur-[24px] border-bottom border-[var(--border)] transition-colors duration-400"
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-syne font-bold text-[1.2rem] tracking-tight text-[var(--accent1)] hover:text-[var(--text)] transition-colors uppercase"
        >
          Home
        </button>

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
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[rgba(10,10,15,0.98)] backdrop-blur-xl flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-syne text-[2.5rem] font-bold text-[var(--text)] no-underline hover:text-[var(--accent1)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:mohit.98.kothari@gmail.com"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-[var(--grad)] text-white border-none rounded-full px-10 py-4 text-[1.2rem] font-bold no-underline shadow-[0_12px_32px_rgba(255,94,94,0.3)]"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
