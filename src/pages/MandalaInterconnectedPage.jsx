import React, { useState } from 'react';
import {
  Sparkles,
  RefreshCw,
  Sliders,
  Activity,
  Zap,
  ArrowRight,
  AlertTriangle,
  RotateCcw,
  ShieldAlert,
  Info
} from 'lucide-react';
import { INITIAL_LAKSHMI_DATA } from '../data/lakshmiData';

export function MandalaInterconnectedPage({ onNavigate, onSelectLakshmi }) {
  const [sliderVals, setSliderVals] = useState({
    dhanya: 34,
    adi: 84,
    vidya: 74,
    dhana: 82
  });

  const handleSliderChange = (key, value) => {
    setSliderVals(prev => ({ ...prev, [key]: Number(value) }));
  };

  const handleResetSliders = () => {
    setSliderVals({
      dhanya: 34,
      adi: 84,
      vidya: 74,
      dhana: 82
    });
  };

  const dhanyaVal = sliderVals.dhanya;
  const vidyaVal = sliderVals.vidya;
  const cappedVidya = Math.round(dhanyaVal * 1.35);

  const getImpactStatus = () => {
    if (dhanyaVal < 45) {
      return {
        level: 'critical',
        border: 'border-rose-500/40',
        bg: 'bg-rose-950/30',
        text: 'text-rose-300',
        title: '⚠️ Active Choke Effect Detected',
        desc: `Dhanya at ${dhanyaVal}% creates an acute metabolic bottleneck. Your theoretical learning in Vidya (${vidyaVal}%) loses over 35% effectiveness (capped at ${cappedVidya}%) due to sleep deprivation and cognitive fatigue.`
      };
    } else if (dhanyaVal < 70) {
      return {
        level: 'moderate',
        border: 'border-amber-500/40',
        bg: 'bg-amber-950/30',
        text: 'text-amber-300',
        title: '⚖️ Moderate Friction Detected',
        desc: `Dhanya at ${dhanyaVal}% supports baseline function, but lack of deep restorative sleep causes mid-afternoon cognitive slumps during intense analytical work.`
      };
    } else {
      return {
        level: 'abundant',
        border: 'border-emerald-500/40',
        bg: 'bg-emerald-950/30',
        text: 'text-emerald-300',
        title: '🌿 Satvic Abundance & Full Flow',
        desc: `Dhanya at ${dhanyaVal}% generates radiant Ojas (cellular vigor). Cognitive retention in Vidya (${vidyaVal}%) operates completely unconstrained.`
      };
    }
  };

  const impact = getImpactStatus();

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6 lg:p-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Mandala Interconnected Flow Simulator
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              ⚡ Page 2: Systemic Harmony Dynamics
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Adjust dimension sliders below to simulate how deficits in one area choke dependent forms of wealth in real time.
          </p>
        </div>
        <button
          onClick={handleResetSliders}
          className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-3.5 py-2 rounded-lg border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw size={13} />
          <span>Reset Baseline</span>
        </button>
      </div>

      {/* Simulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders Simulation Box (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center justify-between">
            <span>Interactive Spoke Sliders</span>
            <span className="text-[10px] text-slate-500">Live Recalculation</span>
          </h3>

          <div className="space-y-3.5">
            {/* Dhanya Slider (The Bottleneck) */}
            <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-rose-300 flex items-center gap-1.5">
                  <span>🌿</span> Dhanya (Vitality & Sleep) — Primary Choke Point
                </span>
                <span className="font-mono font-bold text-rose-400 bg-rose-900/40 px-2 py-0.5 rounded border border-rose-800/40">
                  {sliderVals.dhanya}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={sliderVals.dhanya}
                onChange={(e) => handleSliderChange('dhanya', e.target.value)}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <div className="text-[10px] text-rose-300/80">
                Dragging this below 40% immediately chokes Vidya study focus and Vijaya execution stamina.
              </div>
            </div>

            {/* Adi Slider */}
            <div className="bg-slate-950 p-3.5 rounded-xl space-y-1.5 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-violet-400"></span> Adi (Spiritual Peace & Equanimity)
                </span>
                <span className="font-mono font-bold text-violet-400 bg-violet-950/40 px-2 py-0.5 rounded border border-violet-800/40">
                  {sliderVals.adi}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={sliderVals.adi}
                onChange={(e) => handleSliderChange('adi', e.target.value)}
                className="w-full accent-violet-500 cursor-pointer"
              />
            </div>

            {/* Vidya Slider */}
            <div className="bg-slate-950 p-3.5 rounded-xl space-y-1.5 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span> Vidya (Knowledge & Epistemic Depth)
                </span>
                <span className="font-mono font-bold text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-800/40">
                  {sliderVals.vidya}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={sliderVals.vidya}
                onChange={(e) => handleSliderChange('vidya', e.target.value)}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            {/* Dhana Slider */}
            <div className="bg-slate-950 p-3.5 rounded-xl space-y-1.5 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Dhana (Capital & Liquidity)
                </span>
                <span className="font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                  {sliderVals.dhana}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={sliderVals.dhana}
                onChange={(e) => handleSliderChange('dhana', e.target.value)}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Drag Visualization (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">Systemic Impact Matrix</h3>

            {/* Dynamic Output Box */}
            <div className={`p-4 rounded-xl border ${impact.border} ${impact.bg} space-y-2`}>
              <div className={`text-xs font-bold ${impact.text} flex items-center gap-1.5`}>
                <span>{impact.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {impact.desc}
              </p>
            </div>

            {/* Taittiriya Vedic Energy Cycle */}
            <div className="space-y-2 text-xs">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Taittiriya Vedic Energy Cycle (Koshas)
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">1. Annamaya (Food/Health):</span>
                  <span className={`font-bold ${dhanyaVal < 45 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {dhanyaVal}% {dhanyaVal < 45 ? '(Choked)' : '(Satvic)'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 pl-3">↓ provides biological fuel to:</div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">2. Pranamaya & Manomaya (Mind/Focus):</span>
                  <span className={`font-bold ${dhanyaVal < 45 ? 'text-blue-400' : 'text-emerald-400'}`}>
                    {vidyaVal}% {dhanyaVal < 45 ? `(Capped at ${cappedVidya}%)` : '(Full Flow)'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 pl-3">↓ translates to career output:</div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">3. Vijnanamaya (Victory/Vijaya):</span>
                  <span className="font-bold text-amber-400">68%</span>
                </div>
                <div className="text-[10px] text-slate-500 pl-3">↓ yields financial surplus & peace:</div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">4. Anandamaya (Dhana & Adi Bliss):</span>
                  <span className="font-bold text-emerald-400">82%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Systemic Closed-Loop Harmony Matrix Table */}
      <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>🔄</span> Systemic Closed-Loop Dependency Matrix
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Every form of wealth nourishes upstream feeders and depends upon downstream foundations.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] uppercase tracking-wider text-slate-400">
                <th className="py-3 px-3">Wealth Dimension</th>
                <th className="py-3 px-3">Upstream Nourishers (Inbound)</th>
                <th className="py-3 px-3">Downstream Dependents (Outbound)</th>
                <th className="py-3 px-3">Systemic Consequence of Deficit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {INITIAL_LAKSHMI_DATA.map((l) => (
                <tr key={l.id} className="hover:bg-slate-800/30 transition">
                  <td className="py-3 px-3 font-semibold text-white whitespace-nowrap">
                    <span className="mr-1.5">{l.emoji}</span>
                    <span>{l.sanskritName.split(' ')[0]} Lakshmi</span>
                  </td>
                  <td className="py-3 px-3 text-slate-300">
                    {l.inbound.map((inb, i) => (
                      <span key={i} className="inline-block bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[11px] mr-1 mb-1">
                        {inb.name}
                      </span>
                    ))}
                  </td>
                  <td className="py-3 px-3 text-slate-300">
                    {l.outbound.map((out, i) => (
                      <span key={i} className="inline-block bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[11px] mr-1 mb-1">
                        {out.name}
                      </span>
                    ))}
                  </td>
                  <td className="py-3 px-3 text-slate-400 leading-snug">
                    {l.statusDesc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Page 2 to Page 3 Navigation Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-emerald-950/40 border border-emerald-500/30 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Step 2 Complete</div>
          <h3 className="text-sm font-bold text-white mt-0.5">Understand the Dynamic Flows? Now Map Your Own Spokes</h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Take the free 3-minute pulse assessment to uncover your personal bottleneck and Vedic archetype.
          </p>
        </div>
        <button
          onClick={() => onNavigate('questionnaire')}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-black px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <span>Proceed to Page 3: Take Assessment ➔</span>
        </button>
      </div>
    </div>
  );
}
