import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  ClipboardList,
  CheckCircle2,
  Lock,
  ArrowRight,
  RotateCcw,
  Zap,
  HelpCircle,
  Award
} from 'lucide-react';
import {
  INITIAL_LAKSHMI_DATA,
  LIKERT_ANCHORS,
  calculateHarmonicIndex,
  findCriticalBottleneck,
  classifyArchetype
} from '../data/lakshmiData';

export function QuestionnairePage({
  lakshmiState,
  onUpdateLakshmi,
  onNavigate,
  isAuthenticated,
  keycloak
}) {
  const [assessmentDepth, setAssessmentDepth] = useState('quick'); // 'quick' (8), 'standard' (24), 'deep' (64)
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

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
  const bottleneck = findCriticalBottleneck(dimensionScores);
  const archetype = classifyArchetype(dimensionScores, harmonicIndex);

  // Filter questions based on depth
  const questionsToRender = useMemo(() => {
    const list = [];
    INITIAL_LAKSHMI_DATA.forEach(def => {
      const cur = lakshmiState[def.id] || def;
      const qList = cur.questions || [];

      if (assessmentDepth === 'quick') {
        // 1 question per dimension
        if (qList[0]) {
          list.push({ ...qList[0], lakshmiId: def.id, lakshmiName: def.sanskritName, emoji: def.emoji, color: def.colorName });
        }
      } else if (assessmentDepth === 'standard') {
        // up to 3 questions per dimension
        qList.slice(0, 3).forEach(q => {
          list.push({ ...q, lakshmiId: def.id, lakshmiName: def.sanskritName, emoji: def.emoji, color: def.colorName });
        });
      } else {
        // Deep comprehensive (sub-facets)
        (def.subFacets || []).forEach((sf, idx) => {
          list.push({
            id: `${def.id}_sf_${idx}`,
            text: `Facet: ${sf.name} — ${sf.desc}`,
            score: sf.score || 70,
            lakshmiId: def.id,
            lakshmiName: def.sanskritName,
            emoji: def.emoji,
            color: def.colorName
          });
        });
      }
    });
    return list;
  }, [assessmentDepth, lakshmiState]);

  const filteredQuestions = useMemo(() => {
    if (activeCategory === 'all') return questionsToRender;
    return questionsToRender.filter(q => q.lakshmiId === activeCategory);
  }, [questionsToRender, activeCategory]);

  const handleLikertSelect = (lakshmiId, questionId, scoreVal) => {
    const current = lakshmiState[lakshmiId] || INITIAL_LAKSHMI_DATA.find(l => l.id === lakshmiId);
    const updatedQuestions = (current.questions || []).map(q => {
      if (q.id === questionId) {
        return { ...q, score: scoreVal };
      }
      return q;
    });

    onUpdateLakshmi({
      ...current,
      questions: updatedQuestions
    });
  };

  const handleSubmitAudit = () => {
    if (!isAuthenticated) {
      setShowGuestModal(true);
    } else {
      onNavigate('radar');
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6 lg:p-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Psychometric Likert Life Audit
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              📝 Page 3: Behavioral Likert Engine
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Anchored behavioral frequencies replace raw, subjective number sliders. Evaluates the 8 Vedic prosperity dimensions.
          </p>
        </div>

        {/* 3-Tier Depth Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs shrink-0">
          <button
            onClick={() => setAssessmentDepth('quick')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
              assessmentDepth === 'quick'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ⚡ Quick Pulse (3m)
          </button>
          <button
            onClick={() => setAssessmentDepth('standard')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
              assessmentDepth === 'standard'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📋 Standard (10m)
          </button>
          <button
            onClick={() => setAssessmentDepth('deep')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
              assessmentDepth === 'deep'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🔬 Deep Assessment (25m)
          </button>
        </div>
      </div>

      {/* Progress & Live Recalibration Bar */}
      <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex-1 w-full space-y-1.5">
          <div className="flex items-center justify-between text-slate-400 text-[11px]">
            <span>
              Assessment Depth: <strong className="text-white capitalize">{assessmentDepth}</strong> ({questionsToRender.length} Questions)
            </span>
            <span className="text-emerald-400 font-bold">
              Harmonic Index: {harmonicIndex}%
            </span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all"
              style={{ width: `${Math.min(100, Math.max(25, harmonicIndex))}%` }}
            ></div>
          </div>
        </div>
        <button
          onClick={handleSubmitAudit}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs shrink-0 transition shadow-md cursor-pointer flex items-center gap-1.5"
        >
          <span>Submit & View Radar</span>
          <span>➔</span>
        </button>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer font-medium ${
            activeCategory === 'all'
              ? 'bg-slate-700 text-white font-bold'
              : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Dimensions ({questionsToRender.length})
        </button>
        {INITIAL_LAKSHMI_DATA.map(l => (
          <button
            key={l.id}
            onClick={() => setActiveCategory(l.id)}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
              activeCategory === l.id
                ? 'bg-indigo-600/30 text-indigo-300 font-bold border border-indigo-500/40'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>{l.emoji}</span>
            <span>{l.sanskritName.split(' ')[0]}</span>
            <span className="text-[10px] text-slate-500 font-mono">
              ({dimensionScores[l.id]}%)
            </span>
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, qIndex) => {
          const currentScore = Number(q.score) || 60;
          return (
            <div
              key={q.id}
              className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-3"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{q.emoji}</span>
                  <span className="text-xs font-bold text-slate-200">
                    {q.lakshmiName}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Current: <strong className="text-amber-400">{currentScore}%</strong>
                </span>
              </div>

              <div className="text-xs font-semibold text-white leading-relaxed">
                {q.text}
              </div>

              {/* Anchored 5-Point Likert Options */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-1">
                {LIKERT_ANCHORS.map((anchor) => {
                  const isSelected = currentScore === anchor.value;
                  const borderCol =
                    anchor.value <= 20
                      ? 'border-rose-500 bg-rose-950/40 text-rose-300'
                      : anchor.value <= 40
                      ? 'border-orange-500 bg-orange-950/40 text-orange-300'
                      : anchor.value <= 60
                      ? 'border-amber-500 bg-amber-950/40 text-amber-300'
                      : anchor.value <= 80
                      ? 'border-blue-500 bg-blue-950/40 text-blue-300'
                      : 'border-emerald-500 bg-emerald-950/40 text-emerald-300';

                  return (
                    <button
                      key={anchor.value}
                      onClick={() => handleLikertSelect(q.lakshmiId, q.id, anchor.value)}
                      className={`p-2.5 rounded-xl text-left transition cursor-pointer border ${
                        isSelected
                          ? `border-2 ${borderCol} shadow-sm`
                          : 'border-slate-800 bg-slate-950 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className="text-[10px] font-bold">
                        {anchor.label} {isSelected && '✓'}
                      </div>
                      <div className="text-[9px] text-slate-400 mt-0.5 leading-snug">
                        {anchor.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Assessment Submission Action Callout */}
      <div className="bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/60 border border-indigo-500/40 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-300">
            Ready to Compute Harmonic Balance
          </div>
          <h3 className="text-base font-bold text-white mt-0.5">
            Submit Assessment & Reveal Diagnostic Results
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-md leading-relaxed">
            Computes your Harmonic Index (currently {harmonicIndex}%), identifies systemic bottlenecks ({bottleneck.name} {bottleneck.score}%), and classifies your authentic Vedic Life Archetype.
          </p>
        </div>
        <button
          onClick={handleSubmitAudit}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-black px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <span>🚀 Submit & Reveal Scores</span>
        </button>
      </div>

      {/* Guest Assessment Completion Conversion Modal */}
      {showGuestModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-amber-500/40 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
            <div className="p-6 bg-gradient-to-r from-amber-950/60 to-slate-900 border-b border-slate-800 text-center relative">
              <button
                onClick={() => setShowGuestModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl mx-auto mb-3 shadow-inner">
                🎉
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                Assessment Completed
              </div>
              <h3 className="text-xl font-black text-white mt-1">
                Your Life-Harmony Archetype is Ready!
              </h3>
            </div>

            <div className="p-6 space-y-4 text-center">
              {/* Snapshot */}
              <div className="grid grid-cols-3 gap-2 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-center">
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">
                    Harmonic Index
                  </div>
                  <div className="text-base font-extrabold text-amber-300 mt-0.5">
                    {harmonicIndex}%
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">
                    Archetype
                  </div>
                  <div className="text-xs font-bold text-violet-300 mt-0.5 truncate">
                    {archetype.title.split(' ')[1] || 'Raja-Rishi'}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">
                    Bottleneck
                  </div>
                  <div className="text-base font-extrabold text-rose-400 mt-0.5">
                    {bottleneck.name} ({bottleneck.score}%)
                  </div>
                </div>
              </div>

              <div className="bg-indigo-950/30 border border-indigo-500/30 p-4 rounded-xl text-left text-xs space-y-2">
                <div className="font-bold text-indigo-300 flex items-center gap-2">
                  <span>🔒</span>
                  <span>Sign In to Unlock Full Diagnostic Suite</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Sign in with Keycloak to save your assessment, unlock your interactive <strong>8-Spoke Mandala Radar</strong>, companion app <strong>Empirical Telemetry feeds</strong>, and your customized <strong>14-Day Sadhana Recalibration Protocol</strong>.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    setShowGuestModal(false);
                    if (keycloak) {
                      keycloak.login({ redirectUri: window.location.origin + '/' });
                    }
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>👤 Sign In with Keycloak SSO</span>
                  <span>➔</span>
                </button>
                <button
                  onClick={() => {
                    setShowGuestModal(false);
                    onNavigate('overview');
                  }}
                  className="w-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs py-2.5 rounded-xl border border-slate-700 transition cursor-pointer"
                >
                  Continue Exploring Public Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
