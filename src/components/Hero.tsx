import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 pt-[140px] pb-20 relative overflow-hidden">
      {/* Surface water shimmer */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(63,208,255,0.06),transparent_60%)]" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center relative z-2">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/20 px-4 py-2 rounded-full text-[13px] font-semibold text-cyan tracking-wider uppercase mb-7 animate-[fadeUp_0.8s_ease_both] before:content-[''] before:w-1.5 before:h-1.5 before:bg-cyan-dark before:rounded-full">
            {t("tag")}
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(42px,5.5vw,72px)] leading-[1.05] text-white mb-6 uppercase animate-[fadeUp_0.8s_ease_0.1s_both]">
            <span className="whitespace-nowrap">{t("title1")}<span className="text-cyan">{t("titleAccent")}</span>{t("titleComma")}</span>
            {t("title2") && <><br />{t("title2")}</>}
            <br />
            <span className="whitespace-nowrap"><span className="text-cyan">{t("titleAccent2")}</span>{t("titleBr")}<span className="bg-gradient-to-br from-cyan to-ice bg-clip-text text-transparent">{t("titleHighlight")}</span></span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-[540px] mb-10 animate-[fadeUp_0.8s_ease_0.2s_both]">
            {t("desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-[fadeUp_0.8s_ease_0.3s_both]">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 glass-panel text-cyan px-9 py-4 rounded-full font-semibold text-[15px] hover:bg-cyan/20 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(63,208,255,0.2)] transition-all no-underline"
            >
              {t("cta")} ↗
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2.5 bg-transparent text-cyan px-9 py-4 rounded-full font-semibold text-[15px] border-2 border-cyan/20 hover:border-cyan/40 hover:bg-cyan/5 hover:-translate-y-0.5 transition-all no-underline"
            >
              {t("cases")}
            </a>
          </div>
        </div>

        {/* Code card */}
        <div className="relative animate-[fadeUp_0.8s_ease_0.4s_both]">
          <div className="bg-deep/70 backdrop-blur-xl rounded-[20px] p-8 text-cyan font-mono text-[13px] leading-8 border border-cyan/15 shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
            <div className="opacity-0 animate-[typeLine_0.3s_ease_0.8s_forwards]">
              <span className="text-text-muted italic"># AI pipeline config</span>
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_1.1s_forwards]">
              <span className="text-ice">pipeline</span> = <span className="text-cyan">AgentOrchestrator</span>(
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_1.4s_forwards]">
              &nbsp;&nbsp;models=<span className="text-ice-soft">&quot;vLLM:3xRTX4090&quot;</span>,
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_1.7s_forwards]">
              &nbsp;&nbsp;agents=[<span className="text-ice-soft">&quot;doc_gen&quot;</span>, <span className="text-ice-soft">&quot;validator&quot;</span>, <span className="text-ice-soft">&quot;nl2sql&quot;</span>],
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_2.0s_forwards]">
              &nbsp;&nbsp;search=<span className="text-cyan">VectorDB</span>(<span className="text-ice-soft">&quot;pgvector&quot;</span>),
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_2.3s_forwards]">
              &nbsp;&nbsp;languages=[<span className="text-ice-soft">&quot;ru&quot;</span>, <span className="text-ice-soft">&quot;kz&quot;</span>, <span className="text-ice-soft">&quot;en&quot;</span>]
            </div>
            <div className="opacity-0 animate-[typeLine_0.3s_ease_2.6s_forwards]">
              )<span className="text-cyan">.deploy</span>(<span className="text-ice-soft">&quot;on-premise&quot;</span>) <span className="text-text-muted italic"># ✓ Ready</span>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-5 -right-5 glass-card rounded-[14px] px-5 py-3.5 flex items-center gap-3 text-[13px] font-semibold text-cyan animate-[float_4s_ease-in-out_infinite]">
            <div className="w-9 h-9 rounded-[10px] bg-cyan/15 flex items-center justify-center text-lg">🧠</div>
            <div>{t("badgeAgents")}<br /><small className="text-text-muted font-normal">{t("badgeAgentsSub")}</small></div>
          </div>
          <div className="absolute -bottom-5 -left-5 glass-card rounded-[14px] px-5 py-3.5 flex items-center gap-3 text-[13px] font-semibold text-cyan animate-[float_4s_ease-in-out_infinite_2s]">
            <div className="w-9 h-9 rounded-[10px] bg-cyan/15 flex items-center justify-center text-lg">⚡</div>
            <div>{t("badgeGpu")}<br /><small className="text-text-muted font-normal">{t("badgeGpuSub")}</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
