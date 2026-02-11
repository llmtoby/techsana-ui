import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-cyan/10 px-6 md:px-12 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <div className="font-heading font-bold text-lg text-white">Techsana</div>
          <span className="text-text-muted text-[13px] block mt-1">
            {t("tagline")}
          </span>
        </div>
        <div className="flex gap-8">
          <a
            href="mailto:hello@techsana.kz"
            className="text-text-muted text-[13px] no-underline hover:text-cyan transition-colors"
          >
            hello@techsana.kz
          </a>
        </div>
      </div>
    </footer>
  );
}
