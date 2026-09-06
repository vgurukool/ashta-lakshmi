import React, { useState } from 'react';
import {
  BookOpen,
  Activity,
  Sparkles,
  CheckSquare,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sliders,
  CheckCircle2,
  Square,
  Plus,
  Trash2,
  Zap,
  Target,
  Flame,
  FileText,
  SlidersHorizontal,
  ArrowLeft
} from 'lucide-react';
import {
  calculateLakshmiScore,
  getFinalLakshmiScore,
  getScoreRangeConfig
} from '../data/lakshmiData';

const LAKSHMI_LEARN_PROFILES = {
  adi: {
    sanskritTitle: 'आदिलक्ष्मी (Primordial & Spiritual Wealth)',
    scripturalRef: 'Sri Suktam & Rigveda — "Moksha & Atma Jnana"',
    philosophy: 'Adi Lakshmi represents the primordial, unmanifest source of all fortune. In Vedic philosophy, material wealth without spiritual peace is a hollow shell. True Adi wealth is a quiet mind, freedom from existential anxiety, and awareness of one\'s eternal divine nature.',
    principles: [
      { title: 'Inner Equanimity (Samatvam)', desc: 'Remaining calm and composed in both victory and adversity, recognizing the transient nature of material states.' },
      { title: 'Spiritual Alignment (Dharma)', desc: 'Living in harmony with your deeper cosmic purpose rather than chasing superficial status.' },
      { title: 'Sacred Silence (Mouna & Meditation)', desc: 'Cultivating daily spaces of silence to detach from digital noise and reconnect with pure consciousness.' }
    ],
    symbolism: 'Four arms holding the lotus of purity, offering Abhaya Mudra (fearlessness) and Varada Mudra (boon giving).'
  },
  dhanya: {
    sanskritTitle: 'धान्यलक्ष्मी (Nourishment & Cellular Vitality)',
    scripturalRef: 'Taittiriya Upanishad — "Annam Brahma (Food is the Divine)"',
    philosophy: 'Dhanya Lakshmi is the goddess of nourishment, agriculture, and bodily vigor. The physical body (Annamaya Kosha) is the vehicle through which all life goals are accomplished. Wholesome food, clean water, and pure air are the most foundational forms of wealth.',
    principles: [
      { title: 'Sattvic Dietary Discipline', desc: 'Prioritizing whole, organic, unadulterated plant-based foods that nourish mental clarity and physical vitality.' },
      { title: 'Biological Agility & Prana', desc: 'Cultivating physical endurance, restful sleep, and breath vitality to sustain productive work.' },
      { title: 'Reverence for Sustenance', desc: 'Approaching food with mindfulness and gratitude, recognizing every meal as sacred fuel.' }
    ],
    symbolism: 'Adorned in green silks, holding sugarcane, paddy grains, banana stalks, and the lotus of regenerative life.'
  },
  dhana: {
    sanskritTitle: 'धनलक्ष्मी (Capital, Liquidity & Material Abundance)',
    scripturalRef: 'Mahabharata — "Artha (Legitimate Material Prosperity)"',
    philosophy: 'Dhana Lakshmi governs gold, currency, capital allocation, and debt freedom. In Sanatana Dharma, wealth (Artha) is an essential pillar when acquired through righteous means (Dharma) and used to sustain society, protect the vulnerable, and uplift the family.',
    principles: [
      { title: 'Righteous Capital (Dharmic Artha)', desc: 'Generating value with integrity, avoiding exploitation, and building sustainable long-term assets.' },
      { title: 'Risk Armor & Liquidity', desc: 'Maintaining robust cash reserves, zero predatory debt, and smart compounding investments.' },
      { title: 'Generous Circulation (Dāna)', desc: 'Recognizing that money must flow to stay healthy; hoarding stagnates, while mindful giving elevates.' }
    ],
    symbolism: 'Holding a golden pot (Amrita Kalasha) spilling gold coins, conch shell of victory, and the discus of protection.'
  },
  dhairya: {
    sanskritTitle: 'धैर्यलक्ष्मी (Courage, Resilience & Risk Armor)',
    scripturalRef: 'Bhagavad Gita — "Abhayam Sattvasamsuddhi (Fearlessness)"',
    philosophy: 'Dhairya Lakshmi (also known as Veera Lakshmi) is the goddess of unwavering fortitude, courage in the face of crisis, and structural resilience. Wealth is incomplete if one is easily paralyzed by fear, market volatility, or unexpected adversity.',
    principles: [
      { title: 'Stoic Resilience (Titiksha)', desc: 'The capacity to endure hardship, failure, and disruption without losing moral character or inner faith.' },
      { title: 'Comprehensive Risk Armor', desc: 'Shielding family and enterprise with robust insurance, emergency contingency plans, and asset protection.' },
      { title: 'Courageous Execution', desc: 'Willingness to take calculated, ethical risks and champion bold initiatives despite uncertainty.' }
    ],
    symbolism: 'Eight-armed, brandishing weapons of truth (sword, bow, arrow, trident) while displaying the blessing of total fearlessness.'
  },
  gaja: {
    sanskritTitle: 'गजलक्ष्मी (Sovereignty, Mobility & Living Space)',
    scripturalRef: 'Srimad Bhagavatam — "Samrajya & Rajalakshmi"',
    philosophy: 'Gaja Lakshmi is the sovereign queen of royalty, estate, majestic grace, and mobility. Flanked by royal elephants pouring sanctified waters, she represents dignified housing, sovereign living conditions, and high-functioning infrastructure that commands natural respect.',
    principles: [
      { title: 'Sanctuary of the Home (Vāstu)', desc: 'Maintaining a clean, serene, and sovereign residential environment that fosters peace and elevated thinking.' },
      { title: 'Reliable Mobility & Tools', desc: 'Owning safe, dependable vehicles and functional tools that enable effortless movement and leadership.' },
      { title: 'Dignity of Influence', desc: 'Projecting calm authority and grace in professional, social, and civic leadership circles.' }
    ],
    symbolism: 'Flanked by two celestial white elephants showering water from golden vessels, symbolizing sovereignty and divine kingship.'
  },
  santana: {
    sanskritTitle: 'सन्तानलक्ष्मी (Family Welfare, Lineage & Discipleship)',
    scripturalRef: 'Rigveda — "Prajā & Paramparā (Continuity of Values)"',
    philosophy: 'Santana Lakshmi (Prajā Lakshmi) governs family unity, the welfare of children, the honoring of elders, and the transmission of wisdom across generations. Real wealth extends beyond a single lifetime into the enduring integrity of one\'s lineage and mentorship.',
    principles: [
      { title: 'Generational Value Transmission', desc: 'Instilling noble character, cultural heritage, and ethical discipline in children and mentees.' },
      { title: 'Family Harmony (Kula Dharma)', desc: 'Cultivating mutual respect, deep bonding, and compassionate care for aging parents and relatives.' },
      { title: 'Discipleship & Mentorship', desc: 'Guiding the next generation of professionals, thinkers, and builders to carry forward noble traditions.' }
    ],
    symbolism: 'Holding two celestial water pots, a lotus, and seated with a child on her lap, symbolizing unconditional maternal benevolence.'
  },
  vijaya: {
    sanskritTitle: 'विजयलक्ष्मी (Career Triumph, Grit & Enterprise)',
    scripturalRef: 'Atharva Veda — "Jaya & Yashas (Victory & Honor)"',
    philosophy: 'Vijaya Lakshmi (Jaya Lakshmi) is the embodiment of triumph over obstacles, professional excellence, grit, and competitive mastery. She grants the determination to see challenging projects through to victorious completion.',
    principles: [
      { title: 'Relentless Execution (Grit)', desc: 'Overcoming setbacks and market hurdles through perseverance, skill, and focused dedication.' },
      { title: 'Professional Excellence (Kaushalam)', desc: 'Delivering exceptional craft, mastery of modern tools, and continuous innovation in your field.' },
      { title: 'Ethical Victory', desc: 'Winning through superior value and integrity, elevating all stakeholders rather than exploiting competitors.' }
    ],
    symbolism: 'Adorned in red garments, holding the conch, sword, shield, discus, lotus, and noose of victory.'
  },
  vidya: {
    sanskritTitle: 'विद्यालक्ष्मी (Multiple Intelligences, Wisdom & Mastery)',
    scripturalRef: 'Saraswati Rahasya Upanishad — "Jnana & Vijnana"',
    philosophy: 'Vidya Lakshmi is the goddess of comprehensive intellectual mastery, multiple intelligences, artistic discernment, and applied wisdom. Intellectual wealth is the only capital that multiplies when shared with others.',
    principles: [
      { title: 'Lifelong Polymathic Learning', desc: 'Constantly expanding knowledge across science, philosophy, technology, and classical arts.' },
      { title: 'Applied Wisdom (Vijnana)', desc: 'Transforming theoretical information into practical, compassionate solutions for real-world challenges.' },
      { title: 'Intellectual Generosity', desc: 'Teaching, publishing, and mentoring others freely to dispel ignorance and uplift society.' }
    ],
    symbolism: 'Draped in white, holding the sacred palm-leaf manuscript (Jnana), the rosary of focus, and seated in meditation.'
  }
};

const COMPANION_APP_URLS = {
  dhana: { name: 'Dhana Lakshmi App', port: ':3002', url: 'http://127.0.0.1:3002' },
  dhanya: { name: 'Dhanya Lakshmi App', port: ':3003', url: 'http://127.0.0.1:3003' },
  gaja: { name: 'Gaja Lakshmi App', port: ':3004', url: 'http://127.0.0.1:3004' },
  vidya: { name: 'Vidya Lakshmi App', port: ':3008', url: 'http://127.0.0.1:3008' }
};

export function LakshmiDetailPage({
  lakshmiData,
  selectedYear = '2026',
  onUpdateLakshmi,
  onBackToDashboard
}) {
  const Icon = lakshmiData.icon;
  const questions = lakshmiData.questions || [];
  const actionItems = lakshmiData.actionItems || [];
  const automatedMetrics = lakshmiData.automatedMetrics || [];
  const learnProfile = LAKSHMI_LEARN_PROFILES[lakshmiData.id] || LAKSHMI_LEARN_PROFILES.adi;
  const companionApp = COMPANION_APP_URLS[lakshmiData.id];

  // 4 Accordions State (Learn, Measure, Plan, Act)
  const [accordionState, setAccordionState] = useState({
    learn: true,
    measure: true,
    plan: true,
    act: true
  });

  const toggleAccordion = (key) => {
    setAccordionState(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Scores
  const selfScore = calculateLakshmiScore(questions);
  const autoScore = Number(lakshmiData.automatedScore || selfScore);
  const scoreSource = lakshmiData.scoreSource || 'assessment';
  const finalScore = getFinalLakshmiScore(lakshmiData);
  const range = getScoreRangeConfig(finalScore);

  // New Question Form state
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionWeight, setNewQuestionWeight] = useState(3);

  // New Action Item state
  const [newActionText, setNewActionText] = useState('');

  // Handle Score Source selection (assessment, automated, blended)
  const handleScoreSourceChange = (newSource) => {
    onUpdateLakshmi({
      ...lakshmiData,
      scoreSource: newSource
    });
  };

  // Handle Automated Score edit
  const handleAutoScoreChange = (val) => {
    onUpdateLakshmi({
      ...lakshmiData,
      automatedScore: Math.min(100, Math.max(1, parseInt(val, 10) || 1))
    });
  };

  // Question score change
  const handleScoreChange = (qId, newScore) => {
    const updatedQuestions = questions.map(q => {
      if (q.id === qId) {
        return { ...q, score: Math.min(100, Math.max(1, parseInt(newScore, 10) || 1)) };
      }
      return q;
    });

    onUpdateLakshmi({
      ...lakshmiData,
      questions: updatedQuestions
    });
  };

  // Question weight change
  const handleWeightChange = (qId, newWeight) => {
    const updatedQuestions = questions.map(q => {
      if (q.id === qId) {
        return { ...q, weight: Math.max(1, parseInt(newWeight, 10) || 1) };
      }
      return q;
    });

    onUpdateLakshmi({
      ...lakshmiData,
      questions: updatedQuestions
    });
  };

  // Add Question
  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const newQ = {
      id: `${lakshmiData.id}_q_custom_${Date.now()}`,
      text: newQuestionText.trim(),
      score: 80,
      weight: parseInt(newQuestionWeight, 10) || 3,
      isCustom: true
    };

    onUpdateLakshmi({
      ...lakshmiData,
      questions: [...questions, newQ]
    });

    setNewQuestionText('');
  };

  // Delete Question
  const handleDeleteQuestion = (qId) => {
    const updatedQuestions = questions.filter(q => q.id !== qId);
    onUpdateLakshmi({
      ...lakshmiData,
      questions: updatedQuestions
    });
  };

  // Toggle Action Item
  const handleToggleActionItem = (actId) => {
    const updatedActions = actionItems.map(act => {
      if (act.id === actId) {
        return { ...act, completed: !act.completed };
      }
      return act;
    });

    onUpdateLakshmi({
      ...lakshmiData,
      actionItems: updatedActions
    });
  };

  // Add Action Item
  const handleAddActionItem = (e) => {
    e.preventDefault();
    if (!newActionText.trim()) return;

    const newAction = {
      id: `${lakshmiData.id}_act_${Date.now()}`,
      text: newActionText.trim(),
      completed: false
    };

    onUpdateLakshmi({
      ...lakshmiData,
      actionItems: [...actionItems, newAction]
    });

    setNewActionText('');
  };

  // Delete Action Item
  const handleDeleteActionItem = (actId) => {
    const updatedActions = actionItems.filter(act => act.id !== actId);
    onUpdateLakshmi({
      ...lakshmiData,
      actionItems: updatedActions
    });
  };

  const completedActionsCount = actionItems.filter(a => a.completed).length;

  return (
    <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto', color: '#F8FAFC' }}>
      {/* Top Header Card */}
      <div style={{
        backgroundColor: '#1E293B',
        borderRadius: '20px',
        border: `1px solid ${lakshmiData.accentColor}50`,
        padding: '28px 32px',
        marginBottom: '28px',
        boxShadow: `0 8px 24px ${lakshmiData.accentColor}15`
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: `${lakshmiData.accentColor}25`,
              border: `1px solid ${lakshmiData.accentColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: lakshmiData.accentColor,
              boxShadow: `0 4px 12px ${lakshmiData.accentColor}30`
            }}>
              <Icon size={30} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <h1 style={{ fontSize: '26px', fontWeight: 900, color: 'white', margin: 0, fontFamily: "'Cinzel', serif" }}>
                  {lakshmiData.sanskritName}
                </h1>
                <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 700 }}>
                  • {lakshmiData.englishTitle}
                </span>
              </div>
              <p style={{ fontSize: '13.5px', color: '#CBD5E1', margin: '6px 0 0 0' }}>
                {lakshmiData.description}
              </p>
            </div>
          </div>

          {/* Right Score Badge */}
          <div style={{
            backgroundColor: '#0F172A',
            border: `1px solid ${range.borderColor}`,
            borderRadius: '16px',
            padding: '14px 22px',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>
              Wealth Score
            </span>
            <div style={{ fontSize: '28px', fontWeight: 900, color: range.color, margin: '2px 0' }}>
              {finalScore}<span style={{ fontSize: '14px', color: '#64748B' }}>/100</span>
            </div>
            <span style={{
              fontSize: '11px',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '6px',
              backgroundColor: `${range.color}20`,
              color: range.color
            }}>
              {range.label}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Accordions: Learn -> Measure (Questions + Automated) -> Plan -> Act */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* ================= ACCORDION 1: LEARN ================= */}
        <div style={{
          backgroundColor: '#1E293B',
          borderRadius: '16px',
          border: `1px solid ${accordionState.learn ? lakshmiData.accentColor : '#334155'}`,
          overflow: 'hidden'
        }}>
          <div
            onClick={() => toggleAccordion('learn')}
            style={{
              padding: '18px 24px',
              backgroundColor: accordionState.learn ? 'rgba(15, 23, 42, 0.6)' : '#1E293B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              userSelect: 'none',
              borderBottom: accordionState.learn ? '1px solid #334155' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: `${lakshmiData.accentColor}20`, color: lakshmiData.accentColor }}>
                <BookOpen size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'white', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Accordion 1: Learn (Vedic Philosophy & Significance)
                </h3>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                  Root principles, scriptural context, and archetypal symbolism of {lakshmiData.sanskritName}
                </span>
              </div>
            </div>

            <div style={{ color: accordionState.learn ? lakshmiData.accentColor : '#94A3B8' }}>
              {accordionState.learn ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {accordionState.learn && (
            <div style={{ padding: '24px' }}>
              <div style={{
                backgroundColor: '#0F172A',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '18px 22px',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#FBBF24', textTransform: 'uppercase' }}>
                  {learnProfile.scripturalRef}
                </span>
                <p style={{ fontSize: '13.5px', color: '#E2E8F0', lineHeight: 1.6, margin: '8px 0 0 0' }}>
                  {learnProfile.philosophy}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '18px' }}>
                {learnProfile.principles.map((pr, i) => (
                  <div key={i} style={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #334155', padding: '16px' }}>
                    <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: lakshmiData.accentColor, margin: '0 0 6px 0' }}>
                      {i + 1}. {pr.title}
                    </h4>
                    <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                      {pr.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: `${lakshmiData.accentColor}10`, border: `1px solid ${lakshmiData.accentColor}30`, borderRadius: '10px', padding: '12px 18px', fontSize: '12.5px', color: '#CBD5E1' }}>
                <strong style={{ color: lakshmiData.accentColor }}>Sacred Iconography:</strong> {learnProfile.symbolism}
              </div>
            </div>
          )}
        </div>

        {/* ================= ACCORDION 2: MEASURE (QUESTIONS + AUTOMATED INTEGRATIONS) ================= */}
        <div style={{
          backgroundColor: '#1E293B',
          borderRadius: '16px',
          border: `1px solid ${accordionState.measure ? lakshmiData.accentColor : '#334155'}`,
          overflow: 'hidden'
        }}>
          <div
            onClick={() => toggleAccordion('measure')}
            style={{
              padding: '18px 24px',
              backgroundColor: accordionState.measure ? 'rgba(15, 23, 42, 0.6)' : '#1E293B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              userSelect: 'none',
              borderBottom: accordionState.measure ? '1px solid #334155' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: `${lakshmiData.accentColor}20`, color: lakshmiData.accentColor }}>
                <Activity size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'white', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Accordion 2: Measure (Evaluation Questions & Automated App Integrations)
                  {companionApp && (
                    <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '8px', backgroundColor: '#10B98125', color: '#10B981', border: '1px solid #10B98140' }}>
                      {companionApp.name} Connected ({companionApp.port})
                    </span>
                  )}
                </h3>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                  Self-assessment questionnaire sliders, automated sensor feeds, and score source calibration
                </span>
              </div>
            </div>

            <div style={{ color: accordionState.measure ? lakshmiData.accentColor : '#94A3B8' }}>
              {accordionState.measure ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {accordionState.measure && (
            <div style={{ padding: '24px' }}>
              {/* Scoring Mode Switcher */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#0F172A',
                padding: '14px 18px',
                borderRadius: '12px',
                border: '1px solid #334155',
                marginBottom: '24px',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sliders size={16} color={lakshmiData.accentColor} />
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#F8FAFC' }}>
                    Active Score Calibration:
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  {[
                    { id: 'assessment', label: 'Self-Assessment (Questions Only)' },
                    { id: 'automated', label: 'Automated Live Metric' },
                    { id: 'blended', label: '50/50 Blended' }
                  ].map(src => {
                    const isSel = scoreSource === src.id;
                    return (
                      <button
                        key={src.id}
                        onClick={() => handleScoreSourceChange(src.id)}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '8px',
                          border: isSel ? `1px solid ${lakshmiData.accentColor}` : '1px solid #334155',
                          backgroundColor: isSel ? `${lakshmiData.accentColor}25` : '#1E293B',
                          color: isSel ? lakshmiData.accentColor : '#94A3B8',
                          fontSize: '12px',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {src.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Part A: Evaluation Questions */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#F8FAFC', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileText size={17} color={lakshmiData.accentColor} />
                    Part A: Self-Assessment Questions ({questions.length} Questions • Score: {selfScore}/100)
                  </h4>
                  <span style={{ fontSize: '11px', color: '#94A3B8' }}>
                    Slide to evaluate your alignment across this pillar
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '18px' }}>
                  {questions.map((q, idx) => (
                    <div
                      key={q.id}
                      style={{
                        backgroundColor: '#0F172A',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        border: '1px solid #334155'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <span style={{
                            backgroundColor: `${lakshmiData.accentColor}25`,
                            color: lakshmiData.accentColor,
                            fontWeight: 900,
                            fontSize: '11px',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            marginTop: '2px'
                          }}>
                            Q{idx + 1}
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
                              onClick={() => handleDeleteQuestion(q.id)}
                              title="Delete Question"
                              style={{ background: 'none', border: 'none', color: '#F87171', cursor: 'pointer', padding: 0 }}
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <input
                          type="range"
                          min="1"
                          max="100"
                          value={q.score || 50}
                          onChange={(e) => handleScoreChange(q.id, e.target.value)}
                          style={{
                            flex: 1,
                            accentColor: lakshmiData.accentColor,
                            cursor: 'pointer'
                          }}
                        />

                        <div style={{ display: 'flex', gap: '4px' }}>
                          {[25, 50, 75, 100].map(val => (
                            <button
                              key={val}
                              onClick={() => handleScoreChange(q.id, val)}
                              style={{
                                padding: '2px 8px',
                                borderRadius: '6px',
                                border: '1px solid #334155',
                                backgroundColor: q.score === val ? `${lakshmiData.accentColor}30` : '#1E293B',
                                color: q.score === val ? lakshmiData.accentColor : '#94A3B8',
                                fontSize: '10.5px',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              {val}
                            </button>
                          ))}
                        </div>

                        <div style={{
                          minWidth: '55px',
                          textAlign: 'right',
                          fontSize: '15px',
                          fontWeight: 900,
                          color: lakshmiData.accentColor
                        }}>
                          {q.score || 50}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Question inline form */}
                <form onSubmit={handleAddQuestion} style={{ display: 'flex', gap: '10px' }}>
                  <input
                    type="text"
                    placeholder={`Add your own reflection question for ${lakshmiData.sanskritName}...`}
                    value={newQuestionText}
                    onChange={(e) => setNewQuestionText(e.target.value)}
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
                  <select
                    value={newQuestionWeight}
                    onChange={(e) => setNewQuestionWeight(e.target.value)}
                    style={{
                      backgroundColor: '#0F172A',
                      border: '1px solid #334155',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      color: '#CBD5E1',
                      fontSize: '12px',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value={1}>1x (Standard)</option>
                    <option value={2}>2x (Important)</option>
                    <option value={3}>3x (High Priority)</option>
                  </select>
                  <button
                    type="submit"
                    style={{
                      padding: '8px 16px',
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: lakshmiData.accentColor,
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
                </form>
              </div>

              {/* Part B: Automated Integrations & Live Telemetry */}
              <div style={{ borderTop: '1px solid #334155', paddingTop: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#F8FAFC', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Zap size={17} color="#FBBF24" />
                    Part B: Automated App Integrations & Sensor Feeds
                  </h4>
                  {companionApp && (
                    <a
                      href={companionApp.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#FBBF24', textDecoration: 'none', fontWeight: 700 }}
                    >
                      <span>Open {companionApp.name} ({companionApp.port})</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '18px' }}>
                  {automatedMetrics.map((met, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#0F172A',
                        borderRadius: '12px',
                        border: '1px solid #334155',
                        padding: '16px'
                      }}
                    >
                      <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 600, display: 'block' }}>
                        {met.name}
                      </span>
                      <div style={{ fontSize: '20px', fontWeight: 900, color: 'white', margin: '4px 0' }}>
                        {met.value}
                      </div>
                      <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>
                        Score Index: {met.score} / 100
                      </div>
                    </div>
                  ))}
                </div>

                {/* Automated Score Calibration Input */}
                <div style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  border: '1px solid #334155',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#CBD5E1' }}>
                      Calibrated Automated Baseline Score
                    </span>
                    <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block' }}>
                      Calculated from real-time API integrations and telemetry streams
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={autoScore}
                      onChange={(e) => handleAutoScoreChange(e.target.value)}
                      style={{
                        width: '70px',
                        padding: '6px 10px',
                        borderRadius: '8px',
                        backgroundColor: '#1E293B',
                        border: '1px solid #475569',
                        color: '#F8FAFC',
                        fontWeight: 800,
                        fontSize: '14px',
                        textAlign: 'center'
                      }}
                    />
                    <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 700 }}>/ 100</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ================= ACCORDION 3: PLAN ================= */}
        <div style={{
          backgroundColor: '#1E293B',
          borderRadius: '16px',
          border: `1px solid ${accordionState.plan ? lakshmiData.accentColor : '#334155'}`,
          overflow: 'hidden'
        }}>
          <div
            onClick={() => toggleAccordion('plan')}
            style={{
              padding: '18px 24px',
              backgroundColor: accordionState.plan ? 'rgba(15, 23, 42, 0.6)' : '#1E293B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              userSelect: 'none',
              borderBottom: accordionState.plan ? '1px solid #334155' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: `${lakshmiData.accentColor}20`, color: lakshmiData.accentColor }}>
                <Sparkles size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'white', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Accordion 3: Plan (Strategic Vedic Roadmap & Recommendations)
                </h3>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                  AI-guided progression roadmap for Emerging, Balanced, and Abundant wealth states
                </span>
              </div>
            </div>

            <div style={{ color: accordionState.plan ? lakshmiData.accentColor : '#94A3B8' }}>
              {accordionState.plan ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {accordionState.plan && (
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Emerging Tier */}
                <div style={{
                  backgroundColor: '#0F172A',
                  border: finalScore < 60 ? '1px solid #F87171' : '1px solid #334155',
                  borderRadius: '12px',
                  padding: '16px 20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#F87171', backgroundColor: '#F8717120', padding: '2px 8px', borderRadius: '6px' }}>
                      🌱 Emerging Tier (&lt; 60 pts)
                    </span>
                    {finalScore < 60 && <span style={{ fontSize: '11px', color: '#F87171', fontWeight: 700 }}>• Current Status</span>}
                  </div>
                  <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.5, margin: 0 }}>
                    {lakshmiData.suggestions?.emerging || 'Focus on establishing core baseline habits and removing volatility.'}
                  </p>
                </div>

                {/* Balanced Tier */}
                <div style={{
                  backgroundColor: '#0F172A',
                  border: (finalScore >= 60 && finalScore < 85) ? '1px solid #F59E0B' : '1px solid #334155',
                  borderRadius: '12px',
                  padding: '16px 20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#F59E0B', backgroundColor: '#F59E0B20', padding: '2px 8px', borderRadius: '6px' }}>
                      ⚖️ Balanced Tier (60 – 84 pts)
                    </span>
                    {finalScore >= 60 && finalScore < 85 && <span style={{ fontSize: '11px', color: '#F59E0B', fontWeight: 700 }}>• Current Status</span>}
                  </div>
                  <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.5, margin: 0 }}>
                    {lakshmiData.suggestions?.balanced || 'Deepen consistency and optimize routines to prevent plateauing.'}
                  </p>
                </div>

                {/* Abundant Tier */}
                <div style={{
                  backgroundColor: '#0F172A',
                  border: finalScore >= 85 ? '1px solid #10B981' : '1px solid #334155',
                  borderRadius: '12px',
                  padding: '16px 20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#10B981', backgroundColor: '#10B98120', padding: '2px 8px', borderRadius: '6px' }}>
                      👑 Abundant Tier (85 – 100 pts)
                    </span>
                    {finalScore >= 85 && <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>• Current Status</span>}
                  </div>
                  <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.5, margin: 0 }}>
                    {lakshmiData.suggestions?.abundant || 'Expand into leadership, mentorship, and philanthropic circulation (Dāna).'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ================= ACCORDION 4: ACT ================= */}
        <div style={{
          backgroundColor: '#1E293B',
          borderRadius: '16px',
          border: `1px solid ${accordionState.act ? lakshmiData.accentColor : '#334155'}`,
          overflow: 'hidden'
        }}>
          <div
            onClick={() => toggleAccordion('act')}
            style={{
              padding: '18px 24px',
              backgroundColor: accordionState.act ? 'rgba(15, 23, 42, 0.6)' : '#1E293B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              userSelect: 'none',
              borderBottom: accordionState.act ? '1px solid #334155' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: `${lakshmiData.accentColor}20`, color: lakshmiData.accentColor }}>
                <CheckSquare size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'white', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Accordion 4: Act (Daily & Weekly Sadhana Action Items)
                  <span style={{ fontSize: '11.5px', fontWeight: 700, padding: '2px 8px', borderRadius: '6px', backgroundColor: '#334155', color: '#CBD5E1' }}>
                    {completedActionsCount} / {actionItems.length} Done
                  </span>
                </h3>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                  Checkable lifestyle habits and practical daily execution tasks
                </span>
              </div>
            </div>

            <div style={{ color: accordionState.act ? lakshmiData.accentColor : '#94A3B8' }}>
              {accordionState.act ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {accordionState.act && (
            <div style={{ padding: '24px' }}>
              {/* Action items checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {actionItems.map(act => (
                  <div
                    key={act.id}
                    style={{
                      backgroundColor: '#0F172A',
                      borderRadius: '12px',
                      border: '1px solid #334155',
                      padding: '14px 18px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      onClick={() => handleToggleActionItem(act.id)}
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', flex: 1, userSelect: 'none' }}
                    >
                      {act.completed ? (
                        <CheckCircle2 size={18} color="#10B981" />
                      ) : (
                        <div style={{ width: '18px', height: '18px', borderRadius: '5px', border: '2px solid #64748B' }} />
                      )}
                      <span style={{
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: act.completed ? '#64748B' : '#F8FAFC',
                        textDecoration: act.completed ? 'line-through' : 'none'
                      }}>
                        {act.text}
                      </span>
                    </div>

                    <button
                      onClick={() => handleDeleteActionItem(act.id)}
                      title="Remove action item"
                      style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px' }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Custom Action Item form */}
              <form onSubmit={handleAddActionItem} style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  placeholder={`Add a custom daily/weekly action item for ${lakshmiData.sanskritName}...`}
                  value={newActionText}
                  onChange={(e) => setNewActionText(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: '#0F172A',
                    border: '1px solid #334155',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    color: '#F8FAFC',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '10px 18px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: lakshmiData.accentColor,
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '12.5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Plus size={15} />
                  Add Action
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
