import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Award,
  Layers,
  Zap
} from 'lucide-react';
import { INITIAL_LAKSHMI_DATA } from '../data/lakshmiData';

export function WealthHubPage({ lakshmiState, onSelectLakshmi, onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto space-y-6 p-6 lg:p-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-2">
            <span>🏛️ Wealth Portals Directory</span>
            <span className="text-slate-500">•</span>
            <span>8 Sovereign Domains</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            The Eight Wealth Pages Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Direct gateway to each dedicated Lakshmi sanctuary. Each portal contains live mini-mandala flows, 4 ecosystem action launchpads, sub-facet breakdowns, and a 14-day prescriptive recalibration sadhana.
          </p>
        </div>

        <button
          onClick={() => onNavigate('radar')}
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 transition cursor-pointer shrink-0 flex items-center gap-2"
        >
          <span>☸ View Mandala Radar</span>
        </button>
      </div>

      {/* 8-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {INITIAL_LAKSHMI_DATA.map(item => {
          const live = lakshmiState[item.id] || item;
          const qList = live.questions || [];
          const score = qList.length
            ? Math.round(qList.reduce((acc, q) => acc + Number(q.score), 0) / qList.length)
            : 70;
          const isCritical = score < 40;

          return (
            <div
              key={item.id}
              className={`bg-slate-900/80 border p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition group ${
                isCritical ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-800'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-2xl shrink-0">
                    {item.emoji}
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-black font-mono ${isCritical ? 'text-rose-400' : 'text-white'}`}>
                      {score}%
                    </div>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded font-bold ${
                        isCritical
                          ? 'bg-rose-950 text-rose-300 border border-rose-800'
                          : score >= 75
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {isCritical ? '🚨 Bottleneck' : (score >= 75 ? 'Abundant' : 'Harmonizing')}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                    {item.sanskritName.split(' ')[0]} Lakshmi
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Micro Sub-facets Preview */}
                <div className="space-y-1.5 pt-1">
                  {(item.subFacets || []).slice(0, 3).map((sf, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span className="truncate max-w-[140px]">{sf.name}</span>
                        <span className="font-bold text-slate-300 font-mono">{sf.score}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            sf.score < 40 ? 'bg-rose-500' : (sf.score < 75 ? 'bg-amber-500' : 'bg-emerald-500')
                          }`}
                          style={{ width: `${sf.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectLakshmi(item.id)}
                className="w-full bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold py-2 rounded-xl border border-slate-700/80 transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Explore {item.sanskritName.split(' ')[0]} Portal</span>
                <span>→</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
