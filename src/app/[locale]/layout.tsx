import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const meta: Record<string, { title: string; description: string }> = {
  ru: {
    title: "Techsana — AI Engineering Lab",
    description:
      "Techsana — AI-инжиниринг в Алматы. Чатботы, агентные системы, локальные LLM, MLOps-пайплайны.",
  },
  kz: {
    title: "Techsana — AI Engineering Lab",
    description:
      "Techsana — Алматыдағы AI-инжиниринг. Чатботтар, агенттік жүйелер, жергілікті LLM, MLOps-пайплайндар.",
  },
  en: {
    title: "Techsana — AI Engineering Lab",
    description:
      "Techsana — AI engineering in Almaty. Chatbots, agent systems, local LLMs, MLOps pipelines.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.ru;
  return {
    title: m.title,
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      locale: locale === "kz" ? "kk_KZ" : locale === "en" ? "en_US" : "ru_RU",
    },
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
