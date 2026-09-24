import React from 'react';
import {
  BookOpen,
  Zap,
  ClipboardList,
  Compass,
  Layers,
  Activity,
  TrendingUp,
  Lock,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { INITIAL_LAKSHMI_DATA } from '../data/lakshmiData';

export function Sidebar({
  activeTab,
  setActiveTab,
  lakshmiState,
  onSelectLakshmi,
  isAuthenticated,
  selectedLakshmiId
}) {
  const isGuest = !isAuthenticated;

  return (
    <aside className="w-64 border-r border-slate-800/80 bg-[#0D1424] p-4 flex flex-col justify-between shrink-0 h-screen sticky top-0 overflow-y-auto">
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-violet-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-lg">
            ☸
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-black text-white tracking-wide">
                ASHTA LAKSHMI
              </h1>
              <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                v2.0
              </span>
            </div>
            <p className="text-[10px] text-slate-400">Vedic Life Harmony Engine</p>
          </div>
        </div>

        {/* 1. PUBLIC EXPLORATION FUNNEL (GUEST OPEN) */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 px-3 mb-2 flex items-center justify-between">
            <span>Public Exploration</span>
            <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-mono">
              Guest Open
            </span>
          </div>
          <nav className="space-y-1">
            {/* 1. Overview & Archetypes */}
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>📜</span> 1. Overview & Blueprint
              </span>
              <span className="text-[10px] text-indigo-400 font-bold">Info</span>
            </button>

            {/* 2. Interconnected Flows */}
            <button
              onClick={() => setActiveTab('matrix')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>⚡</span> 2. Interconnected Flows
              </span>
              <span className="text-[10px] text-amber-400">Harmony</span>
            </button>

            {/* 3. Take Assessment */}
            <button
              onClick={() => setActiveTab('questionnaire')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === 'questionnaire'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>📝</span> 3. Take Assessment
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">
                Free
              </span>
            </button>
          </nav>
        </div>

        {/* 2. DIAGNOSTIC SUITE */}
        <div>
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
              Diagnostic Suite
            </span>
            <span className={`text-[9px] font-semibold ${isGuest ? 'text-amber-400' : 'text-emerald-400'}`}>
              {isGuest ? 'Guest Mode' : 'Live Scores'}
            </span>
          </div>

          <nav className="space-y-1">
            {/* Mandala Radar */}
            <button
              onClick={() => setActiveTab('radar')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === 'radar'
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>☸</span> Mandala Radar
              </span>
              <span className="text-[10px] text-slate-500">
                {isGuest ? '🔒 Gated' : '8 Pillars'}
              </span>
            </button>

            {/* 8 Wealth Pages Hub */}
            <button
              onClick={() => setActiveTab('wealthHub')}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold transition mt-1.5 mb-1 cursor-pointer border border-slate-800/60 ${
                activeTab === 'wealthHub'
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>🏛️</span> 8 Wealth Pages Hub
              </span>
              <span className="text-[9px] text-slate-400 font-mono">
                {isGuest ? '🔒 Preview' : 'Directory'}
              </span>
            </button>

            {/* 8 Dedicated Individual Lakshmi Portals */}
            {INITIAL_LAKSHMI_DATA.map(l => {
              const live = lakshmiState[l.id] || l;
              const qList = live.questions || [];
              const score = qList.length
                ? Math.round(qList.reduce((acc, q) => acc + Number(q.score), 0) / qList.length)
                : 70;
              const isBottleneck = score < 40;
              const isActive = activeTab === 'wealthDetail' && selectedLakshmiId === l.id;

              return (
                <button
                  key={l.id}
                  onClick={() => onSelectLakshmi(l.id)}
                  className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    isActive
                      ? 'bg-blue-500/20 text-blue-200 border border-blue-500/30 font-semibold'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span className="text-sm">{l.emoji}</span>
                    <span className="truncate">{l.sanskritName.split(' ')[0]}</span>
                  </span>

                  {isGuest ? (
                    <span className="text-[10px] text-slate-500">🔒</span>
                  ) : isBottleneck ? (
                    <span className="text-xs font-bold text-rose-400 bg-rose-950/60 px-1 py-0.5 rounded border border-rose-800/40">
                      {score}% ⚠️
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-300">
                      {score}%
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* 3. DIAGNOSTIC INTELLIGENCE & LONGITUDINAL SUITE */}
        <div>
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400">
              Diagnostic Intelligence
            </span>
            <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-mono font-bold">
              Live Feeds
            </span>
          </div>

          <nav className="space-y-1">
            {/* Empirical Assessment */}
            <button
              onClick={() => setActiveTab('empirical')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === 'empirical'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>🔬</span> Empirical Assessment
              </span>
              {isGuest ? (
                <span className="text-[10px] text-slate-500">🔒 Gated</span>
              ) : (
                <span className="text-[9px] font-bold text-purple-300 bg-purple-950 px-1.5 py-0.5 rounded border border-purple-800/60">
                  Apps Feed
                </span>
              )}
            </button>

            {/* Multi-Year Trends */}
            <button
              onClick={() => setActiveTab('trends')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === 'trends'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>📈</span> Multi-Year Trends
              </span>
              {isGuest ? (
                <span className="text-[10px] text-slate-500">🔒 Gated</span>
              ) : (
                <span className="text-[9px] font-bold text-cyan-300 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800/60 font-mono">
                  2024–2026
                </span>
              )}
            </button>
          </nav>
        </div>

        {/* 4. Decoupled Clean Engine Notice Card */}
        <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-[11px] text-slate-400 space-y-1.5">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span>✓</span> Decoupled Clean Engine
          </div>
          <p className="leading-relaxed">
            Personal finance & bank ledger moved to <strong className="text-slate-200">Dhana Lakshmi</strong>. Ashta Lakshmi focuses 100% on life harmony diagnostics.
          </p>
        </div>
      </div>

      {/* Bottom SSO Realm Status */}
      <div className="border-t border-slate-800/80 pt-3 mt-4">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Keycloak SSO Realm
          </span>
          <span className="text-slate-500 font-mono">cnoe</span>
        </div>
      </div>
    </aside>
  );
}
