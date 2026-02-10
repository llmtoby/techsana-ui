import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("stats");

  const items = [
    { value: t("agents"), label: t("agentsLabel") },
    { value: t("projects"), label: t("projectsLabel") },
    { value: t("languages"), label: t("languagesLabel") },
    { value: t("support"), label: t("supportLabel") },
  ];

  return (
    <div className="px-6 md:px-12 -mt-10 relative z-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-[20px] border border-lime/20 shadow-[0_20px_60px_rgba(12,26,10,0.06)] overflow-hidden">
        {items.map((item, i) => (
          <div
            key={i}
            className={`py-9 px-8 text-center transition-colors hover:bg-lime/5 ${
              i < items.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-lime/15 last:border-none"
                : ""
            } max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0 max-lg:[&:nth-child(2)]:border-r-0`}
          >
            <div className="font-heading font-extrabold text-4xl text-green-deep mb-1.5">
              {item.value}
            </div>
            <div className="text-[13px] text-text-muted tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
