import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Palette, Briefcase, Send, Check } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'mohit.98.kothari@gmail.com',
      href: 'mailto:mohit.98.kothari@gmail.com',
      icon: <Mail size={20} />,
    },
    {
      label: 'Phone',
      value: '+91 6376118698',
      href: 'tel:6376118698',
      icon: <Phone size={20} />,
    },
    {
      label: 'Behance Portfolio',
      value: 'behance.net/montykothari',
      href: 'https://www.behance.net/montykothari',
      icon: <Palette size={20} />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/mohit1198',
      href: 'http://linkedin.com/in/mohit1198/',
      icon: <Briefcase size={20} />,
    },
  ];

  return (
    <section id="contact" className="px-[5vw] py-24 bg-[var(--bg2)] flex flex-col items-center text-center">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[0.72rem] text-[var(--accent1)] tracking-[0.15em] uppercase font-medium mb-4 flex items-center justify-center gap-2.5"
      >
        <span className="w-6 h-[1px] bg-[var(--accent1)]" />
        Get In Touch
        <span className="w-6 h-[1px] bg-[var(--accent1)]" />
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-syne text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-8"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <p className="text-[var(--muted)] text-[1.1rem] leading-[1.85] mb-12">
          Looking for a Graphic Designer who brings creativity, structure, and reliability to every project? I'm open to freelance work and full-time opportunities — let's build something great together.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] no-underline text-[var(--text)] transition-all hover:border-[rgba(255,94,94,0.3)] hover:-translate-y-1 interactive text-left"
            >
              <div className="w-11 h-11 bg-[var(--grad)] rounded-[10px] flex items-center justify-center text-white shrink-0">
                {link.icon}
              </div>
              <div className="overflow-hidden">
                <small className="block text-[0.72rem] text-[var(--muted)] mb-0.5">{link.label}</small>
                <span className="font-normal text-[0.95rem] block truncate">{link.value}</span>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
