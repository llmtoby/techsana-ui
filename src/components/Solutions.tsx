import { useTranslations } from "next-intl";

const keys = ["oil", "city", "chat"] as const;

export default function Solutions() {
  const t = useTranslations("solutions");

  return (
    <section id="solutions" className="py-20 md:py-30 px-6 md:px-12">
      <div className="text-center max-w-[700px] mx-auto mb-18">
        <div className="inline-flex items-center gap-2 bg-lime/12 px-4 py-2 rounded-full text-xs font-bold text-green tracking-widest uppercase mb-5">
          {t("tag")}
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(32px,3.5vw,48px)] text-dark mb-4 leading-tight">
          {t("title")}
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed">{t("subtitle")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {keys.map((key, i) => {
          const list: string[] = t.raw(`${key}List`);
          return (
            <div
              key={key}
              className="group bg-dark rounded-2xl px-10 py-12 text-white relative overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(12,26,10,0.3)] after:content-[''] after:absolute after:-top-1/2 after:-right-1/2 after:w-full after:h-full after:bg-[radial-gradient(circle,rgba(186,239,35,0.08),transparent_60%)] after:opacity-0 after:transition-opacity after:duration-400 hover:after:opacity-100"
            >
              <div className="font-heading font-extrabold text-[64px] text-lime/12 absolute top-5 right-7 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-heading font-bold text-2xl text-lime mb-4 relative">
                {t(key)}
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed relative">
                {t(`${key}Desc`)}
              </p>
              <ul className="list-none mt-6 relative">
                {list.map((li, j) => (
                  <li
                    key={j}
                    className="py-2 text-sm text-white/70 flex items-center gap-2.5"
                  >
                    <span className="text-lime font-bold">→</span>
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
