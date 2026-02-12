"use client";

const BUBBLES = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${(i * 4.17 + (i % 3) * 7.3) % 100}%`,
  size: 4 + (i % 5) * 4,
  delay: (i * 1.1) % 14,
  duration: 14 + (i % 6) * 3,
  wobble: 10 + (i % 4) * 8,
}));

export default function ParticleField({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {BUBBLES.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: b.left,
            bottom: "-30px",
            width: b.size,
            height: b.size,
            border: "1px solid rgba(63, 208, 255, 0.25)",
            background: `radial-gradient(circle at 35% 30%, rgba(63, 208, 255, 0.15), rgba(63, 208, 255, 0.03) 60%, transparent)`,
            boxShadow: `inset -1px -1px 2px rgba(63, 208, 255, 0.08), 0 0 ${b.size / 2}px rgba(63, 208, 255, 0.06)`,
            animation: `bubbleRise ${b.duration}s ease-in ${b.delay}s infinite`,
            ["--wobble" as string]: `${b.wobble}px`,
          }}
        >
          {/* Highlight glint */}
          <div
            className="absolute rounded-full bg-white"
            style={{
              width: Math.max(1, b.size * 0.2),
              height: Math.max(1, b.size * 0.15),
              top: "20%",
              left: "25%",
              opacity: 0.3,
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes bubbleRise {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          5% {
            opacity: 0.7;
            transform: translateY(-5vh) translateX(0) scale(0.9);
          }
          25% {
            transform: translateY(-25vh) translateX(var(--wobble)) scale(1);
          }
          50% {
            transform: translateY(-50vh) translateX(calc(var(--wobble) * -0.7)) scale(1);
          }
          75% {
            transform: translateY(-75vh) translateX(var(--wobble)) scale(1.05);
          }
          95% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-105vh) translateX(calc(var(--wobble) * -0.5)) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
