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
            #0F5C8A 0%,
            #0C4A6E 3%,
            #0A3D5E 7%,
            #093550 12%,
            #082D48 18%,
            #072640 25%,
            #061F35 33%,
            #061A2B 42%,
            #051624 55%,
            #041220 68%,
            #030E1A 80%,
            #030B15 90%,
            #020911 100%
          )`,
        }}
      />

      {/* Water surface — bright caustic shimmer at top */}
      <div
        className="absolute top-0 left-0 w-full h-[600px]"
        style={{
          background: `
            radial-gradient(ellipse 50% 30% at 40% 0%, rgba(63, 208, 255, 0.15), transparent),
            radial-gradient(ellipse 35% 25% at 70% 2%, rgba(100, 220, 255, 0.12), transparent),
            radial-gradient(ellipse 25% 20% at 20% 5%, rgba(63, 208, 255, 0.08), transparent),
            radial-gradient(ellipse 60% 15% at 50% 0%, rgba(176, 234, 255, 0.06), transparent)
          `,
        }}
      />

      {/* Light rays — cone shapes from surface penetrating downward */}
      <div className="absolute top-0 left-0 w-full h-[900px] overflow-hidden">
        <div
          className="absolute -top-[5%] left-[30%] w-[250px] h-[110%] origin-top rotate-[4deg]"
          style={{
            background: "linear-gradient(180deg, rgba(63,208,255,0.1) 0%, rgba(63,208,255,0.03) 30%, rgba(63,208,255,0.005) 55%, transparent 70%)",
            animation: "lightray 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -top-[3%] left-[12%] w-[140px] h-[95%] origin-top rotate-[14deg]"
          style={{
            background: "linear-gradient(180deg, rgba(63,208,255,0.07) 0%, rgba(63,208,255,0.02) 35%, transparent 60%)",
            animation: "lightray 10s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute -top-[8%] left-[52%] w-[180px] h-[105%] origin-top -rotate-[6deg]"
          style={{
            background: "linear-gradient(180deg, rgba(100,220,255,0.08) 0%, rgba(63,208,255,0.02) 30%, transparent 55%)",
            animation: "lightray 12s ease-in-out infinite 4s",
          }}
        />
        <div
          className="absolute -top-[2%] left-[72%] w-[100px] h-[85%] origin-top rotate-[20deg]"
          style={{
            background: "linear-gradient(180deg, rgba(63,208,255,0.05) 0%, rgba(63,208,255,0.01) 35%, transparent 50%)",
            animation: "lightray 9s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute -top-[4%] left-[3%] w-[110px] h-[80%] origin-top rotate-[25deg]"
          style={{
            background: "linear-gradient(180deg, rgba(63,208,255,0.04) 0%, transparent 45%)",
            animation: "lightray 11s ease-in-out infinite 3s",
          }}
        />
        {/* Wide ambient ray */}
        <div
          className="absolute -top-[5%] left-[40%] w-[400px] h-[100%] origin-top rotate-[2deg]"
          style={{
            background: "linear-gradient(180deg, rgba(63,208,255,0.03) 0%, transparent 40%)",
            animation: "lightray 15s ease-in-out infinite 5s",
          }}
        />
      </div>

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
