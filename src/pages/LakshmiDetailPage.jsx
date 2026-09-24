import React, { useState } from 'react';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  Shield,
  BookOpen,
  Calendar,
  Send
} from 'lucide-react';
import { INITIAL_LAKSHMI_DATA } from '../data/lakshmiData';

export function LakshmiDetailPage({
  lakshmiId = 'adi',
  lakshmiState,
  onUpdateLakshmi,
  onBackToDashboard,
  onSelectLakshmi,
  isAuthenticated
}) {
  const [showAiModal, setShowAiModal] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const data = INITIAL_LAKSHMI_DATA.find(d => d.id === lakshmiId) || INITIAL_LAKSHMI_DATA[0];
  const live = lakshmiState[data.id] || data;

  const qList = live.questions || [];
  const score = qList.length
    ? Math.round(qList.reduce((acc, q) => acc + Number(q.score), 0) / qList.length)
    : (data.defaultScore || 75);

  const isCritical = score < 40;
  const isHarmonizing = score >= 40 && score < 75;
  const isAbundant = score >= 75;

  const [sadhanaState, setSadhanaState] = useState(() => {
    return (data.sadhana || []).map(sd => ({ ...sd }));
  });

  const toggleSadhana = (index) => {
    setSadhanaState(prev => {
      const updated = [...prev];
      updated[index].done = !updated[index].done;
      return updated;
    });
  };

  const openAiCounselor = () => {
    setChatMessages([
      {
        sender: data.counselor,
        role: 'counselor',
        text: `Pranams Seeker. I have reviewed your ${data.sanskritName.split(' ')[0]} Lakshmi diagnostic profile (Score: ${score}%). ${
          isCritical
            ? `We must address your ${data.englishTitle} bottleneck immediately so it stops constraining your overall life harmony.`
            : `Your ${data.englishTitle} is flourishing. Let us see how you can deploy this strength to uplift the whole system.`
        }`
      }
    ]);
    setShowAiModal(true);
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    setChatMessages(prev => [
      ...prev,
      { sender: 'Seeker', role: 'user', text: userText },
      {
        sender: data.counselor,
        role: 'counselor',
        text: `Contemplating your inquiry: "${userText}". In accordance with ${data.scripture}, true harmony is attained through steady, daily discipline (Sadhana). Follow today's prescription faithfully.`
      }
    ]);
    setChatInput('');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6 lg:p-8">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToDashboard}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition cursor-pointer font-medium"
        >
          <ArrowLeft size={14} />
          <span>← Back to Mandala Dashboard</span>
        </button>

        {/* 8-Dimension Quick Switcher Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {INITIAL_LAKSHMI_DATA.map(l => (
            <button
              key={l.id}
              onClick={() => onSelectLakshmi(l.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                l.id === lakshmiId
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {l.emoji} {l.sanskritName.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Guest Mode Benchmark Notice Banner */}
      {!isAuthenticated && (
        <div className="bg-amber-950/30 border border-amber-500/40 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-base">ℹ️</span>
            <span>
              <strong>Guest Seeker Preview:</strong> Viewing standard canonical benchmark metrics. Sign in with Keycloak to calibrate your personal scores and save your 14-day Sadhana progress.
            </span>
          </div>
          <button
            onClick={openAiCounselor}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs shrink-0 transition cursor-pointer"
          >
            Consult AI Counselor
          </button>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl shrink-0">
              {data.emoji}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {data.sanskritName}
              </h1>
              <p className="text-xs sm:text-sm text-indigo-300 font-medium">
                {data.subtitle}
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-400 italic pt-1 font-serif">
            {data.scripture}
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-3 shrink-0 w-full sm:w-auto">
          <div className="bg-slate-950/80 border border-slate-800 px-5 py-3 rounded-2xl text-right w-full sm:w-auto">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Dimension Mastery Score
            </div>
            <div className={`text-3xl font-black font-mono ${isCritical ? 'text-rose-400' : 'text-white'}`}>
              {score}
              <span className="text-sm font-normal text-slate-500">/100</span>
            </div>
          </div>

          <button
            onClick={openAiCounselor}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 transition flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
          >
            <span>✨</span>
            <span>Consult {data.counselor}</span>
          </button>
        </div>
      </div>

      {/* Score-Reactive Diagnostic State Banner */}
      <div
        className={`p-5 rounded-2xl space-y-2.5 transition-all border ${
          isCritical
            ? 'bg-rose-950/30 border-rose-500/50'
            : isHarmonizing
            ? 'bg-amber-950/30 border-amber-500/40'
            : 'bg-emerald-950/30 border-emerald-500/40'
        }`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-2 font-bold text-sm ${
              isCritical
                ? 'text-rose-400'
                : isHarmonizing
                ? 'text-amber-400'
                : 'text-emerald-400'
            }`}
          >
            <span>⚖️</span>
            <span>{data.statusBadge}</span>
          </div>
          <span
            className={`text-[11px] px-2.5 py-0.5 rounded font-medium border ${
              isCritical
                ? 'bg-rose-950 text-rose-300 border-rose-800'
                : isHarmonizing
                ? 'bg-amber-950 text-amber-300 border-amber-800'
                : 'bg-emerald-950 text-emerald-300 border-emerald-800'
            }`}
          >
            {isCritical ? 'Critical Bottleneck' : isHarmonizing ? 'Harmonizing' : 'Abundant'}
          </span>
        </div>

        <p className="text-xs text-slate-200 leading-relaxed">
          {data.statusDesc}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
          {(data.actions || []).map((act, i) => (
            <span
              key={i}
              className="bg-slate-900/90 text-slate-300 px-3 py-1 rounded-lg border border-slate-700"
            >
              {act}
            </span>
          ))}
        </div>
      </div>

      {/* Live Mini-Mandala Interdependency Flow Widget */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>☸</span> Live Mini-Mandala Interdependency Flow
          </h3>
          <p className="text-xs text-slate-400">
            How {data.sanskritName.split(' ')[0]} Lakshmi connects dynamically to upstream feeders and downstream dependents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Inbound Nourishers */}
          <div className="space-y-2">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
              <span>➔</span> Inbound Nourishers (Upstream)
            </div>
            <div className="space-y-2">
              {(data.inbound || []).map((inb, i) => (
                <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">{inb.name}</span>
                    <span className="font-bold text-indigo-400">{inb.score}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    {inb.msg}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Current Node */}
          <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/40 flex flex-col items-center justify-center text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-300 flex items-center justify-center text-2xl border border-indigo-500/30">
              {data.emoji}
            </div>
            <div>
              <div className="text-sm font-bold text-white">{data.sanskritName.split(' ')[0]}</div>
              <div className="text-lg font-mono font-black text-amber-300">{score}%</div>
            </div>
            <span
              className={`text-[9px] px-2 py-0.5 rounded font-bold ${
                isCritical
                  ? 'bg-rose-950 text-rose-300 border border-rose-800'
                  : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
              }`}
            >
              {isCritical ? '🚨 Primary Bottleneck Node' : 'Active Flow Node'}
            </span>
          </div>

          {/* Outbound Dependents */}
          <div className="space-y-2">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
              <span>➔</span> Outbound Dependents (Downstream)
            </div>
            <div className="space-y-2">
              {(data.outbound || []).map((out, i) => (
                <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
                  <span className="font-semibold text-slate-200">{out.name}</span>
                  <span className="font-bold text-purple-400">{out.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4 Dedicated Ecosystem Action Launchpads */}
      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>🚀</span> Ecosystem Action Launchpads
          </h3>
          <p className="text-xs text-slate-400">
            Dedicated tools and micro-applications designed specifically for {data.sanskritName.split(' ')[0]} prosperity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(data.launchpads || []).map((lp, idx) => (
            <a
              key={idx}
              href={lp.url}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition flex items-start gap-3 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0 text-base">
                {lp.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition truncate">
                    {lp.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono ml-2 shrink-0">
                    {lp.host}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                  {lp.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 4 Sub-Facet Evaluation Breakdowns */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>📊</span> Sub-Facet Evaluation Breakdown
          </h3>
          <p className="text-xs text-slate-400">
            Psychometric sub-components evaluated from your Likert Life Audit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(data.subFacets || []).map((sf, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{sf.name}</span>
                <span className="font-bold text-white font-mono">{sf.score}%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    sf.score < 40 ? 'bg-rose-500' : (sf.score < 75 ? 'bg-amber-500' : 'bg-emerald-500')
                  }`}
                  style={{ width: `${sf.score}%` }}
                ></div>
              </div>
              <div className="text-[10px] text-slate-400">{sf.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 14-Day Prescriptive Recalibration Sadhana */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>🧘</span> 14-Day Prescriptive Recalibration Sadhana
            </h3>
            <p className="text-xs text-slate-400">
              Daily micro-habits prescribed by {data.counselor} to resolve energy leaks and elevate this pillar.
            </p>
          </div>
          <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded font-mono">
            Active Sadhana Protocol
          </span>
        </div>

        <div className="space-y-2.5">
          {sadhanaState.map((sd, idx) => (
            <label
              key={idx}
              className="flex items-center justify-between bg-slate-950 p-3.5 rounded-xl border border-slate-800 hover:border-slate-700 transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={sd.done}
                  onChange={() => toggleSadhana(idx)}
                  className="w-4 h-4 rounded accent-indigo-500 cursor-pointer"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-200">
                    {sd.title}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {sd.desc}
                  </div>
                </div>
              </div>
              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded ${
                  sd.done
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-amber-400 bg-amber-500/10'
                }`}
              >
                {sd.done ? 'Completed ✓' : 'Pending Tonight'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* AI Counselor Modal */}
      {showAiModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-indigo-500/40 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 bg-gradient-to-r from-violet-950/40 to-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center text-xl font-bold border border-violet-500/30">
                  ✨
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {data.counselor} Socratic Counselor
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Domain: {data.sanskritName.split(' ')[0]} Lakshmi ({score}%)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAiModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Dialogue Body */}
            <div className="p-5 space-y-3.5 max-h-96 overflow-y-auto text-xs leading-relaxed">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 p-3.5 rounded-xl border ${
                    msg.role === 'counselor'
                      ? 'bg-slate-900/90 border-slate-800'
                      : 'bg-indigo-950/40 border-indigo-500/30 ml-6'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white shrink-0 text-[10px]">
                    {msg.role === 'counselor' ? 'ॐ' : '👤'}
                  </div>
                  <div>
                    <span className="font-bold text-indigo-400">{msg.sender}:</span>
                    <p className="text-slate-200 mt-1 whitespace-pre-line">
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSendChat}
              className="p-4 border-t border-slate-800 bg-slate-950 flex items-center gap-2"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={`Inquire with ${data.counselor}...`}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-lg text-xs transition cursor-pointer flex items-center gap-1.5"
              >
                <Send size={12} />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
