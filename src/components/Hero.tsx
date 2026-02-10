import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 pt-[140px] pb-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(186,239,35,0.15),transparent_60%),radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(245,230,66,0.1),transparent_50%)]" />
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(186,239,35,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(186,239,35,0.06)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,black,transparent)]" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center relative z-2">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-lime/15 border border-lime/30 px-4 py-2 rounded-full text-[13px] font-semibold text-green-deep tracking-wider uppercase mb-7 animate-[fadeUp_0.8s_ease_both] before:content-[''] before:w-1.5 before:h-1.5 before:bg-lime-dark before:rounded-full">
            {t("tag")}
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(42px,5.5vw,72px)] leading-[1.05] text-dark mb-6 animate-[fadeUp_0.8s_ease_0.1s_both]">
            {t("title1")}
            <span className="text-green">{t("titleAccent")}</span>
            {t("titleComma")}
            <br />
            {t("titleBr")}
            <span className="bg-gradient-to-br from-lime to-yellow bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-[540px] mb-10 animate-[fadeUp_0.8s_ease_0.2s_both]">
            {t("desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-[fadeUp_0.8s_ease_0.3s_both]">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-green-deep text-white px-9 py-4 rounded-full font-semibold text-[15px] hover:bg-green hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,77,37,0.25)] transition-all no-underline"
            >
              {t("cta")} ↗
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2.5 bg-transparent text-green-deep px-9 py-4 rounded-full font-semibold text-[15px] border-2 border-green-deep/20 hover:border-lime hover:bg-lime/8 hover:-translate-y-0.5 transition-all no-underline"
            >
              {t("cases")}
            </a>
          </div>
        </div>

        {/* Code card */}
        <div className="relative animate-[fadeUp_0.8s_ease_0.4s_both]">
          <div className="bg-dark/85 backdrop-blur-xl rounded-[20px] p-8 text-lime font-mono text-[13px] leading-8 border border-lime/15 shadow-[0_40px_80px_rgba(12,26,10,0.25)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime to-transparent" />
            <div className="opacity-0 animate-[typeLine_0.3s_ease_0.8s_forwards]">
              <span className="text-text-muted italic"># AI pipeline config</span>
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_1.1s_forwards]">
              <span className="text-yellow">pipeline</span> = <span className="text-[#7DEFA1]">AgentOrchestrator</span>(
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_1.4s_forwards]">
              &nbsp;&nbsp;models=<span className="text-[#A8E6CF]">&quot;vLLM:3xRTX4090&quot;</span>,
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_1.7s_forwards]">
              &nbsp;&nbsp;agents=[<span className="text-[#A8E6CF]">&quot;doc_gen&quot;</span>, <span className="text-[#A8E6CF]">&quot;validator&quot;</span>, <span className="text-[#A8E6CF]">&quot;nl2sql&quot;</span>],
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_2.0s_forwards]">
              &nbsp;&nbsp;search=<span className="text-[#7DEFA1]">VectorDB</span>(<span className="text-[#A8E6CF]">&quot;pgvector&quot;</span>),
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_2.3s_forwards]">
              &nbsp;&nbsp;languages=[<span className="text-[#A8E6CF]">&quot;ru&quot;</span>, <span className="text-[#A8E6CF]">&quot;kz&quot;</span>, <span className="text-[#A8E6CF]">&quot;en&quot;</span>]
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_2.6s_forwards]">
              )<span className="text-[#7DEFA1]">.deploy</span>(<span className="text-[#A8E6CF]">&quot;on-premise&quot;</span>) <span className="text-text-muted italic"># ✓ Ready</span>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-5 -right-5 bg-white rounded-[14px] px-5 py-3.5 shadow-[0_12px_40px_rgba(12,26,10,0.1)] flex items-center gap-3 text-[13px] font-semibold text-green-deep border border-lime/20 animate-[float_4s_ease-in-out_infinite]">
            <div className="w-9 h-9 rounded-[10px] bg-lime/20 flex items-center justify-center text-lg">🧠</div>
            <div>{t("badgeAgents")}<br /><small className="text-text-muted font-normal">{t("badgeAgentsSub")}</small></div>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-[14px] px-5 py-3.5 shadow-[0_12px_40px_rgba(12,26,10,0.1)] flex items-center gap-3 text-[13px] font-semibold text-green-deep border border-lime/20 animate-[float_4s_ease-in-out_infinite_2s]">
            <div className="w-9 h-9 rounded-[10px] bg-yellow/25 flex items-center justify-center text-lg">⚡</div>
            <div>{t("badgeGpu")}<br /><small className="text-text-muted font-normal">{t("badgeGpuSub")}</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
