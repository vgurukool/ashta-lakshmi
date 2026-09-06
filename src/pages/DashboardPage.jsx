import React from 'react';
import {
  Sun,
  ArrowRight,
  RotateCcw,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Layers
} from 'lucide-react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip
} from 'recharts';
import {
  getFinalLakshmiScore,
  getScoreRangeConfig,
  SUPPORTED_YEARS,
  calculateYoYDeltas
} from '../data/lakshmiData';

export function DashboardPage({
  lakshmiState,
  multiYearState,
  selectedYear = '2026',
  setSelectedYear,
  onSelectTab,
  onResetAll
}) {
  const lakshmiArray = Object.values(lakshmiState);

  // Compute live final scores for each Lakshmi
  const computedScores = lakshmiArray.map(item => {
    const score = getFinalLakshmiScore(item);
    return {
      ...item,
      calculatedScore: score,
      range: getScoreRangeConfig(score)
    };
  });

  // Calculate overall Ashta Lakshmi Harmony Index
  const totalScoreSum = computedScores.reduce((sum, item) => sum + item.calculatedScore, 0);
  const harmonyIndex = Math.round(totalScoreSum / computedScores.length);
  const harmonyRange = getScoreRangeConfig(harmonyIndex);

  // Highest & Lowest wealth dimensions
  const sortedByScore = [...computedScores].sort((a, b) => b.calculatedScore - a.calculatedScore);
  const highestWealth = sortedByScore[0];
  const lowestWealth = sortedByScore[sortedByScore.length - 1];

  // Radar chart dataset
  const chartData = computedScores.map(item => ({
    subject: item.sanskritName,
    fullMark: 100,
    Score: item.calculatedScore
  }));

  // Previous year deltas
  const prevYearIdx = SUPPORTED_YEARS.indexOf(selectedYear) - 1;
  const previousYear = prevYearIdx >= 0 ? SUPPORTED_YEARS[prevYearIdx] : SUPPORTED_YEARS[0];
  const deltaAnalytics = multiYearState ? calculateYoYDeltas(multiYearState, selectedYear, previousYear) : null;

  return (
    <div className="page-wrapper" style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto', paddingBottom: '60px' }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
        borderRadius: '24px',
        padding: '32px 36px',
        color: 'white',
        marginBottom: '24px',
        boxShadow: '0 10px 30px -5px rgba(67, 56, 202, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', fontSize: '12px', fontWeight: 700 }}>
                <Sun size={15} color="#FBBF24" />
                <span>Connected Ashta Lakshmi Dashboard</span>
              </div>

              {/* Year Toggle Bar */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(15, 23, 42, 0.6)', padding: '3px 6px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <span style={{ fontSize: '11px', color: '#94A3B8', padding: '0 6px', fontWeight: 600 }}>Year:</span>
                {SUPPORTED_YEARS.map(yr => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear && setSelectedYear(yr)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: selectedYear === yr ? '#F59E0B' : 'transparent',
                      color: selectedYear === yr ? '#0F172A' : '#CBD5E1',
                      fontWeight: selectedYear === yr ? 900 : 600,
                      fontSize: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>

            <h1 style={{ fontSize: '30px', fontWeight: 900, margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
              Eight Dimensions of Vedic Wealth ({selectedYear})
            </h1>
            <p style={{ fontSize: '14.5px', color: '#E0E7FF', margin: 0, lineHeight: '1.5' }}>
              Your Harmony Index and 8-Axis Radar Chart reflect your {selectedYear} assessment. You can toggle between historical years or view longitudinal progression.
            </p>
          </div>

          {/* Overall Score Badge */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            padding: '20px 28px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center',
            minWidth: '200px'
          }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: '#C7D2FE' }}>
              {selectedYear} Harmony Index
            </span>
            <div style={{ fontSize: '44px', fontWeight: 900, color: '#FBBF24', margin: '2px 0' }}>
              {harmonyIndex}<span style={{ fontSize: '18px', color: '#E0E7FF' }}>/100</span>
            </div>
            <span style={{
              display: 'inline-block',
              padding: '3px 10px',
              borderRadius: '10px',
              fontSize: '11.5px',
              fontWeight: 800,
              backgroundColor: harmonyRange.badgeBg,
              color: harmonyRange.badgeColor
            }}>
              {harmonyRange.label}
            </span>
          </div>
        </div>
      </div>

      {/* Quick Trends Banner Link */}
      {deltaAnalytics && (
        <div
          onClick={() => onSelectTab('trends')}
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(16, 185, 129, 0.1) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            borderRadius: '14px',
            padding: '14px 20px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            transition: 'all 0.15s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818CF8'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)'}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.2)', color: '#818CF8' }}>
              <TrendingUp size={18} />
            </div>
            <div>
              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#F8FAFC' }}>
                Year-over-Year Trajectory ({selectedYear} vs {previousYear}):{' '}
                <span style={{ color: deltaAnalytics.totalDelta >= 0 ? '#34D399' : '#F87171' }}>
                  {deltaAnalytics.totalDelta >= 0 ? `+${deltaAnalytics.totalDelta}` : deltaAnalytics.totalDelta} pts net velocity
                </span>
              </span>
              <span style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '12px' }}>
                Top gainers: {deltaAnalytics.gainingList.slice(0, 2).map(g => `${g.sanskritName} (+${g.delta})`).join(', ') || 'Stable'}
              </span>
            </div>
          </div>

          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 700, color: '#818CF8' }}>
            Open Full Longitudinal Trends <ArrowRight size={14} />
          </span>
        </div>
      )}

      {/* Main Grid: 8 Lakshmi Cards (Left 2/3) + Radar Chart (Right 1/3) */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '28px' }}>
        {/* Left Column: 8 Cards in 2x4 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
          {computedScores.map((item) => {
            const Icon = item.icon;
            const sourceLabel = item.scoreSource === 'automated' ? 'Automated' : (item.scoreSource === 'blended' ? '50/50 Blended' : 'Self-Assessment');
            const d = deltaAnalytics?.deltas[item.id];

            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  border: `1px solid ${item.range.borderColor}`,
                  padding: '22px',
                  color: '#0F172A',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        padding: '10px',
                        borderRadius: '12px',
                        backgroundColor: `${item.accentColor}15`,
                        color: item.accentColor
                      }}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '16px', fontWeight: 900, margin: 0, color: '#0F172A' }}>
                          {item.sanskritName}
                        </h3>
                        <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#64748B' }}>
                          {item.englishTitle}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                      <div style={{
                        padding: '3px 10px',
                        borderRadius: '10px',
                        fontSize: '12px',
                        fontWeight: 800,
                        backgroundColor: item.range.badgeBg,
                        color: item.range.badgeColor
                      }}>
                        {item.calculatedScore}/100
                      </div>

                      {/* YoY Delta Indicator */}
                      {d && (
                        <span style={{
                          fontSize: '10.5px',
                          fontWeight: 800,
                          color: d.delta > 0 ? '#059669' : (d.delta < 0 ? '#DC2626' : '#64748B')
                        }}>
                          {d.delta > 0 ? `+${d.delta} vs ${previousYear} ▲` : (d.delta < 0 ? `${d.delta} vs ${previousYear} ▼` : `±0 vs ${previousYear}`)}
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.45', margin: '0 0 14px 0', minHeight: '34px' }}>
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectTab(item.id)}
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    backgroundColor: '#F8FAFC',
                    color: '#4F46E5',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>Evaluate {item.sanskritName} ({selectedYear})</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Sidebar: Radar Spider Graph */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid #E2E8F0', textAlign: 'center', color: '#0F172A' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>
              Wealth Wheel ({selectedYear})
            </h3>
            <span style={{ fontSize: '11.5px', color: '#64748B' }}>Live 8-Axis Connected Radar</span>

            <div style={{ width: '100%', height: 320, marginTop: '10px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
                  <PolarGrid stroke="#CBD5E1" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#334155', fontSize: 10, fontWeight: 700 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94A3B8" fontSize={9} />
                  <Radar name="Wealth Level" dataKey="Score" stroke="#6558D3" fill="#6558D3" fillOpacity={0.45} />
                  <Tooltip formatter={(val) => [`${val}/100`, 'Score']} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Strengths Summary */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0', color: '#0F172A' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '10px', color: '#0F172A' }}>
              {selectedYear} Dominant vs Focus Facets
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#059669', fontWeight: 700 }}>Apex: {highestWealth.sanskritName}</span>
                <span style={{ fontWeight: 800 }}>{highestWealth.calculatedScore}/100</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#D97706', fontWeight: 700 }}>Growth: {lowestWealth.sanskritName}</span>
                <span style={{ fontWeight: 800 }}>{lowestWealth.calculatedScore}/100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
