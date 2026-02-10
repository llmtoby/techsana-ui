import { useTranslations } from "next-intl";

const keys = ["llm", "data", "infra", "integrations"] as const;
const icons = ["🧠", "📊", "☁️", "🔗"];

export default function Stack() {
  const t = useTranslations("stack");

  return (
    <section id="stack" className="py-20 md:py-30 px-6 md:px-12 bg-off-white">
      <div className="text-center max-w-[700px] mx-auto mb-18">
        <div className="inline-flex items-center gap-2 bg-lime/12 px-4 py-2 rounded-full text-xs font-bold text-green tracking-widest uppercase mb-5">
          {t("tag")}
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(32px,3.5vw,48px)] text-dark mb-4 leading-tight">
          {t("title")}
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed">{t("subtitle")}</p>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {keys.map((key, i) => {
          const techs = (t(`${key}Tech`) as string).split(" · ");
          return (
            <div
              key={key}
              className="bg-white rounded-2xl p-8 border border-lime/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(12,26,10,0.08)] hover:border-lime/30"
            >
              <div className="text-3xl mb-4">{icons[i]}</div>
              <h3 className="font-heading font-bold text-lg text-dark mb-2">
                {t(key)}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {t(`${key}Desc`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-lime/10 text-green px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
