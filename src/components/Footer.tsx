export default function Footer() {
  return (
    <footer className="px-[5vw] py-10 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
      <div className="font-['Syne'] font-extrabold text-[1.1rem] bg-[var(--grad)] bg-clip-text text-transparent">
        Mohit Kothari.
      </div>
      
      <div className="text-[0.78rem] text-[var(--muted)] text-center md:text-left order-3 md:order-2 w-full md:w-auto">
        © 2025 Mohit Kothari · Graphic Designer · Udaipur, India
      </div>
      
      <div className="flex gap-4 order-2 md:order-3">
        <a
          href="https://www.behance.net/montykothari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--muted)] text-[0.8rem] no-underline hover:text-[var(--text)] transition-colors"
        >
          Behance
        </a>
        <a
          href="http://linkedin.com/in/mohit1198/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--muted)] text-[0.8rem] no-underline hover:text-[var(--text)] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
