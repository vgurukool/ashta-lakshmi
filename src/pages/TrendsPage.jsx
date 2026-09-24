import React, { useState } from 'react';
import {
  TrendingUp,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Award,
  Zap,
  RotateCcw
} from 'lucide-react';
import {
  INITIAL_LAKSHMI_DATA,
  MULTI_YEAR_LONGITUDINAL_DATA
} from '../data/lakshmiData';

export function TrendsPage({ onNavigate, onSelectLakshmi }) {
  const [activeStreamMode, setActiveStreamMode] = useState('both'); // 'both', 'blended', 'psychometric', 'empirical'

  const showPsychometric = activeStreamMode === 'both' || activeStreamMode === 'psychometric';
  const showEmpirical = activeStreamMode === 'both' || activeStreamMode === 'empirical';
  const showBlended = activeStreamMode === 'both' || activeStreamMode === 'blended';
  const showConvergence = activeStreamMode === 'both';

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-6 lg:p-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-cyan-950/50 via-slate-900 to-indigo-950/40 border border-cyan-500/30 p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <span>📈 Longitudinal Harmony Audit</span>
              <span className="text-cyan-400">•</span>
              <span>Samvatsara 2024 – 2026 Chronology</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Multi-Year Psychometric vs. Empirical Score Trajectory
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Track personal evolution over time by juxtaposing subjective self-reported Likert audits against objective automated companion app telemetry. Witness how personal self-awareness sharpens and blindspots collapse into grounded Vedic flourishing.
            </p>
          </div>

          {/* Time Horizon & Layer Filter Controls */}
          <div className="flex flex-col gap-2.5 w-full lg:w-auto bg-slate-950/90 border border-slate-800 p-4 rounded-2xl shrink-0">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Stream Visibility Layers
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setActiveStreamMode('both')}
                className={`px-3 py-1.5 rounded-lg font-bold transition text-center cursor-pointer ${
                  activeStreamMode === 'both'
                    ? 'bg-cyan-600 text-white shadow'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                Dual Stream (Both)
              </button>
              <button
                onClick={() => setActiveStreamMode('blended')}
                className={`px-3 py-1.5 rounded-lg font-bold transition text-center cursor-pointer ${
                  activeStreamMode === 'blended'
                    ? 'bg-cyan-600 text-white shadow'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                Blended Score
              </button>
              <button
                onClick={() => setActiveStreamMode('psychometric')}
                className={`px-3 py-1.5 rounded-lg font-bold transition text-center cursor-pointer ${
                  activeStreamMode === 'psychometric'
                    ? 'bg-cyan-600 text-white shadow'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                Psychometric (Likert)
              </button>
              <button
                onClick={() => setActiveStreamMode('empirical')}
                className={`px-3 py-1.5 rounded-lg font-bold transition text-center cursor-pointer ${
                  activeStreamMode === 'empirical'
                    ? 'bg-cyan-600 text-white shadow'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                Empirical (Apps)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Top Executive KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Harmonic Index Arc</span>
            <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
              +10.2% ▲
            </span>
          </div>
          <div className="text-2xl font-black text-white">
            58.2% <span className="text-xs text-slate-500 font-normal">➔</span> 68.4%
          </div>
          <div className="text-[11px] text-slate-400">
            Continuous systemic compounding across 8 spokes since 2024 baseline.
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Blindspot Delta (Δ)</span>
            <span className="text-xs text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded">
              75% Calibrated
            </span>
          </div>
          <div className="text-2xl font-black text-cyan-300">
            -18.4% <span className="text-xs text-slate-500 font-normal">➔</span> -4.6%
          </div>
          <div className="text-[11px] text-slate-400">
            Wishful self-perception collapsed into objective empirical ground-truth.
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Top Breakthrough Spoke</span>
            <span className="text-xs text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded">
              +23.0% 🚀
            </span>
          </div>
          <div className="text-2xl font-black text-amber-300 flex items-center gap-2">
            <span>🏆 Vijaya</span>
            <span className="text-sm font-semibold text-slate-400">(48% ➔ 71%)</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Sprint execution habits & daily OKR momentum eliminated goal drift.
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-slate-900/80 border border-rose-500/30 bg-rose-950/10 p-5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs text-rose-400">
            <span>Persistent Bottleneck</span>
            <span className="text-xs text-rose-300 font-bold bg-rose-500/20 px-2 py-0.5 rounded">
              Critical Drag
            </span>
          </div>
          <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
            <span>🌿 Dhanya</span>
            <span className="text-sm font-semibold text-slate-400">(38% ➔ 34%)</span>
          </div>
          <div className="text-[11px] text-rose-300/80">
            Chronic sleep deficit and circadian strain capping overall harmonic potential.
          </div>
        </div>
      </div>

      {/* Visual Multi-Year Trajectory Chart */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>📈</span> Multi-Year Harmonic Evolution: Psychometric vs. Empirical Convergence
            </h3>
            <p className="text-xs text-slate-400">
              Longitudinal score curves spanning Samvatsara 2024 (Baseline), 2025 (Midpoint), and 2026 (Present).
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-3 h-0.5 bg-emerald-400"></span>
              <span>Psychometric (Likert)</span>
            </div>
            <div className="flex items-center gap-1.5 text-purple-400">
              <span className="w-3 h-0.5 bg-purple-400"></span>
              <span>Empirical (Telemetry)</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <span className="w-3 h-0.5 bg-amber-400 border border-dashed"></span>
              <span>Blended Index</span>
            </div>
          </div>
        </div>

        {/* Interactive SVG Trajectory Chart */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 800 280" className="w-full h-auto overflow-visible select-none">
            <defs>
              <linearGradient id="convergenceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Grid horizontal lines */}
            <line x1="80" y1="40" x2="750" y2="40" stroke="#334155" strokeDasharray="3,3" opacity="0.4" />
            <text x="65" y="44" fill="#64748B" fontSize="10" textAnchor="end" fontFamily="monospace">100%</text>

            <line x1="80" y1="90" x2="750" y2="90" stroke="#334155" strokeDasharray="3,3" opacity="0.4" />
            <text x="65" y="94" fill="#64748B" fontSize="10" textAnchor="end" fontFamily="monospace">75%</text>

            <line x1="80" y1="140" x2="750" y2="140" stroke="#334155" strokeDasharray="3,3" opacity="0.4" />
            <text x="65" y="144" fill="#64748B" fontSize="10" textAnchor="end" fontFamily="monospace">50%</text>

            <line x1="80" y1="190" x2="750" y2="190" stroke="#334155" strokeDasharray="3,3" opacity="0.4" />
            <text x="65" y="194" fill="#64748B" fontSize="10" textAnchor="end" fontFamily="monospace">25%</text>

            <line x1="80" y1="240" x2="750" y2="240" stroke="#475569" strokeWidth="1.5" />
            <text x="65" y="244" fill="#64748B" fontSize="10" textAnchor="end" fontFamily="monospace">0%</text>

            {/* Convergence Band and Callouts */}
            {showConvergence && (
              <g>
                <polygon points="180,107 430,103 680,97 680,106 430,122 180,143" fill="url(#convergenceGradient)" />
                <rect x="155" y="115" width="50" height="18" rx="4" fill="#1E293B" stroke="#475569" />
                <text x="180" y="127" fill="#F87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="monospace">Δ -18.4%</text>
                <rect x="405" y="105" width="50" height="18" rx="4" fill="#1E293B" stroke="#475569" />
                <text x="430" y="117" fill="#FBBF24" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="monospace">Δ -9.2%</text>
                <rect x="655" y="93" width="50" height="18" rx="4" fill="#1E293B" stroke="#10B981" />
                <text x="680" y="105" fill="#34D399" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="monospace">Δ -4.6% ✓</text>
              </g>
            )}

            {/* Vertical year guidelines */}
            <line x1="180" y1="40" x2="180" y2="240" stroke="#334155" strokeDasharray="2,2" opacity="0.5" />
            <text x="180" y="260" fill="#94A3B8" fontSize="12" fontWeight="700" textAnchor="middle">2024 (Baseline)</text>

            <line x1="430" y1="40" x2="430" y2="240" stroke="#334155" strokeDasharray="2,2" opacity="0.5" />
            <text x="430" y="260" fill="#94A3B8" fontSize="12" fontWeight="700" textAnchor="middle">2025 (Midpoint)</text>

            <line x1="680" y1="40" x2="680" y2="240" stroke="#334155" strokeDasharray="2,2" opacity="0.5" />
            <text x="680" y="260" fill="#38BDF8" fontSize="12" fontWeight="800" textAnchor="middle">2026 (Present)</text>

            {/* STREAM 1: Psychometric Self-Report Line (Emerald) */}
            {showPsychometric && (
              <g>
                <path d="M 180 107 L 430 103 L 680 97" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                <circle cx="180" cy="107" r="5" fill="#10B981" />
                <text x="180" y="95" fill="#6EE7B7" fontSize="11" fontWeight="700" textAnchor="middle">66.7%</text>

                <circle cx="430" cy="103" r="5" fill="#10B981" />
                <text x="430" y="91" fill="#6EE7B7" fontSize="11" fontWeight="700" textAnchor="middle">68.3%</text>

                <circle cx="680" cy="97" r="6" fill="#10B981" stroke="#047857" strokeWidth="2" />
                <text x="680" y="85" fill="#A7F3D0" fontSize="12" fontWeight="800" textAnchor="middle">71.4%</text>
              </g>
            )}

            {/* STREAM 2: Empirical Telemetry Line (Purple) */}
            {showEmpirical && (
              <g>
                <path d="M 180 143 L 430 122 L 680 106" fill="none" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" />
                <circle cx="180" cy="143" r="5" fill="#A855F7" />
                <text x="180" y="160" fill="#D8B4FE" fontSize="11" fontWeight="700" textAnchor="middle">48.3%</text>

                <circle cx="430" cy="122" r="5" fill="#A855F7" />
                <text x="430" y="139" fill="#D8B4FE" fontSize="11" fontWeight="700" textAnchor="middle">59.1%</text>

                <circle cx="680" cy="106" r="6" fill="#A855F7" stroke="#7E22CE" strokeWidth="2" />
                <text x="680" y="123" fill="#E9D5FF" fontSize="12" fontWeight="800" textAnchor="middle">66.8%</text>
              </g>
            )}

            {/* STREAM 3: Blended Harmonic Index Curve (Amber) */}
            {showBlended && (
              <g>
                <path d="M 180 124 L 430 112 L 680 103" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4,3" strokeLinecap="round" />
                <circle cx="180" cy="124" r="3.5" fill="#F59E0B" />
                <circle cx="430" cy="112" r="3.5" fill="#F59E0B" />
                <circle cx="680" cy="103" r="4.5" fill="#F59E0B" />
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* 8 Dimensions Longitudinal Performance & Blindspot Convergence Table */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>📊</span> 8-Dimension Longitudinal Performance & Blindspot Convergence
            </h3>
            <p className="text-xs text-slate-400">
              Comparing subjective Likert evaluations against companion app telemetry across all Samvatsaras.
            </p>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Formula: Δ = Empirical - Psychometric
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                <th className="py-3 px-3">Wealth Spoke</th>
                <th className="py-3 px-3">2024 Baseline</th>
                <th className="py-3 px-3">2025 Midpoint</th>
                <th className="py-3 px-3">2026 Present</th>
                <th className="py-3 px-3">3-Yr Delta Shift</th>
                <th className="py-3 px-3">Trajectory State</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {INITIAL_LAKSHMI_DATA.map(l => {
                const b24Self = MULTI_YEAR_LONGITUDINAL_DATA.baseline2024.scores[l.id];
                const b24Emp = MULTI_YEAR_LONGITUDINAL_DATA.baseline2024.empirical[l.id];
                const m25Self = MULTI_YEAR_LONGITUDINAL_DATA.midpoint2025.scores[l.id];
                const m25Emp = MULTI_YEAR_LONGITUDINAL_DATA.midpoint2025.empirical[l.id];
                const p26Self = MULTI_YEAR_LONGITUDINAL_DATA.present2026.scores[l.id];
                const p26Emp = MULTI_YEAR_LONGITUDINAL_DATA.present2026.empirical[l.id];

                const delta24 = b24Emp - b24Self;
                const delta25 = m25Emp - m25Self;
                const delta26 = p26Emp - p26Self;
                const netGain = p26Self - b24Self;

                const isBot = l.id === 'dhanya';

                return (
                  <tr
                    key={l.id}
                    className={`hover:bg-slate-800/30 transition ${
                      isBot ? 'bg-rose-950/20 border-l-2 border-rose-500' : ''
                    }`}
                  >
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <span>{l.emoji}</span>
                        <span className="font-bold text-white">{l.sanskritName.split(' ')[0]}</span>
                        <span className="text-[10px] text-slate-400">{l.englishTitle.split(' ')[0]}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-slate-300 font-mono">Likert: {b24Self}% • App: {b24Emp}%</div>
                      <span className={`text-[10px] font-mono font-bold ${delta24 < -10 ? 'text-rose-400' : 'text-amber-400'}`}>
                        Δ {delta24 > 0 ? `+${delta24}%` : `${delta24}%`}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-slate-300 font-mono">Likert: {m25Self}% • App: {m25Emp}%</div>
                      <span className={`text-[10px] font-mono font-bold ${delta25 < -10 ? 'text-rose-400' : 'text-amber-400'}`}>
                        Δ {delta25 > 0 ? `+${delta25}%` : `${delta25}%`}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-white font-mono font-bold">Likert: {p26Self}% • App: {p26Emp}%</div>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">
                        Δ {delta26 > 0 ? `+${delta26}%` : `${delta26}%`} ✓
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono font-bold">
                      <span className={netGain >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                        {netGain >= 0 ? `+${netGain}% Net Gain` : `${netGain}% Deficit`}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                          isBot
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}
                      >
                        {isBot ? '🚨 Urgent Bottleneck' : 'Calibrated'}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={() => onSelectLakshmi(l.id)}
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                      >
                        Portal →
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4-Year Vedic Archetype Metamorphosis Journey */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>👑</span> 4-Year Vedic Archetype Metamorphosis Journey
            </h3>
            <p className="text-xs text-slate-400">
              How your life-balance persona evolved as systemic friction dissolved.
            </p>
          </div>
          <span className="text-xs text-purple-400 font-mono">Samvatsara Chronology</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* 2024 */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 opacity-75">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono font-bold">Samvatsara 2024</span>
              <span className="text-[10px] text-slate-400">Harmonic: 58.2%</span>
            </div>
            <div className="text-base font-bold text-slate-200">⚙️ Karma-Yogi</div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Heavy physical and cognitive toil. High perception inflation (Δ -18.4%) masking late-night sleep depletion.
            </p>
          </div>

          {/* 2025 */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 opacity-90">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono font-bold">Samvatsara 2025</span>
              <span className="text-[10px] text-amber-400 font-bold">Harmonic: 63.8%</span>
            </div>
            <div className="text-base font-bold text-amber-300">⚔️ Kshatriya-Neta</div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Execution discipline took hold. Dhana debt eliminated; Vijaya sprint habits surging, self-awareness calibrated to Δ -9.2%.
            </p>
          </div>

          {/* 2026 (Present) */}
          <div className="bg-gradient-to-b from-indigo-950/60 to-slate-950 p-4 rounded-xl border-2 border-indigo-500/50 space-y-2 shadow-lg shadow-indigo-500/10">
            <div className="flex items-center justify-between text-xs">
              <span className="text-indigo-400 font-mono font-bold">Samvatsara 2026 (Present)</span>
              <span className="text-[10px] text-emerald-400 font-bold">Harmonic: 68.4%</span>
            </div>
            <div className="text-base font-bold text-white flex items-center gap-1.5">
              <span>👑 Raja-Rishi</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">Active</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Sovereign balance across 7 of 8 dimensions. Grounded self-awareness (Δ -4.6%). Capped solely by Dhanya biological deficit.
            </p>
          </div>

          {/* 2027 (Projected Target) */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-dashed border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono font-bold">Samvatsara 2027 (Target)</span>
              <span className="text-[10px] text-purple-400 font-bold">Projected: 78%+</span>
            </div>
            <div className="text-base font-bold text-purple-300">🌟 Purna-Purusha</div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Unlocking Dhanya to 75%+ via 14-day Dinacharya resets will elevate the harmonic index above 78%, unlocking integral sage-leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
