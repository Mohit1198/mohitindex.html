import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 100 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 100 });
  
  const ringX = useSpring(0, { damping: 15, stiffness: 60 });
  const ringY = useSpring(0, { damping: 15, stiffness: 60 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      ringX.set(e.clientX - 18);
      ringY.set(e.clientY - 18);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('.interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[var(--accent1)] rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-[rgba(124,92,252,0.5)] rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 60 }}
      />
    </>
  );
}
