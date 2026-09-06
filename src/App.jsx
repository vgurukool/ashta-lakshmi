import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { LakshmiDetailPage } from './pages/LakshmiDetailPage';
import { TrendsPage } from './pages/TrendsPage';
import { VedicSpendingPage } from './pages/VedicSpendingPage';
import { QuestionnairePage } from './pages/QuestionnairePage';
import {
  INITIAL_LAKSHMI_DATA,
  SUPPORTED_YEARS,
  getDefaultMultiYearState
} from './data/lakshmiData';
import { Coins, Sun, TrendingUp, Calendar, Copy, RotateCcw } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedYear, setSelectedYear] = useState('2026');

  // Load multi-year state from localStorage or defaults
  const [multiYearState, setMultiYearState] = useState(() => {
    try {
      const savedMulti = localStorage.getItem('ashta_lakshmi_multi_year_state_v2');
      if (savedMulti) {
        const parsed = JSON.parse(savedMulti);
        const result = {};
        SUPPORTED_YEARS.forEach(yr => {
          const yrData = parsed[yr] || {};
          const yearMap = {};
          INITIAL_LAKSHMI_DATA.forEach(def => {
            const loaded = yrData[def.id];
            yearMap[def.id] = {
              ...def,
              questions: loaded && loaded.questions ? loaded.questions : def.questions,
              automatedScore: loaded && loaded.automatedScore !== undefined ? loaded.automatedScore : def.automatedScore,
              scoreSource: loaded && loaded.scoreSource ? loaded.scoreSource : def.scoreSource
            };
          });
          result[yr] = yearMap;
        });
        return result;
      }

      const defaultMulti = getDefaultMultiYearState();
      return defaultMulti;
    } catch (e) {
      console.error('Error loading Ashta Lakshmi state:', e);
      return getDefaultMultiYearState();
    }
  });

  // Persist multi-year state
  useEffect(() => {
    try {
      localStorage.setItem('ashta_lakshmi_multi_year_state_v2', JSON.stringify(multiYearState));
    } catch (e) {}
  }, [multiYearState]);

  // Active year state
  const currentYearLakshmiState = multiYearState[selectedYear] || {};
  const currentLakshmiData = currentYearLakshmiState[activeTab];

  // Update a specific Lakshmi for the active year
  const handleUpdateLakshmi = (updatedLakshmi) => {
    setMultiYearState(prev => ({
      ...prev,
      [selectedYear]: {
        ...(prev[selectedYear] || {}),
        [updatedLakshmi.id]: updatedLakshmi
      }
    }));
  };

  // Reset current active year
  const handleResetYear = () => {
    if (!window.confirm(`Reset assessment questions and scores for year ${selectedYear} to default baseline?`)) return;
    const defaultMulti = getDefaultMultiYearState();
    setMultiYearState(prev => ({
      ...prev,
      [selectedYear]: defaultMulti[selectedYear] || {}
    }));
  };

  // Carry forward / Clone from previous year
  const handleCopyFromPreviousYear = () => {
    const prevYearIdx = SUPPORTED_YEARS.indexOf(selectedYear) - 1;
    if (prevYearIdx < 0) {
      alert(`No earlier baseline year available before ${selectedYear}.`);
      return;
    }
    const prevYear = SUPPORTED_YEARS[prevYearIdx];
    if (!window.confirm(`Copy all evaluation scores and questions from ${prevYear} into ${selectedYear}?`)) return;

    const sourceData = multiYearState[prevYear] || {};
    const clonedYear = {};
    INITIAL_LAKSHMI_DATA.forEach(def => {
      const src = sourceData[def.id] || def;
      clonedYear[def.id] = {
        ...def,
        questions: src.questions ? JSON.parse(JSON.stringify(src.questions)) : def.questions,
        automatedScore: src.automatedScore !== undefined ? src.automatedScore : def.automatedScore,
        scoreSource: src.scoreSource || def.scoreSource
      };
    });

    setMultiYearState(prev => ({
      ...prev,
      [selectedYear]: clonedYear
    }));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0F172A', color: '#F8FAFC' }}>
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lakshmiState={currentYearLakshmiState}
      />

      {/* Main Content View */}
      <div style={{ flex: 1, marginLeft: '260px', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Sticky Header */}
        <header style={{
          height: '76px',
          backgroundColor: '#1E293B',
          borderBottom: '1px solid #334155',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 30
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Sun size={22} color="#FBBF24" />
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: 'white' }}>
                Ashta Lakshmi — Vedic Wealth Assessment
              </h2>
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                {activeTab === 'dashboard' && 'Overview Dashboard & Harmony Index'}
                {activeTab === 'questionnaire' && 'Comprehensive Vedic Questionnaire (8 Lakshmis)'}
                {activeTab === 'spending' && 'Ashta Lakshmi Holistic Spending Audit & Life-Balance Matrix'}
                {activeTab === 'trends' && 'Longitudinal Trends & Gain/Loss Analysis'}
                {currentLakshmiData && `${currentLakshmiData.sanskritName} • Learn, Measure, Plan, Act`}
              </span>
            </div>
          </div>

          {/* Right Header Actions: Quick Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {activeTab !== 'spending' && (
              <>
                {/* Quick Action: Clone Previous Year */}
                <button
                  onClick={handleCopyFromPreviousYear}
                  title="Carry forward scores from previous assessment baseline"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(51, 65, 85, 0.6)',
                    border: '1px solid #475569',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    color: '#CBD5E1',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <Copy size={13} />
                  Carry Forward
                </button>

                {/* Quick Action: Reset Active Assessment */}
                <button
                  onClick={handleResetYear}
                  title="Reset assessment scores to default"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'transparent',
                    border: '1px solid #475569',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    color: '#94A3B8',
                    fontSize: '11.5px',
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={13} />
                  Reset
                </button>
              </>
            )}
          </div>
        </header>

        {/* Dynamic Pages */}
        <div style={{ flex: 1 }}>
          {activeTab === 'dashboard' && (
            <DashboardPage
              lakshmiState={currentYearLakshmiState}
              multiYearState={multiYearState}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              onSelectTab={setActiveTab}
              onResetAll={handleResetYear}
            />
          )}

          {/* Single Unified Vedic Questionnaire Page */}
          {activeTab === 'questionnaire' && (
            <QuestionnairePage
              lakshmiState={currentYearLakshmiState}
              onUpdateLakshmi={handleUpdateLakshmi}
            />
          )}

          {activeTab === 'spending' && (
            <VedicSpendingPage />
          )}

          {activeTab === 'trends' && (
            <TrendsPage
              multiYearState={multiYearState}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              onSelectTab={setActiveTab}
            />
          )}

          {/* 8 Dedicated Individual Lakshmi Pages: Learn -> Measure -> Plan -> Act */}
          {currentLakshmiData && (
            <LakshmiDetailPage
              lakshmiData={currentLakshmiData}
              selectedYear={selectedYear}
              onUpdateLakshmi={handleUpdateLakshmi}
              onBackToDashboard={() => setActiveTab('dashboard')}
            />
          )}
        </div>
      </div>
    </div>
  );
}
