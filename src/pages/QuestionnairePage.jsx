import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Search,
  Plus,
  Trash2,
  Sliders,
  HelpCircle,
  Award
} from 'lucide-react';
import {
  calculateLakshmiScore,
  getScoreRangeConfig,
  INITIAL_LAKSHMI_DATA
} from '../data/lakshmiData';

export function QuestionnairePage({
  lakshmiState,
  onUpdateLakshmi
}) {
  // Accordion state: map of lakshmi.id -> boolean (open/closed)
  const [expandedMap, setExpandedMap] = useState(() => {
    const init = {};
    INITIAL_LAKSHMI_DATA.forEach(l => {
      init[l.id] = true; // All 8 accordions expanded by default
    });
    return init;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [newQuestionTexts, setNewQuestionTexts] = useState({});

  const toggleAccordion = (id) => {
    setExpandedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleExpandAll = () => {
    const allOpen = {};
    INITIAL_LAKSHMI_DATA.forEach(l => { allOpen[l.id] = true; });
    setExpandedMap(allOpen);
  };

  const handleCollapseAll = () => {
    const allClosed = {};
    INITIAL_LAKSHMI_DATA.forEach(l => { allClosed[l.id] = false; });
    setExpandedMap(allClosed);
  };

  // Compute live pure question-based assessment scores for all 8 Lakshmis
  const computedList = useMemo(() => {
    return INITIAL_LAKSHMI_DATA.map(def => {
      const live = lakshmiState[def.id] || def;
      const questions = live.questions || def.questions || [];
      const score = calculateLakshmiScore(questions);
      const range = getScoreRangeConfig(score);
      return {
        ...live,
        questions,
        calculatedScore: score,
        range
      };
    });
  }, [lakshmiState]);

  // Overall Question Assessment Harmony Index
  const totalScoreSum = computedList.reduce((sum, item) => sum + item.calculatedScore, 0);
  const harmonyIndex = Math.round(totalScoreSum / computedList.length);
  const harmonyRange = getScoreRangeConfig(harmonyIndex);

  // Total questions count across all Lakshmis
  const totalQuestions = computedList.reduce((sum, item) => sum + item.questions.length, 0);

  // Handlers for question scoring
  const handleScoreChange = (lakshmiId, qId, newScore) => {
    const lakshmi = lakshmiState[lakshmiId] || INITIAL_LAKSHMI_DATA.find(l => l.id === lakshmiId);
    const updatedQuestions = (lakshmi.questions || []).map(q => {
      if (q.id === qId) {
        return { ...q, score: Math.min(100, Math.max(1, parseInt(newScore, 10) || 1)) };
      }
      return q;
    });

    onUpdateLakshmi({
      ...lakshmi,
      questions: updatedQuestions
    });
  };

  const handleAddQuestion = (lakshmiId) => {
    const text = (newQuestionTexts[lakshmiId] || '').trim();
    if (!text) return;

    const lakshmi = lakshmiState[lakshmiId] || INITIAL_LAKSHMI_DATA.find(l => l.id === lakshmiId);
    const newQ = {
      id: `${lakshmiId}_q_custom_${Date.now()}`,
      text,
      score: 80,
      weight: 3,
      isCustom: true
    };

    onUpdateLakshmi({
      ...lakshmi,
      questions: [...(lakshmi.questions || []), newQ]
    });

    setNewQuestionTexts(prev => ({ ...prev, [lakshmiId]: '' }));
  };

  const handleDeleteQuestion = (lakshmiId, qId) => {
    const lakshmi = lakshmiState[lakshmiId] || INITIAL_LAKSHMI_DATA.find(l => l.id === lakshmiId);
    onUpdateLakshmi({
      ...lakshmi,
      questions: (lakshmi.questions || []).filter(q => q.id !== qId)
    });
  };

  return (
    <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto', color: '#F8FAFC' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '20px',
        padding: '28px 32px',
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
            background: 'rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 800,
            color: '#FBBF24',
            marginBottom: '10px'
          }}>
            <Sparkles size={13} />
            SELF-ASSESSMENT QUESTIONNAIRE
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 900, color: 'white', margin: '0 0 8px 0', fontFamily: "'Cinzel', serif" }}>
            Vedic Questionnaire (8 Lakshmis)
          </h1>
          <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
            Reflect on and evaluate your personal alignment across the 8 wealth dimensions. Expand any Lakshmi accordion below to answer questions and adjust rating sliders.
          </p>
        </div>

        {/* Global Score Pill */}
        <div style={{
          backgroundColor: '#0F172A',
          border: `1px solid ${harmonyRange.borderColor}`,
          borderRadius: '16px',
          padding: '16px 24px',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
        }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>
            Questionnaire Score
          </span>
          <div style={{ fontSize: '32px', fontWeight: 900, color: harmonyRange.color, margin: '2px 0' }}>
            {harmonyIndex}<span style={{ fontSize: '16px', color: '#64748B' }}>/100</span>
          </div>
          <span style={{
            fontSize: '11px',
            fontWeight: 800,
            padding: '3px 8px',
            borderRadius: '6px',
            backgroundColor: `${harmonyRange.color}20`,
            color: harmonyRange.color
          }}>
            {harmonyRange.label}
          </span>
        </div>
      </div>

      {/* Global Control Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E293B',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '14px 20px',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '14px'
      }}>
        {/* Search Bar */}
        <div style={{ position: 'relative', minWidth: '300px' }}>
          <Search size={15} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '10px' }} />
          <input
            type="text"
            placeholder="Search questions across all 8 Lakshmis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px 8px 36px',
              borderRadius: '10px',
              backgroundColor: '#0F172A',
              border: '1px solid #334155',
              color: '#F8FAFC',
              fontSize: '13px',
              outline: 'none'
            }}
          />
        </div>

        {/* Global Expand / Collapse All Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600, marginRight: '4px' }}>
            {totalQuestions} Questions across 8 Pillars
          </span>
          <button
            onClick={handleExpandAll}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid #475569',
              backgroundColor: '#0F172A',
              color: '#CBD5E1',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Expand All
          </button>
          <button
            onClick={handleCollapseAll}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid #475569',
              backgroundColor: '#0F172A',
              color: '#CBD5E1',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* 8 Accordions Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {computedList.map((lakshmi) => {
          const Icon = lakshmi.icon;
          const isExpanded = !!expandedMap[lakshmi.id];
          const questions = lakshmi.questions || [];

          // Filter questions by search query
          const displayedQuestions = searchQuery.trim()
            ? questions.filter(q => q.text.toLowerCase().includes(searchQuery.toLowerCase()))
            : questions;

          if (searchQuery.trim() && displayedQuestions.length === 0) {
            return null;
          }

          return (
            <div
              key={lakshmi.id}
              id={`accordion-${lakshmi.id}`}
              style={{
                backgroundColor: '#1E293B',
                border: `1px solid ${isExpanded ? lakshmi.accentColor : '#334155'}`,
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                boxShadow: isExpanded ? `0 6px 20px ${lakshmi.accentColor}20` : 'none'
              }}
            >
              {/* Accordion Trigger Header */}
              <div
                onClick={() => toggleAccordion(lakshmi.id)}
                style={{
                  padding: '18px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor: isExpanded ? 'rgba(15, 23, 42, 0.6)' : '#1E293B',
                  borderBottom: isExpanded ? '1px solid #334155' : 'none',
                  userSelect: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: `${lakshmi.accentColor}20`,
                    border: `1px solid ${lakshmi.accentColor}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: lakshmi.accentColor
                  }}>
                    <Icon size={22} />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h2 style={{ fontSize: '18px', fontWeight: 900, color: 'white', margin: 0 }}>
                        {lakshmi.sanskritName}
                      </h2>
                      <span style={{ fontSize: '12.5px', color: '#94A3B8', fontWeight: 600 }}>
                        • {lakshmi.englishTitle}
                      </span>
                    </div>
                    <span style={{ fontSize: '12px', color: '#64748B' }}>
                      {lakshmi.description}
                    </span>
                  </div>
                </div>

                {/* Score Pill & Toggle Chevron */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '18px', fontWeight: 900, color: lakshmi.range.color }}>
                      {lakshmi.calculatedScore}
                      <span style={{ fontSize: '12px', color: '#64748B' }}>/100</span>
                    </div>
                    <span style={{
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: lakshmi.range.color,
                      backgroundColor: `${lakshmi.range.color}15`,
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}>
                      {lakshmi.range.label} ({questions.length} Qs)
                    </span>
                  </div>

                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#0F172A',
                    border: '1px solid #334155',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isExpanded ? lakshmi.accentColor : '#94A3B8'
                  }}>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
              </div>

              {/* Accordion Expanded Content: QUESTIONS ONLY */}
              {isExpanded && (
                <div style={{ padding: '24px' }}>
                  {/* Questions List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                    {displayedQuestions.map((q, qIndex) => (
                      <div
                        key={q.id}
                        style={{
                          backgroundColor: '#0F172A',
                          borderRadius: '12px',
                          padding: '18px 20px',
                          border: '1px solid #334155'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                            <span style={{
                              backgroundColor: `${lakshmi.accentColor}25`,
                              color: lakshmi.accentColor,
                              fontWeight: 900,
                              fontSize: '11px',
                              padding: '2px 8px',
                              borderRadius: '6px',
                              marginTop: '2px'
                            }}>
                              Q{qIndex + 1}
                            </span>
                            <p style={{ margin: 0, fontSize: '13.5px', fontWeight: 700, color: '#F8FAFC', lineHeight: 1.4 }}>
                              {q.text}
                            </p>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>
                              Weight: {q.weight || 1}x
                            </span>
                            {q.isCustom && (
                              <button
                                onClick={() => handleDeleteQuestion(lakshmi.id, q.id)}
                                title="Remove question"
                                style={{ background: 'none', border: 'none', color: '#F87171', cursor: 'pointer', padding: 0 }}
                              >
                                <Trash2 size={14} />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Interactive Slider & Quick Value Pills */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value={q.score || 50}
                            onChange={(e) => handleScoreChange(lakshmi.id, q.id, e.target.value)}
                            style={{
                              flex: 1,
                              accentColor: lakshmi.accentColor,
                              cursor: 'pointer'
                            }}
                          />

                          {/* Quick Value Pills */}
                          <div style={{ display: 'flex', gap: '4px' }}>
                            {[25, 50, 75, 100].map(val => (
                              <button
                                key={val}
                                onClick={() => handleScoreChange(lakshmi.id, q.id, val)}
                                style={{
                                  padding: '2px 8px',
                                  borderRadius: '6px',
                                  border: '1px solid #334155',
                                  backgroundColor: q.score === val ? `${lakshmi.accentColor}30` : '#1E293B',
                                  color: q.score === val ? lakshmi.accentColor : '#94A3B8',
                                  fontSize: '10.5px',
                                  fontWeight: 700,
                                  cursor: 'pointer'
                                }}
                              >
                                {val}
                              </button>
                            ))}
                          </div>

                          {/* Current Rating Indicator */}
                          <div style={{
                            minWidth: '55px',
                            textAlign: 'right',
                            fontSize: '15px',
                            fontWeight: 900,
                            color: lakshmi.accentColor
                          }}>
                            {q.score || 50}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Custom Question Form */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                      type="text"
                      placeholder={`Add a custom reflection question for ${lakshmi.sanskritName}...`}
                      value={newQuestionTexts[lakshmi.id] || ''}
                      onChange={(e) => setNewQuestionTexts({ ...newQuestionTexts, [lakshmi.id]: e.target.value })}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleAddQuestion(lakshmi.id); }}
                      style={{
                        flex: 1,
                        backgroundColor: '#0F172A',
                        border: '1px solid #334155',
                        borderRadius: '10px',
                        padding: '8px 14px',
                        color: '#F8FAFC',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                    <button
                      onClick={() => handleAddQuestion(lakshmi.id)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '10px',
                        border: 'none',
                        backgroundColor: lakshmi.accentColor,
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '12.5px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Plus size={14} />
                      Add Question
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
