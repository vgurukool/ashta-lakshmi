import {
  Sparkles,
  Coins,
  Utensils,
  Shield,
  Users,
  Heart,
  Trophy,
  BookOpen
} from 'lucide-react';

export const INITIAL_LAKSHMI_DATA = [
  {
    id: 'adi',
    sanskritName: 'Adi Lakshmi',
    englishTitle: 'Spiritual Wealth',
    description: 'The inner peace, quiet mind, and awareness of your true divine source.',
    icon: Sparkles,
    accentColor: '#8B5CF6',
    automatedScore: 84,
    scoreSource: 'assessment', // 'assessment', 'automated', 'blended'
    automatedMetrics: [
      { name: 'Daily Meditation Streak', value: '18 Days', score: 85 },
      { name: 'Inner Peace & Calm Index', value: '84 / 100', score: 84 },
      { name: 'Mindful Reflection Frequency', value: '5x / Week', score: 82 }
    ],
    suggestions: {
      emerging: 'Begin with 5 minutes of morning silence before checking your phone. Practice basic breath awareness (Pranayama).',
      balanced: 'Maintain a daily 15-minute meditation routine. Engage in weekly spiritual reading or philosophical journaling.',
      abundant: 'Deepen your meditative insight, practice unattached action (Karma Yoga), and mentor others seeking inner peace.'
    },
    actionItems: [
      { id: 'adi_act1', text: 'Practice 10 minutes of morning breathwork / meditation', completed: true },
      { id: 'adi_act2', text: 'Maintain a daily gratitude & self-reflection journal', completed: false },
      { id: 'adi_act3', text: 'Observe a 1-hour evening digital detox before bed', completed: true }
    ],
    questions: [
      {
        id: 'adi_q1',
        text: 'How frequently do you experience inner peace and freedom from mental anxiety during your daily routine?',
        score: 80,
        weight: 3
      },
      {
        id: 'adi_q2',
        text: 'How connected and aligned do you feel with your higher spiritual purpose and true self?',
        score: 85,
        weight: 3
      },
      {
        id: 'adi_q3',
        text: 'How consistently do you dedicate time to meditation, mindfulness, prayer, or quiet reflection?',
        score: 75,
        weight: 2
      }
    ]
  },
  {
    id: 'dhana',
    sanskritName: 'Dhana Lakshmi',
    englishTitle: 'Material Wealth',
    description: 'Money, assets, gold, and financial abundance to support life stability.',
    icon: Coins,
    accentColor: '#10B981',
    automatedScore: 82,
    scoreSource: 'assessment',
    automatedMetrics: [
      { name: 'Net Worth Portfolio Value', value: '$787,881', score: 85 },
      { name: 'Emergency Fund Coverage', value: '6 Months', score: 80 },
      { name: 'Debt-to-Asset Liquidity Ratio', value: '12%', score: 82 }
    ],
    suggestions: {
      emerging: 'Establish a clear monthly budget, track all expenses, and build a 3-month emergency cash reserve.',
      balanced: 'Automate monthly contributions into broad index funds, real estate, or retirement accounts. Rebalance annually.',
      abundant: 'Diversify across multiple passive income streams, optimize tax strategy, and engage in philanthropic giving.'
    },
    actionItems: [
      { id: 'dhana_act1', text: 'Review and categorize monthly income vs expenses', completed: true },
      { id: 'dhana_act2', text: 'Automate transfer to high-yield emergency reserve', completed: true },
      { id: 'dhana_act3', text: 'Rebalance investment asset allocation portfolio', completed: false }
    ],
    questions: [
      {
        id: 'dhana_q1',
        text: 'How adequate and stable are your financial savings, assets, and investments for long-term security?',
        score: 75,
        weight: 3
      },
      {
        id: 'dhana_q2',
        text: 'How effectively do your material resources support your family lifestyle needs and aspirations?',
        score: 80,
        weight: 3
      },
      {
        id: 'dhana_q3',
        text: 'How free do you feel from unmanageable financial debt and money-related stress?',
        score: 70,
        weight: 2
      }
    ]
  },
  {
    id: 'dhanya',
    sanskritName: 'Dhanya Lakshmi',
    englishTitle: 'Nourishment',
    description: 'Food, grains, physical health, and agricultural abundance.',
    icon: Utensils,
    accentColor: '#F59E0B',
    automatedScore: 85,
    scoreSource: 'assessment',
    automatedMetrics: [
      { name: 'Daily Water Intake', value: '2.8 Liters', score: 88 },
      { name: 'Whole & Fresh Food Ratio', value: '85%', score: 85 },
      { name: 'Daily Physical Energy Rating', value: '82 / 100', score: 82 }
    ],
    suggestions: {
      emerging: 'Eliminate processed foods, drink 2.5L water daily, and eat freshly prepared wholesome meals.',
      balanced: 'Maintain consistent meal times, practice mindful eating without TV/phones, and include diverse plant nutrients.',
      abundant: 'Support local organic farmers, grow your own herbs/vegetables, and share meals with those in need.'
    },
    actionItems: [
      { id: 'dhanya_act1', text: 'Drink 2.5 Liters of pure water daily', completed: true },
      { id: 'dhanya_act2', text: 'Prepare freshly cooked organic dinner', completed: true },
      { id: 'dhanya_act3', text: 'Complete 30 minutes of physical exercise', completed: false }
    ],
    questions: [
      {
        id: 'dhanya_q1',
        text: 'How wholesome, clean, and nutritious is your daily diet and food intake?',
        score: 85,
        weight: 3
      },
      {
        id: 'dhanya_q2',
        text: 'How physically energized, fit, and healthy do you feel on a daily basis?',
        score: 80,
        weight: 3
      },
      {
        id: 'dhanya_q3',
        text: 'How mindful and grateful are you for the food and sustenance available to you?',
        score: 90,
        weight: 2
      }
    ]
  },
  {
    id: 'gaja',
    sanskritName: 'Gaja Lakshmi',
    englishTitle: 'Power and Strength',
    description: 'Influence, royal dignity, administrative authority, and protective capability.',
    icon: Shield,
    accentColor: '#3B82F6',
    automatedScore: 74,
    scoreSource: 'assessment',
    automatedMetrics: [
      { name: 'Leadership & Decision Index', value: '75 / 100', score: 75 },
      { name: 'Community Influence Rating', value: '72 / 100', score: 72 },
      { name: 'Boundary Protection Capability', value: '76 / 100', score: 76 }
    ],
    suggestions: {
      emerging: 'Practice assertive communication, define clear personal boundaries, and take ownership of your decisions.',
      balanced: 'Take leadership initiative in team settings, protect team members, and cultivate executive composure.',
      abundant: 'Use your power to advocate for others, mentor emerging leaders, and uphold royal integrity and dignity.'
    },
    actionItems: [
      { id: 'gaja_act1', text: 'Set clear weekly personal and professional boundaries', completed: true },
      { id: 'gaja_act2', text: 'Lead a key team meeting or strategic discussion', completed: false },
      { id: 'gaja_act3', text: 'Resolve a lingering conflict with calm authority', completed: false }
    ],
    questions: [
      {
        id: 'gaja_q1',
        text: 'How respected and influential are you in your professional, community, or social circles?',
        score: 70,
        weight: 3
      },
      {
        id: 'gaja_q2',
        text: 'How confident are you in taking leadership, making firm decisions, and guiding others?',
        score: 75,
        weight: 3
      },
      {
        id: 'gaja_q3',
        text: 'How effective are you in protecting your boundaries, resources, and dependents?',
        score: 68,
        weight: 2
      }
    ]
  },
  {
    id: 'santana',
    sanskritName: 'Santana Lakshmi',
    englishTitle: 'Legacy',
    description: 'Family, children, generational continuity, and supportive relationships.',
    icon: Users,
    accentColor: '#EC4899',
    automatedScore: 88,
    scoreSource: 'assessment',
    automatedMetrics: [
      { name: 'Weekly Quality Family Time', value: '14 Hours', score: 90 },
      { name: 'Family Harmony Score', value: '88 / 100', score: 88 },
      { name: 'Generational Value Transmission', value: '86 / 100', score: 86 }
    ],
    suggestions: {
      emerging: 'Schedule uninterrupted family dinners without phones. Express explicit warmth and gratitude to loved ones.',
      balanced: 'Establish memorable family traditions, celebrate milestones, and impart ethical life values to children.',
      abundant: 'Create long-term family trust funds, document ancestral wisdom, and foster an enduring multi-generational legacy.'
    },
    actionItems: [
      { id: 'santana_act1', text: 'Host a device-free family dinner and conversation', completed: true },
      { id: 'santana_act2', text: 'Share a story of core family values with children/youth', completed: true },
      { id: 'santana_act3', text: 'Plan an upcoming family weekend gathering', completed: false }
    ],
    questions: [
      {
        id: 'santana_q1',
        text: 'How loving, harmonious, and supportive are your relationships with your family and children?',
        score: 90,
        weight: 3
      },
      {
        id: 'santana_q2',
        text: 'How actively are you passing down strong ethical values and cultural heritage to the next generation?',
        score: 85,
        weight: 3
      },
      {
        id: 'santana_q3',
        text: 'How nurtured, safe, and valued do your family members feel in your presence?',
        score: 88,
        weight: 2
      }
    ]
  },
  {
    id: 'dhairya',
    sanskritName: 'Dhairya Lakshmi',
    englishTitle: 'Courage',
    description: 'Patience, mental fortitude, resilience, and perseverance through trials.',
    icon: Heart,
    accentColor: '#EF4444',
    automatedScore: 76,
    scoreSource: 'assessment',
    automatedMetrics: [
      { name: 'Stress Recovery Velocity', value: '2.2 Days', score: 78 },
      { name: 'Crisis Composure Index', value: '75 / 100', score: 75 },
      { name: 'Comfort Zone Challenge Rate', value: '3x / Month', score: 75 }
    ],
    suggestions: {
      emerging: 'Reframe setbacks as neutral learning events. Practice slow deep breathing when feeling overwhelmed.',
      balanced: 'Voluntarily step into challenging situations, build physical endurance, and practice stoic emotional control.',
      abundant: 'Stand as a pillar of unwavering courage for your organization/family during major external crises.'
    },
    actionItems: [
      { id: 'dhairya_act1', text: 'Tackle the most uncomfortable task first in the morning', completed: true },
      { id: 'dhairya_act2', text: 'Reframe a recent setback into a positive growth lesson', completed: false },
      { id: 'dhairya_act3', text: 'Practice 2 minutes of cold shower / mental grit training', completed: true }
    ],
    questions: [
      {
        id: 'dhairya_q1',
        text: 'How calmly and patiently do you respond when faced with unexpected crises or severe setbacks?',
        score: 72,
        weight: 3
      },
      {
        id: 'dhairya_q2',
        text: 'How resilient is your courage when stepping out of your comfort zone to embrace new challenges?',
        score: 78,
        weight: 3
      },
      {
        id: 'dhairya_q3',
        text: 'How steadfast are you in maintaining your core principles during tough times?',
        score: 76,
        weight: 2
      }
    ]
  },
  {
    id: 'vijaya',
    sanskritName: 'Vijaya Lakshmi',
    englishTitle: 'Success',
    description: 'Victory, triumph over obstacles, and achieving meaningful milestones.',
    icon: Trophy,
    accentColor: '#6366F1',
    automatedScore: 80,
    scoreSource: 'assessment',
    automatedMetrics: [
      { name: 'Goal Execution Velocity', value: '82%', score: 82 },
      { name: 'Milestone Achievement Rate', value: '8.4 / 10', score: 80 },
      { name: 'Obstacle Overcoming Index', value: '78 / 100', score: 78 }
    ],
    suggestions: {
      emerging: 'Break large intimidating goals into bite-sized 15-minute daily actions. Celebrate small wins daily.',
      balanced: 'Conduct weekly goal progress reviews, eliminate procrastination triggers, and refine execution systems.',
      abundant: 'Achieve high-impact strategic milestones, remain humble in victory, and empower others to succeed.'
    },
    actionItems: [
      { id: 'vijaya_act1', text: 'Define top 3 quarterly strategic objectives', completed: true },
      { id: 'vijaya_act2', text: 'Conduct weekly progress review and adjust targets', completed: true },
      { id: 'vijaya_act3', text: 'Acknowledge and celebrate a recent milestone victory', completed: false }
    ],
    questions: [
      {
        id: 'vijaya_q1',
        text: 'How consistently do you achieve your key personal, career, and life milestones?',
        score: 82,
        weight: 3
      },
      {
        id: 'vijaya_q2',
        text: 'How effectively do you turn difficult challenges into successful outcomes and learning victories?',
        score: 78,
        weight: 3
      },
      {
        id: 'vijaya_q3',
        text: 'How fulfilled do you feel with your overall track record of achievements?',
        score: 80,
        weight: 2
      }
    ]
  },
  {
    id: 'vidya',
    sanskritName: 'Vidya Lakshmi',
    englishTitle: 'Knowledge',
    description: 'Education, wisdom, intellectual mastery, and continuous learning.',
    icon: BookOpen,
    accentColor: '#14B8A6',
    automatedScore: 92,
    scoreSource: 'assessment',
    automatedMetrics: [
      { name: 'Weekly Reading Time', value: '6.5 Hours', score: 94 },
      { name: 'Skill Acquisition Rate', value: '92 / 100', score: 92 },
      { name: 'Wisdom Application Index', value: '90 / 100', score: 90 }
    ],
    suggestions: {
      emerging: 'Read 20 pages of non-fiction or educational material every day. Listen to insightful lectures.',
      balanced: 'Master a new domain skill, test your knowledge in practical projects, and practice critical thinking.',
      abundant: 'Teach, write articles/books, publish research, and pass on profound wisdom to elevate society.'
    },
    actionItems: [
      { id: 'vidya_act1', text: 'Read 20 pages of educational or philosophical literature', completed: true },
      { id: 'vidya_act2', text: 'Complete a specialized online skill course module', completed: true },
      { id: 'vidya_act3', text: 'Write a summary synthesis of new insights learned', completed: false }
    ],
    questions: [
      {
        id: 'vidya_q1',
        text: 'How actively do you engage in lifelong learning, acquiring new skills, and reading?',
        score: 92,
        weight: 3
      },
      {
        id: 'vidya_q2',
        text: 'How effectively do you apply your wisdom and intellectual knowledge to solve real-world problems?',
        score: 90,
        weight: 3
      },
      {
        id: 'vidya_q3',
        text: 'How open-minded and discerning are you when evaluating new ideas and truth?',
        score: 94,
        weight: 2
      }
    ]
  }
];

export function calculateLakshmiScore(questions = []) {
  if (!questions || questions.length === 0) return 0;
  let weightedSum = 0;
  let totalWeight = 0;

  questions.forEach(q => {
    const s = Math.min(100, Math.max(1, Number(q.score || 0)));
    const w = Math.max(1, Number(q.weight || 1));
    weightedSum += s * w;
    totalWeight += w;
  });

  return totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;
}

export function getFinalLakshmiScore(lakshmiItem) {
  if (!lakshmiItem) return 0;
  const selfScore = calculateLakshmiScore(lakshmiItem.questions);
  const autoScore = Number(lakshmiItem.automatedScore || selfScore);
  const source = lakshmiItem.scoreSource || 'assessment';

  if (source === 'automated') {
    return autoScore;
  } else if (source === 'blended') {
    return Math.round((selfScore + autoScore) / 2);
  }
  return selfScore;
}

export function getScoreRangeConfig(score) {
  if (score <= 40) {
    return {
      label: 'Emerging / Needs Focus',
      color: '#EF4444',
      bgColor: '#FEF2F2',
      borderColor: '#FECDD3',
      badgeBg: '#FEE2E2',
      badgeColor: '#991B1B'
    };
  } else if (score <= 75) {
    return {
      label: 'Balanced & Flourishing',
      color: '#D97706',
      bgColor: '#FEF3C7',
      borderColor: '#FDE68A',
      badgeBg: '#FEF3C7',
      badgeColor: '#92400E'
    };
  } else {
    return {
      label: 'Abundant & Mastered',
      color: '#059669',
      bgColor: '#ECFDF5',
      borderColor: '#A7F3D0',
      badgeBg: '#D1FAE5',
      badgeColor: '#065F46'
    };
  }
}

export const SUPPORTED_YEARS = ['2023', '2024', '2025', '2026'];

// Default yearly progression multipliers to provide rich baseline historical trends
const YEAR_OFFSETS = {
  '2023': { adi: -12, dhana: -18, dhanya: -10, gaja: -15, santana: -8, dhairya: -14, vijaya: -16, vidya: -8 },
  '2024': { adi: -6, dhana: -10, dhanya: -6, gaja: -8, santana: -4, dhairya: -8, vijaya: -9, vidya: -4 },
  '2025': { adi: -2, dhana: -4, dhanya: -2, gaja: -3, santana: -1, dhairya: -2, vijaya: -3, vidya: -1 },
  '2026': { adi: 0, dhana: 0, dhanya: 0, gaja: 0, santana: 0, dhairya: 0, vijaya: 0, vidya: 0 }
};

export function getDefaultMultiYearState() {
  const multiYear = {};

  SUPPORTED_YEARS.forEach(year => {
    const offsets = YEAR_OFFSETS[year] || {};
    const yearMap = {};

    INITIAL_LAKSHMI_DATA.forEach(def => {
      const offset = offsets[def.id] || 0;
      const adjustedQuestions = (def.questions || []).map(q => {
        const adjustedScore = Math.max(20, Math.min(100, (q.score || 70) + offset));
        return { ...q, score: adjustedScore };
      });

      yearMap[def.id] = {
        ...def,
        questions: adjustedQuestions,
        automatedScore: Math.max(20, Math.min(100, (def.automatedScore || 75) + offset))
      };
    });

    multiYear[year] = yearMap;
  });

  return multiYear;
}

export function calculateYoYDeltas(multiYearState, currentYear = '2026', previousYear = '2025') {
  const curState = multiYearState[currentYear] || {};
  const prevState = multiYearState[previousYear] || {};

  const deltas = {};
  let totalCur = 0;
  let totalPrev = 0;

  INITIAL_LAKSHMI_DATA.forEach(def => {
    const curLakshmi = curState[def.id] || def;
    const prevLakshmi = prevState[def.id] || def;

    const curScore = getFinalLakshmiScore(curLakshmi);
    const prevScore = getFinalLakshmiScore(prevLakshmi);
    const delta = curScore - prevScore;

    totalCur += curScore;
    totalPrev += prevScore;

    deltas[def.id] = {
      id: def.id,
      sanskritName: def.sanskritName,
      englishTitle: def.englishTitle,
      accentColor: def.accentColor,
      currentScore: curScore,
      previousScore: prevScore,
      delta,
      status: delta > 0 ? 'gaining' : (delta < 0 ? 'losing' : 'stable')
    };
  });

  const avgCur = Math.round(totalCur / INITIAL_LAKSHMI_DATA.length);
  const avgPrev = Math.round(totalPrev / INITIAL_LAKSHMI_DATA.length);
  const totalDelta = avgCur - avgPrev;

  return {
    deltas,
    avgCur,
    avgPrev,
    totalDelta,
    gainingList: Object.values(deltas).filter(d => d.delta > 0).sort((a, b) => b.delta - a.delta),
    losingList: Object.values(deltas).filter(d => d.delta < 0).sort((a, b) => a.delta - b.delta),
    stableList: Object.values(deltas).filter(d => d.delta === 0)
  };
}

