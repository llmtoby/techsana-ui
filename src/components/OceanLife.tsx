"use client";

/* Ocean life — decorative SVG creatures at different depths. */

/* Helper: merges drift animation into the existing style */
function drift(
  base: React.CSSProperties,
  range: number,
  duration: number,
  direction: "right" | "left" = "right"
): React.CSSProperties {
  const name = `drift-${direction}-${range}`;
  return {
    ...base,
    animation: `${name} ${duration}s ease-in-out infinite alternate`,
    ["--drift-name" as string]: name,
  };
}

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

function TitanicWreck({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 700 280" fill="none" stroke="#3FD0FF" strokeWidth="1.2" style={style}>
      {/* ============================================= */}
      {/* BOW SECTION — relatively intact, nose tilted into seabed */}
      {/* ============================================= */}
      <g transform="rotate(6, 140, 180)">
        {/* Main hull — elegant Titanic bow shape */}
        <path
          d="M6 130 C6 125 8 118 14 112 L28 100 C40 92 55 86 75 82 L240 74 L240 170 L20 158 C12 154 8 148 6 140 Z"
          fill="#3FD0FF" fillOpacity="0.04" strokeOpacity="0.4"
        />
        {/* Keel line */}
        <path d="M6 135 L240 122" strokeOpacity="0.12" />
        {/* Sharp bow stem — iconic Titanic feature */}
        <path d="M6 130 L2 110 C4 100 10 90 20 82" strokeOpacity="0.5" strokeWidth="1.5" />
        {/* Bow flare curves */}
        <path d="M14 112 C18 106 26 98 40 92" strokeOpacity="0.3" />
        <path d="M10 142 C14 150 22 156 35 158" strokeOpacity="0.25" />

        {/* Forecastle deck */}
        <path d="M28 94 L130 82 L130 78 L32 90 Z" fill="#3FD0FF" fillOpacity="0.03" strokeOpacity="0.25" />
        {/* Forecastle railing — damaged */}
        <line x1="32" y1="90" x2="90" y2="84" strokeOpacity="0.2" strokeDasharray="3 4" />
        {[38, 50, 62, 74, 86].map((x) => (
          <line key={x} x1={x} y1={91 - (x-32)*0.1} x2={x} y2={88 - (x-32)*0.1} strokeOpacity="0.12" />
        ))}

        {/* Well deck dip */}
        <path d="M130 82 L130 86 L155 84 L155 80" strokeOpacity="0.2" />

        {/* Bridge / Officers quarters */}
        <path d="M155 78 L155 62 C157 58 160 56 165 55 L215 52 C220 52 222 54 222 58 L222 72 L155 78" fill="#3FD0FF" fillOpacity="0.03" strokeOpacity="0.3" />
        {/* Bridge windows */}
        {[165, 175, 185, 195, 205, 215].map((x) => (
          <rect key={x} x={x} y="58" width="4" height="5" rx="0.5" strokeOpacity="0.2" fill="#3FD0FF" fillOpacity="0.04" />
        ))}
        {/* Wheelhouse on top */}
        <path d="M175 52 L175 46 L205 44 L205 52" strokeOpacity="0.2" fill="#3FD0FF" fillOpacity="0.02" />

        {/* Forward mast — bent/broken */}
        <line x1="135" y1="78" x2="132" y2="30" strokeOpacity="0.25" />
        <line x1="132" y1="30" x2="128" y2="18" strokeOpacity="0.12" strokeDasharray="2 3" />
        {/* Crow's nest */}
        <rect x="130" y="38" width="5" height="4" rx="0.5" strokeOpacity="0.15" />
        {/* Rigging remnants */}
        <path d="M132 30 L155 62" strokeOpacity="0.06" strokeDasharray="2 4" />
        <path d="M132 30 L110 82" strokeOpacity="0.06" strokeDasharray="2 4" />

        {/* Boat deck — davits (lifeboat cranes) still visible */}
        {[160, 172, 184, 196, 208].map((x) => (
          <path key={x} d={`M${x} 72 C${x-1} 68 ${x+3} 66 ${x+4} 70`} strokeOpacity="0.12" />
        ))}

        {/* 4 rows of portholes along hull */}
        {[60, 80, 100, 120, 140, 160, 180, 200, 220].map((x) => (
          <g key={x}>
            <circle cx={x} cy={108 - (x-60)*0.02} r="1.8" strokeOpacity="0.18" fill="#3FD0FF" fillOpacity="0.03" />
            <circle cx={x} cy={130 - (x-60)*0.02} r="1.8" strokeOpacity="0.14" fill="#3FD0FF" fillOpacity="0.02" />
          </g>
        ))}

        {/* Deck promenade windows */}
        {[160, 168, 176, 184, 192, 200, 208, 216].map((x) => (
          <rect key={`w${x}`} x={x} y="88" width="3.5" height="4" rx="0.5" strokeOpacity="0.12" />
        ))}

        {/* Anchor and hawse pipe */}
        <circle cx="22" cy="120" r="3" strokeOpacity="0.2" />
        <path d="M22 123 L22 130 M18 128 C18 134 26 134 26 128" strokeOpacity="0.15" />
        <path d="M22 134 L22 155" strokeOpacity="0.1" strokeDasharray="1.5 2" />

        {/* Jagged break edge */}
        <path d="M238 72 L242 68 L240 64 L244 60 L238 58" strokeOpacity="0.3" strokeWidth="0.8" />
        <path d="M240 170 L244 174 L240 178 L245 180 L238 184" strokeOpacity="0.25" strokeWidth="0.8" />
        <path d="M239 90 L244 88 L241 82" strokeOpacity="0.15" />
        <path d="M239 150 L243 154 L240 160" strokeOpacity="0.15" />
      </g>

      {/* ============================================= */}
      {/* STERN SECTION — more damaged/collapsed, tilted opposite way */}
      {/* ============================================= */}
      <g transform="rotate(-4, 470, 160)">
        {/* Main hull */}
        <path
          d="M290 78 L290 175 L630 182 C642 180 652 172 658 160 L658 130 C656 116 648 106 636 100 L430 82 Z"
          fill="#3FD0FF" fillOpacity="0.035" strokeOpacity="0.35"
        />
        {/* Keel */}
        <path d="M290 126 L650 145" strokeOpacity="0.1" />

        {/* Stern — elegant rounded Titanic counter stern */}
        <path d="M636 100 C648 106 656 116 658 130 C658 145 655 158 648 168 C642 176 636 180 630 182" strokeOpacity="0.4" strokeWidth="1.4" />
        {/* Stern gallery windows */}
        <path d="M640 115 C648 120 650 135 648 150" strokeOpacity="0.2" />
        {[122, 130, 138, 146].map((y) => (
          <rect key={y} x="642" y={y} width="4" height="3" rx="0.5" strokeOpacity="0.12" />
        ))}

        {/* Superstructure — partially collapsed */}
        {/* A-deck housing */}
        <path d="M310 76 L310 58 L540 50 L540 72 Z" fill="#3FD0FF" fillOpacity="0.025" strokeOpacity="0.2" />
        {/* B-deck — more damaged, sagging lines */}
        <path d="M340 56 L340 42 L500 36 L510 38 L510 50" strokeOpacity="0.18" fill="#3FD0FF" fillOpacity="0.02" />

        {/* Four iconic funnels — the Titanic signature */}
        {/* Funnel 1 — missing (fell during sinking) just show base */}
        <rect x="330" y="38" width="18" height="4" rx="1" strokeOpacity="0.1" fill="#3FD0FF" fillOpacity="0.02" />

        {/* Funnel 2 — broken, leaning */}
        <g transform="rotate(15, 380, 38)">
          <path d="M372 38 L372 12 C374 8 378 6 382 6 L388 6 C392 6 396 8 398 12 L398 38" strokeOpacity="0.2" fill="#3FD0FF" fillOpacity="0.025" />
          {/* Funnel band */}
          <line x1="372" y1="22" x2="398" y2="22" strokeOpacity="0.12" />
          <line x1="372" y1="18" x2="398" y2="18" strokeOpacity="0.12" />
          {/* Smoke rim */}
          <ellipse cx="385" cy="6" rx="14" ry="3" strokeOpacity="0.15" />
        </g>

        {/* Funnel 3 — more intact but tilted */}
        <g transform="rotate(8, 435, 36)">
          <path d="M427 36 L427 8 C429 4 433 2 437 2 L443 2 C447 2 451 4 453 8 L453 36" strokeOpacity="0.22" fill="#3FD0FF" fillOpacity="0.03" />
          <line x1="427" y1="18" x2="453" y2="18" strokeOpacity="0.12" />
          <line x1="427" y1="14" x2="453" y2="14" strokeOpacity="0.12" />
          <ellipse cx="440" cy="2" rx="14" ry="3" strokeOpacity="0.15" />
          {/* Guy wires — snapped */}
          <path d="M437 8 L410 50" strokeOpacity="0.06" strokeDasharray="3 4" />
          <path d="M443 8 L465 50" strokeOpacity="0.06" strokeDasharray="3 4" />
        </g>

        {/* Funnel 4 — dummy funnel, mostly gone */}
        <path d="M488 36 L490 28 L502 28 L504 36" strokeOpacity="0.1" strokeDasharray="2 3" />

        {/* Aft mast — broken off */}
        <line x1="560" y1="72" x2="558" y2="40" strokeOpacity="0.18" />
        <path d="M558 40 L554 30" strokeOpacity="0.08" strokeDasharray="2 3" />

        {/* Boat deck davits */}
        {[320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 520].map((x) => (
          <path key={x} d={`M${x} 72 C${x-1} 68 ${x+2} 66 ${x+3} 70`} strokeOpacity="0.08" />
        ))}

        {/* Promenade deck windows — many broken */}
        {[310, 320, 330, 345, 360, 375, 390, 410, 430, 450, 470, 490, 510, 530].map((x, i) => (
          <rect key={`pw${x}`} x={x} y="84" width="4" height="5" rx="0.5" strokeOpacity={i % 3 === 0 ? 0.06 : 0.12} strokeDasharray={i % 3 === 0 ? "1 2" : "none"} />
        ))}

        {/* Hull portholes */}
        {[310, 335, 360, 385, 410, 435, 460, 485, 510, 535, 560, 585, 610].map((x) => (
          <g key={`p${x}`}>
            <circle cx={x} cy="115" r="1.8" strokeOpacity="0.15" fill="#3FD0FF" fillOpacity="0.02" />
            <circle cx={x} cy="140" r="1.8" strokeOpacity="0.12" fill="#3FD0FF" fillOpacity="0.02" />
          </g>
        ))}

        {/* Propellers — partially visible */}
        <g transform="translate(650, 155)">
          {/* Port propeller */}
          <circle cx="0" cy="0" r="3" strokeOpacity="0.2" fill="#3FD0FF" fillOpacity="0.04" />
          <path d="M0 -14 C8 -8 8 8 0 14" strokeOpacity="0.18" />
          <path d="M0 -14 C-8 -8 -8 8 0 14" strokeOpacity="0.18" />
          <path d="M-12 -6 C-6 -10 6 -10 12 -6" strokeOpacity="0.15" />
          <path d="M-12 6 C-6 10 6 10 12 6" strokeOpacity="0.15" />
        </g>
        {/* Rudder */}
        <path d="M656 135 L665 128 L665 168 L656 175" strokeOpacity="0.15" fill="#3FD0FF" fillOpacity="0.02" />

        {/* Jagged break edge at bow-side */}
        <path d="M292 78 L288 74 L292 68 L286 64 L292 60" strokeOpacity="0.25" strokeWidth="0.8" />
        <path d="M290 170 L286 174 L290 180 L284 184" strokeOpacity="0.2" strokeWidth="0.8" />
      </g>

      {/* ============================================= */}
      {/* DEBRIS FIELD — between the two halves */}
      {/* ============================================= */}
      {/* Fallen funnel #1 lying on seabed */}
      <g transform="rotate(85, 265, 220)">
        <path d="M250 220 L250 195 C252 191 256 189 260 189 L266 189 C270 189 274 191 276 195 L276 220" strokeOpacity="0.1" fill="#3FD0FF" fillOpacity="0.02" />
      </g>
      {/* Hull plates scattered */}
      <path d="M255 230 L268 228 L270 234 L256 236 Z" strokeOpacity="0.06" fill="#3FD0FF" fillOpacity="0.01" transform="rotate(20, 262, 232)" />
      <path d="M275 235 L285 232 L287 237 L276 239 Z" strokeOpacity="0.05" fill="#3FD0FF" fillOpacity="0.01" transform="rotate(-12, 280, 235)" />
      <path d="M248 238 L258 240 L256 244 L247 242 Z" strokeOpacity="0.05" transform="rotate(35, 252, 241)" />
      {/* Coal scattered */}
      {[252, 260, 268, 273, 280, 258, 264, 276].map((x, i) => (
        <circle key={`c${i}`} cx={x} cy={240 + (i % 3) * 3} r={0.8 + (i % 2) * 0.4} strokeOpacity="0.04" fill="#3FD0FF" fillOpacity="0.02" />
      ))}
      {/* Broken railing piece */}
      <path d="M245 226 L252 224 L254 228" strokeOpacity="0.06" />
      {/* Rivet lines on debris */}
      <path d="M260 232 L266 231" strokeOpacity="0.04" strokeDasharray="0.8 1.5" />

      {/* ============================================= */}
      {/* SEABED */}
      {/* ============================================= */}
      <path d="M0 250 Q40 245 80 250 Q120 255 160 248 Q200 242 240 250 Q280 258 320 250 Q360 243 400 250 Q440 257 480 250 Q520 244 560 250 Q600 256 640 250 Q670 245 700 248" strokeOpacity="0.08" />
      <path d="M0 260 Q70 256 140 260 Q210 264 280 260 Q350 256 420 260 Q490 264 560 260 Q630 256 700 260" strokeOpacity="0.05" />
      {/* Rust stains on seabed */}
      <ellipse cx="160" cy="252" rx="30" ry="4" fill="#3FD0FF" fillOpacity="0.015" strokeOpacity="0" />
      <ellipse cx="460" cy="255" rx="40" ry="5" fill="#3FD0FF" fillOpacity="0.012" strokeOpacity="0" />
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

      <style>{`
        @keyframes swim-r-60  { 0% { transform: translateX(-30px); } 100% { transform: translateX(30px); } }
        @keyframes swim-l-120 { 0% { transform: translateX(60px); }  100% { transform: translateX(-60px); } }
        @keyframes swim-r-150 { 0% { transform: translateX(-75px) rotate(-4deg); } 100% { transform: translateX(75px) rotate(-4deg); } }
        @keyframes swim-l-40  { 0% { transform: translateX(20px); }  100% { transform: translateX(-20px); } }
        @keyframes swim-r-100 { 0% { transform: translateX(-50px); } 100% { transform: translateX(50px); } }
        @keyframes swim-r-80  { 0% { transform: translateX(-40px) rotate(6deg); } 100% { transform: translateX(40px) rotate(6deg); } }
        @keyframes swim-l-130 { 0% { transform: translateX(65px); }  100% { transform: translateX(-65px); } }
        @keyframes swim-r-70  { 0% { transform: translateX(-35px) rotate(2deg); } 100% { transform: translateX(35px) rotate(2deg); } }
        @keyframes swim-l-30  { 0% { transform: translateX(15px); }  100% { transform: translateX(-15px); } }
        @keyframes swim-r-90  { 0% { transform: translateX(-45px); } 100% { transform: translateX(45px); } }
        @keyframes swim-l-100 { 0% { transform: translateX(50px) rotate(-4deg); }  100% { transform: translateX(-50px) rotate(-4deg); } }
        @keyframes swim-r-110 { 0% { transform: translateX(-55px); } 100% { transform: translateX(55px); } }
        @keyframes swim-l-60  { 0% { transform: translateX(30px); }  100% { transform: translateX(-30px); } }
        @keyframes swim-l-50  { 0% { transform: translateX(25px) scaleX(-1); }  100% { transform: translateX(-25px) scaleX(-1); } }
        @keyframes titanic-sink {
          0%   { top: -200px; opacity: 0; transform: rotate(12deg); }
          5%   { opacity: 0.12; }
          100% { top: 3850px; opacity: 0.12; transform: rotate(4deg); }
        }
      `}</style>

      {/* SURFACE — Titanic sinking from top to bottom */}
      <TitanicWreck style={{ position: "absolute", left: "5%", width: 800, opacity: 0, animation: "titanic-sink 120s linear infinite" }} />
      <FishSchool style={{ position: "absolute", top: 600, right: "8%", width: 280, opacity: 0.14, animation: "swim-l-120 12s ease-in-out infinite alternate" }} />

      {/* SHALLOW — stats/services */}
      <Dolphin style={{ position: "absolute", top: 1000, right: "5%", width: 380, opacity: 0.13, animation: "swim-r-150 18s ease-in-out infinite alternate" }} />
      <Jellyfish style={{ position: "absolute", top: 1350, left: "6%", width: 120, opacity: 0.12, animation: "swim-l-40 14s ease-in-out infinite alternate" }} />
      <FishSchool style={{ position: "absolute", top: 1600, left: "55%", width: 240, opacity: 0.1, animation: "swim-r-100 10s ease-in-out infinite alternate" }} />

      {/* MID — services/solutions */}
      <SeaTurtle style={{ position: "absolute", top: 1900, right: "4%", width: 320, opacity: 0.12, animation: "swim-r-80 22s ease-in-out infinite alternate" }} />
      <BigFish style={{ position: "absolute", top: 2200, left: "3%", width: 280, opacity: 0.12, animation: "swim-l-130 16s ease-in-out infinite alternate" }} />

      {/* DEEP — solutions/stack */}
      <Submarine style={{ position: "absolute", top: 2700, left: "3%", width: 500, opacity: 0.1, animation: "swim-r-70 25s ease-in-out infinite alternate" }} />
      <Jellyfish style={{ position: "absolute", top: 2950, right: "5%", width: 100, opacity: 0.1, animation: "swim-l-30 12s ease-in-out infinite alternate" }} />
      <FishSchool style={{ position: "absolute", top: 3050, right: "20%", width: 200, opacity: 0.08, animation: "swim-r-90 9s ease-in-out infinite alternate" }} />

      {/* ABYSS — process */}
      <Stingray style={{ position: "absolute", top: 3300, right: "8%", width: 300, opacity: 0.1, animation: "swim-l-100 20s ease-in-out infinite alternate" }} />
      <BigFish style={{ position: "absolute", top: 3550, left: "20%", width: 220, opacity: 0.08, animation: "swim-r-110 14s ease-in-out infinite alternate" }} flip />

      {/* DEEP ABYSS — CTA */}
      <Anglerfish style={{ position: "absolute", top: 3800, right: "8%", width: 280, opacity: 0.12, animation: "swim-l-60 18s ease-in-out infinite alternate" }} />

      {/* BOTTOM — footer */}
      <Submarine style={{ position: "absolute", top: 4250, right: "3%", width: 400, opacity: 0.07, animation: "swim-l-50 22s ease-in-out infinite alternate" }} />
      <Anchor style={{ position: "absolute", top: 4350, left: "18%", width: 100, opacity: 0.09 }} />
    </div>
  );
}
