import { useTranslations } from "next-intl";

const keys = ["oil", "city", "chat"] as const;

/* Almaty mountain range skyline — Ile-Alatau silhouette */
function MountainSkyline() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-[220px] md:h-[300px] pointer-events-none"
      viewBox="0 0 1400 300"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 280 L60 220 L120 250 L200 180 L260 210 L320 150 L380 190 L440 120 L500 160 L560 90 L600 110 L660 60 L700 80 L740 45 L780 70 L820 55 L860 85 L920 100 L980 130 L1040 110 L1100 150 L1160 130 L1220 170 L1280 190 L1340 210 L1400 240 L1400 300 L0 300Z"
        fill="url(#mountain-far)" opacity="0.12"
      />
      <path
        d="M0 290 L80 260 L160 270 L240 230 L320 250 L400 200 L460 220 L520 170 L580 195 L640 145 L700 165 L740 130 L780 155 L840 175 L900 190 L960 210 L1040 195 L1100 220 L1180 240 L1260 250 L1340 265 L1400 270 L1400 300 L0 300Z"
        fill="url(#mountain-mid)" opacity="0.08"
      />
      <path d="M650 64 L660 60 L670 66" stroke="#DFF6FF" strokeWidth="1.5" strokeOpacity="0.15" strokeLinecap="round" />
      <path d="M730 49 L740 45 L750 50" stroke="#DFF6FF" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M810 59 L820 55 L830 60" stroke="#DFF6FF" strokeWidth="1.5" strokeOpacity="0.15" strokeLinecap="round" />
      <ellipse cx="700" cy="285" rx="500" ry="30" fill="#3FD0FF" opacity="0.03" />
      {[320, 420, 510, 580, 650, 720, 800, 870, 950, 1050].map((x, i) => (
        <circle key={i} cx={x} cy={272 + (i % 3) * 4} r={0.8 + (i % 2) * 0.5} fill="#3FD0FF" opacity={0.15 + (i % 3) * 0.08} />
      ))}
      <defs>
        <linearGradient id="mountain-far" x1="700" y1="45" x2="700" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3FD0FF" stopOpacity="0.6" />
          <stop offset="1" stopColor="#0A2E4A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mountain-mid" x1="700" y1="130" x2="700" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3FD0FF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#061A2B" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TvTower() {
  return (
    <svg
      className="absolute bottom-[180px] md:bottom-[240px] right-[15%] w-[30px] h-[100px] md:w-[40px] md:h-[140px] pointer-events-none"
      style={{ opacity: 0.07 }}
      viewBox="0 0 20 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="10" y1="0" x2="10" y2="80" stroke="#3FD0FF" strokeWidth="0.8" />
      <line x1="10" y1="0" x2="6" y2="12" stroke="#3FD0FF" strokeWidth="0.6" />
      <line x1="10" y1="0" x2="14" y2="12" stroke="#3FD0FF" strokeWidth="0.6" />
      <ellipse cx="10" cy="18" rx="4" ry="1.5" stroke="#3FD0FF" strokeWidth="0.5" />
      <ellipse cx="10" cy="28" rx="3" ry="1" stroke="#3FD0FF" strokeWidth="0.4" />
      <line x1="7" y1="40" x2="13" y2="40" stroke="#3FD0FF" strokeWidth="0.4" />
      <line x1="8" y1="55" x2="12" y2="55" stroke="#3FD0FF" strokeWidth="0.4" />
      <circle cx="10" cy="0" r="1.2" fill="#3FD0FF" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* Large frameless card illustrations */
function OilIllustration() {
  return (
    <svg viewBox="0 0 140 110" fill="none" className="w-28 h-22 mb-3">
      {/* Derrick tower */}
      <path d="M50 95 L60 15 L70 15 L80 95" stroke="#3FD0FF" strokeWidth="1.5" />
      <line x1="55" y1="35" x2="75" y2="35" stroke="#3FD0FF" strokeWidth="1" />
      <line x1="53" y1="55" x2="77" y2="55" stroke="#3FD0FF" strokeWidth="1" />
      <line x1="51" y1="75" x2="79" y2="75" stroke="#3FD0FF" strokeWidth="1" />
      {/* Cross braces */}
      <line x1="56" y1="35" x2="76" y2="55" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="76" y1="35" x2="56" y2="55" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="54" y1="55" x2="78" y2="75" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="78" y1="55" x2="54" y2="75" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      {/* Crown block */}
      <rect x="58" y="10" width="14" height="8" rx="2" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.08" />
      <circle cx="65" cy="8" r="2" fill="#3FD0FF" fillOpacity="0.25" />
      {/* Pump jack arm */}
      <path d="M80 75 L110 60 L120 65 L115 72" stroke="#3FD0FF" strokeWidth="1.2" />
      <circle cx="120" cy="65" r="4" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.06" />
      {/* Pipeline */}
      <path d="M48 95 L10 95 L10 100 L130 100 L130 95" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.3" />
      {/* Data overlay — chart line */}
      <path d="M95 30 L102 22 L110 28 L118 15 L126 20" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="2 2" />
      <circle cx="118" cy="15" r="2.5" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" fill="#3FD0FF" fillOpacity="0.08" />
      {/* Ground */}
      <line x1="5" y1="95" x2="135" y2="95" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.15" />
    </svg>
  );
}

function CityIllustration() {
  return (
    <svg viewBox="0 0 140 110" fill="none" className="w-28 h-22 mb-3">
      {/* Tall building */}
      <rect x="30" y="20" width="22" height="80" rx="2" stroke="#3FD0FF" strokeWidth="1.5" fill="#3FD0FF" fillOpacity="0.04" />
      {/* Windows */}
      {[28, 38, 48, 58, 68, 78, 88].map((y) => (
        <g key={y}>
          <rect x="34" y={y} width="4" height="4" rx="0.5" fill="#3FD0FF" fillOpacity="0.15" />
          <rect x="42" y={y} width="4" height="4" rx="0.5" fill="#3FD0FF" fillOpacity={0.08 + (y % 3) * 0.04} />
        </g>
      ))}
      {/* Medium building */}
      <rect x="56" y="38" width="18" height="62" rx="2" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.03" />
      {[44, 54, 64, 74, 84].map((y) => (
        <g key={y}>
          <rect x="60" y={y} width="3" height="3" rx="0.5" fill="#3FD0FF" fillOpacity="0.12" />
          <rect x="67" y={y} width="3" height="3" rx="0.5" fill="#3FD0FF" fillOpacity="0.08" />
        </g>
      ))}
      {/* Small building */}
      <rect x="8" y="55" width="18" height="45" rx="2" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.03" />
      {[60, 70, 80].map((y) => (
        <rect key={y} x="12" y={y} width="10" height="3" rx="0.5" fill="#3FD0FF" fillOpacity="0.1" />
      ))}
      {/* Antenna on tall building */}
      <line x1="41" y1="20" x2="41" y2="8" stroke="#3FD0FF" strokeWidth="0.8" />
      <circle cx="41" cy="7" r="1.5" fill="#3FD0FF" fillOpacity="0.3">
        <animate attributeName="fillOpacity" values="0.15;0.45;0.15" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* WiFi/network arcs from antenna */}
      <path d="M45 12 C49 8 49 4 45 0" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" />
      <path d="M48 14 C54 8 54 2 48 -4" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.12" />
      {/* Smart elements — circuit board lines */}
      <path d="M78 50 L92 50 L92 70 L108 70" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" />
      <circle cx="92" cy="50" r="2" fill="#3FD0FF" fillOpacity="0.12" />
      <circle cx="92" cy="70" r="2" fill="#3FD0FF" fillOpacity="0.12" />
      <circle cx="108" cy="70" r="2.5" fill="#3FD0FF" fillOpacity="0.15" />
      <path d="M108 70 L120 62 L132 68" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" />
      {/* Data flow dots */}
      <circle cx="85" cy="50" r="1" fill="#3FD0FF" fillOpacity="0.3">
        <animate attributeName="cx" values="78;108" dur="3s" repeatCount="indefinite" />
        <animate attributeName="cy" values="50;70" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* Ground */}
      <line x1="5" y1="100" x2="135" y2="100" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.15" />
    </svg>
  );
}

function ChatIllustration() {
  return (
    <svg viewBox="0 0 140 110" fill="none" className="w-28 h-22 mb-3">
      {/* Person silhouette left */}
      <circle cx="22" cy="30" r="8" stroke="#3FD0FF" strokeWidth="1" />
      <path d="M10 58 C10 46 34 46 34 58" stroke="#3FD0FF" strokeWidth="1" />
      {/* Chat bubble from person */}
      <rect x="42" y="18" width="50" height="30" rx="8" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.04" />
      <path d="M48 48 L42 58 L58 48" stroke="#3FD0FF" strokeWidth="1.2" />
      {/* Text lines in bubble */}
      <line x1="52" y1="28" x2="80" y2="28" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="52" y1="35" x2="74" y2="35" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.25" />
      <line x1="52" y1="42" x2="68" y2="42" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.15" />
      {/* AI bot */}
      <rect x="100" y="22" width="28" height="24" rx="6" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.06" />
      <circle cx="110" cy="32" r="3" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.1" />
      <circle cx="120" cy="32" r="3" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.1" />
      <path d="M108 38 L122 38" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* Antenna */}
      <line x1="114" y1="22" x2="114" y2="14" stroke="#3FD0FF" strokeWidth="0.8" />
      <circle cx="114" cy="12" r="2" fill="#3FD0FF" fillOpacity="0.2">
        <animate attributeName="fillOpacity" values="0.1;0.35;0.1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      {/* Response bubble */}
      <rect x="48" y="65" width="56" height="28" rx="8" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M96 93 L104 102 L92 93" stroke="#3FD0FF" strokeWidth="1.2" />
      {/* Code/structured response inside */}
      <text x="56" y="78" fill="#3FD0FF" fillOpacity="0.35" fontSize="7" fontFamily="monospace">{'{ }'}</text>
      <line x1="74" y1="76" x2="94" y2="76" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="56" y1="84" x2="88" y2="84" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
      {/* Connection line between person and bot */}
      <path d="M34 40 L42 36" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="2 2" />
      <path d="M92 36 L100 34" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="2 2" />
    </svg>
  );
}

const cardIllustrations = [
  <OilIllustration key="oil" />,
  <CityIllustration key="city" />,
  <ChatIllustration key="chat" />,
];

export default function Solutions() {
  const t = useTranslations("solutions");

  return (
    <section id="solutions" className="py-20 md:py-30 px-6 md:px-12 relative overflow-hidden">
      <MountainSkyline />
      <TvTower />

      <div className="text-center max-w-[700px] mx-auto mb-18 relative">
        <div className="inline-flex items-center gap-2 bg-cyan/10 px-4 py-2 rounded-full text-xs font-bold text-cyan tracking-widest uppercase mb-5">
          {t("tag")}
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(32px,3.5vw,48px)] text-white mb-4 leading-tight">
          {t("title")}
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed">{t("subtitle")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {keys.map((key, i) => {
          const list: string[] = t.raw(`${key}List`);
          return (
            <div
              key={key}
              className="group glass-card bg-abyss/50 rounded-2xl px-10 pt-8 pb-12 text-white relative overflow-hidden hover:-translate-y-1 after:content-[''] after:absolute after:-top-1/2 after:-right-1/2 after:w-full after:h-full after:bg-[radial-gradient(circle,rgba(63,208,255,0.08),transparent_60%)] after:opacity-0 after:transition-opacity after:duration-400 hover:after:opacity-100"
            >
              {/* Centered illustration */}
              <div className="flex justify-center opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                {cardIllustrations[i]}
              </div>

              <h3 className="font-heading font-bold text-2xl text-cyan mb-4 relative">
                {t(key)}
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed relative">
                {t(`${key}Desc`)}
              </p>
              <ul className="list-none mt-6 relative">
                {list.map((li, j) => (
                  <li key={j} className="py-2 text-sm text-white/70 flex items-center gap-2.5">
                    <span className="text-cyan font-bold">→</span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
