"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const localeLabels: Record<string, string> = { ru: "RU", kz: "KZ", en: "EN" };
const locales = ["ru", "kz", "en"] as const;

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function switchLocale(next: string) {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-6 lg:px-12 py-4 flex items-center justify-between backdrop-blur-xl bg-deep/50 border-b border-cyan/10 transition-all duration-300">
      <a
        href={`/${locale}`}
        className="font-heading font-extrabold text-2xl text-white no-underline flex items-center gap-2.5"
      >
        <span className="w-2.5 h-2.5 bg-cyan rounded-full animate-[biopulse_3s_ease-in-out_infinite] shadow-[0_0_12px_rgba(63,208,255,0.6)]" />
        Terentech
      </a>

      {/* Desktop links */}
      <ul className="hidden sm:flex items-center gap-9 list-none">
        <li>
          <a href="#services" className="text-text-muted text-sm font-medium tracking-wide hover:text-cyan transition-colors">
            {t("services")}
          </a>
        </li>
        <li>
          <a href="#solutions" className="text-text-muted text-sm font-medium tracking-wide hover:text-cyan transition-colors">
            {t("solutions")}
          </a>
        </li>
        <li>
          <a href="#stack" className="text-text-muted text-sm font-medium tracking-wide hover:text-cyan transition-colors">
            {t("stack")}
          </a>
        </li>
        <li>
          <a href="#process" className="text-text-muted text-sm font-medium tracking-wide hover:text-cyan transition-colors">
            {t("process")}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="bg-cyan/10 text-cyan px-6 py-2.5 rounded-full font-semibold border border-cyan/30 hover:bg-cyan/20 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(63,208,255,0.15)] transition-all no-underline"
          >
            {t("contact")}
          </a>
        </li>
        {/* Locale switcher */}
        <li className="flex gap-1">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`text-xs font-bold px-2 py-1 rounded-md transition-colors cursor-pointer ${
                l === locale
                  ? "bg-cyan/20 text-cyan"
                  : "text-text-muted hover:text-cyan"
              }`}
            >
              {localeLabels[l]}
            </button>
          ))}
        </li>
      </ul>

      {/* Burger */}
      <button
        className="sm:hidden relative z-101 w-8 h-6 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label={t("menu")}
      >
        <span
          className={`block absolute left-0 w-full h-0.5 bg-white rounded transition-all ${
            open ? "top-[11px] rotate-45" : "top-0"
          }`}
        />
        <span
          className={`block absolute left-0 w-full h-0.5 bg-white rounded transition-all top-[11px] ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block absolute left-0 w-full h-0.5 bg-white rounded transition-all ${
            open ? "top-[11px] -rotate-45" : "top-[22px]"
          }`}
        />
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="fixed inset-0 bg-deep flex flex-col items-center justify-center gap-8 list-none z-100">
          {(["services", "solutions", "stack", "process"] as const).map(
            (key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="text-xl text-text-muted font-medium hover:text-cyan transition-colors no-underline"
                  onClick={() => setOpen(false)}
                >
                  {t(key)}
                </a>
              </li>
            )
          )}
          <li>
            <a
              href="#contact"
              className="bg-cyan/10 text-cyan px-6 py-2.5 rounded-full font-semibold border border-cyan/30 no-underline"
              onClick={() => setOpen(false)}
            >
              {t("contact")}
            </a>
          </li>
          <li className="flex gap-2">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => {
                  switchLocale(l);
                  setOpen(false);
                }}
                className={`text-sm font-bold px-3 py-1.5 rounded-md cursor-pointer ${
                  l === locale
                    ? "bg-cyan/20 text-cyan"
                    : "text-text-muted hover:text-cyan"
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </li>
        </ul>
      )}
    </nav>
  );
}
