import { useTranslations } from "next-intl";

const keys = ["chatbots", "docs", "analytics", "mlops", "finetuning", "deploy"] as const;

/* Large frameless SVG illustrations — detailed line-art, cyan glow */
function ChatbotIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" className="w-24 h-20 mb-2">
      {/* Main bubble */}
      <rect x="10" y="12" width="68" height="48" rx="14" stroke="#3FD0FF" strokeWidth="1.5" />
      <path d="M30 60 L22 78 L44 60" stroke="#3FD0FF" strokeWidth="1.5" />
      {/* Brain circuit inside */}
      <circle cx="32" cy="32" r="4" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.08" />
      <circle cx="50" cy="26" r="4" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.12" />
      <circle cx="56" cy="42" r="4" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.08" />
      <circle cx="36" cy="46" r="3" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M36 32 L46 28 M54 26 L56 38 M52 42 L40 46 M36 43 L32 36" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Signal waves */}
      <path d="M82 22 C86 22 88 26 88 30" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round" />
      <path d="M86 16 C94 16 98 24 98 32" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M90 10 C102 10 108 22 108 34" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.1" strokeLinecap="round" />
      {/* Typing dots */}
      <circle cx="30" cy="36" r="1.5" fill="#3FD0FF" fillOpacity="0.25">
        <animate attributeName="fillOpacity" values="0.15;0.4;0.15" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="44" cy="36" r="1.5" fill="#3FD0FF" fillOpacity="0.25">
        <animate attributeName="fillOpacity" values="0.15;0.4;0.15" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="58" cy="36" r="1.5" fill="#3FD0FF" fillOpacity="0.25">
        <animate attributeName="fillOpacity" values="0.15;0.4;0.15" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function DocsIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" className="w-24 h-20 mb-2">
      {/* Back page */}
      <rect x="28" y="8" width="52" height="68" rx="4" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.2" fill="#3FD0FF" fillOpacity="0.02" />
      {/* Mid page */}
      <rect x="22" y="14" width="52" height="68" rx="4" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.3" fill="#3FD0FF" fillOpacity="0.03" />
      {/* Front page */}
      <rect x="16" y="20" width="52" height="68" rx="5" stroke="#3FD0FF" strokeWidth="1.5" fill="#3FD0FF" fillOpacity="0.05" />
      {/* Folded corner */}
      <path d="M52 20 L68 20 L68 36" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M52 20 L52 36 L68 36" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* Text lines */}
      <line x1="26" y1="44" x2="56" y2="44" stroke="#3FD0FF" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="26" y1="52" x2="50" y2="52" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.35" />
      <line x1="26" y1="60" x2="54" y2="60" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.25" />
      <line x1="26" y1="68" x2="42" y2="68" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.15" />
      {/* Sparkle — AI processing */}
      <path d="M82 30 L84 24 L86 30 L92 32 L86 34 L84 40 L82 34 L76 32 Z" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.1" />
      <path d="M92 52 L93 48 L94 52 L98 53 L94 54 L93 58 L92 54 L88 53 Z" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.4" fill="#3FD0FF" fillOpacity="0.06" />
      {/* Arrow — extraction */}
      <path d="M72 68 L96 68" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M92 64 L98 68 L92 72" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  );
}

function AnalyticsIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" className="w-24 h-20 mb-2">
      {/* Bars */}
      <rect x="12" y="58" width="14" height="28" rx="2" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.06" />
      <rect x="32" y="42" width="14" height="44" rx="2" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.1" />
      <rect x="52" y="28" width="14" height="58" rx="2" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.14" />
      <rect x="72" y="14" width="14" height="72" rx="2" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.18" />
      {/* Trend line */}
      <path d="M18 52 L38 38 L58 24 L78 10" stroke="#3FD0FF" strokeWidth="1.8" strokeOpacity="0.6" strokeLinecap="round" />
      {/* Trend dot end */}
      <circle cx="78" cy="10" r="3" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.15" />
      <circle cx="78" cy="10" r="6" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" />
      {/* Data points */}
      <circle cx="18" cy="52" r="2" fill="#3FD0FF" fillOpacity="0.3" />
      <circle cx="38" cy="38" r="2" fill="#3FD0FF" fillOpacity="0.3" />
      <circle cx="58" cy="24" r="2" fill="#3FD0FF" fillOpacity="0.3" />
      {/* Percentage */}
      <path d="M94 20 L104 20 L104 30" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M96 30 L96 24 L100 24 L100 30 Z" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.25" />
      {/* Sparkle pulse */}
      <circle cx="100" cy="14" r="2" fill="#3FD0FF" fillOpacity="0.2">
        <animate attributeName="r" values="2;3.5;2" dur="2s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.2;0.05;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function MlopsIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" className="w-24 h-20 mb-2">
      {/* Main gear */}
      <circle cx="45" cy="45" r="18" stroke="#3FD0FF" strokeWidth="1.5" />
      <circle cx="45" cy="45" r="8" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.1" />
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 45 + Math.cos(rad) * 18;
        const y1 = 45 + Math.sin(rad) * 18;
        const x2 = 45 + Math.cos(rad) * 23;
        const y2 = 45 + Math.sin(rad) * 23;
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3FD0FF" strokeWidth="2.5" strokeLinecap="round" />;
      })}
      {/* Small gear */}
      <circle cx="78" cy="28" r="10" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx="78" cy="28" r="4" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.08" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 78 + Math.cos(rad) * 10;
        const y1 = 28 + Math.sin(rad) * 10;
        const x2 = 78 + Math.cos(rad) * 13;
        const y2 = 28 + Math.sin(rad) * 13;
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3FD0FF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.6" />;
      })}
      {/* Cycle arrow */}
      <path d="M28 78 C18 72 14 58 20 48" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 2" />
      <path d="M16 50 L20 48 L22 52" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.35" />
      <path d="M64 12 C74 18 78 32 72 42" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 2" />
      <path d="M76 40 L72 42 L70 38" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.35" />
      {/* Infinity loop hint */}
      <path d="M88 60 C96 52 108 52 108 62 C108 72 96 72 88 64 C80 56 68 56 68 66 C68 76 80 76 88 68" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
    </svg>
  );
}

function FinetuneIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" className="w-24 h-20 mb-2">
      {/* Neural network layers */}
      {/* Input layer */}
      {[20, 40, 60, 80].map((y) => (
        <circle key={`i${y}`} cx="15" cy={y} r="5" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.06" />
      ))}
      {/* Hidden layer 1 */}
      {[25, 45, 65].map((y) => (
        <circle key={`h1${y}`} cx="45" cy={y} r="6" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.1" />
      ))}
      {/* Hidden layer 2 */}
      {[30, 55].map((y) => (
        <circle key={`h2${y}`} cx="75" cy={y} r="6" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.12" />
      ))}
      {/* Output */}
      <circle cx="105" cy="42" r="7" stroke="#3FD0FF" strokeWidth="1.5" fill="#3FD0FF" fillOpacity="0.15" />
      {/* Connections input → h1 */}
      {[20, 40, 60, 80].map((iy) =>
        [25, 45, 65].map((hy) => (
          <line key={`${iy}-${hy}`} x1="20" y1={iy} x2="39" y2={hy} stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.15" />
        ))
      )}
      {/* h1 → h2 */}
      {[25, 45, 65].map((hy1) =>
        [30, 55].map((hy2) => (
          <line key={`h${hy1}-${hy2}`} x1="51" y1={hy1} x2="69" y2={hy2} stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" />
        ))
      )}
      {/* h2 → output */}
      {[30, 55].map((hy) => (
        <line key={`o${hy}`} x1="81" y1={hy} x2="98" y2={42} stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" />
      ))}
      {/* Tuning slider */}
      <line x1="20" y1="92" x2="100" y2="92" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="68" cy="92" r="3.5" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.15" />
      <line x1="20" y1="92" x2="68" y2="92" stroke="#3FD0FF" strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Pulse on output */}
      <circle cx="105" cy="42" r="10" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.15">
        <animate attributeName="r" values="10;14;10" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="strokeOpacity" values="0.15;0.03;0.15" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function DeployIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" className="w-24 h-20 mb-2">
      {/* Cloud shape */}
      <path d="M30 52 C14 52 8 40 18 32 C12 20 28 12 38 18 C44 8 62 6 68 16 C78 10 94 16 92 30 C104 32 106 48 94 52 Z"
        stroke="#3FD0FF" strokeWidth="1.5" fill="#3FD0FF" fillOpacity="0.05" />
      {/* Server racks inside cloud */}
      <rect x="34" y="32" width="22" height="6" rx="1" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.08" />
      <rect x="34" y="40" width="22" height="6" rx="1" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.08" />
      <circle cx="38" cy="35" r="1" fill="#3FD0FF" fillOpacity="0.4" />
      <circle cx="38" cy="43" r="1" fill="#3FD0FF" fillOpacity="0.4" />
      <line x1="44" y1="35" x2="52" y2="35" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="44" y1="43" x2="52" y2="43" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      {/* Upload arrow */}
      <path d="M62 56 L62 66 L48 66 L62 66 L62 76" stroke="#3FD0FF" strokeWidth="1.2" strokeOpacity="0.4" />
      <path d="M55 62 L62 56 L69 62" stroke="#3FD0FF" strokeWidth="1.2" strokeOpacity="0.4" />
      {/* Connection lines going down */}
      <line x1="40" y1="52" x2="28" y2="72" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 2" />
      <line x1="62" y1="52" x2="62" y2="72" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 2" />
      <line x1="82" y1="52" x2="94" y2="72" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 2" />
      {/* Endpoint devices */}
      <rect x="20" y="72" width="16" height="12" rx="2" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="54" y="76" width="16" height="10" rx="2" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="86" y="72" width="16" height="12" rx="2" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Status dots */}
      <circle cx="24" cy="76" r="1.2" fill="#3FD0FF" fillOpacity="0.35">
        <animate attributeName="fillOpacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="76" r="1.2" fill="#3FD0FF" fillOpacity="0.35">
        <animate attributeName="fillOpacity" values="0.2;0.5;0.2" dur="2s" begin="0.7s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const illustrations = [
  <ChatbotIllustration key="chatbot" />,
  <DocsIllustration key="docs" />,
  <AnalyticsIllustration key="analytics" />,
  <MlopsIllustration key="mlops" />,
  <FinetuneIllustration key="finetune" />,
  <DeployIllustration key="deploy" />,
];

/* Kazakh ою өрнек — single vertical ornament strip on the right */
function OrnamentStrip() {
  return (
    <svg
      className="absolute right-0 top-0 h-full w-16 md:w-20 pointer-events-none"
      style={{ opacity: 0.06 }}
      viewBox="0 0 60 800"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="30" y1="0" x2="30" y2="800" stroke="#3FD0FF" strokeWidth="0.5" />
      {[0, 160, 320, 480, 640].map((y) => (
        <g key={y}>
          <path d={`M30 ${y + 20} C15 ${y + 20} 8 ${y + 45} 8 ${y + 60} C8 ${y + 78} 20 ${y + 78} 20 ${y + 65} C20 ${y + 55} 25 ${y + 45} 30 ${y + 40}`} stroke="#3FD0FF" strokeWidth="1" />
          <path d={`M30 ${y + 20} C45 ${y + 20} 52 ${y + 45} 52 ${y + 60} C52 ${y + 78} 40 ${y + 78} 40 ${y + 65} C40 ${y + 55} 35 ${y + 45} 30 ${y + 40}`} stroke="#3FD0FF" strokeWidth="1" />
          <path d={`M30 ${y + 90} L22 ${y + 105} L30 ${y + 120} L38 ${y + 105} Z`} stroke="#3FD0FF" strokeWidth="0.8" />
          <circle cx="30" cy={y + 105} r="2" fill="#3FD0FF" fillOpacity="0.3" />
          <circle cx="30" cy={y + 10} r="1.5" fill="#3FD0FF" fillOpacity="0.4" />
          <circle cx="30" cy={y + 140} r="1" fill="#3FD0FF" fillOpacity="0.25" />
        </g>
      ))}
    </svg>
  );
}

/* Mini whale silhouette for card decoration */
function WhaleAccent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 50" fill="none" className={className}>
      <path
        d="M10 35 C15 20 30 12 50 12 C70 12 85 18 95 25 C100 28 105 28 110 24 L112 22 C112 26 108 30 104 30 C98 30 94 32 88 35 C75 42 55 45 35 42 C22 40 12 38 10 35Z"
        fill="#3FD0FF" fillOpacity="0.06"
      />
      <path d="M50 12 C48 8 44 4 38 6 C42 8 44 12 46 14" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.15" />
      <circle cx="30" cy="22" r="1.5" fill="#3FD0FF" fillOpacity="0.2" />
    </svg>
  );
}

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-20 md:py-30 px-6 md:px-12 relative overflow-hidden">
      <OrnamentStrip />
      <WhaleAccent className="absolute -top-4 left-[5%] w-[300px] h-[120px] opacity-60 rotate-[-8deg]" />
      <WhaleAccent className="absolute bottom-10 right-[3%] w-[250px] h-[100px] opacity-40 scale-x-[-1] rotate-[5deg]" />

      <div className="text-center max-w-[700px] mx-auto mb-18 relative">
        <div className="inline-flex items-center gap-2 bg-cyan/10 px-4 py-2 rounded-full text-xs font-bold text-cyan tracking-widest uppercase mb-5">
          {t("tag")}
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(32px,3.5vw,48px)] text-white mb-4 leading-tight">
          {t("title")}
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed">
          {t("subtitle")}
        </p>
        <span className="block mt-3 text-cyan/20 font-heading text-[clamp(48px,6vw,80px)] font-extrabold leading-none select-none" aria-hidden="true">
          САНА
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {keys.map((key, i) => (
          <div
            key={key}
            className="group glass-card rounded-2xl px-8 pt-8 pb-10 relative overflow-hidden hover:-translate-y-1.5 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-cyan before:to-ice before:scale-x-0 before:transition-transform before:duration-400 before:origin-left hover:before:scale-x-100"
          >
            {/* Whale echo in card corner */}
            <svg viewBox="0 0 80 80" className="absolute -bottom-4 -right-4 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" fill="none">
              <path d="M20 60 C25 40 45 30 60 35 C68 38 72 42 70 48 C65 55 50 55 45 50" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
              <circle cx="55" cy="38" r="1" fill="#3FD0FF" fillOpacity="0.3" />
            </svg>

            {/* Centered illustration */}
            <div className="flex justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {illustrations[i]}
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-3 text-center">{t(key)}</h3>
            <p className="text-sm text-text-muted leading-relaxed text-center">{t(`${key}Desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
