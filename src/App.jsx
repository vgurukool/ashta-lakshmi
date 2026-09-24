import React, { useState, useEffect, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { OverviewPage } from './pages/OverviewPage';
import { MandalaInterconnectedPage } from './pages/MandalaInterconnectedPage';
import { QuestionnairePage } from './pages/QuestionnairePage';
import { DashboardPage } from './pages/DashboardPage';
import { WealthHubPage } from './pages/WealthHubPage';
import { LakshmiDetailPage } from './pages/LakshmiDetailPage';
import { EmpiricalTelemetryPage } from './pages/EmpiricalTelemetryPage';
import { TrendsPage } from './pages/TrendsPage';
import {
  INITIAL_LAKSHMI_DATA,
  SUPPORTED_YEARS,
  getDefaultMultiYearState,
  calculateHarmonicIndex,
  calculateArithmeticMean,
  findCriticalBottleneck,
  classifyArchetype
} from './data/lakshmiData';
import { LogIn, LogOut, RotateCcw, AlertTriangle } from 'lucide-react';

export function App({ keycloak, authenticated = false }) {
  // If authenticated via Keycloak or prop
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(authenticated || keycloak?.authenticated)
  );

  const [activeTab, setActiveTab] = useState('overview'); // Default: Page 1 (Overview)
  const [selectedLakshmiId, setSelectedLakshmiId] = useState('adi');
  const [selectedYear, setSelectedYear] = useState('2026');

  // Scoped storage key by Keycloak UUID
  const userId = keycloak?.subject || (isAuthenticated ? 'demo_arjun' : 'guest');
  const storageKey = `ashta_lakshmi_user_${userId}_state_v2`;

  // Multi-year state
  const [multiYearState, setMultiYearState] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
      return getDefaultMultiYearState();
    } catch (e) {
      console.error('Error loading Ashta Lakshmi state:', e);
      return getDefaultMultiYearState();
    }
  });

  // Re-load state when userId / Keycloak subject changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setMultiYearState(JSON.parse(saved));
      } else {
        // If guest had state and now signs in, migrate guest state
        const guestSaved = localStorage.getItem('ashta_lakshmi_user_guest_state_v2');
        if (guestSaved && userId !== 'guest') {
          setMultiYearState(JSON.parse(guestSaved));
          localStorage.setItem(storageKey, guestSaved);
        } else {
          setMultiYearState(getDefaultMultiYearState());
        }
      }
    } catch (e) {
      setMultiYearState(getDefaultMultiYearState());
    }
  }, [storageKey, userId]);

  // Persist state changes
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(multiYearState));
    } catch (e) {}
  }, [multiYearState, storageKey]);

  // Active year state
  const currentYearLakshmiState = multiYearState[selectedYear] || {};

  // Compute live scores for the active year
  const dimensionScores = useMemo(() => {
    const scores = {};
    INITIAL_LAKSHMI_DATA.forEach(def => {
      const cur = currentYearLakshmiState[def.id] || def;
      const qList = cur.questions || [];
      if (qList.length === 0) {
        scores[def.id] = 50;
      } else {
        const sum = qList.reduce((acc, q) => acc + (Number(q.score) || 0), 0);
        scores[def.id] = Math.round(sum / qList.length);
      }
    });
    return scores;
  }, [currentYearLakshmiState]);

  const harmonicIndex = calculateHarmonicIndex(dimensionScores);
  const arithmeticMean = calculateArithmeticMean(dimensionScores);
  const bottleneck = findCriticalBottleneck(dimensionScores);
  const archetype = classifyArchetype(dimensionScores, harmonicIndex);

  // Update a specific Lakshmi
  const handleUpdateLakshmi = (updatedLakshmi) => {
    setMultiYearState(prev => ({
      ...prev,
      [selectedYear]: {
        ...(prev[selectedYear] || {}),
        [updatedLakshmi.id]: updatedLakshmi
      }
    }));
  };

  const handleSelectLakshmi = (id) => {
    setSelectedLakshmiId(id);
    setActiveTab('wealthDetail');
  };

  const handleResetYear = () => {
    if (!window.confirm(`Reset assessment scores for year ${selectedYear} to default baseline?`)) return;
    const defaultMulti = getDefaultMultiYearState();
    setMultiYearState(prev => ({
      ...prev,
      [selectedYear]: defaultMulti[selectedYear] || {}
    }));
  };

  return (
    <div className="flex min-h-screen bg-[#0B0F19] text-slate-100 font-sans antialiased">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lakshmiState={currentYearLakshmiState}
        onSelectLakshmi={handleSelectLakshmi}
        isAuthenticated={isAuthenticated}
        selectedLakshmiId={selectedLakshmiId}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP SOVEREIGN HEADER BAR */}
        <header className="h-16 border-b border-slate-800 bg-[#0F172A]/90 backdrop-blur sticky top-0 z-40 px-6 flex items-center justify-between">
          {/* Brand Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-violet-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-base">
              ☸
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-black text-white tracking-wide">
                  ASHTA LAKSHMI
                </h2>
                <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Harmonic Engine v2.0
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Vedic Life Harmony Assessment & Sovereign Recalibration
              </p>
            </div>
          </div>

          {/* Center Diagnostic Harmony Metric */}
          <div className="hidden md:flex items-center gap-4 bg-slate-900/80 border border-slate-800 px-4 py-1.5 rounded-xl">
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Harmonic Index (Mean)
              </div>
              <div className="text-sm font-extrabold text-amber-300 font-mono">
                {isAuthenticated ? (
                  <>
                    {harmonicIndex}%{' '}
                    <span className="text-xs font-normal text-slate-400">
                      vs {arithmeticMean}% Arith.
                    </span>
                  </>
                ) : (
                  <span className="text-slate-400 font-medium">--% (Guest)</span>
                )}
              </div>
            </div>

            <div className="h-6 w-px bg-slate-800"></div>

            <div className="flex items-center gap-1.5">
              {isAuthenticated ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                  <span className="text-xs font-semibold text-rose-400">
                    Bottleneck: {bottleneck.name} ({bottleneck.score}%)
                  </span>
                </>
              ) : (
                <span className="text-xs text-amber-400">📝 Assessment Open</span>
              )}
            </div>

            <div className="h-6 w-px bg-slate-800"></div>

            <span className="text-xs font-medium text-purple-300 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/30">
              {isAuthenticated ? archetype.title.split(' ')[0] + ' Archetype' : '🌱 Unprofiled Seeker'}
            </span>
          </div>

          {/* User & Session Controls */}
          <div className="flex items-center gap-3">
            {/* Demo User Switcher Button */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-700/80 rounded-lg p-1">
              <button
                onClick={() => setIsAuthenticated(true)}
                className={`px-2.5 py-1 text-xs rounded font-medium transition cursor-pointer ${
                  isAuthenticated
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Simulate Authenticated Member (Arjun)"
              >
                👤 {keycloak?.tokenParsed?.preferred_username || 'Member'}
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className={`px-2.5 py-1 text-xs rounded font-medium transition cursor-pointer ${
                  !isAuthenticated
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to Anonymous Guest Seeker"
              >
                🌐 Guest
              </button>
            </div>

            {/* Year Selector */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-slate-900 text-xs font-medium text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none cursor-pointer"
            >
              {SUPPORTED_YEARS.map(yr => (
                <option key={yr} value={yr}>
                  Samvatsara {yr}
                </option>
              ))}
            </select>

            {/* Keycloak SSO Sign In / Sign Out */}
            {keycloak?.authenticated ? (
              <button
                onClick={() => keycloak.logout({ redirectUri: window.location.origin })}
                className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5"
              >
                <LogOut size={13} />
                <span>Sign Out</span>
              </button>
            ) : (
              <button
                onClick={() => keycloak ? keycloak.login() : setIsAuthenticated(true)}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow-md transition cursor-pointer flex items-center gap-1.5"
              >
                <LogIn size={13} />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </header>

        {/* GUEST ONBOARDING ALERT CALLOUT (Visible Only in Guest Mode) */}
        {!isAuthenticated && (
          <div className="bg-gradient-to-r from-amber-950/80 via-purple-950/60 to-slate-950 border-b border-amber-500/30 px-6 py-2.5 text-xs text-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-base">ℹ️</span>
              <span>
                <strong>Guest Mode Active:</strong> You are exploring the public assessment without logging in. All teachings are open, but your scores remain private to this browser until you sign in with Keycloak.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setActiveTab('questionnaire')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded text-xs transition cursor-pointer"
              >
                ⚡ Take 3-Min Assessment
              </button>
              <button
                onClick={() => keycloak ? keycloak.login() : setIsAuthenticated(true)}
                className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-3 py-1 rounded text-xs transition cursor-pointer"
              >
                Sign In with Keycloak
              </button>
            </div>
          </div>
        )}

        {/* Dynamic Pages Render */}
        <main className="flex-1 overflow-y-auto">
          {activeTab === 'overview' && (
            <OverviewPage
              onNavigate={setActiveTab}
              onSelectLakshmi={handleSelectLakshmi}
            />
          )}

          {activeTab === 'matrix' && (
            <MandalaInterconnectedPage
              onNavigate={setActiveTab}
              onSelectLakshmi={handleSelectLakshmi}
            />
          )}

          {activeTab === 'questionnaire' && (
            <QuestionnairePage
              lakshmiState={currentYearLakshmiState}
              onUpdateLakshmi={handleUpdateLakshmi}
              onNavigate={setActiveTab}
              isAuthenticated={isAuthenticated}
              keycloak={keycloak}
            />
          )}

          {activeTab === 'radar' && (
            <DashboardPage
              lakshmiState={currentYearLakshmiState}
              multiYearState={multiYearState}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              onNavigate={setActiveTab}
              onSelectLakshmi={handleSelectLakshmi}
            />
          )}

          {activeTab === 'wealthHub' && (
            <WealthHubPage
              lakshmiState={currentYearLakshmiState}
              onSelectLakshmi={handleSelectLakshmi}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === 'wealthDetail' && (
            <LakshmiDetailPage
              lakshmiId={selectedLakshmiId}
              lakshmiState={currentYearLakshmiState}
              onUpdateLakshmi={handleUpdateLakshmi}
              onBackToDashboard={() => setActiveTab('radar')}
              onSelectLakshmi={handleSelectLakshmi}
              isAuthenticated={isAuthenticated}
            />
          )}

          {activeTab === 'empirical' && (
            <EmpiricalTelemetryPage
              lakshmiState={currentYearLakshmiState}
              onNavigate={setActiveTab}
              onSelectLakshmi={handleSelectLakshmi}
              isAuthenticated={isAuthenticated}
              keycloak={keycloak}
            />
          )}

          {activeTab === 'trends' && (
            <TrendsPage
              onNavigate={setActiveTab}
              onSelectLakshmi={handleSelectLakshmi}
            />
          )}
        </main>
      </div>
    </div>
  );
}
