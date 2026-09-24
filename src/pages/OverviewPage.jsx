import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Award,
  Zap,
  BookOpen,
  Scale,
  Compass,
  AlertTriangle
} from 'lucide-react';
import { INITIAL_LAKSHMI_DATA } from '../data/lakshmiData';

export function OverviewPage({ onNavigate, onSelectLakshmi }) {
  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6 lg:p-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <span>📜 Page 1: Informational Blueprint</span>
            <span className="text-slate-500">•</span>
            <span>Open to All Seekers & Guests</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
            The Eight Sovereign Dimensions of Prosperity (<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Ashta Lakshmi</span>)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            In Sanatana Dharma, wealth is not merely financial capital (<em className="text-amber-300">Artha / Dhana</em>). True human flourishing requires eight mutually reinforcing dimensions of abundance. Without spiritual stillness (<em class="text-indigo-300">Adi</em>) and biological vitality (<em class="text-rose-300">Dhanya</em>), financial wealth brings anxiety and physical decay. Below is the sacred blueprint of the eight forms and the Vedic Life Archetypes derived from their balance.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('matrix')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center gap-2 cursor-pointer"
            >
              <span>⚡ Next: Interconnected Flows (Page 2)</span>
              <span>➔</span>
            </button>
            <button
              onClick={() => onNavigate('questionnaire')}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2 cursor-pointer"
            >
              <span>📝 Free Diagnostic Assessment (Page 3)</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. THE 8 FORMS OF WEALTH: FULL PHILOSOPHICAL ESSENCE */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>🏛️</span> The Eight Forms of Wealth
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Classical Vedic roots combined with modern life-harmony diagnostics.</p>
          </div>
          <span className="text-xs text-indigo-400 font-mono bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
            8 Sovereign Spoke Matrix
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INITIAL_LAKSHMI_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 p-5 rounded-2xl transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-xl shrink-0">
                      {item.emoji}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {idx + 1}. {item.sanskritName}
                      </h3>
                      <span className="text-[10px] text-slate-400 font-medium block">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded font-mono shrink-0">
                    {item.ontologicalDomain.split(',')[0]}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.canonicalProse}
                </p>

                {item.modernManifestations && (
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Core Modern Manifestations:
                    </div>
                    {item.modernManifestations.map((man, i) => (
                      <div key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{man}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60">
                <span className="italic text-slate-500 font-serif">
                  {item.scripture}
                </span>
                <button
                  onClick={() => onSelectLakshmi(item.id)}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition cursor-pointer"
                >
                  Open {item.sanskritName.split(' ')[0]} Portal ➜
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. VEDIC LIFE ARCHETYPES & REQUIRED POINTS CRITERIA */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>👑</span> Vedic Life Archetypes & Scoring Criteria
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Exact score thresholds and criteria required to classify human flourishment states.</p>
          </div>
          <span className="text-xs text-amber-400 font-mono bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
            Diagnostic Archetype Rules
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Raja-Rishi */}
          <div className="bg-gradient-to-b from-purple-950/40 to-slate-900 border border-purple-500/40 p-5 rounded-2xl space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-2xl">👑</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                Pinnacle Mastery
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Raja-Rishi (King-Sage)</h3>
              <div className="text-[11px] text-purple-300 font-medium">Sovereign Mastery & Holistic Abundance</div>
            </div>
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Required Scoring Criteria:</div>
              <div className="font-mono text-purple-200">• Minimum in all 8: <strong className="text-emerald-400">≥ 70%</strong></div>
              <div className="font-mono text-purple-200">• Harmonic Mean (Index): <strong className="text-emerald-400">≥ 75%</strong></div>
              <div className="font-mono text-purple-200">• Peak Pillars: <strong className="text-blue-400">At least 2 ≥ 85%</strong></div>
              <div className="font-mono text-purple-200">• Bottlenecks: <strong className="text-amber-400">None &lt; 50%</strong></div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Represents King Janaka or Marcus Aurelius: executive strength and financial stability combined with unbroken inner calm and philosophical depth.
            </p>
          </div>

          {/* Tapasvi-Yogi */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-violet-500/40 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🧘</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded border border-violet-500/30">
                Inner Sanctum
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Tapasvi-Yogi (Ascetic Seeker)</h3>
              <div className="text-[11px] text-violet-300 font-medium">Spiritual Stillness + Inner Freedom</div>
            </div>
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Required Scoring Criteria:</div>
              <div className="font-mono text-violet-200">• Adi (Spiritual): <strong className="text-violet-400">≥ 85%</strong></div>
              <div className="font-mono text-violet-200">• Vidya (Wisdom): <strong className="text-blue-400">≥ 80%</strong></div>
              <div className="font-mono text-violet-200">• Dhairya (Courage): <strong className="text-orange-400">≥ 75%</strong></div>
              <div className="font-mono text-slate-400">• Dhana: Permitted lower without penalty</div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Immense meditative peace and resilience, but purposefully unconcerned with liquid wealth accumulation or institutional real estate.
            </p>
          </div>

          {/* Kshatriya-Neta */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">⚔️</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">
                Righteous Sovereign
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Kshatriya-Neta (Executive Leader)</h3>
              <div className="text-[11px] text-cyan-300 font-medium">Executive Leadership & Strategic Risk Armor</div>
            </div>
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Required Scoring Criteria:</div>
              <div className="font-mono text-cyan-200">• Vijaya (Execution): <strong className="text-amber-400">≥ 85%</strong></div>
              <div className="font-mono text-cyan-200">• Gaja (Sovereignty): <strong className="text-cyan-400">≥ 80%</strong></div>
              <div className="font-mono text-cyan-200">• Dhairya (Fortitude): <strong className="text-orange-400">≥ 80%</strong></div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              A commander of action and institutional scale. Must maintain daily stillness (Adi) to prevent aggressive burnout.
            </p>
          </div>

          {/* Vaishya-Pati */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🌾</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                Enterprise Builder
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Vaishya-Pati (Dharmic Enterprise)</h3>
              <div className="text-[11px] text-emerald-300 font-medium">Capital Circulation, Enterprise & Generosity</div>
            </div>
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Required Scoring Criteria:</div>
              <div className="font-mono text-emerald-200">• Dhana (Capital): <strong className="text-emerald-400">≥ 85%</strong></div>
              <div className="font-mono text-emerald-200">• Santana (Lineage): <strong className="text-pink-400">≥ 75%</strong></div>
              <div className="font-mono text-emerald-200">• Vijaya (Grit): <strong className="text-amber-400">≥ 75%</strong></div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Master of enterprise and righteous material flow. Builds sustainable commerce, jobs, and generous philanthropic endowments (Dāna).
            </p>
          </div>

          {/* Brahmana-Acharya */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">📜</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                Sacred Scholar
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Brahmana-Acharya (Polymath)</h3>
              <div className="text-[11px] text-blue-300 font-medium">Epistemic Transmission & Philosophical Depth</div>
            </div>
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Required Scoring Criteria:</div>
              <div className="font-mono text-blue-200">• Vidya (Wisdom): <strong className="text-blue-400">≥ 90%</strong></div>
              <div className="font-mono text-blue-200">• Adi (Contemplation): <strong className="text-violet-400">≥ 80%</strong></div>
              <div className="font-mono text-blue-200">• Santana (Discipleship): <strong className="text-pink-400">≥ 75%</strong></div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Vast philosophical, scriptural, and scientific brilliance. Dedicated to dispersing ignorance across society through sacred teaching.
            </p>
          </div>

          {/* Karma-Yogi */}
          <div className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">⚙️</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                Craftsman
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Karma-Yogi (Dedicated Craftsman)</h3>
              <div className="text-[11px] text-amber-300 font-medium">Grounded Execution & Selfless Work</div>
            </div>
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Required Scoring Criteria:</div>
              <div className="font-mono text-amber-200">• Vijaya (Execution): <strong className="text-amber-400">≥ 80%</strong></div>
              <div className="font-mono text-amber-200">• Dhanya (Vitality): <strong className="text-rose-400">≥ 75%</strong></div>
              <div className="font-mono text-amber-200">• Adi (Inner Ground): <strong className="text-violet-400">≥ 70%</strong></div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Pragmatic, disciplined execution and physical vitality. Relentless dedication to the pure mastery of craft without ego attachment.
            </p>
          </div>
        </div>
      </div>

      {/* 3. MATHEMATICAL BALANCE RULES: HARMONIC VS ARITHMETIC MEAN */}
      <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl">
            <Scale size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">The Mathematical Balance Rules</h2>
            <p className="text-xs text-slate-400">Why Vedic Prosperity requires the Harmonic Mean over the Arithmetic Average.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-amber-300 font-bold">
              <span>Harmonic Mean Formula (H)</span>
              <span className="font-mono text-xs">H = 8 / Σ (1 / xᵢ)</span>
            </div>
            <p>
              In conventional life metrics, an arithmetic mean allows extreme success in one dimension (e.g. 95% Dhana) to mathematically mask a fatal deficit in another (e.g. 30% Dhanya sleep breakdown).
            </p>
            <p className="text-slate-400">
              The <strong>Harmonic Mean</strong> heavily penalizes low outliers. If even one spoke is broken, the entire Harmonic Index is dragged down, accurately representing the true felt experience of systemic friction.
            </p>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-rose-300 font-bold">
              <span>Bottleneck Constraint Principle</span>
              <span className="font-mono text-xs">System Ceiling = min(xᵢ)</span>
            </div>
            <p>
              Goldratt's Theory of Constraints aligns with Vedic Ayurveda: a chariot cannot travel faster than its weakest wheel. If physical stamina (<em className="text-rose-400">Dhanya</em>) collapses, cognitive bandwidth (<em className="text-blue-400">Vidya</em>) drops by over 30%.
            </p>
            <p className="text-slate-400">
              The Ashta Lakshmi Diagnostic Suite automatically highlights your single lowest dimension as the primary leverage point for life recalibration.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Footer CTA */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/40 border border-amber-500/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white">Ready to Map Your Personal Prosperity Profile?</h3>
          <p className="text-xs text-slate-300 mt-1">
            Explore Page 2 to see the dynamic closed-loop energy flows, or start the 3-minute audit on Page 3.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('matrix')}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 transition cursor-pointer"
          >
            Page 2: Interconnected Flows →
          </button>
          <button
            onClick={() => onNavigate('questionnaire')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg transition cursor-pointer"
          >
            Page 3: Start Assessment 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
