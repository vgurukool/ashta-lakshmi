import React from 'react';
import {
  LayoutDashboard,
  Sun,
  Coins,
  TrendingUp,
  PieChart,
  ClipboardList
} from 'lucide-react';
import { INITIAL_LAKSHMI_DATA, getFinalLakshmiScore, getScoreRangeConfig } from '../data/lakshmiData';

export function Sidebar({ activeTab, setActiveTab, lakshmiState }) {
  return (
    <aside style={{
      width: '260px',
      backgroundColor: '#1E293B',
      borderRight: '1px solid #334155',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 40,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header Logo */}
      <div style={{
        height: '76px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        borderBottom: '1px solid #334155'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #F59E0B, #8B5CF6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)'
          }}>
            <Sun size={20} color="white" />
          </div>
          <div>
            <h1 style={{ fontSize: '17px', fontWeight: 900, color: 'white', margin: 0, letterSpacing: '-0.3px' }}>
              ASHTA LAKSHMI
            </h1>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Vedic Wealth Platform
            </span>
          </div>
        </div>
      </div>

      {/* Nav Menu */}
      <nav style={{ padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto', flex: 1 }}>
        {/* Main Dashboard Tab */}
        <button
          className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'dashboard' ? '#6558D3' : 'transparent',
            color: activeTab === 'dashboard' ? 'white' : '#CBD5E1',
            fontWeight: 700,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left'
          }}
          onClick={() => setActiveTab('dashboard')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LayoutDashboard size={17} />
            <span>Dashboard Overview</span>
          </div>
        </button>

        {/* Single Vedic Questionnaire Page Tab */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'questionnaire' ? 'rgba(139, 92, 246, 0.25)' : 'transparent',
            color: activeTab === 'questionnaire' ? '#A78BFA' : '#CBD5E1',
            fontWeight: activeTab === 'questionnaire' ? 800 : 600,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left'
          }}
          onClick={() => setActiveTab('questionnaire')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ClipboardList size={17} color={activeTab === 'questionnaire' ? '#A78BFA' : '#94A3B8'} />
            <span>Vedic Questionnaire</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 6px', borderRadius: '6px', background: 'rgba(139,92,246,0.2)', color: '#A78BFA' }}>
            8 Accordions
          </span>
        </button>

        {/* Ashta Lakshmi Interconnected Mandala Tab */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'mandala' ? 'rgba(245, 158, 11, 0.25)' : 'transparent',
            color: activeTab === 'mandala' ? '#FBBF24' : '#CBD5E1',
            fontWeight: activeTab === 'mandala' ? 800 : 600,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left'
          }}
          onClick={() => setActiveTab('mandala')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sun size={17} color={activeTab === 'mandala' ? '#FBBF24' : '#94A3B8'} />
            <span>Lakshmi Mandala</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 6px', borderRadius: '6px', background: 'rgba(245, 158, 11, 0.2)', color: '#FBBF24' }}>
            Symbiosis
          </span>
        </button>

        {/* Vedic Spending Audit Tab */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'spending' ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
            color: activeTab === 'spending' ? '#FBBF24' : '#CBD5E1',
            fontWeight: activeTab === 'spending' ? 800 : 600,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left'
          }}
          onClick={() => setActiveTab('spending')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PieChart size={17} color={activeTab === 'spending' ? '#FBBF24' : '#94A3B8'} />
            <span>Vedic Spending Audit</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 6px', borderRadius: '6px', background: 'rgba(245, 158, 11, 0.2)', color: '#FBBF24' }}>
            Monthly / Yearly
          </span>
        </button>

        {/* Longitudinal Trends & YoY Tab */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'trends' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
            color: activeTab === 'trends' ? '#818CF8' : '#CBD5E1',
            fontWeight: activeTab === 'trends' ? 800 : 600,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left',
            marginBottom: '4px'
          }}
          onClick={() => setActiveTab('trends')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TrendingUp size={17} color={activeTab === 'trends' ? '#818CF8' : '#94A3B8'} />
            <span>Multi-Year Trends</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 6px', borderRadius: '6px', background: 'rgba(99,102,241,0.2)', color: '#818CF8' }}>
            YoY
          </span>
        </button>

        {/* Section Header */}
        <div style={{
          fontSize: '10px',
          fontWeight: 800,
          color: '#64748B',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          padding: '12px 12px 6px 12px',
          marginTop: '6px'
        }}>
          8 Forms of Wealth Pages
        </div>

        {/* 8 Full Dedicated Individual Lakshmi Pages */}
        {INITIAL_LAKSHMI_DATA.map((item) => {
          const Icon = item.icon;
          const currentLakshmi = lakshmiState[item.id] || item;
          const calculatedScore = getFinalLakshmiScore(currentLakshmi);
          const range = getScoreRangeConfig(calculatedScore);
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 12px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: isActive ? '#334155' : 'transparent',
                color: isActive ? 'white' : '#94A3B8',
                fontWeight: isActive ? 700 : 600,
                fontSize: '13px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s ease'
              }}
              onClick={() => setActiveTab(item.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icon size={15} color={item.accentColor} />
                <span>{item.sanskritName}</span>
              </div>
              <span style={{
                fontSize: '11px',
                fontWeight: 800,
                color: range.color,
                backgroundColor: isActive ? `${range.color}25` : 'transparent',
                padding: '2px 6px',
                borderRadius: '6px'
              }}>
                {calculatedScore}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
