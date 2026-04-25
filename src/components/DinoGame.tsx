import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface DinoGameProps {
  onClose: () => void;
}

export default function DinoGame({ onClose }: DinoGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('dino-high-score');
    return saved ? parseInt(saved, 10) : 0;
  });

  const gameState = useRef({
    dino: {
      x: 50,
      y: 150,
      width: 40,
      height: 40,
      dy: 0,
      jumpForce: 12,
      gravity: 0.6,
      ground: 150,
      isGrounded: true,
    },
    obstacles: [] as { x: number; y: number; width: number; height: number; speed: number }[],
    frame: 0,
    speed: 5,
    active: true,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const spawnObstacle = () => {
      const height = 30 + Math.random() * 40;
      gameState.current.obstacles.push({
        x: canvas.width,
        y: canvas.height - height - 10,
        width: 20,
        height: height,
        speed: gameState.current.speed,
      });
    };

    const update = () => {
      if (!gameState.current.active) return;

      const { dino, obstacles } = gameState.current;

      // Update Dino
      dino.dy += dino.gravity;
      dino.y += dino.dy;

      if (dino.y > dino.ground) {
        dino.y = dino.ground;
        dino.dy = 0;
        dino.isGrounded = true;
      }

      // Update Obstacles
      gameState.current.frame++;
      if (gameState.current.frame % 100 === 0) {
        spawnObstacle();
        gameState.current.speed += 0.1;
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= obs.speed;

        // Collision Detection
        if (
          dino.x < obs.x + obs.width &&
          dino.x + dino.width > obs.x &&
          dino.y < obs.y + obs.height &&
          dino.y + dino.height > obs.y
        ) {
          gameState.current.active = false;
          setGameOver(true);
        }

        if (obs.x + obs.width < 0) {
          obstacles.splice(i, 1);
          setScore(s => s + 1);
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { dino, obstacles } = gameState.current;

      // Draw Ground
      ctx.strokeStyle = '#333';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 10);
      ctx.lineTo(canvas.width, canvas.height - 10);
      ctx.stroke();

      // Draw Dino (Simple shape for now)
      ctx.fillStyle = '#ff5e5e';
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
      
      // Draw Eye
      ctx.fillStyle = 'white';
      ctx.fillRect(dino.x + 25, dino.y + 10, 5, 5);

      // Draw Obstacles
      ctx.fillStyle = '#7c5cfc';
      obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      });

      if (gameState.current.active) {
        animationFrameId = requestAnimationFrame(() => {
          update();
          draw();
        });
      }
    };

    draw();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        if (gameState.current.dino.isGrounded) {
          gameState.current.dino.dy = -gameState.current.dino.jumpForce;
          gameState.current.dino.isGrounded = false;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (gameState.current.dino.isGrounded) {
          gameState.current.dino.dy = -gameState.current.dino.jumpForce;
          gameState.current.dino.isGrounded = false;
        }
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('dino-high-score', score.toString());
    }
  }, [score, highScore]);

  const restart = () => {
    gameState.current = {
      dino: {
        x: 50,
        y: 150,
        width: 40,
        height: 40,
        dy: 0,
        jumpForce: 12,
        gravity: 0.6,
        ground: 150,
        isGrounded: true,
      },
      obstacles: [],
      frame: 0,
      speed: 5,
      active: true,
    };
    setGameOver(false);
    setScore(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-[rgba(10,10,15,0.95)] backdrop-blur-md flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-[var(--bg2)] border border-[var(--border)] rounded-[24px] p-8 max-w-2xl w-full relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h3 className="font-syne text-[1.5rem] font-bold mb-1">Portfolio Run</h3>
          <p className="text-[var(--muted)] text-[0.85rem]">Press SPACE or JUMP to avoid obstacles</p>
        </div>

        <div className="relative bg-[rgba(0,0,0,0.3)] rounded-xl border border-[var(--border)] overflow-hidden">
          <canvas
            ref={canvasRef}
            width={600}
            height={200}
            className="w-full h-auto block"
          />
          
          <div className="absolute top-4 right-4 text-right">
            <div className="text-[1.2rem] font-syne font-bold text-[var(--text)]">{score}</div>
            <div className="text-[0.7rem] text-[var(--muted)] uppercase tracking-wider">High: {highScore}</div>
          </div>

          <AnimatePresence>
            {gameOver && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex flex-col items-center justify-center text-center p-6"
              >
                <h4 className="font-syne text-[2rem] font-bold text-white mb-2">GAME OVER</h4>
                <p className="text-[var(--muted)] mb-6">You crashed!</p>
                <button
                  onClick={restart}
                  className="bg-[var(--grad)] text-white px-8 py-3 rounded-full font-bold text-[0.9rem] hover:scale-105 transition-transform"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
