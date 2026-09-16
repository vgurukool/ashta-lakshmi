import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  RefreshCw,
  Sliders,
  Activity,
  Zap,
  Info,
  AlertTriangle
} from 'lucide-react';

const LAKSHMIS = [
  {
    id: "adi",
    name: "Adi Lakshmi",
    sanskrit: "आदि लक्ष्मी",
    icon: "🕉️",
    color: "#f59e0b",
    angle: 270,
    domain: "Primordial Foundation & Inner Being",
    badge: "Spiritual Anchor",
    desc: "The primordial source of existence and inner peace. Adi represents self-awareness and moral groundedness, without which worldly wealth degenerates into vanity and existential anxiety.",
    imbalance: "Without Adi, monetary wealth generates endless insecurity, power breeds arrogance, and triumphs feel hollow.",
    feeds: [
      { target: "dhana", text: "Prevents greed, ensuring capital is generated and deployed ethically" },
      { target: "vidya", text: "Provides the quiet contemplative mind necessary for deep wisdom" },
      { target: "gaja", text: "Instills humility so leadership serves the collective good" },
      { target: "dhairya", text: "Provides existential faith that removes panic during crisis" }
    ],
    needs: [
      { source: "dhanya", text: "Needs physical nourishment to sustain spiritual mindfulness" },
      { source: "dhairya", text: "Requires courage to stay faithful to principles under social pressure" },
      { source: "vidya", text: "Requires discerning intellect to overcome superstition" }
    ]
  },
  {
    id: "dhana",
    name: "Dhana Lakshmi",
    sanskrit: "धन लक्ष्मी",
    icon: "💰",
    color: "#10b981",
    angle: 315,
    domain: "Financial Capital & Material Resources",
    badge: "Economic Fuel",
    desc: "Financial wealth, liquid capital, savings, and investments. In human society, Dhana provides the purchasing power to sustain life, fund universities, and build enterprises.",
    imbalance: "Without Dhana, noble ideas lack the tangible resources to manifest; families suffer financial distress, and education cannot be funded.",
    feeds: [
      { target: "vidya", text: "Funds tuition, universities, research, books, laboratories, and mentors" },
      { target: "dhanya", text: "Purchases nutritious food, farming tools, and wellness resources" },
      { target: "santana", text: "Secures pediatric healthcare, shelter, and family trust funds" },
      { target: "gaja", text: "Funds public infrastructure, civic institutions, and philanthropy" }
    ],
    needs: [
      { source: "vidya", text: "Requires financial literacy and high-income skills to earn & protect capital" },
      { source: "dhairya", text: "Needs risk tolerance and emotional resilience to endure market cycles" },
      { source: "vijaya", text: "Requires relentless execution to convert concepts into profits" },
      { source: "adi", text: "Needs moral grounding so money does not corrupt character" }
    ]
  },
  {
    id: "dhanya",
    name: "Dhanya Lakshmi",
    sanskrit: "धान्य लक्ष्मी",
    icon: "🌾",
    color: "#84cc16",
    angle: 0,
    domain: "Agriculture, Nutrition & Health",
    badge: "Biological Vitality",
    desc: "Agricultural harvest, nourishment, sustenance, and bodily health. The biological vehicle must be nourished and energized, or all other mental and social aspirations collapse.",
    imbalance: "Without Dhanya, chronic disease, hunger, and physical exhaustion sap your ability to learn, work, or lead.",
    feeds: [
      { target: "vidya", text: "Proper brain nutrition powers focus, memory, and cognitive sharpness" },
      { target: "dhairya", text: "A healthy, nourished body gives biochemical stamina and courage" },
      { target: "santana", text: "Healthy parents and nutrition ensure strong, thriving children" },
      { target: "vijaya", text: "Provides the physical endurance needed for long days of triumph" }
    ],
    needs: [
      { source: "dhana", text: "Requires money to purchase pure, wholesome, organic nutrition" },
      { source: "vidya", text: "Needs health, agricultural, and culinary science for balanced living" },
      { source: "gaja", text: "Requires stable social order and food distribution infrastructure" }
    ]
  },
  {
    id: "gaja",
    name: "Gaja Lakshmi",
    sanskrit: "गज लक्ष्मी",
    icon: "👑",
    color: "#ec4899",
    angle: 45,
    domain: "Power, Authority, Social Grace & Community",
    badge: "Social Influence",
    desc: "Social prestige, regal dignity, community influence, and governance power (symbolized by royal elephants). It is the capacity to organize people and lead institutions.",
    imbalance: "Without Gaja, brilliant people remain isolated, unable to rally teams, impact policy, or achieve institutional scale.",
    feeds: [
      { target: "dhana", text: "Creates safe markets, fair trade laws, and enterprise ecosystems" },
      { target: "santana", text: "Provides social safety, honor, and community protection for youth" },
      { target: "vijaya", text: "Mobilizes collective teamwork to achieve mega-scale victories" },
      { target: "adi", text: "Uses authority to protect cultural sanctuaries and moral principles" }
    ],
    needs: [
      { source: "adi", text: "Requires self-awareness to prevent despotism and egotism" },
      { source: "vidya", text: "Needs geopolitical, strategic, and governance wisdom to lead well" },
      { source: "dhairya", text: "Requires moral backbone to make unpopular but righteous decisions" },
      { source: "dhana", text: "Needs funding to maintain institutions, civic trust, and staff" }
    ]
  },
  {
    id: "santana",
    name: "Santana Lakshmi",
    sanskrit: "सन्तान लक्ष्मी",
    icon: "🌱",
    color: "#a855f7",
    angle: 90,
    domain: "Progeny, Family Legacy & Mentorship",
    badge: "Future Continuity",
    desc: "The wealth of posterity, healthy children, loving families, and the continuation of wisdom through disciples and mentees. Without Santana, all empires die with the founder.",
    imbalance: "Without Santana, wealth and knowledge have no inheritors; lineage dies out, leaving a legacy vacuum.",
    feeds: [
      { target: "dhana", text: "Next generation builds upon inherited capital and grows enterprises" },
      { target: "adi", text: "Children and disciples carry forward cultural and spiritual dharma" },
      { target: "vidya", text: "Youth challenge existing norms, driving educational innovation" }
    ],
    needs: [
      { source: "dhana", text: "Needs resources for pediatric care, education, and safe homes" },
      { source: "vidya", text: "Requires wise parenting, pedagogy, and character modeling" },
      { source: "dhanya", text: "Requires wholesome nutrition and clean environment to thrive" },
      { source: "dhairya", text: "Parents need tremendous patience and emotional resilience" }
    ]
  },
  {
    id: "dhairya",
    name: "Veera / Dhairya Lakshmi",
    sanskrit: "धैर्य लक्ष्मी",
    icon: "🛡️",
    color: "#ef4444",
    angle: 135,
    domain: "Courage, Fortitude & Resilience",
    badge: "Inner Strength",
    desc: "Courage, emotional fearlessness, grit, and the capacity to withstand adversity, economic crashes, bereavement, and intense hardship without capitulating.",
    imbalance: "Without Dhairya, knowledge stays cowardly paralyzed; one market dip wipes out financial resolve, and fear prevents all growth.",
    feeds: [
      { target: "vijaya", text: "Victory is impossible without the guts to fight through setbacks" },
      { target: "dhana", text: "Drives entrepreneurial calculated risk-taking and venture courage" },
      { target: "vidya", text: "Gives courage to seek uncomfortable truths and question outdated norms" },
      { target: "gaja", text: "Enables leaders to stand firm in crises while others panic" }
    ],
    needs: [
      { source: "dhanya", text: "Needs physical adrenaline and stamina from bodily nutrition" },
      { source: "adi", text: "Draws unflinching courage from spiritual connection to the eternal" },
      { source: "vidya", text: "Needs strategic wisdom so courage is brave rather than reckless" }
    ]
  },
  {
    id: "vijaya",
    name: "Vijaya Lakshmi",
    sanskrit: "विजय लक्ष्मी",
    icon: "🏆",
    color: "#38bdf8",
    angle: 180,
    domain: "Victory, Success & Overcoming Obstacles",
    badge: "Triumph & Mastery",
    desc: "Success in undertakings, breaking through bottlenecks, achieving targets, and converting aspirations into triumphant real-world milestones.",
    imbalance: "Without Vijaya, effort ends in perpetual frustration, chronic failure, lost morale, and unfulfilled potential.",
    feeds: [
      { target: "dhana", text: "Successful ventures generate profits, bounties, and capital" },
      { target: "dhairya", text: "Each win reinforces self-belief and fortifies mental confidence" },
      { target: "gaja", text: "Victories build undeniable reputation, credibility, and authority" }
    ],
    needs: [
      { source: "vidya", text: "Needs precise strategy, skills, and analysis to out-execute rivals" },
      { source: "dhairya", text: "Requires perseverance to endure multiple failures before the breakthrough" },
      { source: "dhanya", text: "Requires physical stamina to run marathons of execution" },
      { source: "dhana", text: "Needs resources to fund experiments and operational execution" }
    ]
  },
  {
    id: "vidya",
    name: "Vidya Lakshmi",
    sanskrit: "विद्या लक्ष्मी",
    icon: "📚",
    color: "#6366f1",
    angle: 225,
    domain: "Knowledge, Intellect, Wisdom & Science",
    badge: "Cognitive Light",
    desc: "Knowledge, technical skills, philosophical illumination, scientific mastery, and discernment (Viveka). Vidya converts raw data into actionable wisdom.",
    imbalance: "Without Vidya, wealth is mismanaged, courage turns foolish, power turns tyrannical, and people live in ignorance.",
    feeds: [
      { target: "dhana", text: "Enables smart financial engineering, high-value skills, and innovation" },
      { target: "vijaya", text: "Provides the analytical blueprints and strategies for triumph" },
      { target: "dhanya", text: "Develops agricultural technology, medicine, and nutritional science" },
      { target: "gaja", text: "Produces enlightened, ethical, and articulate civic leaders" },
      { target: "santana", text: "Educates children in morality, crafts, sciences, and arts" }
    ],
    needs: [
      { source: "dhana", text: "Requires money for universities, laboratories, books, and teachers" },
      { source: "dhanya", text: "Requires a well-nourished brain capable of deep focus" },
      { source: "adi", text: "Needs humility and ethics so knowledge does not weaponize destruction" },
      { source: "dhairya", text: "Requires patience to sit through years of rigorous study" }
    ]
  }
];

const RECIPROCAL_LOOPS = {
  "dhana-vidya": {
    nodeA: "dhana", nodeB: "vidya",
    title: "Dhana ⇄ Vidya (Capital & Wisdom)",
    badge: "Wealth Creation Engine",
    colorA: "#10b981", colorB: "#6366f1",
    step1: "Dhana provides tuition, tools, compute servers, libraries, laboratories, and living stipends for study.",
    step2: "Vidya converts study into cognitive mastery, market insights, and specialized engineering skills.",
    step3: "Vidya designs innovative products, executes sound investments, and protects against scams.",
    step4: "Returns flow back into Dhana at 10x scale, compounding capital for deeper research.",
    forwardTitle: "How Dhana Feeds Vidya:",
    forwardDetail: "Without money, universities cannot exist, research cannot be conducted, and students are forced into survival labor instead of deep contemplation.",
    reverseTitle: "How Vidya Feeds Dhana:",
    reverseDetail: "Without wisdom, capital evaporates. Vidya provides financial literacy, engineering capability, and business acumen that transforms raw labor into scalable equity.",
    brokenLoop: "Dhana without Vidya: Lottery winners or inheritors who squander fortunes within years due to financial ignorance.\nVidya without Dhana: The starving scholar unable to publish research, test inventions, or purchase medicine."
  },
  "dhanya-vidya": {
    nodeA: "dhanya", nodeB: "vidya",
    title: "Dhanya ⇄ Vidya (Nutrition & Brainpower)",
    badge: "Mind-Body Feedback",
    colorA: "#84cc16", colorB: "#6366f1",
    step1: "Dhanya provides glucose, proteins, and micronutrients essential for brain synapses.",
    step2: "A nourished brain enables sustained 10-hour focus, memory retention, and mental stamina.",
    step3: "Vidya invents agronomy, hydroponics, food safety, and medical health sciences.",
    step4: "Agricultural science dramatically boosts food quality and longevity, enriching Dhanya.",
    forwardTitle: "How Dhanya Feeds Vidya:",
    forwardDetail: "A malnourished brain suffers from brain fog, chronic fatigue, and neurological decline. Dhanya is the biological hardware running Vidya's software.",
    reverseTitle: "How Vidya Feeds Dhanya:",
    reverseDetail: "Vidya develops soil science, crop rotation, irrigation networks, clean refrigeration, and biochemistry that feeds billions and eliminates famine.",
    brokenLoop: "Dhanya without Vidya: Abundant grain consumed without nutritional science leading to obesity and disease.\nVidya without Dhanya: The genius researcher whose life is cut short by preventable physical neglect."
  },
  "dhairya-vijaya": {
    nodeA: "dhairya", nodeB: "vijaya",
    title: "Dhairya ⇄ Vijaya (Courage & Triumph)",
    badge: "Action & Mastery Loop",
    colorA: "#ef4444", colorB: "#38bdf8",
    step1: "Dhairya gives the guts to start when others hesitate, taking calculated risks.",
    step2: "Courage endures the inevitable first 5 failures and obstacles without giving up.",
    step3: "Persistence breaks through the bottleneck, delivering tangible victory (Vijaya).",
    step4: "Every hard-won victory validates self-efficacy, making Dhairya unbreakable for next time.",
    forwardTitle: "How Dhairya Feeds Vijaya:",
    forwardDetail: "Victory is never handed over for free; it requires fighting through uncertainty, fear, and setbacks. Dhairya is the courage to take action.",
    reverseTitle: "How Vijaya Feeds Dhairya:",
    reverseDetail: "Perpetual defeat breaks the human spirit. Vijaya provides real-world proof of competence, reinforcing inner resilience and banishing impostor syndrome.",
    brokenLoop: "Dhairya without Vijaya: Reckless bravado that charges into blunders without strategy, bleeding resources.\nVijaya without Dhairya: Pure luck that leaves you terrified of losing, paralyzed by fear of future failure."
  },
  "adi-gaja": {
    nodeA: "adi", nodeB: "gaja",
    title: "Adi ⇄ Gaja (Ethics & Power)",
    badge: "Sovereign Dharma Loop",
    colorA: "#f59e0b", colorB: "#ec4899",
    step1: "Adi grounds the leader in self-mastery, spiritual detachment, and moral ethics.",
    step2: "With Adi, authority (Gaja) is exercised with justice, benevolence, and humility.",
    step3: "Enlightened governance establishes peaceful social order and protects cultural institutions.",
    step4: "A secure society gives citizens peace to pursue inner spiritual realization (Adi).",
    forwardTitle: "How Adi Feeds Gaja:",
    forwardDetail: "Power intoxicates and corrupts. Adi provides the spiritual ballast that prevents kings and executives from devolving into tyrants and sociopaths.",
    reverseTitle: "How Gaja Feeds Adi:",
    reverseDetail: "Without law, order, and protection, society falls into lawlessness (Matsya Nyaya) where temples are destroyed and spiritual seekers cannot meditate in peace.",
    brokenLoop: "Gaja without Adi: Ruthless dictators and corrupt oligarchs whose empires inevitably burn in revolt.\nAdi without Gaja: Virtuous recluses who watch helplessly as cruel oppressors subjugate their community."
  },
  "dhana-santana": {
    nodeA: "dhana", nodeB: "santana",
    title: "Dhana ⇄ Santana (Capital & Heirs)",
    badge: "Generational Continuity",
    colorA: "#10b981", colorB: "#a855f7",
    step1: "Dhana funds prenatal care, safe housing, quality schools, and trust funds for children.",
    step2: "Children grow up healthy, educated, unburdened by poverty trauma, and emotionally secure.",
    step3: "The next generation takes over family enterprises with fresh vitality and modern skills.",
    step4: "Educated heirs safeguard and compound inherited wealth, preventing the 3rd-generation curse.",
    forwardTitle: "How Dhana Feeds Santana:",
    forwardDetail: "Raising children with modern healthcare, quality nutrition, safe environments, and top-tier mentorship requires dedicated economic resources.",
    reverseTitle: "How Santana Feeds Dhana:",
    reverseDetail: "Without capable inheritors, all wealth is dissipated by taxes, litigation, or negligence upon death. Santana ensures capital continues to work and grow.",
    brokenLoop: "Dhana without Santana: The lonely billionaire whose life work is seized by bureaucratic probate court.\nSantana without Dhana: Loving parents who suffer watching their talented children denied opportunity due to poverty."
  }
};

function getCoords(angleDeg, radius = 215) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 300 + radius * Math.cos(rad),
    y: 300 + radius * Math.sin(rad)
  };
}

export function MandalaInterconnectedPage() {
  const [currentMode, setCurrentMode] = useState('holistic'); // 'holistic' | 'pairwise' | 'sim'
  const [activeHolisticNodeId, setActiveHolisticNodeId] = useState('dhana');
  const [activePairwiseKey, setActivePairwiseKey] = useState('dhana-vidya');
  const [simValues, setSimValues] = useState({
    adi: 100, dhana: 100, dhanya: 100, gaja: 100, santana: 100, dhairya: 100, vijaya: 100, vidya: 100
  });

  const selectedHolisticLakshmi = useMemo(() => {
    return LAKSHMIS.find(l => l.id === activeHolisticNodeId) || LAKSHMIS[1];
  }, [activeHolisticNodeId]);

  const activeLoop = useMemo(() => {
    return RECIPROCAL_LOOPS[activePairwiseKey] || RECIPROCAL_LOOPS['dhana-vidya'];
  }, [activePairwiseKey]);

  // Systemic Harmony Calculation: minVal * 0.6 + avgVal * 0.4
  const calculatedHarmony = useMemo(() => {
    const vals = Object.values(simValues);
    const minVal = Math.min(...vals);
    const avgVal = vals.reduce((a, b) => a + b, 0) / vals.length;
    return Math.round(minVal * 0.6 + avgVal * 0.4);
  }, [simValues]);

  // Dynamic Color and Status for Harmony Range
  const harmonyConfig = useMemo(() => {
    const score = calculatedHarmony;
    if (score >= 85) {
      return {
        color: '#10b981',
        glowColor: 'rgba(16, 185, 129, 0.75)',
        bgAura: 'rgba(16, 185, 129, 0.16)',
        statusTitle: 'HARMONY',
        statusSub: 'Optimal',
        label: 'Optimal Equilibrium (85%–100%)',
        desc: 'All 8 dimensions reinforce each other in frictionless abundance.'
      };
    } else if (score >= 65) {
      return {
        color: '#f59e0b',
        glowColor: 'rgba(245, 158, 11, 0.75)',
        bgAura: 'rgba(245, 158, 11, 0.16)',
        statusTitle: 'MODERATE',
        statusSub: 'Mild Strain',
        label: 'Moderate Strain (65%–84%)',
        desc: 'Slight drag on dependent dimensions; minor stress detected.'
      };
    } else if (score >= 40) {
      return {
        color: '#f97316',
        glowColor: 'rgba(249, 115, 22, 0.75)',
        bgAura: 'rgba(249, 115, 22, 0.18)',
        statusTitle: 'STRAINED',
        statusSub: 'Systemic Stress',
        label: 'Systemic Stress (40%–64%)',
        desc: 'Significant drag. Key downstream dependencies are failing.'
      };
    } else {
      return {
        color: '#ef4444',
        glowColor: 'rgba(239, 68, 68, 0.85)',
        bgAura: 'rgba(239, 68, 68, 0.22)',
        statusTitle: 'CRITICAL',
        statusSub: 'Deficit Alarm',
        label: 'Critical Deficit (< 40%)',
        desc: 'System failure imminent. Collapse in one Lakshmi compromises the whole.'
      };
    }
  }, [calculatedHarmony]);

  const handlePairwiseNodeClick = (clickedId) => {
    if (clickedId === activeLoop.nodeA || clickedId === activeLoop.nodeB) return;
    const key1 = `${activeLoop.nodeA}-${clickedId}`;
    const key2 = `${clickedId}-${activeLoop.nodeA}`;
    if (RECIPROCAL_LOOPS[key1]) {
      setActivePairwiseKey(key1);
    } else if (RECIPROCAL_LOOPS[key2]) {
      setActivePairwiseKey(key2);
    } else {
      const foundKey = Object.keys(RECIPROCAL_LOOPS).find(k => k.includes(clickedId));
      if (foundKey) setActivePairwiseKey(foundKey);
    }
  };

  const applyPreset = (preset) => {
    if (preset === 'startup') {
      setSimValues({ adi: 30, dhana: 85, dhanya: 25, gaja: 40, santana: 15, dhairya: 90, vijaya: 75, vidya: 80 });
    } else if (preset === 'academic') {
      setSimValues({ adi: 50, dhana: 20, dhanya: 35, gaja: 30, santana: 25, dhairya: 40, vijaya: 60, vidya: 95 });
    } else if (preset === 'equilibrium') {
      setSimValues({ adi: 95, dhana: 90, dhanya: 90, gaja: 85, santana: 90, dhairya: 90, vijaya: 90, vidya: 95 });
    } else if (preset === 'reset') {
      setSimValues({ adi: 100, dhana: 100, dhanya: 100, gaja: 100, santana: 100, dhairya: 100, vijaya: 100, vidya: 100 });
    }
  };

  // SVG Gauge calculations
  const gaugeRadius = 46;
  const circumference = 2 * Math.PI * gaugeRadius; // ~289.02
  const strokeOffset = circumference * (1 - Math.max(5, Math.min(100, calculatedHarmony)) / 100);

  return (
    <div style={{ padding: '32px', maxWidth: '1440px', margin: '0 auto', color: '#F8FAFC' }}>
      
      {/* Top Banner Header */}
      <div style={{
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid #334155',
        borderRadius: '20px',
        padding: '24px 28px',
        marginBottom: '28px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{
                padding: '3px 10px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#FBBF24',
                border: '1px solid rgba(245, 158, 11, 0.3)'
              }}>
                अष्टलक्ष्मी चक्र • Sacred Interdependency Matrix
              </span>
              <span style={{
                padding: '3px 10px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 600,
                background: 'rgba(99, 102, 241, 0.15)',
                color: '#A5B4FC',
                border: '1px solid rgba(99, 102, 241, 0.3)'
              }}>
                Closed-Loop Ecosystem
              </span>
            </div>
            <h1 style={{
              fontSize: '26px',
              fontWeight: 900,
              margin: 0,
              background: 'linear-gradient(to right, #FDE68A, #FCD34D, #F59E0B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              The 8 Lakshmis: Symbiotic Prosperity Network
            </h1>
            <p style={{ fontSize: '13.5px', color: '#94A3B8', marginTop: '6px', maxWidth: '780px', lineHeight: 1.5 }}>
              In Vedic wisdom, all forms of wealth are codependent. <strong style={{ color: '#FCD34D' }}>You need Dhana to fund Vidya, and you need Vidya to generate Dhana.</strong> Explore the full orbit, bilateral closed loops, and systemic balance.
            </p>
          </div>

          {/* 3 Modes Switcher */}
          <div style={{ display: 'flex', gap: '10px', background: '#0F172A', padding: '6px', borderRadius: '14px', border: '1px solid #334155' }}>
            <button
              onClick={() => setCurrentMode('holistic')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '10px',
                border: 'none',
                fontWeight: 700,
                fontSize: '12.5px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: currentMode === 'holistic' ? '#F59E0B' : 'transparent',
                color: currentMode === 'holistic' ? '#0F172A' : '#CBD5E1',
                boxShadow: currentMode === 'holistic' ? '0 4px 14px rgba(245, 158, 11, 0.35)' : 'none'
              }}
            >
              <Sparkles size={15} />
              <span>Holistic Orbit</span>
            </button>
            <button
              onClick={() => setCurrentMode('pairwise')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '10px',
                border: 'none',
                fontWeight: 700,
                fontSize: '12.5px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: currentMode === 'pairwise' ? '#38BDF8' : 'transparent',
                color: currentMode === 'pairwise' ? '#0F172A' : '#CBD5E1',
                boxShadow: currentMode === 'pairwise' ? '0 4px 14px rgba(56, 189, 248, 0.35)' : 'none'
              }}
            >
              <RefreshCw size={15} />
              <span>Pairwise Synergy</span>
            </button>
            <button
              onClick={() => setCurrentMode('sim')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '10px',
                border: 'none',
                fontWeight: 700,
                fontSize: '12.5px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: currentMode === 'sim' ? '#A855F7' : 'transparent',
                color: currentMode === 'sim' ? '#0F172A' : '#CBD5E1',
                boxShadow: currentMode === 'sim' ? '0 4px 14px rgba(168, 85, 247, 0.35)' : 'none'
              }}
            >
              <Sliders size={15} />
              <span>Balance Simulator</span>
            </button>
          </div>
        </div>

        {/* Pairwise Presets Bar */}
        {currentMode === 'pairwise' && (
          <div style={{
            marginTop: '16px',
            paddingTop: '14px',
            borderTop: '1px solid rgba(51, 65, 85, 0.7)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto'
          }}>
            <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, whiteSpace: 'nowrap', marginRight: '6px' }}>
              Pre-set Loops:
            </span>
            {Object.entries(RECIPROCAL_LOOPS).map(([key, loop]) => {
              const isActive = activePairwiseKey === key;
              const lakA = LAKSHMIS.find(l => l.id === loop.nodeA);
              const lakB = LAKSHMIS.find(l => l.id === loop.nodeB);
              return (
                <button
                  key={key}
                  onClick={() => setActivePairwiseKey(key)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.15s',
                    background: isActive ? 'rgba(16, 185, 129, 0.2)' : '#1E293B',
                    color: isActive ? '#6EE7B7' : '#94A3B8',
                    border: isActive ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid #334155'
                  }}
                >
                  <span>{lakA?.icon}</span>
                  <span>{lakA?.name.replace(' Lakshmi', '')} ⇄ {lakB?.name.replace(' Lakshmi', '')}</span>
                  <span style={{ fontSize: '10px', opacity: 0.8 }}>({loop.badge})</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Main Grid: Left SVG Interactive Canvas (1.2fr) + Right Context Detail Panel (1fr) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '28px', alignItems: 'start' }}>
        
        {/* Left: SVG Canvas */}
        <div style={{
          backgroundColor: 'rgba(30, 41, 59, 0.6)',
          border: '1px solid #334155',
          borderRadius: '20px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          minHeight: '620px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)'
        }}>
          {/* Status Tooltip Header */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: '#CBD5E1',
            background: 'rgba(15, 23, 42, 0.85)',
            padding: '6px 14px',
            borderRadius: '9999px',
            border: '1px solid #334155'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#10B981', display: 'inline-block' }}></span>
            <span>
              {currentMode === 'holistic' && `Click any node to inspect all two-way dependencies (Active: ${selectedHolisticLakshmi.name})`}
              {currentMode === 'pairwise' && `Showing closed-loop reciprocal feedback: ${activeLoop.title}`}
              {currentMode === 'sim' && `Move sliders below to test systemic harmony across the 8 forms of wealth`}
            </span>
          </div>

          {/* SVG Diagram Canvas */}
          <svg viewBox="0 0 600 600" style={{ width: '100%', maxWidth: '540px', aspectRatio: '1/1', userSelect: 'none' }}>
            <defs>
              <marker id="arrow-outbound" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
              </marker>
              <marker id="arrow-inbound" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
              </marker>
              <marker id="arrow-pairwise-fwd" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
              </marker>
              <marker id="arrow-pairwise-rev" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#6366f1" />
              </marker>
            </defs>

            {/* Orbit Reference Ring */}
            <circle cx="300" cy="300" r="215" fill="none" stroke="#334155" strokeWidth="1.2" strokeDasharray="3 7" opacity="0.6" />

            {/* MODE 1: HOLISTIC CONNECTIONS */}
            {currentMode === 'holistic' && (
              <g id="holistic-connections">
                {LAKSHMIS.filter(o => o.id !== selectedHolisticLakshmi.id).map(other => {
                  const selPt = getCoords(selectedHolisticLakshmi.angle, 215);
                  const otherPt = getCoords(other.angle, 215);
                  const isOutbound = selectedHolisticLakshmi.feeds.some(f => f.target === other.id);
                  const isInbound = selectedHolisticLakshmi.needs.some(n => n.source === other.id);

                  if (isOutbound || isInbound) {
                    const midX = (selPt.x + otherPt.x) / 2 * 0.75 + 300 * 0.25;
                    const midY = (selPt.y + otherPt.y) / 2 * 0.75 + 300 * 0.25;
                    const d = `M ${selPt.x} ${selPt.y} Q ${midX} ${midY} ${otherPt.x} ${otherPt.y}`;
                    const reverseD = `M ${otherPt.x} ${otherPt.y} Q ${midX} ${midY} ${selPt.x} ${selPt.y}`;

                    let strokeColor = '#38bdf8';
                    let marker = 'url(#arrow-inbound)';
                    let strokeWidth = '2.2';

                    if (isOutbound && isInbound) {
                      strokeColor = '#fbbf24';
                      marker = '';
                      strokeWidth = '2.8';
                    } else if (isOutbound) {
                      strokeColor = '#10b981';
                      marker = 'url(#arrow-outbound)';
                    }

                    return (
                      <g key={`conn-${other.id}`}>
                        <path
                          d={d}
                          fill="none"
                          stroke={strokeColor}
                          strokeWidth={strokeWidth}
                          markerEnd={marker || undefined}
                          opacity="0.85"
                          filter={isOutbound && isInbound ? 'drop-shadow(0 0 5px rgba(251, 191, 36, 0.6))' : undefined}
                        />
                        <circle r="3.5" fill={isOutbound ? '#a7f3d0' : '#bae6fd'} filter="drop-shadow(0 0 5px #ffffff)">
                          <animateMotion
                            path={isOutbound ? d : reverseD}
                            dur="2.8s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    );
                  } else {
                    return (
                      <line
                        key={`bg-line-${other.id}`}
                        x1={selPt.x}
                        y1={selPt.y}
                        x2={otherPt.x}
                        y2={otherPt.y}
                        stroke="#334155"
                        strokeWidth="1"
                        opacity="0.2"
                      />
                    );
                  }
                })}
              </g>
            )}

            {/* MODE 2: PAIRWISE DUAL-ARC CONNECTIONS */}
            {currentMode === 'pairwise' && (() => {
              const lakA = LAKSHMIS.find(l => l.id === activeLoop.nodeA);
              const lakB = LAKSHMIS.find(l => l.id === activeLoop.nodeB);
              if (!lakA || !lakB) return null;

              const ptA = getCoords(lakA.angle, 215);
              const ptB = getCoords(lakB.angle, 215);

              const dx = ptB.x - ptA.x;
              const dy = ptB.y - ptA.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const midX = (ptA.x + ptB.x) / 2;
              const midY = (ptA.y + ptB.y) / 2;
              const normX = -dy / dist;
              const normY = dx / dist;
              const offset = 45;

              const ctrl1X = midX + normX * offset;
              const ctrl1Y = midY + normY * offset;
              const d1 = `M ${ptA.x} ${ptA.y} Q ${ctrl1X} ${ctrl1Y} ${ptB.x} ${ptB.y}`;

              const ctrl2X = midX - normX * offset;
              const ctrl2Y = midY - normY * offset;
              const d2 = `M ${ptB.x} ${ptB.y} Q ${ctrl2X} ${ctrl2Y} ${ptA.x} ${ptA.y}`;

              return (
                <g id="pairwise-connections">
                  {/* Arc 1: A -> B */}
                  <path
                    d={d1}
                    fill="none"
                    stroke={lakA.color}
                    strokeWidth="3.5"
                    markerEnd="url(#arrow-pairwise-fwd)"
                    filter={`drop-shadow(0 0 8px ${lakA.color})`}
                  />
                  {/* Arc 2: B -> A */}
                  <path
                    d={d2}
                    fill="none"
                    stroke={lakB.color}
                    strokeWidth="3.5"
                    markerEnd="url(#arrow-pairwise-rev)"
                    filter={`drop-shadow(0 0 8px ${lakB.color})`}
                  />

                  {/* Flow Particle 1 */}
                  <circle r="5" fill="#ffffff" filter={`drop-shadow(0 0 8px ${lakA.color})`}>
                    <animateMotion path={d1} dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  {/* Flow Particle 2 */}
                  <circle r="5" fill="#ffffff" filter={`drop-shadow(0 0 8px ${lakB.color})`}>
                    <animateMotion path={d2} dur="2.2s" repeatCount="indefinite" />
                  </circle>

                  {/* Directional Arc Labels */}
                  <text x={ctrl1X} y={ctrl1Y} fontSize="10" fontWeight="bold" fill={lakA.color} textAnchor="middle">
                    {lakA.name.replace(' Lakshmi', '')} ➔ {lakB.name.replace(' Lakshmi', '')}
                  </text>
                  <text x={ctrl2X} y={ctrl2Y} fontSize="10" fontWeight="bold" fill={lakB.color} textAnchor="middle">
                    {lakB.name.replace(' Lakshmi', '')} ➔ {lakA.name.replace(' Lakshmi', '')}
                  </text>
                </g>
              );
            })()}

            {/* MODE 3: SIMULATOR RADIAL SPOKES & DYNAMIC HARMONY CIRCLE */}
            {currentMode === 'sim' && (
              <g id="sim-center-and-spokes">
                {/* Radial Spokes from Harmony Circle boundary (r=48) to nodes */}
                {LAKSHMIS.map(lak => {
                  const pt = getCoords(lak.angle, 215);
                  const val = simValues[lak.id] || 100;
                  const opacity = 0.2 + (val / 100) * 0.8;
                  const rad = (lak.angle * Math.PI) / 180;
                  const startX = 300 + 48 * Math.cos(rad);
                  const startY = 300 + 48 * Math.sin(rad);

                  return (
                    <line
                      key={`spoke-${lak.id}`}
                      x1={startX}
                      y1={startY}
                      x2={pt.x}
                      y2={pt.y}
                      stroke={lak.color}
                      strokeWidth={1 + (val / 100) * 2}
                      opacity={opacity}
                    />
                  );
                })}

                {/* DYNAMIC HARMONY CIRCLE (CENTER) */}
                <g id="harmony-center-group">
                  {/* Radiating Outer Aura */}
                  <circle cx="300" cy="300" r="66" fill={harmonyConfig.bgAura} filter={`drop-shadow(0 0 18px ${harmonyConfig.glowColor})`} />
                  
                  {/* Track Ring */}
                  <circle cx="300" cy="300" r={gaugeRadius} fill="none" stroke="#1e293b" strokeWidth="4.5" />
                  
                  {/* Dynamic Circular Progress Gauge Ring */}
                  <circle
                    cx="300"
                    cy="300"
                    r={gaugeRadius}
                    fill="none"
                    stroke={harmonyConfig.color}
                    strokeWidth="4.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeOffset}
                    strokeLinecap="round"
                    transform="rotate(-90 300 300)"
                    filter={`drop-shadow(0 0 8px ${harmonyConfig.color})`}
                  />

                  {/* Inner Glass Sphere */}
                  <circle cx="300" cy="300" r="40" fill="#090d16" stroke={harmonyConfig.color} strokeWidth="2" />

                  {/* Dynamic Typography */}
                  <text x="300" y="293" textAnchor="middle" fontSize="20" fontWeight="900" fill={harmonyConfig.color} fontFamily="system-ui, -apple-system, sans-serif">
                    {calculatedHarmony}%
                  </text>
                  <text x="300" y="309" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#f8fafc" letterSpacing="1.5">
                    {harmonyConfig.statusTitle}
                  </text>
                  <text x="300" y="322" textAnchor="middle" fontSize="7.5" fontWeight="600" fill={harmonyConfig.color}>
                    {harmonyConfig.statusSub}
                  </text>
                </g>
              </g>
            )}

            {/* 8 RADIAL NODES */}
            <g id="nodes-group">
              {LAKSHMIS.map(lak => {
                const pt = getCoords(lak.angle, 215);
                const isSelectedHolistic = currentMode === 'holistic' && lak.id === selectedHolisticLakshmi.id;
                const isPairActive = currentMode === 'pairwise' && (lak.id === activeLoop.nodeA || lak.id === activeLoop.nodeB);
                const isPairDimmed = currentMode === 'pairwise' && !isPairActive;
                const isHighlighted = isSelectedHolistic || isPairActive;
                const labelPt = getCoords(lak.angle, 260);

                const handleClick = () => {
                  if (currentMode === 'holistic') {
                    setActiveHolisticNodeId(lak.id);
                  } else if (currentMode === 'pairwise') {
                    handlePairwiseNodeClick(lak.id);
                  }
                };

                return (
                  <g
                    key={`node-${lak.id}`}
                    onClick={handleClick}
                    style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                  >
                    {/* Halo Glow */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHighlighted ? 32 : 24}
                      fill={lak.color}
                      opacity={isPairDimmed ? 0.05 : (isHighlighted ? 0.35 : 0.15)}
                      filter={isHighlighted ? `drop-shadow(0 0 12px ${lak.color})` : undefined}
                    />
                    {/* Node Core */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHighlighted ? 24 : 20}
                      fill="#0f172a"
                      stroke={isHighlighted ? '#ffffff' : lak.color}
                      strokeWidth={isHighlighted ? 3 : 1.8}
                      opacity={isPairDimmed ? 0.3 : 1}
                    />
                    {/* Node Icon */}
                    <text
                      x={pt.x}
                      y={pt.y + 6}
                      textAnchor="middle"
                      fontSize={isHighlighted ? 17 : 14}
                      opacity={isPairDimmed ? 0.3 : 1}
                    >
                      {lak.icon}
                    </text>
                    {/* Outer Label */}
                    <text
                      x={labelPt.x}
                      y={labelPt.y + 4}
                      textAnchor="middle"
                      fontSize={isHighlighted ? 11 : 10}
                      fontWeight={isHighlighted ? 'bold' : '600'}
                      fill={isHighlighted ? '#fbbf24' : (isPairDimmed ? '#475569' : '#94a3b8')}
                    >
                      {lak.name.replace(' Lakshmi', '')}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Canvas Bottom Legend */}
          <div style={{
            width: '100%',
            marginTop: '16px',
            paddingTop: '12px',
            borderTop: '1px solid #334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#94A3B8'
          }}>
            {currentMode === 'holistic' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', backgroundColor: '#10B981', display: 'inline-block' }}></span>
                  ↗️ Outbound (Feeds Others)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', backgroundColor: '#38BDF8', display: 'inline-block' }}></span>
                  ↙️ Inbound (Needs From Others)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', backgroundColor: '#FBBF24', display: 'inline-block' }}></span>
                  ⇄ Reciprocal
                </span>
              </div>
            )}
            {currentMode === 'pairwise' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', backgroundColor: '#10B981', display: 'inline-block' }}></span>
                  Forward Flow (A ➔ B)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '9999px', backgroundColor: '#6366F1', display: 'inline-block' }}></span>
                  Returning Reciprocal Flow (B ➔ A)
                </span>
              </div>
            )}
            {currentMode === 'sim' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={14} color={harmonyConfig.color} />
                <span>Spoke line thickness reflects individual vitality; center reflects system equilibrium</span>
              </div>
            )}
            <span style={{ fontSize: '11px', color: '#64748B' }}>
              8 Nodes • Pure Geometric Balance
            </span>
          </div>
        </div>

        {/* Right Column: Dynamic Detail / Simulator Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* HOLISTIC DETAIL VIEW */}
          {currentMode === 'holistic' && (
            <div style={{
              background: 'rgba(30, 41, 59, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #334155',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Colored Top Border Indicator */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(to right, ${selectedHolisticLakshmi.color}, #fbbf24)`
              }}></div>

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#0F172A',
                    border: '1px solid #334155',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px'
                  }}>
                    {selectedHolisticLakshmi.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, margin: 0, color: '#FFFFFF' }}>
                      {selectedHolisticLakshmi.name}
                    </h3>
                    <span style={{ fontSize: '12px', color: selectedHolisticLakshmi.color, fontWeight: 700 }}>
                      {selectedHolisticLakshmi.sanskrit} • {selectedHolisticLakshmi.domain}
                    </span>
                  </div>
                </div>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#FBBF24',
                  border: '1px solid rgba(245, 158, 11, 0.3)'
                }}>
                  {selectedHolisticLakshmi.badge}
                </span>
              </div>

              <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '20px' }}>
                {selectedHolisticLakshmi.desc}
              </p>

              {/* Inbound & Outbound Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                
                {/* Outbound (Feeds) */}
                <div style={{ background: '#0F172A', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '14px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <Zap size={14} color="#10B981" />
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#6EE7B7', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      How {selectedHolisticLakshmi.name.replace(' Lakshmi', '')} Feeds Other Lakshmis
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedHolisticLakshmi.feeds.map(f => {
                      const targetLak = LAKSHMIS.find(l => l.id === f.target);
                      return (
                        <div key={f.target} style={{ padding: '8px 10px', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.2)', fontSize: '12px', display: 'flex', gap: '8px' }}>
                          <span style={{ color: '#10B981', fontWeight: 800, whiteSpace: 'nowrap' }}>
                            ➔ {targetLak ? targetLak.name.replace(' Lakshmi', '') : f.target}:
                          </span>
                          <span style={{ color: '#CBD5E1' }}>{f.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Inbound (Needs) */}
                <div style={{ background: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '14px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <Info size={14} color="#38BDF8" />
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#7DD3FC', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      What {selectedHolisticLakshmi.name.replace(' Lakshmi', '')} Needs From Others
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedHolisticLakshmi.needs.map(n => {
                      const sourceLak = LAKSHMIS.find(l => l.id === n.source);
                      return (
                        <div key={n.source} style={{ padding: '8px 10px', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(56, 189, 248, 0.2)', fontSize: '12px', display: 'flex', gap: '8px' }}>
                          <span style={{ color: '#38BDF8', fontWeight: 800, whiteSpace: 'nowrap' }}>
                            ← {sourceLak ? sourceLak.name.replace(' Lakshmi', '') : n.source}:
                          </span>
                          <span style={{ color: '#CBD5E1' }}>{n.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Systemic Imbalance Warning */}
                <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '14px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <AlertTriangle size={14} color="#EF4444" />
                    <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#F87171', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      Consequence of Single-Point Deficit
                    </span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: 1.5, margin: 0 }}>
                    {selectedHolisticLakshmi.imbalance}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* PAIRWISE DETAIL VIEW */}
          {currentMode === 'pairwise' && (
            <div style={{
              background: 'rgba(30, 41, 59, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #334155',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, margin: 0, color: '#FFFFFF' }}>
                    {activeLoop.title}
                  </h3>
                  <span style={{ fontSize: '12px', color: '#38BDF8', fontWeight: 700 }}>
                    Dual Counter-Flow Closed Feedback Loop
                  </span>
                </div>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38BDF8',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}>
                  {activeLoop.badge}
                </span>
              </div>

              {/* 4-Step Perpetual Value Chain */}
              <div style={{ background: '#0F172A', border: '1px solid #334155', borderRadius: '14px', padding: '16px', marginBottom: '18px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '12px' }}>
                  Perpetual Value Generation Chain
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[activeLoop.step1, activeLoop.step2, activeLoop.step3, activeLoop.step4].map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#E2E8F0' }}>
                      <span style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '9999px',
                        background: '#334155',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 800,
                        color: '#F8FAFC',
                        flexShrink: 0
                      }}>
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Forward vs Reverse Explanations */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '18px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '12px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#6EE7B7', display: 'block', marginBottom: '4px' }}>
                    {activeLoop.forwardTitle}
                  </span>
                  <p style={{ fontSize: '12px', color: '#CBD5E1', margin: 0, lineHeight: 1.5 }}>
                    {activeLoop.forwardDetail}
                  </p>
                </div>
                <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '12px', padding: '12px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#A5B4FC', display: 'block', marginBottom: '4px' }}>
                    {activeLoop.reverseTitle}
                  </span>
                  <p style={{ fontSize: '12px', color: '#CBD5E1', margin: 0, lineHeight: 1.5 }}>
                    {activeLoop.reverseDetail}
                  </p>
                </div>
              </div>

              {/* Broken Loop Consequence */}
              <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '12px' }}>
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#F87171', display: 'block', marginBottom: '6px' }}>
                  ⚠️ Broken Loop Archetypes:
                </span>
                <div style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                  {activeLoop.brokenLoop}
                </div>
              </div>
            </div>
          )}

          {/* SIMULATOR DETAIL VIEW & SLIDERS */}
          {currentMode === 'sim' && (
            <div style={{
              background: 'rgba(30, 41, 59, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #334155',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)'
            }}>
              {/* Harmony Score Banner */}
              <div style={{
                background: '#0F172A',
                border: `1px solid ${harmonyConfig.color}40`,
                borderRadius: '16px',
                padding: '16px 20px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    System Equilibrium
                  </span>
                  <h4 style={{ fontSize: '18px', fontWeight: 900, margin: '2px 0 0 0', color: harmonyConfig.color }}>
                    {harmonyConfig.label}
                  </h4>
                  <span style={{ fontSize: '12px', color: '#94A3B8' }}>{harmonyConfig.desc}</span>
                </div>
                <div style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  background: `${harmonyConfig.color}20`,
                  border: `1px solid ${harmonyConfig.color}`,
                  color: harmonyConfig.color,
                  fontSize: '24px',
                  fontWeight: 900
                }}>
                  {calculatedHarmony}%
                </div>
              </div>

              {/* Stress Presets */}
              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '8px' }}>
                  Simulate Real-Life Scenarios:
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <button
                    onClick={() => applyPreset('startup')}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1E293B',
                      color: '#E2E8F0',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    🚀 Startup Sprint (Health 25%)
                  </button>
                  <button
                    onClick={() => applyPreset('academic')}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1E293B',
                      color: '#E2E8F0',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    🎓 Academic Burnout (Dhana 20%)
                  </button>
                  <button
                    onClick={() => applyPreset('equilibrium')}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1E293B',
                      color: '#E2E8F0',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    ✨ Golden Equilibrium (All &gt;90%)
                  </button>
                  <button
                    onClick={() => applyPreset('reset')}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1E293B',
                      color: '#CBD5E1',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    🔄 Full Reset (100% All)
                  </button>
                </div>
              </div>

              {/* 8 Sliders Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  Adjust Individual Dimensions:
                </span>
                {LAKSHMIS.map(lak => {
                  const val = simValues[lak.id] || 100;
                  return (
                    <div key={lak.id} style={{ background: '#0F172A', padding: '8px 12px', borderRadius: '10px', border: '1px solid #334155' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '13px' }}>{lak.icon}</span>
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#F1F5F9' }}>{lak.name.replace(' Lakshmi', '')}</span>
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: lak.color }}>{val}%</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="100"
                        value={val}
                        onChange={(e) => setSimValues(prev => ({ ...prev, [lak.id]: parseInt(e.target.value) }))}
                        style={{ width: '100%', accentColor: lak.color, cursor: 'pointer' }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
