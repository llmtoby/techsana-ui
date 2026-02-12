import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Stack from "@/components/Stack";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import OceanDepth from "@/components/OceanDepth";
import OceanLife from "@/components/OceanLife";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="relative min-h-screen">
      {/* Ocean depth gradient */}
      <OceanDepth />
      {/* Marine life illustrations */}
      <OceanLife />
      {/* Bubbles */}
      <ParticleField className="absolute inset-0 z-1 h-full" />
      {/* Page content */}
      <div className="relative z-2">
        <Nav />
        <Hero />
        <Stats />
        <Services />
        <Solutions />
        <Stack />
        <Process />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
