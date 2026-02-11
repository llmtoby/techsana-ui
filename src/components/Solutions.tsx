"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const keys = ["oil", "city", "chat"] as const;

/* Almaty mountain range skyline — Ile-Alatau silhouette */
function MountainSkyline() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-[220px] md:h-[300px] pointer-events-none"
      viewBox="0 0 1400 300"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 280 L60 220 L120 250 L200 180 L260 210 L320 150 L380 190 L440 120 L500 160 L560 90 L600 110 L660 60 L700 80 L740 45 L780 70 L820 55 L860 85 L920 100 L980 130 L1040 110 L1100 150 L1160 130 L1220 170 L1280 190 L1340 210 L1400 240 L1400 300 L0 300Z"
        fill="url(#mountain-far)" opacity="0.12"
      />
      <path
        d="M0 290 L80 260 L160 270 L240 230 L320 250 L400 200 L460 220 L520 170 L580 195 L640 145 L700 165 L740 130 L780 155 L840 175 L900 190 L960 210 L1040 195 L1100 220 L1180 240 L1260 250 L1340 265 L1400 270 L1400 300 L0 300Z"
        fill="url(#mountain-mid)" opacity="0.08"
      />
      <path d="M650 64 L660 60 L670 66" stroke="#DFF6FF" strokeWidth="1.5" strokeOpacity="0.15" strokeLinecap="round" />
      <path d="M730 49 L740 45 L750 50" stroke="#DFF6FF" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M810 59 L820 55 L830 60" stroke="#DFF6FF" strokeWidth="1.5" strokeOpacity="0.15" strokeLinecap="round" />
      <ellipse cx="700" cy="285" rx="500" ry="30" fill="#3FD0FF" opacity="0.03" />
      {[320, 420, 510, 580, 650, 720, 800, 870, 950, 1050].map((x, i) => (
        <circle key={i} cx={x} cy={272 + (i % 3) * 4} r={0.8 + (i % 2) * 0.5} fill="#3FD0FF" opacity={0.15 + (i % 3) * 0.08} />
      ))}
      <defs>
        <linearGradient id="mountain-far" x1="700" y1="45" x2="700" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3FD0FF" stopOpacity="0.6" />
          <stop offset="1" stopColor="#0A2E4A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mountain-mid" x1="700" y1="130" x2="700" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3FD0FF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#061A2B" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TvTower() {
  return (
    <svg
      className="absolute bottom-[180px] md:bottom-[240px] right-[15%] w-[30px] h-[100px] md:w-[40px] md:h-[140px] pointer-events-none"
      style={{ opacity: 0.07 }}
      viewBox="0 0 20 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="10" y1="0" x2="10" y2="80" stroke="#3FD0FF" strokeWidth="0.8" />
      <line x1="10" y1="0" x2="6" y2="12" stroke="#3FD0FF" strokeWidth="0.6" />
      <line x1="10" y1="0" x2="14" y2="12" stroke="#3FD0FF" strokeWidth="0.6" />
      <ellipse cx="10" cy="18" rx="4" ry="1.5" stroke="#3FD0FF" strokeWidth="0.5" />
      <ellipse cx="10" cy="28" rx="3" ry="1" stroke="#3FD0FF" strokeWidth="0.4" />
      <line x1="7" y1="40" x2="13" y2="40" stroke="#3FD0FF" strokeWidth="0.4" />
      <line x1="8" y1="55" x2="12" y2="55" stroke="#3FD0FF" strokeWidth="0.4" />
      <circle cx="10" cy="0" r="1.2" fill="#3FD0FF" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* =============================================
   ARCHITECTURE DIAGRAMS FOR EACH CASE
   ============================================= */

/* Shared building blocks */
function DiagramBox({ x, y, w, h, label, sub, glow }: { x: number; y: number; w: number; h: number; label: string; sub?: string; glow?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" stroke="#3FD0FF" strokeWidth={glow ? 1.5 : 1} fill="#3FD0FF" fillOpacity={glow ? 0.12 : 0.05} />
      {glow && <rect x={x} y={y} width={w} height={h} rx="6" stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.3" filter="url(#glow)" />}
      <text x={x + w / 2} y={y + (sub ? h / 2 - 4 : h / 2 + 1)} textAnchor="middle" dominantBaseline="middle" fill="#3FD0FF" fontSize="9" fontWeight="600">{label}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 8} textAnchor="middle" dominantBaseline="middle" fill="#3FD0FF" fillOpacity="0.45" fontSize="6.5">{sub}</text>}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, dashed }: { x1: number; y1: number; x2: number; y2: number; dashed?: boolean }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray={dashed ? "3 3" : undefined} markerEnd="url(#arrowhead)" />;
}

function ArrowCurve({ d, dashed }: { d: string; dashed?: boolean }) {
  return <path d={d} stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.4" fill="none" strokeDasharray={dashed ? "3 3" : undefined} markerEnd="url(#arrowhead)" />;
}

function DiagramDefs() {
  return (
    <defs>
      <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
        <polygon points="0 0, 6 2, 0 4" fill="#3FD0FF" fillOpacity="0.5" />
      </marker>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
  );
}

/* Case 1: Oil & Gas HSE — Orchestrator with Dialog, History, Evaluator + PageIndex search + Doc generator */
function OilArchitecture() {
  return (
    <svg viewBox="0 0 480 340" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <DiagramDefs />

      {/* User */}
      <circle cx="240" cy="24" r="12" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.08" />
      <text x="240" y="28" textAnchor="middle" fill="#3FD0FF" fontSize="8" fillOpacity="0.6">👤</text>
      <text x="240" y="48" textAnchor="middle" fill="#3FD0FF" fontSize="7" fillOpacity="0.5">RU / KZ / EN</text>

      {/* Arrow user → orchestrator */}
      <Arrow x1={240} y1={52} x2={240} y2={72} />

      {/* ORCHESTRATOR — central hub */}
      <DiagramBox x={160} y={75} w={160} h={40} label="Оркестратор" sub="LangGraph Agent" glow />

      {/* Three sub-agents below orchestrator */}
      {/* Dialog Agent */}
      <Arrow x1={200} y1={115} x2={80} y2={145} />
      <DiagramBox x={20} y={148} w={120} h={45} label="Диалог-агент" sub="Контекст + Слоты" />

      {/* History Agent */}
      <Arrow x1={240} y1={115} x2={240} y2={145} />
      <DiagramBox x={180} y={148} w={120} h={45} label="История" sub="Memory / Redis" />

      {/* Evaluator Agent */}
      <Arrow x1={280} y1={115} x2={400} y2={145} />
      <DiagramBox x={340} y={148} w={120} h={45} label="Оценщик рисков" sub="LLM + Правила HSE" />

      {/* Connections between sub-agents */}
      <Arrow x1={140} y1={170} x2={178} y2={170} dashed />
      <Arrow x1={302} y1={170} x2={338} y2={170} dashed />

      {/* PageIndex Search */}
      <Arrow x1={80} y1={193} x2={80} y2={218} />
      <DiagramBox x={20} y={222} w={120} h={40} label="Поисковик" sub="PageIndex Search" />

      {/* Document Store */}
      <Arrow x1={80} y1={262} x2={80} y2={285} />
      <g>
        <rect x="30" y="288" width="100" height="28" rx="4" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" fill="#3FD0FF" fillOpacity="0.03" />
        <text x="80" y="300" textAnchor="middle" fill="#3FD0FF" fontSize="7" fillOpacity="0.5">Документы</text>
        <text x="80" y="310" textAnchor="middle" fill="#3FD0FF" fontSize="6" fillOpacity="0.35">ПТО / HSE / Регламенты</text>
      </g>

      {/* Doc Generator */}
      <Arrow x1={400} y1={193} x2={400} y2={218} />
      <DiagramBox x={340} y={222} w={120} h={40} label="Генератор" sub="Документы / PDF" />

      {/* Output */}
      <Arrow x1={400} y1={262} x2={400} y2={285} />
      <g>
        <rect x="365" y="288" width="70" height="28" rx="4" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" fill="#3FD0FF" fillOpacity="0.03" />
        <text x="400" y="300" textAnchor="middle" fill="#3FD0FF" fontSize="7" fillOpacity="0.5">Наряд-допуск</text>
        <text x="400" y="310" textAnchor="middle" fill="#3FD0FF" fontSize="6" fillOpacity="0.35">PDF / Отчёт</text>
      </g>

      {/* Corp systems */}
      <Arrow x1={240} y1={193} x2={240} y2={218} dashed />
      <DiagramBox x={180} y={222} w={120} h={40} label="Корп. системы" sub="SAP / 1C / API" />

      {/* Flowing data dots animation */}
      <circle r="2" fill="#3FD0FF" fillOpacity="0.6">
        <animateMotion dur="3s" repeatCount="indefinite" path="M240,52 L240,75 L240,115 L200,148" />
      </circle>
      <circle r="2" fill="#3FD0FF" fillOpacity="0.4">
        <animateMotion dur="4s" repeatCount="indefinite" path="M240,115 L400,148 L400,222 L400,288" />
      </circle>
    </svg>
  );
}

/* Case 2: City Analytics — NL2SQL + RAG + 1000 tables, validation 160/172, maps, charts */
function CityArchitecture() {
  return (
    <svg viewBox="0 0 520 445" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <DiagramDefs />

      {/* NL Query input */}
      <DiagramBox x={195} y={8} w={130} h={35} label="NL-запрос" sub="Пользователь" glow />
      <Arrow x1={260} y1={43} x2={260} y2={58} />

      {/* Router */}
      <DiagramBox x={185} y={62} w={150} h={35} label="Query Router" sub="SQL или RAG?" glow />

      {/* LEFT BRANCH — Text-to-SQL */}
      <Arrow x1={220} y1={97} x2={120} y2={118} />
      <DiagramBox x={45} y={122} w={150} h={40} label="Text-to-SQL" sub="LLM + Schema Linker" />

      {/* SQL Validator */}
      <Arrow x1={120} y1={162} x2={120} y2={178} />
      <DiagramBox x={50} y={182} w={140} h={35} label="SQL Валидатор" sub="160 / 172 тестов ✓" />

      {/* Score badge */}
      <g>
        <rect x="3" y="130" width="38" height="24" rx="12" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.1" />
        <text x="22" y="141" textAnchor="middle" fill="#3FD0FF" fontSize="9" fontWeight="700">93%</text>
        <text x="22" y="150" textAnchor="middle" fill="#3FD0FF" fontSize="4.5" fillOpacity="0.5">accuracy</text>
      </g>

      {/* PostgreSQL */}
      <Arrow x1={120} y1={217} x2={100} y2={232} />
      <g>
        <ellipse cx="100" cy="248" rx="45" ry="12" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.06" />
        <text x="100" y="246" textAnchor="middle" fill="#3FD0FF" fontSize="6.5" fontWeight="600">PostgreSQL + PostGIS</text>
        <text x="100" y="256" textAnchor="middle" fill="#3FD0FF" fontSize="5" fillOpacity="0.45">1000+ таблиц</text>
      </g>

      {/* RIGHT BRANCH — RAG */}
      <Arrow x1={300} y1={97} x2={400} y2={118} />
      <DiagramBox x={325} y={122} w={150} h={40} label="RAG Pipeline" sub="Chunk + Embed + Retrieve" />

      {/* Embeddings */}
      <Arrow x1={400} y1={162} x2={400} y2={178} />
      <DiagramBox x={335} y={182} w={130} h={35} label="Embeddings" sub="OpenAI / E5 / BGE" />

      {/* Vector DB */}
      <Arrow x1={400} y1={217} x2={420} y2={232} />
      <g>
        <ellipse cx="420" cy="248" rx="42" ry="12" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.06" />
        <text x="420" y="246" textAnchor="middle" fill="#3FD0FF" fontSize="6.5" fontWeight="600">Vector DB</text>
        <text x="420" y="256" textAnchor="middle" fill="#3FD0FF" fontSize="5" fillOpacity="0.45">Qdrant / pgvector</text>
      </g>

      {/* Result Combiner */}
      <ArrowCurve d="M100,272 C100,284 180,290 255,290" dashed />
      <ArrowCurve d="M420,272 C420,284 340,290 265,290" dashed />
      <DiagramBox x={195} y={288} w={130} h={30} label="Результаты" sub="SQL + RAG → Ответ" glow />

      {/* Three outputs row */}
      {/* Charts */}
      <Arrow x1={220} y1={318} x2={77} y2={335} />
      <g>
        <rect x="20" y="338" width="115" height="60" rx="6" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.04" />
        <text x="77" y="351" textAnchor="middle" fill="#3FD0FF" fontSize="7" fontWeight="600">Графики</text>
        {[35, 50, 65, 80, 95].map((x, i) => {
          const h = [18, 30, 22, 35, 14][i];
          return <rect key={i} x={x} y={392 - h} width="9" height={h} rx="1.5" fill="#3FD0FF" fillOpacity={0.15 + i * 0.04} />;
        })}
        <line x1="28" y1="393" x2="125" y2="393" stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.2" />
      </g>

      {/* Map */}
      <Arrow x1={260} y1={318} x2={260} y2={335} />
      <g>
        <rect x="195" y="338" width="130" height="60" rx="6" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.04" />
        <text x="260" y="351" textAnchor="middle" fill="#3FD0FF" fontSize="7" fontWeight="600">Карта Алматы</text>
        <path d="M210 362 Q235 358 260 366 Q280 370 305 364" stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.2" />
        <path d="M215 372 Q245 368 265 375 Q285 379 310 374" stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.15" />
        <path d="M213 381 Q240 377 260 384 Q280 387 308 382" stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.12" />
        {[
          [233, 364, 4], [262, 370, 6], [280, 366, 3], [248, 376, 5], [270, 382, 3],
          [225, 374, 3], [290, 374, 4], [252, 386, 2],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#3FD0FF" fillOpacity={0.08 + i * 0.01} />
        ))}
        <circle cx="262" cy="370" r="2" fill="#3FD0FF" fillOpacity="0.5" />
      </g>

      {/* Analysis */}
      <Arrow x1={300} y1={318} x2={442} y2={335} />
      <g>
        <rect x="385" y="338" width="115" height="60" rx="6" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.04" />
        <text x="442" y="351" textAnchor="middle" fill="#3FD0FF" fontSize="7" fontWeight="600">Анализ</text>
        <polyline points="400,384 412,374 424,380 436,368 448,372 460,362 472,366" stroke="#3FD0FF" strokeWidth="1" fill="none" strokeOpacity="0.4" />
        <path d="M460 364 L472 358" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.5" markerEnd="url(#arrowhead)" />
        <text x="442" y="394" textAnchor="middle" fill="#3FD0FF" fontSize="5.5" fillOpacity="0.4">↑ 23% эффективность</text>
      </g>

      {/* ETL pipeline at bottom */}
      <g>
        <line x1="50" y1="418" x2="470" y2="418" stroke="#3FD0FF" strokeWidth="0.5" strokeOpacity="0.15" />
        <text x="260" y="432" textAnchor="middle" fill="#3FD0FF" fontSize="6" fillOpacity="0.3">Airflow + DBT → ETL Pipeline</text>
        {[90, 170, 260, 350, 430].map((x) => (
          <circle key={x} cx={x} cy="418" r="2" stroke="#3FD0FF" strokeWidth="0.5" fill="#3FD0FF" fillOpacity="0.1" />
        ))}
      </g>

      {/* Animated data flows */}
      <circle r="2" fill="#3FD0FF" fillOpacity="0.5">
        <animateMotion dur="3s" repeatCount="indefinite" path="M260,43 L260,62 L220,97 L120,122 L120,182 L120,248" />
      </circle>
      <circle r="2" fill="#3FD0FF" fillOpacity="0.4">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M260,62 L300,97 L400,122 L400,182 L400,248" />
      </circle>
    </svg>
  );
}

/* Case 3: Corporate Chat — RAG multi-agent with knowledge graph */
function ChatArchitecture() {
  return (
    <svg viewBox="0 0 480 350" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <DiagramDefs />

      {/* Input channels */}
      <DiagramBox x={60} y={8} w={90} h={30} label="Telegram" />
      <DiagramBox x={195} y={8} w={90} h={30} label="Web Chat" />
      <DiagramBox x={330} y={8} w={90} h={30} label="API" />

      {/* Arrows to gateway */}
      <Arrow x1={105} y1={38} x2={200} y2={62} />
      <Arrow x1={240} y1={38} x2={240} y2={62} />
      <Arrow x1={375} y1={38} x2={280} y2={62} />

      {/* API Gateway */}
      <DiagramBox x={170} y={65} w={140} h={32} label="API Gateway" sub="Auth + Rate Limit" />

      {/* Arrow to Router */}
      <Arrow x1={240} y1={97} x2={240} y2={112} />

      {/* Intent Router — the brain */}
      <DiagramBox x={155} y={115} w={170} h={40} label="Intent Router" sub="Классификация намерений" glow />

      {/* Three branches */}
      {/* RAG branch */}
      <Arrow x1={195} y1={155} x2={80} y2={180} />
      <DiagramBox x={20} y={185} w={120} h={42} label="RAG Pipeline" sub="Chunk + Embed + Retrieve" />

      {/* SQL branch */}
      <Arrow x1={240} y1={155} x2={240} y2={180} />
      <DiagramBox x={175} y={185} w={130} h={42} label="SQL Agent" sub="Text → Query → Result" />

      {/* Task Agent branch */}
      <Arrow x1={285} y1={155} x2={400} y2={180} />
      <DiagramBox x={340} y={185} w={120} h={42} label="Task Agent" sub="Автономные действия" />

      {/* Knowledge sources below RAG */}
      <Arrow x1={50} y1={227} x2={50} y2={248} />
      <Arrow x1={110} y1={227} x2={110} y2={248} />
      <g>
        <rect x="15" y="252" width="45" height="32" rx="4" stroke="#3FD0FF" strokeWidth="0.6" fill="#3FD0FF" fillOpacity="0.04" />
        <text x="37" y="265" textAnchor="middle" fill="#3FD0FF" fontSize="6.5">Docs</text>
        <text x="37" y="276" textAnchor="middle" fill="#3FD0FF" fontSize="5" fillOpacity="0.4">PDF/DOCX</text>
      </g>
      <g>
        <rect x="75" y="252" width="60" height="32" rx="4" stroke="#3FD0FF" strokeWidth="0.6" fill="#3FD0FF" fillOpacity="0.04" />
        <text x="105" y="265" textAnchor="middle" fill="#3FD0FF" fontSize="6.5">Vector DB</text>
        <text x="105" y="276" textAnchor="middle" fill="#3FD0FF" fontSize="5" fillOpacity="0.4">Qdrant</text>
      </g>

      {/* DB below SQL Agent */}
      <Arrow x1={240} y1={227} x2={240} y2={248} />
      <g>
        <ellipse cx="240" cy="268" rx="50" ry="14" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.04" />
        <text x="240" y="271" textAnchor="middle" fill="#3FD0FF" fontSize="7" fillOpacity="0.5">PostgreSQL</text>
      </g>

      {/* Tools below Task Agent */}
      <Arrow x1={370} y1={227} x2={370} y2={248} />
      <Arrow x1={430} y1={227} x2={430} y2={248} />
      <g>
        <rect x="345" y="252" width="45" height="32" rx="4" stroke="#3FD0FF" strokeWidth="0.6" fill="#3FD0FF" fillOpacity="0.04" />
        <text x="367" y="265" textAnchor="middle" fill="#3FD0FF" fontSize="6">Jira</text>
        <text x="367" y="276" textAnchor="middle" fill="#3FD0FF" fontSize="5" fillOpacity="0.4">Задачи</text>
      </g>
      <g>
        <rect x="405" y="252" width="50" height="32" rx="4" stroke="#3FD0FF" strokeWidth="0.6" fill="#3FD0FF" fillOpacity="0.04" />
        <text x="430" y="265" textAnchor="middle" fill="#3FD0FF" fontSize="6">Calendar</text>
        <text x="430" y="276" textAnchor="middle" fill="#3FD0FF" fontSize="5" fillOpacity="0.4">Встречи</text>
      </g>

      {/* Response synthesis */}
      <ArrowCurve d="M80,227 C80,300 200,310 230,308" dashed />
      <ArrowCurve d="M240,282 C240,298 240,300 240,308" dashed />
      <ArrowCurve d="M400,227 C400,300 280,310 250,308" dashed />

      <DiagramBox x={170} y={305} w={140} h={32} label="Ответ пользователю" sub="Markdown + Цитаты" glow />

      {/* Animated dots */}
      <circle r="2" fill="#3FD0FF" fillOpacity="0.5">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M240,38 L240,65 L240,115 L195,155 L80,185" />
      </circle>
      <circle r="2" fill="#3FD0FF" fillOpacity="0.4">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M240,155 L240,185 L240,227 L240,268" />
      </circle>
    </svg>
  );
}

const architectures = [<OilArchitecture key="a-oil" />, <CityArchitecture key="a-city" />, <ChatArchitecture key="a-chat" />];

/* Small illustrations for collapsed cards */
function OilIllustration() {
  return (
    <svg viewBox="0 0 140 110" fill="none" className="w-28 h-22 mb-3">
      <path d="M50 95 L60 15 L70 15 L80 95" stroke="#3FD0FF" strokeWidth="1.5" />
      <line x1="55" y1="35" x2="75" y2="35" stroke="#3FD0FF" strokeWidth="1" />
      <line x1="53" y1="55" x2="77" y2="55" stroke="#3FD0FF" strokeWidth="1" />
      <line x1="51" y1="75" x2="79" y2="75" stroke="#3FD0FF" strokeWidth="1" />
      <line x1="56" y1="35" x2="76" y2="55" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="76" y1="35" x2="56" y2="55" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="54" y1="55" x2="78" y2="75" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="78" y1="55" x2="54" y2="75" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.3" />
      <rect x="58" y="10" width="14" height="8" rx="2" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.08" />
      <circle cx="65" cy="8" r="2" fill="#3FD0FF" fillOpacity="0.25" />
      <path d="M80 75 L110 60 L120 65 L115 72" stroke="#3FD0FF" strokeWidth="1.2" />
      <circle cx="120" cy="65" r="4" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M48 95 L10 95 L10 100 L130 100 L130 95" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M95 30 L102 22 L110 28 L118 15 L126 20" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="2 2" />
      <circle cx="118" cy="15" r="2.5" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" fill="#3FD0FF" fillOpacity="0.08" />
      <line x1="5" y1="95" x2="135" y2="95" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.15" />
    </svg>
  );
}

function CityIllustration() {
  return (
    <svg viewBox="0 0 140 110" fill="none" className="w-28 h-22 mb-3">
      <rect x="30" y="20" width="22" height="80" rx="2" stroke="#3FD0FF" strokeWidth="1.5" fill="#3FD0FF" fillOpacity="0.04" />
      {[28, 38, 48, 58, 68, 78, 88].map((y) => (
        <g key={y}>
          <rect x="34" y={y} width="4" height="4" rx="0.5" fill="#3FD0FF" fillOpacity="0.15" />
          <rect x="42" y={y} width="4" height="4" rx="0.5" fill="#3FD0FF" fillOpacity={0.08 + (y % 3) * 0.04} />
        </g>
      ))}
      <rect x="56" y="38" width="18" height="62" rx="2" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.03" />
      {[44, 54, 64, 74, 84].map((y) => (
        <g key={y}>
          <rect x="60" y={y} width="3" height="3" rx="0.5" fill="#3FD0FF" fillOpacity="0.12" />
          <rect x="67" y={y} width="3" height="3" rx="0.5" fill="#3FD0FF" fillOpacity="0.08" />
        </g>
      ))}
      <rect x="8" y="55" width="18" height="45" rx="2" stroke="#3FD0FF" strokeWidth="1" fill="#3FD0FF" fillOpacity="0.03" />
      {[60, 70, 80].map((y) => (
        <rect key={y} x="12" y={y} width="10" height="3" rx="0.5" fill="#3FD0FF" fillOpacity="0.1" />
      ))}
      <line x1="41" y1="20" x2="41" y2="8" stroke="#3FD0FF" strokeWidth="0.8" />
      <circle cx="41" cy="7" r="1.5" fill="#3FD0FF" fillOpacity="0.3">
        <animate attributeName="fillOpacity" values="0.15;0.45;0.15" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M45 12 C49 8 49 4 45 0" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" />
      <path d="M48 14 C54 8 54 2 48 -4" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.12" />
      <path d="M78 50 L92 50 L92 70 L108 70" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.25" />
      <circle cx="92" cy="50" r="2" fill="#3FD0FF" fillOpacity="0.12" />
      <circle cx="92" cy="70" r="2" fill="#3FD0FF" fillOpacity="0.12" />
      <circle cx="108" cy="70" r="2.5" fill="#3FD0FF" fillOpacity="0.15" />
      <path d="M108 70 L120 62 L132 68" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" />
      <circle cx="85" cy="50" r="1" fill="#3FD0FF" fillOpacity="0.3">
        <animate attributeName="cx" values="78;108" dur="3s" repeatCount="indefinite" />
        <animate attributeName="cy" values="50;70" dur="3s" repeatCount="indefinite" />
      </circle>
      <line x1="5" y1="100" x2="135" y2="100" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.15" />
    </svg>
  );
}

function ChatIllustration() {
  return (
    <svg viewBox="0 0 140 110" fill="none" className="w-28 h-22 mb-3">
      <circle cx="22" cy="30" r="8" stroke="#3FD0FF" strokeWidth="1" />
      <path d="M10 58 C10 46 34 46 34 58" stroke="#3FD0FF" strokeWidth="1" />
      <rect x="42" y="18" width="50" height="30" rx="8" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.04" />
      <path d="M48 48 L42 58 L58 48" stroke="#3FD0FF" strokeWidth="1.2" />
      <line x1="52" y1="28" x2="80" y2="28" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="52" y1="35" x2="74" y2="35" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.25" />
      <line x1="52" y1="42" x2="68" y2="42" stroke="#3FD0FF" strokeWidth="1" strokeOpacity="0.15" />
      <rect x="100" y="22" width="28" height="24" rx="6" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.06" />
      <circle cx="110" cy="32" r="3" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.1" />
      <circle cx="120" cy="32" r="3" stroke="#3FD0FF" strokeWidth="0.8" fill="#3FD0FF" fillOpacity="0.1" />
      <path d="M108 38 L122 38" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="114" y1="22" x2="114" y2="14" stroke="#3FD0FF" strokeWidth="0.8" />
      <circle cx="114" cy="12" r="2" fill="#3FD0FF" fillOpacity="0.2">
        <animate attributeName="fillOpacity" values="0.1;0.35;0.1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <rect x="48" y="65" width="56" height="28" rx="8" stroke="#3FD0FF" strokeWidth="1.2" fill="#3FD0FF" fillOpacity="0.06" />
      <path d="M96 93 L104 102 L92 93" stroke="#3FD0FF" strokeWidth="1.2" />
      <text x="56" y="78" fill="#3FD0FF" fillOpacity="0.35" fontSize="7" fontFamily="monospace">{'{ }'}</text>
      <line x1="74" y1="76" x2="94" y2="76" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="56" y1="84" x2="88" y2="84" stroke="#3FD0FF" strokeWidth="0.8" strokeOpacity="0.2" />
      <path d="M34 40 L42 36" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="2 2" />
      <path d="M92 36 L100 34" stroke="#3FD0FF" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="2 2" />
    </svg>
  );
}

const cardIllustrations = [
  <OilIllustration key="oil" />,
  <CityIllustration key="city" />,
  <ChatIllustration key="chat" />,
];

export default function Solutions() {
  const t = useTranslations("solutions");
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="solutions" className="py-20 md:py-30 px-6 md:px-12 relative overflow-hidden">
      <MountainSkyline />
      <TvTower />

      <div className="text-center max-w-[700px] mx-auto mb-18 relative">
        <div className="inline-flex items-center gap-2 bg-cyan/10 px-4 py-2 rounded-full text-xs font-bold text-cyan tracking-widest uppercase mb-5">
          {t("tag")}
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(32px,3.5vw,48px)] text-white mb-4 leading-tight">
          {t("title")}
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed">{t("subtitle")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {keys.map((key, i) => {
          const list: string[] = t.raw(`${key}List`);
          return (
            <div
              key={key}
              className="group glass-card bg-abyss/50 rounded-2xl px-10 pt-8 pb-14 text-white relative overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col after:content-[''] after:absolute after:-top-1/2 after:-right-1/2 after:w-full after:h-full after:bg-[radial-gradient(circle,rgba(63,208,255,0.08),transparent_60%)] after:opacity-0 after:transition-opacity after:duration-400 hover:after:opacity-100"
            >
              <div className="flex justify-center opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                {cardIllustrations[i]}
              </div>
              <h3 className="font-heading font-bold text-2xl text-cyan mb-4 relative">
                {t(key)}
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed relative">
                {t(`${key}Desc`)}
              </p>
              <ul className="list-none mt-6 relative">
                {list.map((li, j) => (
                  <li key={j} className="py-2 text-sm text-white/70 flex items-center gap-2.5">
                    <span className="text-cyan font-bold">→</span>
                    {li}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 relative">
                <button
                  className="w-full text-center text-sm text-cyan/50 font-medium py-2.5 border border-cyan/15 rounded-xl hover:border-cyan/30 hover:text-cyan/80 transition-all cursor-pointer bg-transparent"
                  onClick={() => setExpanded(i)}
                >
                  Архитектура →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Overlay modal */}
      {expanded !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          onClick={() => setExpanded(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-deep/85 backdrop-blur-md" />

          {/* Modal content */}
          <div
            className="relative glass-panel rounded-2xl p-8 md:p-12 max-w-[1100px] w-full max-h-[90vh] overflow-y-auto animate-[fadeUp_0.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-5 text-cyan/40 hover:text-cyan text-xl cursor-pointer bg-transparent border-none transition-colors"
              onClick={() => setExpanded(null)}
            >
              ✕
            </button>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left — info */}
              <div className="lg:w-2/5">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-cyan mb-4">
                  {t(keys[expanded])}
                </h3>
                <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                  {t(`${keys[expanded]}Desc`)}
                </p>
                <ul className="list-none">
                  {(t.raw(`${keys[expanded]}List`) as string[]).map((li, j) => (
                    <li key={j} className="py-2.5 text-sm text-white/70 flex items-center gap-2.5">
                      <span className="text-cyan font-bold">→</span>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — architecture diagram */}
              <div className="lg:w-3/5 flex items-center justify-center">
                {architectures[expanded]}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
