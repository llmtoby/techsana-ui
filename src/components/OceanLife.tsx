/* Ocean life — decorative SVG creatures at different depths. */

function Ship({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 100" fill="none" stroke="#3FD0FF" strokeWidth="1.5" style={style}>
      {/* Hull */}
      <path d="M25 60 L12 82 L188 82 L175 60 Z" fill="#3FD0FF" fillOpacity="0.08" />
      <path d="M25 60 L12 82 L188 82 L175 60" />
      {/* Deck house */}
      <rect x="45" y="38" width="110" height="22" rx="3" />
      <rect x="65" y="18" width="55" height="20" rx="3" />
      {/* Smoke stack */}
      <rect x="88" y="6" width="12" height="12" rx="1" fill="#3FD0FF" fillOpacity="0.06" />
      <rect x="88" y="6" width="12" height="12" rx="1" />
      {/* Smoke puffs */}
      <circle cx="100" cy="3" r="4" strokeOpacity="0.3" />
      <circle cx="108" cy="-2" r="5" strokeOpacity="0.2" />
      <circle cx="115" cy="-5" r="3.5" strokeOpacity="0.12" />
      {/* Mast */}
      <line x1="140" y1="8" x2="140" y2="38" />
      <path d="M140 8 L158 14 L140 20" fill="#3FD0FF" fillOpacity="0.06" />
      {/* Portholes */}
      {[45, 62, 79, 96, 113, 130, 147].map((x) => (
        <g key={x}>
          <circle cx={x} cy="70" r="3.5" />
          <circle cx={x} cy="70" r="1.8" fill="#3FD0FF" fillOpacity="0.12" />
        </g>
      ))}
      {/* Railing */}
      <line x1="30" y1="57" x2="170" y2="57" strokeOpacity="0.25" />
      {[40, 55, 70, 85, 100, 115, 130, 145, 160].map((x) => (
        <line key={x} x1={x} y1="57" x2={x} y2="60" strokeOpacity="0.2" />
      ))}
      {/* Water line */}
      <path d="M0 88 Q25 82 50 88 Q75 94 100 88 Q125 82 150 88 Q175 94 200 88" strokeOpacity="0.15" />
      {/* Anchor chain */}
      <path d="M30 82 L28 95" strokeOpacity="0.2" strokeDasharray="2 2" />
    </svg>
  );
}

function Submarine({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 220 70" fill="none" stroke="#3FD0FF" strokeWidth="1.2" style={style}>
      {/* Body */}
      <ellipse cx="110" cy="40" rx="95" ry="22" fill="#3FD0FF" fillOpacity="0.06" />
      <ellipse cx="110" cy="40" rx="95" ry="22" />
      {/* Conning tower */}
      <path d="M90 18 L90 14 Q102 8 114 14 L114 18" fill="#3FD0FF" fillOpacity="0.04" />
      <path d="M90 18 L90 14 Q102 8 114 14 L114 18" />
      {/* Periscope */}
      <line x1="98" y1="2" x2="98" y2="14" />
      <path d="M94 2 L98 2 L98 6" />
      {/* Antenna */}
      <line x1="108" y1="6" x2="108" y2="14" />
      <circle cx="108" cy="5" r="1.5" fill="#3FD0FF" fillOpacity="0.2" />
      {/* Windows */}
      {[45, 65, 85, 110, 135, 155, 175].map((x) => (
        <g key={x}>
          <circle cx={x} cy="40" r="5" strokeOpacity="0.6" />
          <circle cx={x} cy="40" r="2.5" fill="#3FD0FF" fillOpacity="0.1" />
        </g>
      ))}
      {/* Propeller */}
      <circle cx="208" cy="40" r="3" fill="#3FD0FF" fillOpacity="0.15" />
      <path d="M208 30 C215 36 215 44 208 50" strokeOpacity="0.4" />
      <path d="M208 30 C201 36 201 44 208 50" strokeOpacity="0.4" />
      {/* Rivets line */}
      <line x1="25" y1="40" x2="195" y2="40" strokeOpacity="0.08" strokeDasharray="1 8" />
      {/* Bubbles */}
      <circle cx="212" cy="30" r="2.5" strokeOpacity="0.25" />
      <circle cx="216" cy="25" r="1.8" strokeOpacity="0.18" />
      <circle cx="214" cy="20" r="1.2" strokeOpacity="0.12" />
      {/* Depth fins */}
      <path d="M18 35 L8 30 L8 50 L18 45" strokeOpacity="0.4" />
    </svg>
  );
}

function FishSchool({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 50" fill="none" stroke="#3FD0FF" strokeWidth="0.8" style={style}>
      {[
        [10, 20, 1.1], [22, 12, 0.9], [20, 30, 1], [35, 22, 1.2],
        [38, 8, 0.7], [34, 36, 0.9], [50, 18, 1.1], [48, 32, 0.8],
        [62, 24, 1], [64, 10, 0.7], [60, 38, 0.9], [75, 20, 1],
        [78, 34, 0.8], [88, 26, 0.9], [85, 14, 0.7],
      ].map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x},${y}) scale(${s})`}>
          <path d="M0 0 L12 -3.5 L12 3.5 Z" fill="#3FD0FF" fillOpacity="0.12" />
          <path d="M0 0 L12 -3.5 L12 3.5 Z" />
          <path d="M-2 0 L-5 -3 M-2 0 L-5 3" strokeOpacity="0.4" />
          <circle cx="10" cy="-0.5" r="0.8" fill="#3FD0FF" fillOpacity="0.35" />
        </g>
      ))}
    </svg>
  );
}

function BigFish({ style, flip = false }: { style?: React.CSSProperties; flip?: boolean }) {
  const s = { ...style, ...(flip ? { transform: `${style?.transform || ""} scaleX(-1)`.trim() } : {}) };
  return (
    <svg viewBox="0 0 120 55" fill="none" stroke="#3FD0FF" strokeWidth="1.2" style={s}>
      {/* Body */}
      <path d="M15 27 C20 12 40 5 65 9 C82 12 100 19 108 27 C100 35 82 42 65 45 C40 49 20 42 15 27Z" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M15 27 C20 12 40 5 65 9 C82 12 100 19 108 27 C100 35 82 42 65 45 C40 49 20 42 15 27Z" />
      {/* Tail */}
      <path d="M15 27 L2 14 L8 27 L2 40 Z" fill="#3FD0FF" fillOpacity="0.05" />
      <path d="M15 27 L2 14 L8 27 L2 40 Z" />
      {/* Eye */}
      <circle cx="90" cy="24" r="4.5" />
      <circle cx="91.5" cy="22.5" r="2" fill="#3FD0FF" fillOpacity="0.25" />
      {/* Dorsal fin */}
      <path d="M50 9 C54 -2 62 1 58 11" fill="#3FD0FF" fillOpacity="0.04" />
      <path d="M50 9 C54 -2 62 1 58 11" />
      {/* Pectoral fin */}
      <path d="M72 36 C78 45 85 43 80 36" strokeOpacity="0.5" />
      {/* Gill line */}
      <path d="M80 18 C77 27 80 36 83 36" strokeOpacity="0.3" />
      {/* Bottom fin */}
      <path d="M45 45 C48 52 55 52 52 45" strokeOpacity="0.4" />
      {/* Scales hint */}
      <path d="M35 22 Q40 20 45 22 Q50 24 55 22" strokeOpacity="0.1" />
      <path d="M35 32 Q40 30 45 32 Q50 34 55 32" strokeOpacity="0.1" />
    </svg>
  );
}

function Jellyfish({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 100" fill="none" stroke="#3FD0FF" strokeWidth="0.8" style={style}>
      {/* Bell */}
      <path d="M5 42 C5 14 55 14 55 42" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M5 42 C5 14 55 14 55 42" />
      {/* Inner bell detail */}
      <path d="M14 36 C14 22 46 22 46 36" strokeOpacity="0.25" />
      {/* Bell rim scallop */}
      <path d="M5 42 Q10 46 15 42 Q20 38 25 42 Q30 46 35 42 Q40 38 45 42 Q50 46 55 42" strokeOpacity="0.35" />
      {/* Oral arms */}
      <path d="M20 42 C18 55 22 65 19 78 C17 85 20 92 18 98" strokeOpacity="0.35" />
      <path d="M30 42 C28 58 32 68 29 82 C27 90 31 95 30 100" strokeOpacity="0.4" />
      <path d="M40 42 C42 55 38 65 41 78 C43 85 40 92 42 98" strokeOpacity="0.35" />
      {/* Thin tentacles */}
      <path d="M12 42 C10 56 14 70 11 88" strokeOpacity="0.2" strokeWidth="0.5" />
      <path d="M48 42 C50 56 46 70 49 88" strokeOpacity="0.2" strokeWidth="0.5" />
      {/* Inner glow */}
      <ellipse cx="30" cy="30" rx="10" ry="7" fill="#3FD0FF" fillOpacity="0.04" />
    </svg>
  );
}

function Dolphin({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 160 70" fill="none" stroke="#3FD0FF" strokeWidth="1.2" style={style}>
      {/* Body */}
      <path d="M18 40 C24 22 52 12 85 16 C108 19 135 28 148 35 C135 42 108 51 85 54 C52 58 24 52 18 40Z" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M18 40 C24 22 52 12 85 16 C108 19 135 28 148 35 C135 42 108 51 85 54 C52 58 24 52 18 40Z" />
      {/* Beak */}
      <path d="M148 35 L160 32 L155 37" />
      {/* Mouth line */}
      <path d="M148 35 C145 38 140 40 135 39" strokeOpacity="0.3" />
      {/* Eye */}
      <circle cx="132" cy="32" r="3" />
      <circle cx="133.5" cy="31" r="1.2" fill="#3FD0FF" fillOpacity="0.3" />
      {/* Dorsal fin */}
      <path d="M78 16 C82 2 92 5 88 16" fill="#3FD0FF" fillOpacity="0.05" />
      <path d="M78 16 C82 2 92 5 88 16" />
      {/* Tail */}
      <path d="M18 40 L4 28 L10 40 L4 52 Z" fill="#3FD0FF" fillOpacity="0.04" />
      <path d="M18 40 L4 28 L10 40 L4 52 Z" />
      {/* Pectoral fin */}
      <path d="M110 44 C116 55 124 52 118 45" strokeOpacity="0.5" />
      {/* Belly line */}
      <path d="M40 46 C60 50 100 48 130 40" strokeOpacity="0.12" />
    </svg>
  );
}

function SeaTurtle({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 130 85" fill="none" stroke="#3FD0FF" strokeWidth="1" style={style}>
      {/* Shell */}
      <ellipse cx="55" cy="42" rx="32" ry="24" fill="#3FD0FF" fillOpacity="0.05" />
      <ellipse cx="55" cy="42" rx="32" ry="24" />
      {/* Shell pattern */}
      <path d="M35 28 L55 22 L75 28" strokeOpacity="0.25" />
      <path d="M30 42 L55 36 L80 42" strokeOpacity="0.2" />
      <path d="M35 56 L55 50 L75 56" strokeOpacity="0.25" />
      <path d="M55 22 L55 62" strokeOpacity="0.12" />
      {/* Head */}
      <ellipse cx="98" cy="40" rx="14" ry="9" />
      <circle cx="104" cy="37" r="2.5" />
      <circle cx="105" cy="36" r="1" fill="#3FD0FF" fillOpacity="0.25" />
      {/* Flippers */}
      <path d="M70 24 C84 12 96 16 90 24" fill="#3FD0FF" fillOpacity="0.03" />
      <path d="M70 24 C84 12 96 16 90 24" />
      <path d="M70 60 C84 72 96 68 90 60" fill="#3FD0FF" fillOpacity="0.03" />
      <path d="M70 60 C84 72 96 68 90 60" />
      <path d="M38 24 C24 12 12 20 22 28" />
      <path d="M38 60 C24 72 12 64 22 56" />
      {/* Tail */}
      <path d="M23 42 L14 44" strokeOpacity="0.4" />
    </svg>
  );
}

function Stingray({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 150 95" fill="none" stroke="#3FD0FF" strokeWidth="1" style={style}>
      {/* Body — wide diamond */}
      <path d="M75 8 C100 20 145 48 75 62 C5 48 50 20 75 8Z" fill="#3FD0FF" fillOpacity="0.05" />
      <path d="M75 8 C100 20 145 48 75 62 C5 48 50 20 75 8Z" />
      {/* Tail */}
      <path d="M75 62 C72 74 78 82 70 95" />
      <path d="M72 80 L68 78" strokeOpacity="0.4" />
      {/* Eyes */}
      <circle cx="62" cy="32" r="2.5" fill="#3FD0FF" fillOpacity="0.15" />
      <circle cx="88" cy="32" r="2.5" fill="#3FD0FF" fillOpacity="0.15" />
      {/* Gill slits */}
      <path d="M65 45 L60 50" strokeOpacity="0.2" />
      <path d="M70 46 L65 52" strokeOpacity="0.2" />
      <path d="M85 45 L90 50" strokeOpacity="0.2" />
      <path d="M80 46 L85 52" strokeOpacity="0.2" />
      {/* Wing pattern */}
      <path d="M30 35 C50 42 65 46 75 48" strokeOpacity="0.12" />
      <path d="M120 35 C100 42 85 46 75 48" strokeOpacity="0.12" />
    </svg>
  );
}

function Anglerfish({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 110 85" fill="none" stroke="#3FD0FF" strokeWidth="1" style={style}>
      {/* Body */}
      <ellipse cx="52" cy="50" rx="38" ry="28" fill="#3FD0FF" fillOpacity="0.05" />
      <ellipse cx="52" cy="50" rx="38" ry="28" />
      {/* Big mouth — jagged teeth */}
      <path d="M90 42 L100 44 L97 48 L104 50 L96 53 L102 56 L90 58" strokeOpacity="0.5" />
      <path d="M90 42 L90 58" strokeOpacity="0.3" />
      {/* Eye — large, glowing */}
      <circle cx="72" cy="38" r="7" />
      <circle cx="74" cy="36" r="3" fill="#3FD0FF" fillOpacity="0.15" />
      <circle cx="75" cy="35" r="1.2" fill="#3FD0FF" fillOpacity="0.3" />
      {/* Lure — bioluminescent antenna */}
      <path d="M65 22 C62 12 58 5 60 0" strokeWidth="0.8" />
      <circle cx="60" cy="0" r="5" fill="#3FD0FF" fillOpacity="0.1" stroke="#3FD0FF" strokeOpacity="0.5">
        <animate attributeName="fillOpacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="0" r="2" fill="#3FD0FF" fillOpacity="0.2">
        <animate attributeName="fillOpacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* Fins */}
      <path d="M20 35 C10 28 8 40 16 42" strokeOpacity="0.4" />
      <path d="M35 74 C30 84 40 86 42 76" strokeOpacity="0.4" />
      <path d="M65 74 C68 84 60 86 58 76" strokeOpacity="0.4" />
      {/* Tail */}
      <path d="M14 50 L2 38 L8 50 L2 62 Z" strokeOpacity="0.4" fill="#3FD0FF" fillOpacity="0.03" />
      {/* Spots */}
      <circle cx="40" cy="42" r="2" strokeOpacity="0.15" />
      <circle cx="50" cy="58" r="1.5" strokeOpacity="0.12" />
      <circle cx="30" cy="55" r="1.8" strokeOpacity="0.1" />
    </svg>
  );
}

function Anchor({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 90" fill="none" stroke="#3FD0FF" strokeWidth="1.2" style={style}>
      {/* Ring */}
      <circle cx="30" cy="10" r="7" />
      {/* Shaft */}
      <line x1="30" y1="17" x2="30" y2="72" />
      {/* Cross bar */}
      <line x1="16" y1="32" x2="44" y2="32" />
      {/* Flukes */}
      <path d="M10 58 C10 75 30 82 30 72" />
      <path d="M50 58 C50 75 30 82 30 72" />
      {/* Arrow tips */}
      <path d="M8 58 L10 58 L10 52" strokeOpacity="0.5" />
      <path d="M52 58 L50 58 L50 52" strokeOpacity="0.5" />
      {/* Chain going up */}
      {[0, 6, 12].map((dy) => (
        <ellipse key={dy} cx="30" cy={-4 - dy} rx="2.5" ry="3.5" strokeOpacity={0.25 - dy * 0.01} strokeWidth="0.8" />
      ))}
    </svg>
  );
}

export default function OceanLife() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }} aria-hidden="true">

      {/* SURFACE — hero */}
      <Ship style={{ position: "absolute", top: 60, left: "5%", width: 400, opacity: 0.15 }} />
      <FishSchool style={{ position: "absolute", top: 600, right: "8%", width: 280, opacity: 0.14 }} />

      {/* SHALLOW — stats/services */}
      <Dolphin style={{ position: "absolute", top: 1000, right: "5%", width: 380, opacity: 0.13, transform: "rotate(-4deg)" }} />
      <Jellyfish style={{ position: "absolute", top: 1350, left: "6%", width: 120, opacity: 0.12 }} />
      <FishSchool style={{ position: "absolute", top: 1600, left: "55%", width: 240, opacity: 0.1 }} />

      {/* MID — services/solutions */}
      <SeaTurtle style={{ position: "absolute", top: 1900, right: "4%", width: 320, opacity: 0.12, transform: "rotate(6deg)" }} />
      <BigFish style={{ position: "absolute", top: 2200, left: "3%", width: 280, opacity: 0.12 }} />

      {/* DEEP — solutions/stack */}
      <Submarine style={{ position: "absolute", top: 2700, left: "3%", width: 500, opacity: 0.1, transform: "rotate(2deg)" }} />
      <Jellyfish style={{ position: "absolute", top: 2950, right: "5%", width: 100, opacity: 0.1 }} />
      <FishSchool style={{ position: "absolute", top: 3050, right: "20%", width: 200, opacity: 0.08 }} />

      {/* ABYSS — process */}
      <Stingray style={{ position: "absolute", top: 3300, right: "8%", width: 300, opacity: 0.1, transform: "rotate(-4deg)" }} />
      <BigFish style={{ position: "absolute", top: 3550, left: "20%", width: 220, opacity: 0.08 }} flip />

      {/* DEEP ABYSS — CTA */}
      <Anglerfish style={{ position: "absolute", top: 3800, right: "8%", width: 280, opacity: 0.12 }} />
      <Ship style={{ position: "absolute", top: 4000, left: "35%", width: 300, opacity: 0.07, transform: "rotate(18deg)" }} />

      {/* BOTTOM — footer */}
      <Submarine style={{ position: "absolute", top: 4250, right: "3%", width: 400, opacity: 0.07, transform: "scaleX(-1)" }} />
      <Anchor style={{ position: "absolute", top: 4350, left: "18%", width: 100, opacity: 0.09 }} />
    </div>
  );
}
