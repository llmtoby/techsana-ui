import { useTranslations } from "next-intl";
const keys = ["llm", "data", "infra", "integrations"] as const;

/* Large frameless SVG illustrations for stack cards */
function LlmIllustration() {
  return (
    <svg viewBox="0 0 130 100" fill="none" className="w-full h-full">
      {/* Brain outline */}
      <path d="M45 20 C30 18 18 28 18 42 C18 52 24 58 22 68 C20 78 28 86 40 86 C48 86 52 80 55 78"
        stroke="#3FD0FF" strokeWidth="1.2" />
      <path d="M55 20 C70 18 82 28 82 42 C82 52 76 58 78 68 C80 78 72 86 60 86 C52 86 48 80 45 78"
        stroke="#3FD0FF" strokeWidth="1.2" />
      <path d="M30 38 C38 42 48 38 50 32" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" />
      <path d="M50 32 C52 38 62 42 70 38" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" />
      <path d="M26 52 C34 48 46 52 50 58" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" />
      <path d="M50 58 C54 52 66 48 74 52" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" />
      <path d="M32 68 C40 64 48 68 50 72" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
      <path d="M50 72 C52 68 60 64 68 68" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="50" y1="20" x2="50" y2="86" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.15" />
      <circle cx="36" cy="35" r="2.5" fill="#3FD0FF" fillOpacity="0.12" />
      <circle cx="64" cy="35" r="2.5" fill="#3FD0FF" fillOpacity="0.12" />
      <circle cx="50" cy="50" r="3" fill="#3FD0FF" fillOpacity="0.18">
        <animate attributeName="fillOpacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="34" cy="62" r="2" fill="#3FD0FF" fillOpacity="0.1" />
      <circle cx="66" cy="62" r="2" fill="#3FD0FF" fillOpacity="0.1" />
      <path d="M92 20 L82 28" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="2 3" />
      <path d="M96 42 L82 42" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="2 3" />
      <path d="M92 65 L78 60" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="2 3" />
      <text x="96" y="22" fill="#3FD0FF" fillOpacity="0.2" fontSize="8" fontFamily="monospace">A</text>
      <text x="100" y="45" fill="#3FD0FF" fillOpacity="0.2" fontSize="8" fontFamily="monospace">B</text>
      <text x="96" y="68" fill="#3FD0FF" fillOpacity="0.15" fontSize="8" fontFamily="monospace">C</text>
      <path d="M50 86 L50 96" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M46 92 L50 96 L54 92" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  );
}

function DataIllustration() {
  return (
    <svg viewBox="0 0 130 100" fill="none" className="w-full h-full">
      <ellipse cx="40" cy="22" rx="24" ry="8" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.04" />
      <path d="M16 22 L16 42 C16 46.4 26.7 50 40 50 C53.3 50 64 46.4 64 42 L64 22" stroke="#3FD0FF" strokeWidth="1.2" />
      <ellipse cx="40" cy="42" rx="24" ry="8" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.4" />
      <path d="M16 42 L16 62 C16 66.4 26.7 70 40 70 C53.3 70 64 66.4 64 62 L64 42" stroke="#3FD0FF" strokeWidth="1.2" />
      <ellipse cx="40" cy="62" rx="24" ry="8" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="22" y1="32" x2="58" y2="32" stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="22" y1="52" x2="58" y2="52" stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.12" />
      <path d="M64 36 L78 32 L92 36" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" />
      <path d="M64 50 L78 50" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" />
      <path d="M64 60 L78 64 L92 60" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
      <circle cx="98" cy="48" r="12" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M92 48 L98 42 L104 48 L98 54 Z" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.1" />
      <circle cx="98" cy="48" r="4" fill="#3FD0FF" fillOpacity="0.08">
        <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.08;0.02;0.08" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <path d="M110 42 L120 36" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="2 2" />
      <path d="M110 48 L122 48" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="2 2" />
      <path d="M110 54 L120 60" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="2 2" />
      <circle cx="122" cy="36" r="1.5" fill="#3FD0FF" fillOpacity="0.2" />
      <circle cx="124" cy="48" r="1.5" fill="#3FD0FF" fillOpacity="0.2" />
      <circle cx="122" cy="60" r="1.5" fill="#3FD0FF" fillOpacity="0.2" />
      <text x="20" y="88" fill="#3FD0FF" fillOpacity="0.12" fontSize="6" fontFamily="monospace">01101 10010</text>
    </svg>
  );
}

function InfraIllustration() {
  return (
    <svg viewBox="0 0 130 100" fill="none" className="w-full h-full">
      <path d="M25 48 C12 48 8 38 16 32 C12 22 24 14 32 18 C36 10 52 8 56 16 C64 12 76 16 74 28 C84 30 86 44 76 48 Z"
        stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.04" />
      <rect x="80" y="14" width="36" height="16" rx="3" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.04" />
      <circle cx="88" cy="22" r="2" fill="#3FD0FF" fillOpacity="0.3" />
      <line x1="94" y1="22" x2="108" y2="22" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" />
      <rect x="80" y="34" width="36" height="16" rx="3" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.04" />
      <circle cx="88" cy="42" r="2" fill="#3FD0FF" fillOpacity="0.3">
        <animate attributeName="fillOpacity" values="0.2;0.5;0.2" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <line x1="94" y1="42" x2="108" y2="42" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" />
      <path d="M76 36 L80 26" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />
      <path d="M76 42 L80 42" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />
      <circle cx="30" cy="68" r="6" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.05" />
      <circle cx="60" cy="72" r="6" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.05" />
      <circle cx="90" cy="70" r="6" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.05" />
      <line x1="36" y1="68" x2="54" y2="72" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="66" y1="72" x2="84" y2="70" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
      <path d="M40 48 L30 62" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.15" strokeDasharray="2 2" />
      <path d="M55 48 L60 66" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.15" strokeDasharray="2 2" />
      <path d="M98 50 L92 64" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.15" strokeDasharray="2 2" />
      <circle cx="30" cy="68" r="2" fill="#3FD0FF" fillOpacity="0.15" />
      <circle cx="60" cy="72" r="2" fill="#3FD0FF" fillOpacity="0.15" />
      <circle cx="90" cy="70" r="2" fill="#3FD0FF" fillOpacity="0.15" />
      <path d="M16 88 L24 80 L32 85 L40 76 L48 82" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
    </svg>
  );
}

function IntegrationsIllustration() {
  return (
    <svg viewBox="0 0 130 100" fill="none" className="w-full h-full">
      <circle cx="65" cy="50" r="14" stroke="#3FD0FF" strokeWidth="1.5" fill="#3FD0FF" fillOpacity="0.06" />
      <circle cx="65" cy="50" r="6" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.12" />
      <circle cx="65" cy="50" r="2" fill="#3FD0FF" fillOpacity="0.3" />
      {[
        { x: 20, y: 20, r: 8 },
        { x: 110, y: 20, r: 8 },
        { x: 15, y: 75, r: 7 },
        { x: 115, y: 75, r: 7 },
        { x: 65, y: 8, r: 6 },
        { x: 65, y: 92, r: 6 },
      ].map(({ x, y, r }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.04" />
          <circle cx={x} cy={y} r={r * 0.4} fill="#3FD0FF" fillOpacity={0.12 + i * 0.02} />
          <line x1={x} y1={y} x2={65} y2={50} stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.15" />
        </g>
      ))}
      <circle r="1.5" fill="#3FD0FF" fillOpacity="0.35">
        <animate attributeName="cx" values="20;65" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="20;50" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle r="1.5" fill="#3FD0FF" fillOpacity="0.35">
        <animate attributeName="cx" values="110;65" dur="3s" repeatCount="indefinite" />
        <animate attributeName="cy" values="20;50" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle r="1.5" fill="#3FD0FF" fillOpacity="0.3">
        <animate attributeName="cx" values="65;15" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="cy" values="50;75" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <text x="56" y="53" fill="#3FD0FF" fillOpacity="0.25" fontSize="7" fontFamily="monospace">API</text>
      <circle cx="65" cy="50" r="14" stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.1">
        <animate attributeName="r" values="14;22;14" dur="3s" repeatCount="indefinite" />
        <animate attributeName="strokeOpacity" values="0.1;0.02;0.1" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const illustrations = [
  <LlmIllustration key="llm" />,
  <DataIllustration key="data" />,
  <InfraIllustration key="infra" />,
  <IntegrationsIllustration key="integrations" />,
];

export default function Stack() {
  const t = useTranslations("stack");

  return (
    <section id="stack" className="py-20 md:py-30 px-6 md:px-12 relative overflow-hidden">
      <div className="text-center max-w-[700px] mx-auto mb-18 relative">
        <div className="inline-flex items-center gap-2 bg-cyan/10 px-4 py-2 rounded-full text-xs font-bold text-cyan tracking-widest uppercase mb-5">
          {t("tag")}
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(32px,3.5vw,48px)] text-white mb-4 leading-tight">
          {t("title")}
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed">{t("subtitle")}</p>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
        {keys.map((key, i) => {
          const techs = (t(`${key}Tech`) as string).split(" · ");
          return (
            <div
              key={key}
              className="group glass-card rounded-2xl p-8 hover:-translate-y-1 flex flex-row items-start gap-6"
            >
              {/* Text left */}
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {t(key)}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {t(`${key}Desc`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan/10 text-cyan px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Illustration right */}
              <div className="w-24 h-20 flex-shrink-0 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                {illustrations[i]}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
