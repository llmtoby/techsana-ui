import { useTranslations } from "next-intl";

const keys = ["chatbots", "docs", "analytics", "mlops", "finetuning", "deploy"] as const;
const icons = ["🤖", "📄", "📊", "⚙️", "🧠", "🖥️"];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-20 md:py-30 px-6 md:px-12 bg-off-white">
      <div className="text-center max-w-[700px] mx-auto mb-18">
        <div className="inline-flex items-center gap-2 bg-lime/12 px-4 py-2 rounded-full text-xs font-bold text-green tracking-widest uppercase mb-5">
          {t("tag")}
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(32px,3.5vw,48px)] text-dark mb-4 leading-tight">
          {t("title")}
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed">{t("subtitle")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keys.map((key, i) => (
          <div
            key={key}
            className="group bg-white rounded-2xl px-8 py-10 border border-lime/15 relative overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(12,26,10,0.08)] hover:border-lime/30 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-lime before:to-yellow before:scale-x-0 before:transition-transform before:duration-400 before:origin-left hover:before:scale-x-100"
          >
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-[26px] mb-6 bg-gradient-to-br from-lime/15 to-yellow/15">
              {icons[i]}
            </div>
            <h3 className="font-heading font-bold text-xl text-dark mb-3">{t(key)}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{t(`${key}Desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
