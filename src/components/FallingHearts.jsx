import { useEffect, useState } from 'react';

const HEART_EMOJIS = ['💖', '💕', '💘', '❤️', '💗', '✨'];
const HEART_COUNT = 26;

function createHearts() {
  return Array.from({ length: HEART_COUNT }, (_, i) => ({
    id: `${Date.now()}-${i}`,
    left: Math.random() * 100,
    size: 0.8 + Math.random() * 1.3,
    duration: 3 + Math.random() * 2.5,
    delay: Math.random() * 0.6,
    drift: (Math.random() - 0.5) * 140,
    emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
  }));
}

function FallingHearts({ trigger }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (!trigger) return undefined;
    setHearts(createHearts());
    const timeout = setTimeout(() => setHearts([]), 6200);
    return () => clearTimeout(timeout);
  }, [trigger]);

  if (hearts.length === 0) return null;

  return (
    <div className="falling-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="falling-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            '--drift': `${heart.drift}px`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}

export default FallingHearts;
