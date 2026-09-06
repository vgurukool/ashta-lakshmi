import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Calendar,
  Layers,
  ArrowRight,
  ShieldAlert,
  Award
} from 'lucide-react';
import {
  INITIAL_LAKSHMI_DATA,
  SUPPORTED_YEARS,
  getFinalLakshmiScore,
  calculateYoYDeltas,
  getScoreRangeConfig
} from '../data/lakshmiData';

export function TrendsPage({ multiYearState, selectedYear, setSelectedYear, onSelectTab }) {
  const [selectedLines, setSelectedLines] = useState(() => {
    const init = {};
    INITIAL_LAKSHMI_DATA.forEach(d => { init[d.id] = true; });
    return init;
  });

  const [compareBaseYear, setCompareBaseYear] = useState('2023');
  const [compareTargetYear, setCompareTargetYear] = useState('2026');

  // Generate longitudinal timeline dataset
  const timelineData = SUPPORTED_YEARS.map(yr => {
    const yearObj = { year: yr };
    const yearMap = multiYearState[yr] || {};

    let total = 0;
    INITIAL_LAKSHMI_DATA.forEach(def => {
      const lakshmi = yearMap[def.id] || def;
      const score = getFinalLakshmiScore(lakshmi);
      yearObj[def.id] = score;
      total += score;
    });

    yearObj.average = Math.round(total / INITIAL_LAKSHMI_DATA.length);
    return yearObj;
  });

  // Calculate Deltas for currently selected year vs its previous year
  const prevYearIdx = SUPPORTED_YEARS.indexOf(selectedYear) - 1;
  const previousYear = prevYearIdx >= 0 ? SUPPORTED_YEARS[prevYearIdx] : SUPPORTED_YEARS[0];
  const deltaAnalytics = calculateYoYDeltas(multiYearState, selectedYear, previousYear);

  // Dual Radar Comparison Dataset
  const baseMap = multiYearState[compareBaseYear] || {};
  const targetMap = multiYearState[compareTargetYear] || {};

  const dualRadarData = INITIAL_LAKSHMI_DATA.map(def => {
    const baseLakshmi = baseMap[def.id] || def;
    const targetLakshmi = targetMap[def.id] || def;
    return {
      subject: def.sanskritName,
      [compareBaseYear]: getFinalLakshmiScore(baseLakshmi),
      [compareTargetYear]: getFinalLakshmiScore(targetLakshmi),
      fullMark: 100
    };
  });

  const toggleLine = (id) => {
    setSelectedLines(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const selectAllLines = () => {
    const all = {};
    INITIAL_LAKSHMI_DATA.forEach(d => { all[d.id] = true; });
    setSelectedLines(all);
  };

  const clearAllLines = () => {
    setSelectedLines({});
  };

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(245, 158, 11, 0.12) 100%)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '16px',
        padding: '26px 32px',
        marginBottom: '28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ maxWidth: '750px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(99, 102, 241, 0.2)',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 800,
            color: '#818CF8',
            marginBottom: '10px'
          }}>
            <TrendingUp size={13} />
            LONGITUDINAL VEDIC WEALTH VELOCITY & HISTORICAL TRAJECTORY
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#F8FAFC', margin: '0 0 8px 0' }}>
            Multi-Year Trends & Gain/Loss Analysis
          </h1>
          <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
            Track whether your 8 dimensions of Vedic wealth are expanding or contracting over time. Compare historical years, identify surging strengths, and catch areas requiring immediate attention.
          </p>
        </div>

        {/* Year Comparison Picker */}
        <div style={{
          background: '#1E293B',
          border: '1px solid #334155',
          borderRadius: '12px',
          padding: '14px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>
            Active Assessment Year
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {SUPPORTED_YEARS.map(yr => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: selectedYear === yr ? '2px solid #F59E0B' : '1px solid #334155',
                  backgroundColor: selectedYear === yr ? '#F59E0B' : '#0F172A',
                  color: selectedYear === yr ? '#0F172A' : '#CBD5E1',
                  fontWeight: 800,
                  fontSize: '12.5px',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3 Metric Cards: Overall Velocity, Top Gainers, Decline Warning */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '28px' }}>
        {/* Card 1: Net Wealth Velocity */}
        <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '14px', padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase' }}>
              Wealth Velocity ({selectedYear} vs {previousYear})
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '8px',
              backgroundColor: deltaAnalytics.totalDelta >= 0 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
              color: deltaAnalytics.totalDelta >= 0 ? '#34D399' : '#F87171'
            }}>
              {deltaAnalytics.totalDelta >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {deltaAnalytics.totalDelta >= 0 ? `+${deltaAnalytics.totalDelta}` : deltaAnalytics.totalDelta} pts
            </span>
          </div>

          <div style={{ fontSize: '32px', fontWeight: 900, color: '#F8FAFC', marginBottom: '4px' }}>
            {deltaAnalytics.avgCur}/100
          </div>
          <div style={{ fontSize: '12px', color: '#94A3B8' }}>
            Previous year baseline: <strong style={{ color: '#CBD5E1' }}>{deltaAnalytics.avgPrev}/100</strong>
          </div>
        </div>

        {/* Card 2: Highest Gaining Lakshmis */}
        <div style={{ background: '#1E293B', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '14px', padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <TrendingUp size={16} color="#34D399" />
            <span style={{ fontSize: '11px', color: '#34D399', fontWeight: 800, textTransform: 'uppercase' }}>
              Top Gaining Lakshmis (Surging)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {deltaAnalytics.gainingList.slice(0, 3).map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{item.sanskritName}</span>
                <span style={{ color: '#34D399', fontWeight: 800, background: 'rgba(16, 185, 129, 0.1)', padding: '2px 6px', borderRadius: '6px' }}>
                  +{item.delta} pts ({item.currentScore}/100)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Declining / Needs Focus */}
        <div style={{ background: '#1E293B', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '14px', padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Sparkles size={16} color="#FBBF24" />
            <span style={{ fontSize: '11px', color: '#FBBF24', fontWeight: 800, textTransform: 'uppercase' }}>
              Stable & Focus Areas
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {deltaAnalytics.losingList.length > 0 ? (
              deltaAnalytics.losingList.slice(0, 3).map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                  <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{item.sanskritName}</span>
                  <span style={{ color: '#F87171', fontWeight: 800, background: 'rgba(239, 68, 68, 0.1)', padding: '2px 6px', borderRadius: '6px' }}>
                    {item.delta} pts ({item.currentScore}/100)
                  </span>
                </div>
              ))
            ) : (
              <div style={{ fontSize: '12.5px', color: '#94A3B8', fontStyle: 'italic', paddingTop: '4px' }}>
                All 8 dimensions maintained or advanced in {selectedYear}! No negative regressions detected.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Multi-Line Longitudinal Timeline */}
      <div style={{
        background: '#1E293B',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '26px',
        marginBottom: '28px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
              Longitudinal Progression (2023 → 2026)
            </h3>
            <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>
              Evolution of all 8 forms of Vedic wealth over the 4-year timeline
            </p>
          </div>

          {/* Line Toggles */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <button
              onClick={selectAllLines}
              style={{ background: '#0F172A', border: '1px solid #334155', color: '#94A3B8', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}
            >
              All
            </button>
            <button
              onClick={clearAllLines}
              style={{ background: '#0F172A', border: '1px solid #334155', color: '#94A3B8', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}
            >
              Clear
            </button>
          </div>
        </div>

        {/* Series Pill Filter */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {INITIAL_LAKSHMI_DATA.map(item => {
            const isVisible = !!selectedLines[item.id];
            return (
              <button
                key={item.id}
                onClick={() => toggleLine(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  border: isVisible ? `1px solid ${item.accentColor}` : '1px solid #334155',
                  backgroundColor: isVisible ? `${item.accentColor}20` : '#0F172A',
                  color: isVisible ? '#F8FAFC' : '#64748B',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.accentColor }} />
                <span>{item.sanskritName}</span>
              </button>
            );
          })}
        </div>

        {/* Line Chart */}
        <div style={{ height: '380px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
              <XAxis dataKey="year" stroke="#94A3B8" tick={{ fill: '#CBD5E1', fontSize: 12, fontWeight: 700 }} />
              <YAxis domain={[40, 100]} stroke="#94A3B8" tick={{ fill: '#CBD5E1', fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px', color: '#F8FAFC' }}
              />
              <Legend />
              {INITIAL_LAKSHMI_DATA.map(item => {
                if (!selectedLines[item.id]) return null;
                return (
                  <Line
                    key={item.id}
                    type="monotone"
                    dataKey={item.id}
                    name={item.sanskritName}
                    stroke={item.accentColor}
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: item.accentColor }}
                    activeDot={{ r: 6 }}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Dual Radar Wheel Comparison + Breakdown Table Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '24px', marginBottom: '32px' }}>
        {/* Dual Radar Chart */}
        <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
                Dual-Year Wheel Overlay
              </h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>
                Direct visual comparison of wheel expansion
              </p>
            </div>

            {/* Selectors for comparison */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <select
                value={compareBaseYear}
                onChange={(e) => setCompareBaseYear(e.target.value)}
                style={{ background: '#0F172A', color: '#94A3B8', border: '1px solid #334155', borderRadius: '6px', padding: '4px 8px', fontSize: '11.5px' }}
              >
                {SUPPORTED_YEARS.map(y => <option key={y} value={y}>Base: {y}</option>)}
              </select>
              <select
                value={compareTargetYear}
                onChange={(e) => setCompareTargetYear(e.target.value)}
                style={{ background: '#0F172A', color: '#FBBF24', border: '1px solid #F59E0B', borderRadius: '6px', padding: '4px 8px', fontSize: '11.5px', fontWeight: 700 }}
              >
                {SUPPORTED_YEARS.map(y => <option key={y} value={y}>Compare: {y}</option>)}
              </select>
            </div>
          </div>

          <div style={{ height: '340px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={dualRadarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94A3B8" tick={{ fill: '#CBD5E1', fontSize: 10, fontWeight: 700 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" tick={{ fill: '#64748B', fontSize: 9 }} />
                <Radar name={compareBaseYear} dataKey={compareBaseYear} stroke="#64748B" fill="#64748B" fillOpacity={0.25} />
                <Radar name={compareTargetYear} dataKey={compareTargetYear} stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.45} />
                <Legend />
                <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', color: '#F8FAFC' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Table */}
        <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', padding: '24px', overflowX: 'auto' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', marginBottom: '4px' }}>
            Multi-Year Score Progression Matrix
          </h3>
          <p style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '16px' }}>
            Yearly evolution and net delta per Lakshmi
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #334155', color: '#94A3B8', textAlign: 'left' }}>
                <th style={{ padding: '8px 10px' }}>Lakshmi</th>
                <th style={{ padding: '8px 6px', textAlign: 'center' }}>2023</th>
                <th style={{ padding: '8px 6px', textAlign: 'center' }}>2024</th>
                <th style={{ padding: '8px 6px', textAlign: 'center' }}>2025</th>
                <th style={{ padding: '8px 6px', textAlign: 'center' }}>2026</th>
                <th style={{ padding: '8px 10px', textAlign: 'right' }}>1-Yr Δ</th>
              </tr>
            </thead>
            <tbody>
              {INITIAL_LAKSHMI_DATA.map(item => {
                const s2023 = getFinalLakshmiScore(multiYearState['2023']?.[item.id] || item);
                const s2024 = getFinalLakshmiScore(multiYearState['2024']?.[item.id] || item);
                const s2025 = getFinalLakshmiScore(multiYearState['2025']?.[item.id] || item);
                const s2026 = getFinalLakshmiScore(multiYearState['2026']?.[item.id] || item);

                const d = deltaAnalytics.deltas[item.id] || { delta: 0 };

                return (
                  <tr
                    key={item.id}
                    onClick={() => onSelectTab(item.id)}
                    style={{ borderBottom: '1px solid #1E293B', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td style={{ padding: '10px', color: '#F8FAFC', fontWeight: 700 }}>
                      <span style={{ color: item.accentColor, marginRight: '6px' }}>●</span>
                      {item.sanskritName}
                    </td>
                    <td style={{ padding: '10px 6px', textAlign: 'center', color: '#94A3B8' }}>{s2023}</td>
                    <td style={{ padding: '10px 6px', textAlign: 'center', color: '#94A3B8' }}>{s2024}</td>
                    <td style={{ padding: '10px 6px', textAlign: 'center', color: '#CBD5E1' }}>{s2025}</td>
                    <td style={{ padding: '10px 6px', textAlign: 'center', color: '#FBBF24', fontWeight: 800 }}>{s2026}</td>
                    <td style={{ padding: '10px', textAlign: 'right' }}>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '6px',
                        fontWeight: 800,
                        fontSize: '11px',
                        backgroundColor: d.delta > 0 ? 'rgba(16, 185, 129, 0.15)' : (d.delta < 0 ? 'rgba(239, 68, 68, 0.15)' : 'rgba(148, 163, 184, 0.1)'),
                        color: d.delta > 0 ? '#34D399' : (d.delta < 0 ? '#F87171' : '#94A3B8')
                      }}>
                        {d.delta > 0 ? `+${d.delta}` : d.delta}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
