"use client";

const PARTICLES = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${(i * 2.857) % 100}%`,
  size: 1 + (i % 3),
  delay: (i * 0.7) % 12,
  duration: 12 + (i % 8) * 2,
  opacity: 0.2 + (i % 4) * 0.15,
}));

export default function ParticleField({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-cyan"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
