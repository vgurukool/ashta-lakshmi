import React, { useMemo } from 'react';
import {
  Sun,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Award,
  Scale,
  Calendar,
  Layers,
  TrendingUp,
  FileText
} from 'lucide-react';
import {
  INITIAL_LAKSHMI_DATA,
  calculateHarmonicIndex,
  calculateArithmeticMean,
  findCriticalBottleneck,
  classifyArchetype,
  getScoreRangeConfig
} from '../data/lakshmiData';

export function DashboardPage({
  lakshmiState,
  multiYearState,
  selectedYear = '2026',
  setSelectedYear,
  onNavigate,
  onSelectLakshmi
}) {
  // Compute live scores for all 8 Lakshmis
  const dimensionScores = useMemo(() => {
    const scores = {};
    INITIAL_LAKSHMI_DATA.forEach(def => {
      const cur = lakshmiState[def.id] || def;
      const qList = cur.questions || [];
      if (qList.length === 0) {
        scores[def.id] = 50;
      } else {
        const sum = qList.reduce((acc, q) => acc + (Number(q.score) || 0), 0);
        scores[def.id] = Math.round(sum / qList.length);
      }
    });
    return scores;
  }, [lakshmiState]);

  const harmonicIndex = calculateHarmonicIndex(dimensionScores);
  const arithmeticMean = calculateArithmeticMean(dimensionScores);
  const bottleneck = findCriticalBottleneck(dimensionScores);
  const archetype = classifyArchetype(dimensionScores, harmonicIndex);

  // SVG Radar Coordinates:
  // Center is (200, 200), Max Radius = 140 (so 100% -> radius 140)
  // Angles:
  // Adi: Top (0° / 270° in standard math, y up -> 200, 200 - r)
  // Dhana: 45° Top-Right
  // Dhanya: 90° Right
  // Gaja: 135° Bottom-Right
  // Santana: 180° Bottom
  // Dhairya: 225° Bottom-Left
  // Vijaya: 270° Left
  // Vidya: 315° Top-Left

  const getPoint = (score, angleDeg) => {
    const r = (Math.max(10, Math.min(100, score)) / 100) * 140;
    const rad = (angleDeg - 90) * (Math.PI / 180);
    const x = Math.round(200 + r * Math.cos(rad));
    const y = Math.round(200 + r * Math.sin(rad));
    return { x, y };
  };

  const pAdi = getPoint(dimensionScores.adi || 84, 0);
  const pDhana = getPoint(dimensionScores.dhana || 82, 45);
  const pDhanya = getPoint(dimensionScores.dhanya || 34, 90);
  const pGaja = getPoint(dimensionScores.gaja || 71, 135);
  const pSantana = getPoint(dimensionScores.santana || 76, 180);
  const pDhairya = getPoint(dimensionScores.dhairya || 65, 225);
  const pVijaya = getPoint(dimensionScores.vijaya || 68, 270);
  const pVidya = getPoint(dimensionScores.vidya || 74, 315);

  const polygonPoints = `${pAdi.x},${pAdi.y} ${pDhana.x},${pDhana.y} ${pDhanya.x},${pDhanya.y} ${pGaja.x},${pGaja.y} ${pSantana.x},${pSantana.y} ${pDhairya.x},${pDhairya.y} ${pVijaya.x},${pVijaya.y} ${pVidya.x},${pVidya.y}`;

  const isBottleneckSevere = bottleneck.score < 40;

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-6 lg:p-8">
      {/* Radar Top Overview Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Vedic Mandala Balance Radar
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Samvatsara {selectedYear} Audit
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Visualizing the eight sovereign spokes of human flourishing. In Vedic metaphysics, harmony is governed by the bottleneck dimension.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('questionnaire')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition cursor-pointer"
          >
            📝 Retake Assessment
          </button>
          <button
            onClick={() => alert(`Exporting Branded Vedic Life Harmony Dossier for Samvatsara ${selectedYear}...`)}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-700 transition cursor-pointer flex items-center gap-1.5"
          >
            <FileText size={14} />
            <span>Export Dossier</span>
          </button>
        </div>
      </div>

      {/* Radar Visual & Archetype Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive SVG Radar Wheel (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center relative">
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              8-Dimensional Prosperity Radar
            </span>
            <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded font-mono">
              Radial Scale: 0–100%
            </span>
          </div>

          {/* SVG Radar Canvas Container */}
          <div className="w-full max-w-[420px] aspect-square relative flex items-center justify-center my-2">
            <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
              {/* Concentric Web Rings (20%, 40%, 60%, 80%, 100%) */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="200" cy="200" r="112" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx="200" cy="200" r="84" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx="200" cy="200" r="56" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx="200" cy="200" r="28" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />

              {/* 8 Radial Spokes */}
              <line x1="200" y1="200" x2="200" y2="60" stroke="#475569" strokeWidth="1" />
              <line x1="200" y1="200" x2="299" y2="101" stroke="#475569" strokeWidth="1" />
              <line x1="200" y1="200" x2="340" y2="200" stroke="#475569" strokeWidth="1" />
              <line x1="200" y1="200" x2="299" y2="299" stroke="#475569" strokeWidth="1" />
              <line x1="200" y1="200" x2="200" y2="340" stroke="#475569" strokeWidth="1" />
              <line x1="200" y1="200" x2="101" y2="299" stroke="#475569" strokeWidth="1" />
              <line x1="200" y1="200" x2="60" y2="200" stroke="#475569" strokeWidth="1" />
              <line x1="200" y1="200" x2="101" y2="101" stroke="#475569" strokeWidth="1" />

              {/* User Radar Polygon */}
              <polygon
                points={polygonPoints}
                fill="rgba(99, 102, 241, 0.25)"
                stroke="#818CF8"
                strokeWidth="2.5"
                className="transition-all duration-500"
              />

              {/* Spoke Labels & Points (Clickable) */}
              {/* 1. Adi (Top) */}
              <circle cx={pAdi.x} cy={pAdi.y} r="5" fill="#8B5CF6" className="cursor-pointer" onClick={() => onSelectLakshmi('adi')} />
              <text x="200" y="32" textAnchor="middle" fill="#C4B5FD" fontSize="11" fontWeight="700" className="cursor-pointer" onClick={() => onSelectLakshmi('adi')}>
                Adi ({dimensionScores.adi}%)
              </text>

              {/* 2. Dhana (Top-Right) */}
              <circle cx={pDhana.x} cy={pDhana.y} r="5" fill="#10B981" className="cursor-pointer" onClick={() => onSelectLakshmi('dhana')} />
              <text x="325" y="100" textAnchor="start" fill="#6EE7B7" fontSize="11" fontWeight="700" className="cursor-pointer" onClick={() => onSelectLakshmi('dhana')}>
                Dhana ({dimensionScores.dhana}%)
              </text>

              {/* 3. Dhanya (Right - Bottleneck) */}
              {dimensionScores.dhanya < 40 && (
                <circle cx={pDhanya.x} cy={pDhanya.y} r="8" fill="#EF4444" opacity="0.4" className="animate-ping cursor-pointer" />
              )}
              <circle cx={pDhanya.x} cy={pDhanya.y} r="5.5" fill="#EF4444" className="cursor-pointer" onClick={() => onSelectLakshmi('dhanya')} />
              <text x="355" y="205" textAnchor="start" fill="#FCA5A5" fontSize="11" fontWeight="800" className="cursor-pointer" onClick={() => onSelectLakshmi('dhanya')}>
                Dhanya ({dimensionScores.dhanya}%) {dimensionScores.dhanya < 40 ? '⚠️' : ''}
              </text>

              {/* 4. Gaja (Bottom-Right) */}
              <circle cx={pGaja.x} cy={pGaja.y} r="5" fill="#06B6D4" className="cursor-pointer" onClick={() => onSelectLakshmi('gaja')} />
              <text x="320" y="310" textAnchor="start" fill="#67E8F9" fontSize="11" fontWeight="700" className="cursor-pointer" onClick={() => onSelectLakshmi('gaja')}>
                Gaja ({dimensionScores.gaja}%)
              </text>

              {/* 5. Santana (Bottom) */}
              <circle cx={pSantana.x} cy={pSantana.y} r="5" fill="#EC4899" className="cursor-pointer" onClick={() => onSelectLakshmi('santana')} />
              <text x="200" y="375" textAnchor="middle" fill="#F472B6" fontSize="11" fontWeight="700" className="cursor-pointer" onClick={() => onSelectLakshmi('santana')}>
                Santana ({dimensionScores.santana}%)
              </text>

              {/* 6. Dhairya (Bottom-Left) */}
              <circle cx={pDhairya.x} cy={pDhairya.y} r="5" fill="#F97316" className="cursor-pointer" onClick={() => onSelectLakshmi('dhairya')} />
              <text x="75" y="310" textAnchor="end" fill="#FDBA74" fontSize="11" fontWeight="700" className="cursor-pointer" onClick={() => onSelectLakshmi('dhairya')}>
                Dhairya ({dimensionScores.dhairya}%)
              </text>

              {/* 7. Vijaya (Left) */}
              <circle cx={pVijaya.x} cy={pVijaya.y} r="5" fill="#EAB308" className="cursor-pointer" onClick={() => onSelectLakshmi('vijaya')} />
              <text x="40" y="205" textAnchor="end" fill="#FDE047" fontSize="11" fontWeight="700" className="cursor-pointer" onClick={() => onSelectLakshmi('vijaya')}>
                Vijaya ({dimensionScores.vijaya}%)
              </text>

              {/* 8. Vidya (Top-Left) */}
              <circle cx={pVidya.x} cy={pVidya.y} r="5" fill="#3B82F6" className="cursor-pointer" onClick={() => onSelectLakshmi('vidya')} />
              <text x="75" y="100" textAnchor="end" fill="#93C5FD" fontSize="11" fontWeight="700" className="cursor-pointer" onClick={() => onSelectLakshmi('vidya')}>
                Vidya ({dimensionScores.vidya}%)
              </text>
            </svg>
          </div>

          <div className="text-[11px] text-slate-400 mt-2 text-center">
            💡 Click any spoke node to jump directly into its dedicated wealth detail portal.
          </div>
        </div>

        {/* Right Side Diagnostic Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Vedic Archetype Card */}
          <div className="bg-gradient-to-br from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/30 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400">
                Vedic Prosperity Archetype
              </span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30 font-semibold">
                Classified Profile
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-300 text-2xl flex items-center justify-center border border-purple-500/30 shrink-0">
                👑
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white">
                  {archetype.title}
                </h4>
                <p className="text-[11px] text-slate-400">{archetype.tagline}</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {archetype.description}
            </p>
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-[11px] text-purple-200">
              <strong>Recalibration Focus:</strong> {archetype.advice}
            </div>
          </div>

          {/* Bottleneck Constraint Alert */}
          <div
            className={`p-5 rounded-2xl space-y-2.5 transition-all border ${
              isBottleneckSevere
                ? 'bg-rose-950/30 border-rose-500/50'
                : 'bg-amber-950/30 border-amber-500/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center gap-2 font-bold text-xs uppercase tracking-wider ${
                  isBottleneckSevere ? 'text-rose-400' : 'text-amber-400'
                }`}
              >
                <span>🚨</span> Active Bottleneck Constraint
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                  isBottleneckSevere
                    ? 'text-rose-300 bg-rose-900/60'
                    : 'text-amber-300 bg-amber-900/60'
                }`}
              >
                {bottleneck.score}% Score
              </span>
            </div>
            <h4 className="text-sm font-bold text-white">
              {bottleneck.fullName}
            </h4>
            <p className="text-xs text-slate-300 leading-snug">
              Under the Vedic <strong>Theory of Constraints</strong>, your overall life flourishing is capped by your most depleted spoke. Cellular fatigue or friction places a ceiling on your higher creative and career potential.
            </p>
            <button
              onClick={() => onSelectLakshmi(bottleneck.id)}
              className={`w-full font-bold text-xs py-2 rounded-xl shadow-md transition cursor-pointer ${
                isBottleneckSevere
                  ? 'bg-rose-600 hover:bg-rose-500 text-white'
                  : 'bg-amber-600 hover:bg-amber-500 text-slate-950'
              }`}
            >
              Recalibrate {bottleneck.name} Constraint ➜
            </button>
          </div>

          {/* Harmonic vs Arithmetic Comparison Card */}
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl space-y-2 text-xs">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Mathematical Rigor
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Simple Arithmetic Average:</span>
              <span className="font-bold text-slate-100 font-mono">{arithmeticMean}%</span>
            </div>
            <div className="flex items-center justify-between text-amber-300 font-semibold">
              <span>Harmonic Balance Index (True Life Mean):</span>
              <span className="font-bold text-amber-400 font-mono text-sm">{harmonicIndex}%</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-tight pt-1">
              The Harmonic Mean heavily penalizes critical deficits to prevent false security when health, sleep, or peace collapses.
            </p>
          </div>
        </div>
      </div>

      {/* 8 Dimension Quick Summary Cards Grid */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>🏛️</span> 8 Sovereign Pillars Summary
          </h3>
          <button
            onClick={() => onNavigate('wealthHub')}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition cursor-pointer"
          >
            View Full 8 Wealth Pages Hub →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {INITIAL_LAKSHMI_DATA.map(l => {
            const score = dimensionScores[l.id] || 70;
            const isBot = l.id === bottleneck.id;
            return (
              <div
                key={l.id}
                onClick={() => onSelectLakshmi(l.id)}
                className={`bg-slate-900/80 border p-3.5 rounded-xl hover:border-indigo-500/50 transition cursor-pointer flex flex-col justify-between space-y-2 ${
                  isBot ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl">{l.emoji}</span>
                  <span className="font-mono font-bold text-xs text-white">
                    {score}%
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200 truncate">
                    {l.sanskritName.split(' ')[0]}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {l.englishTitle}
                  </div>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      score < 40
                        ? 'bg-rose-500'
                        : score < 75
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
