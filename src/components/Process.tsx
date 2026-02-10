import { useTranslations } from "next-intl";

const steps = ["step1", "step2", "step3", "step4"] as const;

export default function Process() {
  const t = useTranslations("process");

  return (
    <section id="process" className="py-20 md:py-30 px-6 md:px-12">
      <div className="text-center max-w-[700px] mx-auto mb-18">
        <div className="inline-flex items-center gap-2 bg-lime/12 px-4 py-2 rounded-full text-xs font-bold text-green tracking-widest uppercase mb-5">
          {t("tag")}
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(32px,3.5vw,48px)] text-dark mb-4 leading-tight">
          {t("title")}
        </h2>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-lime via-yellow to-lime" />

        {steps.map((key, i) => (
          <div key={key} className="group text-center relative py-4 sm:py-0">
            <div className="w-[72px] h-[72px] rounded-full bg-white border-3 border-lime flex items-center justify-center font-heading font-extrabold text-2xl text-green-deep mx-auto mb-6 relative z-2 transition-all duration-300 group-hover:bg-green-deep group-hover:text-lime group-hover:scale-110">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h4 className="font-heading font-bold text-base text-dark mb-2">
              {t(key)}
            </h4>
            <p className="text-[13px] text-text-muted leading-relaxed px-2">
              {t(`${key}Desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
