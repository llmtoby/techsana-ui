import { useTranslations } from "next-intl";
const steps = ["step1", "step2", "step3", "step4"] as const;

/* Step illustrations — frameless, detailed line-art */
function DiscoverIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="34" cy="34" r="18" stroke="#3FD0FF" strokeWidth="1.5" />
      <line x1="46" y1="46" x2="62" y2="62" stroke="#3FD0FF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 26 C28 20 36 20 40 26" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" />
      <circle cx="30" cy="32" r="2" fill="#3FD0FF" fillOpacity="0.15" />
      <circle cx="38" cy="36" r="2" fill="#3FD0FF" fillOpacity="0.15" />
      <line x1="30" y1="32" x2="38" y2="36" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" />
      <circle cx="34" cy="28" r="1.5" fill="#3FD0FF" fillOpacity="0.12" />
      <line x1="34" y1="28" x2="30" y2="32" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.15" />
      <line x1="34" y1="28" x2="38" y2="36" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.15" />
      <circle cx="24" cy="22" r="1" fill="#3FD0FF" fillOpacity="0.3">
        <animate attributeName="fillOpacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <rect x="10" y="10" width="50" height="60" rx="3" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.03" />
      {[22, 34, 46, 58].map((y) => (
        <line key={`h${y}`} x1="14" y1={y} x2="56" y2={y} stroke="#3FD0FF" strokeWidth="0.4" strokeOpacity="0.1" />
      ))}
      {[22, 34, 46].map((x) => (
        <line key={`v${x}`} x1={x} y1="14" x2={x} y2="66" stroke="#3FD0FF" strokeWidth="0.4" strokeOpacity="0.1" />
      ))}
      <rect x="16" y="16" width="16" height="12" rx="2" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.08" />
      <rect x="38" y="24" width="14" height="16" rx="2" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.06" />
      <rect x="18" y="44" width="20" height="10" rx="2" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M32 22 L38 30" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      <path d="M28 28 L28 44" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="2 2" />
      <path d="M60 20 L68 12 L72 16 L64 24 Z" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.08" />
      <path d="M60 24 L58 28" stroke="#3FD0FF" strokeWidth="0.8" />
      <circle cx="58" cy="28" r="1" fill="#3FD0FF" fillOpacity="0.3" />
    </svg>
  );
}

function BuildIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <rect x="8" y="12" width="54" height="42" rx="4" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.04" />
      <circle cx="16" cy="18" r="1.5" fill="#3FD0FF" fillOpacity="0.25" />
      <circle cx="22" cy="18" r="1.5" fill="#3FD0FF" fillOpacity="0.15" />
      <circle cx="28" cy="18" r="1.5" fill="#3FD0FF" fillOpacity="0.1" />
      <line x1="8" y1="23" x2="62" y2="23" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" />
      <line x1="14" y1="30" x2="36" y2="30" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="18" y1="36" x2="48" y2="36" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="18" y1="42" x2="40" y2="42" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="14" y1="48" x2="30" y2="48" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.15" />
      <rect x="32" y="47" width="6" height="2" rx="0.5" fill="#3FD0FF" fillOpacity="0.3">
        <animate attributeName="fillOpacity" values="0.3;0.05;0.3" dur="1.2s" repeatCount="indefinite" />
      </rect>
      <circle cx="66" cy="58" r="10" stroke="#3FD0FF" strokeWidth="1" />
      <circle cx="66" cy="58" r="4" fill="#3FD0FF" fillOpacity="0.12" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={deg}
            x1={66 + Math.cos(rad) * 10} y1={58 + Math.sin(rad) * 10}
            x2={66 + Math.cos(rad) * 13} y2={58 + Math.sin(rad) * 13}
            stroke="#3FD0FF" strokeWidth="1.8" strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function LaunchIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <path d="M40 8 C44 8 52 20 52 38 L52 52 L28 52 L28 38 C28 20 36 8 40 8Z"
        stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.05" />
      <circle cx="40" cy="14" r="2" fill="#3FD0FF" fillOpacity="0.2" />
      <circle cx="40" cy="30" r="5" stroke="#3FD0FF" strokeWidth="1" />
      <circle cx="40" cy="30" r="2.5" fill="#3FD0FF" fillOpacity="0.15" />
      <path d="M28 42 L18 56 L28 52" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.04" />
      <path d="M52 42 L62 56 L52 52" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.04" />
      <path d="M32 52 L34 66 L38 58 L40 70 L42 58 L46 66 L48 52" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.35">
        <animate attributeName="strokeOpacity" values="0.2;0.45;0.2" dur="0.8s" repeatCount="indefinite" />
      </path>
      <line x1="20" y1="48" x2="12" y2="60" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.15" />
      <line x1="60" y1="48" x2="68" y2="60" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.15" />
      <circle cx="16" cy="16" r="1" fill="#3FD0FF" fillOpacity="0.2" />
      <circle cx="68" cy="12" r="1.2" fill="#3FD0FF" fillOpacity="0.15" />
      <circle cx="70" cy="30" r="0.8" fill="#3FD0FF" fillOpacity="0.12" />
    </svg>
  );
}

const stepIllustrations = [
  <DiscoverIllustration key="discover" />,
  <DesignIllustration key="design" />,
  <BuildIllustration key="build" />,
  <LaunchIllustration key="launch" />,
];

export default function Process() {
  const t = useTranslations("process");

  return (
    <section id="process" className="py-20 md:py-30 px-6 md:px-12 relative overflow-hidden">
      <div className="text-center max-w-[700px] mx-auto mb-18 relative">
        <div className="inline-flex items-center gap-2 bg-cyan/10 px-4 py-2 rounded-full text-xs font-bold text-cyan tracking-widest uppercase mb-5">
          {t("tag")}
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(32px,3.5vw,48px)] text-white mb-4 leading-tight">
          {t("title")}
        </h2>
      </div>

      <div className="max-w-[1100px] mx-auto relative">
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((key, i) => (
            <div key={key} className="group text-center relative py-4 sm:py-0">
              {/* Glass circle with number + illustration */}
              <div className="relative mx-auto mb-6 w-[120px] h-[120px]">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-cyan/15 group-hover:border-cyan/30 transition-colors duration-300" />
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-full bg-cyan/0 group-hover:bg-cyan/5 transition-colors duration-300" />
                {/* Number — top left corner */}
                <span className="absolute -top-2 -left-2 font-heading font-extrabold text-lg text-cyan/40 group-hover:text-cyan/70 transition-colors duration-300 z-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Centered illustration */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                  {stepIllustrations[i]}
                </div>
              </div>

              {/* Connector dot on the line */}
              <div className="hidden lg:block absolute top-[60px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan/30 border border-cyan/50 group-hover:bg-cyan/60 transition-colors duration-300 z-10" />

              <h4 className="font-heading font-bold text-base text-white mb-2">
                {t(key)}
              </h4>
              <p className="text-[13px] text-text-muted leading-relaxed px-4">
                {t(`${key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
