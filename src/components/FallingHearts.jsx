import { useMemo } from 'react';

const HEART_EMOJIS = ['💖', '💕', '💘', '❤️', '💗', '✨'];
const HEART_COUNT = 55;

function createHearts(seed) {
  return Array.from({ length: HEART_COUNT }, (_, i) => ({
    id: `${seed}-${i}`,
    left: Math.random() * 100,
    size: 1.4 + Math.random() * 2.2,
    duration: 3 + Math.random() * 2.5,
    delay: Math.random() * 0.9,
    drift: (Math.random() - 0.5) * 160,
    emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
  }));
}

function FallingHearts({ trigger }) {
  // Deriving from `trigger` (not state+effect) keeps each burst a pure
  // replacement of the previous one; animation-fill-mode: forwards leaves
  // spent hearts parked off-screen so there's nothing to clean up.
  const hearts = useMemo(() => (trigger ? createHearts(trigger) : []), [trigger]);

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
