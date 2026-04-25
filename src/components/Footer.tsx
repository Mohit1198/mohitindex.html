interface FooterProps {
  onPlayGame: () => void;
}

export default function Footer({ onPlayGame }: FooterProps) {
  return (
    <footer className="px-[5vw] py-16 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="flex flex-col items-center justify-center mb-16">
        <button
          onClick={onPlayGame}
          className="group px-4 py-1.5 rounded-full border border-[var(--border)] bg-[rgba(255,94,94,0.05)] hover:border-[var(--accent1)] hover:bg-[rgba(255,94,94,0.1)] transition-all duration-300 interactive flex items-center justify-center"
        >
          <span className="text-[0.6rem] font-medium text-[var(--text)] uppercase tracking-[0.25em] animate-pulse leading-none">
            Run Mohit Run
          </span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-4">
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <div className="font-syne font-extrabold text-[1.5rem] bg-[var(--grad)] bg-clip-text text-transparent">
            Mohit Kothari.
          </div>
          <div className="text-[0.7rem] lg:text-[0.78rem] text-[var(--muted)] uppercase tracking-[0.15em] leading-relaxed">
            © {new Date().getFullYear()} Mohit Kothari · Graphic Designer · Udaipur, India
          </div>
        </div>
        
        <div className="flex gap-8">
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
    </div>
  </footer>
  );
}
