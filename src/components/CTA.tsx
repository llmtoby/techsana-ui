import { useTranslations } from "next-intl";
import WhaleConstellation from "./WhaleConstellation";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section
      id="contact"
      className="py-20 md:py-30 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Faint abyss glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(63,208,255,0.05),transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(63,208,255,0.03),transparent_50%)]" />

      {/* Full whale constellation — deep in the abyss */}
      <WhaleConstellation
        variant="full"
        className="absolute inset-0 w-full h-full"
        animate={false}
      />

      <div className="max-w-[700px] mx-auto text-center relative z-2">
        <h2 className="font-heading font-extrabold text-[clamp(32px,4vw,52px)] text-white mb-5 leading-tight">
          {t("title1")} <span className="text-cyan">{t("titleAccent")}</span>{t("title2")}
        </h2>
        <p className="text-[17px] text-white/50 mb-10 leading-relaxed">
          {t("desc")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@techsana.kz"
            className="inline-flex items-center gap-2.5 bg-cyan text-deep px-10 py-4.5 rounded-full font-bold text-[15px] hover:shadow-[0_12px_32px_rgba(63,208,255,0.3)] hover:-translate-y-0.5 transition-all no-underline"
          >
            {t("button")} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
