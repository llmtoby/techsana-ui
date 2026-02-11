type Variant = "full" | "tail" | "fin" | "head";

// Humpback whale silhouette constellation points (x, y, bright?)
const allPoints: [number, number, boolean][] = [
  // Tail (0-6)
  [50, 120, false], [70, 105, true], [90, 95, false], [110, 100, false],
  [80, 130, true], [60, 140, false], [100, 135, false],
  // Body mid (7-15)
  [130, 90, false], [160, 80, true], [190, 75, false], [220, 72, false],
  [250, 70, true], [280, 72, false], [310, 78, false], [340, 85, true],
  [355, 95, false],
  // Belly (16-20)
  [150, 110, false], [200, 120, true], [250, 125, false], [300, 118, false],
  [340, 108, false],
  // Dorsal fin (21-24)
  [230, 58, true], [240, 48, false], [250, 55, false], [260, 62, false],
  // Head (25-30)
  [370, 90, false], [390, 85, true], [410, 88, false], [420, 95, true],
  [415, 105, false], [395, 110, false],
];

// Line connections between point indices
const allLines: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [4, 6], [2, 6],
  [3, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
  [7, 16], [16, 17], [17, 18], [18, 19], [19, 20], [20, 15],
  [10, 21], [21, 22], [22, 23], [23, 24], [24, 11],
  [15, 25], [25, 26], [26, 27], [27, 28], [28, 29], [29, 30], [30, 25],
  [1, 4], [8, 16], [9, 17], [11, 18], [13, 19], [14, 20],
  [3, 16], [6, 7], [5, 0],
];

const variantRanges: Record<Variant, [number, number]> = {
  full: [0, 30],
  tail: [0, 6],
  fin: [21, 24],
  head: [25, 30],
};

export default function WhaleConstellation({
  variant = "full",
  className = "",
  animate = true,
}: {
  variant?: Variant;
  className?: string;
  animate?: boolean;
}) {
  const [min, max] = variantRanges[variant];
  const activeIndices = new Set(
    allPoints.map((_, i) => i).filter((i) => i >= min && i <= max)
  );

  const points = allPoints
    .map((p, i) => ({ x: p[0], y: p[1], bright: p[2], i }))
    .filter((p) => activeIndices.has(p.i));

  const lines = allLines.filter(
    ([a, b]) => activeIndices.has(a) && activeIndices.has(b)
  );

  return (
    <svg
      viewBox="0 0 460 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.12, ...(animate ? { animation: "drift 20s ease-in-out infinite" } : {}) }}
    >
      <defs>
        <filter id="whale-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Lines */}
      {lines.map(([a, b], i) => (
        <line
          key={`l${i}`}
          x1={allPoints[a][0]}
          y1={allPoints[a][1]}
          x2={allPoints[b][0]}
          y2={allPoints[b][1]}
          stroke="#3FD0FF"
          strokeOpacity={0.15}
          strokeWidth={0.8}
        />
      ))}

      {/* Points */}
      {points.map((p) => (
        <circle
          key={`p${p.i}`}
          cx={p.x}
          cy={p.y}
          r={p.bright ? 2.5 : 1.5}
          fill="#3FD0FF"
          opacity={p.bright ? 0.9 : 0.4}
          filter={p.bright ? "url(#whale-glow)" : undefined}
          style={
            p.bright && animate
              ? { animation: `biopulse ${3 + (p.i % 3)}s ease-in-out infinite ${p.i * 0.3}s` }
              : undefined
          }
        />
      ))}
    </svg>
  );
}
