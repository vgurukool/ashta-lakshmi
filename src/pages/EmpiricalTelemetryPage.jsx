import React, { useState } from 'react';
import {
  Sparkles,
  Activity,
  Cpu,
  Zap,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Terminal,
  ExternalLink
} from 'lucide-react';
import {
  INITIAL_LAKSHMI_DATA,
  calculateBlendedScore,
  getBlindspotVariance
} from '../data/lakshmiData';

export function EmpiricalTelemetryPage({
  lakshmiState,
  onNavigate,
  onSelectLakshmi,
  isAuthenticated,
  keycloak
}) {
  const [lastSyncTime, setLastSyncTime] = useState('Just now (Auto)');
  const [webhookTriggered, setWebhookTriggered] = useState(false);
  const [customTelemetryOverrides, setCustomTelemetryOverrides] = useState({});

  // Connected telemetry feeds metadata
  const TELEMETRY_FEEDS = [
    {
      id: 'adi',
      name: 'Adi Lakshmi (Spiritual)',
      icon: '🧘',
      app: 'adi.vgurukool.com',
      source: 'Dhyana Meditation Studio & Japa Mala',
      empiricalScore: customTelemetryOverrides.adi || 80,
      metrics: [
        { label: 'Avg Daily Dhyana', value: '24 mins' },
        { label: 'Mouna Stillness Streak', value: '18 Days' },
        { label: 'HRV Coherence Ratio', value: '86%' }
      ],
      color: 'violet'
    },
    {
      id: 'dhana',
      name: 'Dhana Lakshmi (Capital)',
      icon: '💰',
      app: 'dhana.vgurukool.com',
      source: 'Open Banking / Plaid & Net Worth Ledger',
      empiricalScore: customTelemetryOverrides.dhana || 86,
      metrics: [
        { label: 'Liquid Cash Runway', value: '14 Months' },
        { label: 'Predatory Debt Balance', value: '₹0 / 0%' },
        { label: 'Dharmic Dāna Ratio', value: '8.4% of Net' }
      ],
      color: 'emerald'
    },
    {
      id: 'dhanya',
      name: 'Dhanya Lakshmi (Vitality)',
      icon: '🌿',
      app: 'health.vgurukool.com',
      source: 'Apple HealthKit, Whoop & Oura Ring Feeds',
      empiricalScore: customTelemetryOverrides.dhanya || 28,
      metrics: [
        { label: 'Avg Sleep Duration', value: '5h 12m (Severe Deficit)' },
        { label: 'Resting HRV (rMSSD)', value: '32 ms (High Strain)' },
        { label: 'Deep Sleep Ratio', value: '11% (Optimal: 20%+)' }
      ],
      color: 'rose',
      isBottleneck: true
    },
    {
      id: 'gaja',
      name: 'Gaja Lakshmi (Sanctuary)',
      icon: '🐘',
      app: 'gaja.vgurukool.com',
      source: 'Vāstu Spatial & Living Space Auditor',
      empiricalScore: customTelemetryOverrides.gaja || 70,
      metrics: [
        { label: 'Brahmasthan Order Index', value: '82 / 100' },
        { label: 'Vehicle Readiness Rating', value: '100% Inspected' },
        { label: 'Acoustic Sanctuary Shield', value: '72% Decibel Quiet' }
      ],
      color: 'cyan'
    },
    {
      id: 'santana',
      name: 'Santana Lakshmi (Lineage)',
      icon: '👶',
      app: 'santana.vgurukool.com',
      source: 'Kula Family Calendar & Mentorship Ledger',
      empiricalScore: customTelemetryOverrides.santana || 75,
      metrics: [
        { label: 'Device-Free Family Dinners', value: '7 / 7 Nights' },
        { label: 'Discipleship Mentorship', value: '3.5 Hrs / Wk' },
        { label: 'Pitru Gratitude Rituals', value: 'Monthly Active' }
      ],
      color: 'pink'
    },
    {
      id: 'dhairya',
      name: 'Dhairya Lakshmi (Armor)',
      icon: '🛡️',
      app: 'dhairya.vgurukool.com',
      source: 'Risk Armor, Insurance & Will Vault',
      empiricalScore: customTelemetryOverrides.dhairya || 58,
      metrics: [
        { label: 'Term Life Insurance', value: '15x Annual Income' },
        { label: 'Health Shield Coverage', value: '₹25 Lakh Active' },
        { label: 'Formal Legal Will Status', value: 'Missing (Deficit)' }
      ],
      color: 'orange'
    },
    {
      id: 'vijaya',
      name: 'Vijaya Lakshmi (Execution)',
      icon: '🏆',
      app: 'vijaya.vgurukool.com',
      source: 'OKR Milestone & Daily Habit Streak Engine',
      empiricalScore: customTelemetryOverrides.vijaya || 71,
      metrics: [
        { label: 'Quarterly OKR Velocity', value: '88% Completed' },
        { label: 'Unbroken Deep Work Streak', value: '19 Days Active' },
        { label: 'Project Archival Rate', value: '62%' }
      ],
      color: 'amber'
    },
    {
      id: 'vidya',
      name: 'Vidya Lakshmi (Wisdom)',
      icon: '📖',
      app: 'vidya.vgurukool.com',
      source: 'LearnHouse LMS, DeepTutor & Granth Reader',
      empiricalScore: customTelemetryOverrides.vidya || 68,
      metrics: [
        { label: 'Granth Svadhyaya Reading', value: '45 mins / Day' },
        { label: 'DeepTutor Feynman Pass', value: '82% Comprehension' },
        { label: 'Cognitive Retention Window', value: 'Constrained by Sleep' }
      ],
      color: 'blue'
    }
  ];

  const handleSimulateWebhook = () => {
    setWebhookTriggered(true);
    setLastSyncTime('Just now (Webhook Ingested)');

    // Simulate update to Dhanya telemetry
    setCustomTelemetryOverrides(prev => ({
      ...prev,
      dhanya: 32
    }));

    setTimeout(() => {
      setWebhookTriggered(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-6 lg:p-8">
      {/* PRO / Authenticated Banner Header */}
      <div className="bg-gradient-to-br from-purple-950/60 via-slate-900 to-indigo-950/40 border border-purple-500/30 p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <span>🔬 Empirical Intelligence Engine</span>
              <span className="text-purple-400">•</span>
              <span>Automated External Companion Telemetry</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Empirical Ground-Truth Assessment
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              While the <strong className="text-emerald-400">Diagnostic Assessment</strong> captures self-reported perception and aspirational state, this <strong className="text-purple-300">Empirical Engine</strong> streams unvarnished objective telemetry directly from connected companion domain applications across the Vgurukool ecosystem.
            </p>
          </div>

          {/* Ingestion & Sync Stat Pill */}
          <div className="flex flex-col gap-2 w-full lg:w-auto bg-slate-950/80 border border-purple-500/30 p-4 rounded-2xl shrink-0">
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">Ecosystem Ingestion:</span>
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> 8/8 Streams Live
              </span>
            </div>
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">Last Telemetry Sync:</span>
              <span className="font-mono text-purple-300 font-bold">{lastSyncTime}</span>
            </div>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={handleSimulateWebhook}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-2 px-3 rounded-lg shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>⚡</span> Simulate Live Webhook Push
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 1. PERCEPTION VS. REALITY MATRIX ("THE BLINDSPOT DETECTOR") */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>🎯</span> The Perception vs. Reality Matrix ("The Blindspot Detector")
            </h3>
            <p className="text-xs text-slate-400">
              Comparing self-reported scores against empirical automated telemetry to expose cognitive biases.
            </p>
          </div>
          <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700 font-mono">
            Blended Formulation: (0.40 × Self) + (0.60 × Telemetry)
          </span>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                <th className="py-3 px-3">Dimension</th>
                <th className="py-3 px-3">Self-Report (Likert)</th>
                <th className="py-3 px-3">Empirical Telemetry</th>
                <th className="py-3 px-3">Variance (Δ)</th>
                <th className="py-3 px-3">Blindspot Diagnosis</th>
                <th className="py-3 px-3 text-right">Blended Sovereign Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {TELEMETRY_FEEDS.map(feed => {
                const def = INITIAL_LAKSHMI_DATA.find(d => d.id === feed.id) || INITIAL_LAKSHMI_DATA[0];
                const live = lakshmiState[feed.id] || def;
                const qList = live.questions || [];
                const selfScore = qList.length
                  ? Math.round(qList.reduce((acc, q) => acc + Number(q.score), 0) / qList.length)
                  : 70;
                const empScore = feed.empiricalScore;
                const blended = calculateBlendedScore(selfScore, empScore);
                const variance = getBlindspotVariance(empScore, selfScore);

                return (
                  <tr
                    key={feed.id}
                    className={`hover:bg-slate-800/30 transition ${
                      feed.isBottleneck ? 'bg-rose-950/20 border-l-2 border-l-rose-500' : ''
                    }`}
                  >
                    <td className="py-3 px-3 font-semibold text-white flex items-center gap-2">
                      <span>{feed.icon}</span>
                      <span>{feed.name}</span>
                    </td>
                    <td className="py-3 px-3 text-slate-300">{selfScore}%</td>
                    <td className="py-3 px-3 font-bold text-purple-300">{empScore}%</td>
                    <td className="py-3 px-3 font-mono font-bold">
                      <span className={variance.delta > 0 ? 'text-emerald-400' : (variance.delta < 0 ? 'text-rose-400' : 'text-slate-400')}>
                        {variance.delta > 0 ? `+${variance.delta}%` : `${variance.delta}%`}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] border ${
                          variance.color === 'rose'
                            ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                            : variance.color === 'cyan'
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        {variance.label}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-black text-amber-300">
                      {blended}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. THE 8 LIVE ECOSYSTEM INGESTION STREAM CARDS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>📡</span> Connected Companion Application Telemetry Feeds
            </h3>
            <p className="text-xs text-slate-400">
              Live ground-truth telemetry streamed from companion domain engines without self-reporting bias.
            </p>
          </div>
          <span className="text-xs text-purple-300 bg-purple-950 px-2.5 py-1 rounded border border-purple-800 font-mono">
            8 Live Integrations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TELEMETRY_FEEDS.map(feed => (
            <div
              key={feed.id}
              className={`bg-slate-900/80 border p-5 rounded-2xl flex flex-col justify-between space-y-3 hover:border-purple-500/40 transition ${
                feed.isBottleneck ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-800'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-xl shrink-0">
                    {feed.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-base font-black text-white font-mono">
                      {feed.empiricalScore}%
                    </div>
                    <span className="text-[9px] text-emerald-400 font-semibold flex items-center gap-1 justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white truncate">{feed.name}</h4>
                  <div className="text-[10px] text-purple-400 font-mono mt-0.5 truncate">
                    {feed.app}
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 leading-snug">
                  Source: <strong className="text-slate-300">{feed.source}</strong>
                </div>

                {/* Metrics */}
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                  {feed.metrics.map((m, i) => (
                    <div key={i} className="flex justify-between text-[10px]">
                      <span className="text-slate-400 truncate">{m.label}:</span>
                      <span className="font-semibold text-slate-200">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectLakshmi(feed.id)}
                className="w-full bg-slate-800/80 hover:bg-purple-600 text-slate-200 hover:text-white text-xs font-semibold py-1.5 rounded-lg border border-slate-700/80 transition cursor-pointer flex items-center justify-center gap-1"
              >
                <span>Inspect Feed</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. INTERACTIVE WEBHOOK SIMULATION CONSOLE */}
      <div
        className={`bg-slate-950 border p-5 rounded-2xl space-y-3 font-mono text-xs transition-all ${
          webhookTriggered ? 'border-emerald-400 bg-emerald-950/20' : 'border-slate-800'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-purple-300 font-bold">
            <Terminal size={15} />
            <span>Companion App Webhook Telemetry Endpoint</span>
          </div>
          <span className="text-[10px] bg-slate-900 text-emerald-400 px-2 py-0.5 rounded border border-slate-700">
            HTTP 200 OK
          </span>
        </div>

        <div className="text-[11px] text-slate-400 space-y-1">
          <div><span className="text-indigo-400 font-bold">POST</span> /api/v1/scores/ingest</div>
          <div><span className="text-slate-500">Authorization:</span> Bearer &lt;keycloak_jwt_token&gt;</div>
          <div><span className="text-slate-500">Payload:</span> &#123; "domain": "dhanya", "source": "apple_health_daemon", "score": 32, "metrics": [&#123; "sleep_hours": 5.4, "hrv_rmssd": 36 &#125;] &#125;</div>
        </div>

        <div className="pt-1 flex items-center justify-between">
          <span className="text-[10px] text-slate-500">
            Simulates automated webhook ingestion from external Wearables/Banking microservices.
          </span>
          <button
            onClick={handleSimulateWebhook}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs transition cursor-pointer"
          >
            Trigger Sample POST
          </button>
        </div>
      </div>
    </div>
  );
}
