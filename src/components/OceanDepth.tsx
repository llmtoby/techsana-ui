"use client";

/* Full-page ocean depth background — scrolls with content.
   Surface (top) → bright azure, sunlight penetrating water
   Mid-depth → deep blue, fading light
   Abyss (bottom) → near-black void

   Uses absolute positioning so the gradient scrolls with the page,
   creating a real depth transition as user scrolls down.
*/

export default function OceanDepth() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Main depth gradient — full page height */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            #0B4D4A 0%,
            #0B4F50 2%,
            #0C4E5A 5%,
            #0C4C64 8%,
            #0C4A6E 12%,
            #0A3D5E 18%,
            #093550 24%,
            #082D48 30%,
            #072640 38%,
            #061F35 46%,
            #061A2B 55%,
            #051624 65%,
            #041220 75%,
            #030E1A 85%,
            #030B15 93%,
            #020911 100%
          )`,
        }}
      />

      {/* Water surface — teal caustic shimmer at top */}
      <div
        className="absolute top-0 left-0 w-full h-[700px]"
        style={{
          background: `
            radial-gradient(ellipse 50% 30% at 40% 0%, rgba(63, 208, 220, 0.15), transparent),
            radial-gradient(ellipse 35% 25% at 70% 2%, rgba(63, 208, 255, 0.12), transparent),
            radial-gradient(ellipse 25% 20% at 20% 5%, rgba(63, 200, 230, 0.08), transparent),
            radial-gradient(ellipse 60% 15% at 50% 0%, rgba(176, 234, 255, 0.06), transparent)
          `,
        }}
      />

      {/* Sun light rays — soft blurred beams */}
      <svg
        className="absolute top-0 left-0 w-full h-[1200px] pointer-events-none"
        viewBox="0 0 1400 1200"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="ray-blur">
            <feGaussianBlur stdDeviation="18 0" />
          </filter>
          <filter id="ray-blur-wide">
            <feGaussianBlur stdDeviation="30 0" />
          </filter>
          <linearGradient id="ray-bright" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B0EAFF" stopOpacity="0.18" />
            <stop offset="12%" stopColor="#3FD0FF" stopOpacity="0.08" />
            <stop offset="40%" stopColor="#3FD0FF" stopOpacity="0.025" />
            <stop offset="70%" stopColor="#3FD0FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ray-medium" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B0EAFF" stopOpacity="0.12" />
            <stop offset="15%" stopColor="#3FD0FF" stopOpacity="0.05" />
            <stop offset="45%" stopColor="#3FD0FF" stopOpacity="0.015" />
            <stop offset="70%" stopColor="#3FD0FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ray-dim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B0EAFF" stopOpacity="0.07" />
            <stop offset="18%" stopColor="#3FD0FF" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#3FD0FF" stopOpacity="0.008" />
            <stop offset="70%" stopColor="#3FD0FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g filter="url(#ray-blur-wide)">
          <polygon points="380,-20 420,-20 520,1100 440,1100" fill="url(#ray-bright)" />
          <polygon points="580,-20 610,-20 640,1050 570,1050" fill="url(#ray-bright)" />
          <polygon points="680,-20 708,-20 720,1000 680,1000" fill="url(#ray-medium)" />
        </g>
        <g filter="url(#ray-blur)">
          <polygon points="800,-20 830,-20 780,1000 740,1000" fill="url(#ray-medium)" />
          <polygon points="140,-20 162,-20 280,950 240,950" fill="url(#ray-dim)" />
          <polygon points="950,-20 975,-20 880,900 850,900" fill="url(#ray-dim)" />
          <polygon points="490,-20 505,-20 530,850 510,850" fill="url(#ray-dim)" />
          <polygon points="1100,-20 1118,-20 1020,800 1000,800" fill="url(#ray-dim)" />
        </g>
      </svg>

      {/* Water surface ripple line — subtle horizontal highlight */}
      <div
        className="absolute top-0 left-0 w-full h-[3px]"
        style={{
          background: "linear-gradient(90deg, transparent 10%, rgba(176,234,255,0.15) 30%, rgba(63,208,255,0.2) 50%, rgba(176,234,255,0.15) 70%, transparent 90%)",
        }}
      />
    </div>
  );
}
