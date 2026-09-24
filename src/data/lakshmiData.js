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

export const LAKSHMI_ICON_COMPONENTS = {
  adi: Sparkles,
  dhana: Coins,
  dhanya: Utensils,
  gaja: Shield,
  santana: Users,
  dhairya: Heart,
  vijaya: Trophy,
  vidya: BookOpen
};

export const INITIAL_LAKSHMI_DATA = [
  {
    id: 'adi',
    sanskritName: 'Adi Lakshmi (आदिलक्ष्मी)',
    englishTitle: 'Spiritual Grounding & Inner Peace',
    subtitle: 'Primordial Peace, Samatvam & Atma Jnana',
    canonicalProse: 'Adi Lakshmi represents the primordial, unmanifest source of all cosmic order and inner sanctuary (Atma Jnana). In Vedic philosophy, external abundance without an unshakeable inner anchor is an anxiety-ridden illusion. True Adi wealth manifests as emotional equanimity (Samatvam), freedom from existential dread, a silent meditative mind (Mouna), and unwavering alignment with one\'s transcendent cosmic purpose (Dharma).',
    ontologicalDomain: 'Primordial Being, Moksha & Equanimity',
    scripture: 'Sri Suktam — "Moksha & Atma Jnana (Freedom from Existential Anxiety)"',
    icon: Sparkles,
    emoji: '🧘',
    accentColor: '#8B5CF6',
    colorName: 'violet',
    automatedScore: 82,
    scoreSource: 'assessment',
    counselor: 'Rishi Vashistha',
    statusBadge: 'Abundant State (Score 75–100): Satvic Radiance',
    statusClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    statusDesc: 'Your spiritual anchor and contemplative stillness (Mouna) are exceptionally stable. You maintain daily equanimity (Samatvam), which shields your mind against worldly panic and market volatility.',
    actions: [
      '⚡ Action: Deepen silent Brahramuhurta meditation to 45 minutes',
      '🧘 Action: Guide a junior seeker in foundational Vedanta inquiry'
    ],
    modernManifestations: [
      'Emotional poise during high-stress market contractions or personal disruptions',
      'Daily 20+ minute stillness practice free from digital distraction',
      'Transcendent perspective prioritizing cosmic purpose over ego validation'
    ],
    inbound: [
      { name: 'Dhanya Lakshmi (Vitality)', score: '34% ⚠️', color: 'rose', msg: '🚨 Friction: Low biological sleep energy creates subtle afternoon restlessness during Dhyana.' },
      { name: 'Vidya Lakshmi (Wisdom)', score: '74%', color: 'blue', msg: '✓ Svadhyaya scriptural study nourishes self-inquiry.' }
    ],
    outbound: [
      { name: 'Dhairya Lakshmi (Courage)', score: '65%', color: 'orange' },
      { name: 'Vijaya Lakshmi (Execution)', score: '68%', color: 'amber' }
    ],
    launchpads: [
      { name: 'Dhyana Meditation Studio', url: 'https://adi.vgurukool.com/dhyana', icon: '🧘', color: 'violet', host: 'adi.vgurukool.com ↗', desc: 'Guided Vedic mindfulness timer with autonomic breath pacing and silence bells.' },
      { name: 'Japa Mala 108 Counter', url: 'https://adi.vgurukool.com/japa', icon: '📿', color: 'purple', host: 'adi.vgurukool.com ↗', desc: 'Digital sacred counter logging daily Gayatri and Om Namo Narayanaya repetitions.' },
      { name: 'Sri Suktam Audio Chants', url: 'https://adi.vgurukool.com/chants', icon: '🎶', color: 'indigo', host: 'adi.vgurukool.com ↗', desc: 'Authentic Vedic svara chanting with audio breakdown of Sri Suktam verses.' },
      { name: 'Atma Jnana Self-Inquiry', url: 'https://adi.vgurukool.com/inquiry', icon: '✨', color: 'teal', host: 'adi.vgurukool.com ↗', desc: 'Socratic dialogue focusing on Vivekachudamani and non-dual contemplation.' }
    ],
    subFacets: [
      { name: '1. Atma Jnana & Existential Freedom', score: 90, color: 'emerald', desc: 'Unshakeable realization of transcendent self beyond transient roles.' },
      { name: '2. Emotional Equanimity (Samatvam)', score: 85, color: 'emerald', desc: 'Poised balance in joy and sorrow, praise and censure.' },
      { name: '3. Daily Dhyana & Mouna Stillness', score: 82, color: 'emerald', desc: '24-min average daily meditation logged without phone interruptions.' },
      { name: '4. Mind-Body Cellular Harmony', score: 79, color: 'amber', desc: 'Slightly constrained by irregular sleep timing from Dhanya.' }
    ],
    sadhana: [
      { id: 'adi_sd1', title: 'Brahramuhurta 20-Min Silent Dhyana', desc: 'Meditation before sunrise with Om japa resonance.', done: true },
      { id: 'adi_sd2', title: '15-Minute Evening Mouna (Noble Silence)', desc: 'Cease verbal and digital communication 30 mins before sleep.', done: true },
      { id: 'adi_sd3', title: 'Weekly Forest Walking Contemplation', desc: 'Solo barefoot or nature walk without headphones.', done: false }
    ],
    questions: [
      { id: 'adi_q1', text: 'How consistently do you experience deep emotional equanimity (Samatvam) and freedom from existential anxiety in your daily routine?', score: 84, weight: 3 },
      { id: 'adi_q2', text: 'How deeply connected and aligned do you feel with your higher cosmic purpose (Dharma) beyond immediate societal status?', score: 86, weight: 3 },
      { id: 'adi_q3', text: 'How consistently do you maintain a dedicated daily practice of meditation (Dhyana), silence (Mouna), or conscious contemplation?', score: 82, weight: 2 }
    ]
  },
  {
    id: 'dhana',
    sanskritName: 'Dhana Lakshmi (धनलक्ष्मी)',
    englishTitle: 'Financial Capital & Dharmic Assets',
    subtitle: 'Liquidity, Debt Freedom & Righteous Circulation',
    canonicalProse: 'Dhana Lakshmi governs gold, liquid currency, compounding capital, debt freedom, and tangible material assets (Artha). In Sanatana Dharma, material prosperity is embraced as sacred energy when earned through righteous means (Dharmic Artha) and deployed to safeguard families, sustain enterprises, and uplift society. True Dhana wealth means possessing resilient emergency liquidity, zero predatory leverage, and the generous practice of righteous circulation (Dāna).',
    ontologicalDomain: 'Financial Liquidity, Capital & Dāna',
    scripture: 'Mahabharata — "Artha (Righteous Material Stewardship)"',
    icon: Coins,
    emoji: '💰',
    accentColor: '#10B981',
    colorName: 'emerald',
    automatedScore: 79,
    scoreSource: 'assessment',
    counselor: 'Acharya Kubera',
    statusBadge: 'Abundant State (Score 75–100): Dharmic Wealth',
    statusClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    statusDesc: 'Your liquid reserves, capital allocation, and debt-free status place you in high financial stability. Your assets are circulating ethically, supporting both family security and generous societal contributions.',
    actions: [
      '⚡ Action: Review Q4 tax-optimized long-term compounding portfolio',
      '🤝 Action: Allocate 10% of monthly net income to verified Dharmic Dāna'
    ],
    modernManifestations: [
      '12+ months of non-negotiable living expense runway in liquid risk-free reserves',
      'Zero high-interest consumer debt or toxic credit card leverage',
      'Systematic monthly allocation to philanthropic tithes (Dāna) and ethical compounding'
    ],
    inbound: [
      { name: 'Vijaya Lakshmi (Execution)', score: '68%', color: 'amber', msg: '✓ Professional execution consistently feeds enterprise revenue.' },
      { name: 'Dhairya Lakshmi (Risk Armor)', score: '65%', color: 'orange', msg: '✓ Adequate insurance shields savings from catastrophic hospital bills.' }
    ],
    outbound: [
      { name: 'Gaja Lakshmi (Sanctuary)', score: '71%', color: 'cyan' },
      { name: 'Santana Lakshmi (Lineage)', score: '76%', color: 'pink' }
    ],
    launchpads: [
      { name: 'Dhana Ledger & Banking Feed', url: 'https://dhana.vgurukool.com', icon: '💰', color: 'emerald', host: 'dhana.vgurukool.com ↗', desc: 'Open Banking statement reconciliation, net worth compounding, and cash runway tracker.' },
      { name: 'Vedic Spending Allocator', url: 'https://dhana.vgurukool.com/vedic-spending', icon: '⚖️', color: 'teal', host: 'dhana.vgurukool.com ↗', desc: 'Categorize living expenses across Vedic 50/30/20 proportions.' },
      { name: 'Dāna Sacred Charity Hub', url: 'https://dhana.vgurukool.com/dana', icon: '🎁', color: 'amber', host: 'dhana.vgurukool.com ↗', desc: 'Automated 10% tithing to gurukools, cow sanctuaries, and Vedic libraries.' },
      { name: 'Capital Fortress Simulator', url: 'https://dhana.vgurukool.com/runway', icon: '🛡️', color: 'blue', host: 'dhana.vgurukool.com ↗', desc: 'Model living runway under severe market downturns or income pauses.' }
    ],
    subFacets: [
      { name: '1. Emergency Cash Runway', score: 95, color: 'emerald', desc: '14 months of essential expenses held in liquid risk-free reserves.' },
      { name: '2. Predatory Debt Freedom', score: 92, color: 'emerald', desc: 'Zero high-interest consumer debt or toxic credit balances.' },
      { name: '3. Dharmic Capital Compounding', score: 76, color: 'emerald', desc: 'Diversified index and sovereign gold compounding assets.' },
      { name: '4. Righteous Circulation (Dāna)', score: 65, color: 'amber', desc: 'Dāna active at 7%; target is 10% of monthly surplus.' }
    ],
    sadhana: [
      { id: 'dhana_sd1', title: 'Weekly Cashflow & Ledger Reconciliation', desc: 'Verify incoming transfers and eliminate forgotten subscriptions.', done: true },
      { id: 'dhana_sd2', title: 'Monthly Dharmic Dāna Allocation', desc: 'Disburse educational sponsorship for Vedic students.', done: true },
      { id: 'dhana_sd3', title: 'Quarterly Emergency Runway Stress Test', desc: 'Verify 12+ months of runway against projected cost of living.', done: false }
    ],
    questions: [
      { id: 'dhana_q1', text: 'How secure and resilient is your liquid emergency reserve against unexpected disruptions (minimum 6–12 months runway)?', score: 82, weight: 3 },
      { id: 'dhana_q2', text: 'How completely free are you from predatory, high-interest consumer debt and speculative financial anxiety?', score: 85, weight: 3 },
      { id: 'dhana_q3', text: 'How systematically and joyfully do you circulate capital through Dharmic philanthropy, tithing, and community support (Dāna)?', score: 78, weight: 2 }
    ]
  },
  {
    id: 'dhanya',
    sanskritName: 'Dhanya Lakshmi (धान्यलक्ष्मी)',
    englishTitle: 'Biological Vitality & Cellular Agni',
    subtitle: 'Nourishment, Restorative Nidra & Circadian Energy',
    canonicalProse: 'Dhanya Lakshmi is the goddess of physical sustenance, biological nourishment, and radiant cellular energy (Annam Brahma). The physical body (Annamaya Kosha) is the sacred vehicle through which every life goal, spiritual sadhana, and creative work is enacted. True Dhanya wealth is characterized by a robust digestive fire (Agni), disciplined circadian rhythm (Dinacharya), seasonal satvic nutrition (Ritucharya), and restorative sleep (Nidra).',
    ontologicalDomain: 'Cellular Vitality, Agni & Chronobiology',
    scripture: 'Taittiriya Upanishad — "Annam Brahma (Food and Vitality are Divine)"',
    icon: Utensils,
    emoji: '🌿',
    accentColor: '#F43F5E',
    colorName: 'rose',
    automatedScore: 28,
    scoreSource: 'assessment',
    counselor: 'Vaidya Dhanvantari',
    statusBadge: '🚨 Critical Bottleneck (Score < 40): Cellular Agni Sluggish',
    statusClass: 'bg-rose-500/20 border-rose-500/40 text-rose-300 font-bold',
    statusDesc: 'Chronic sleep deprivation (5h 12m avg) and late-night digital exposure are draining your cellular vitality (Ojas). This is the single critical bottleneck capping your entire life harmony.',
    actions: [
      '🚨 Critical Action: Enforce non-negotiable 10:00 PM digital shutdown',
      '🍲 Action: Eat warm, freshly prepared satvic lunch before 1:30 PM'
    ],
    modernManifestations: [
      'Consistently achieving 7.5+ hours of restorative sleep with high HRV recovery',
      'Consuming fresh, minimally processed satvic foods aligned with digestive fire',
      'Active daily physical movement maintaining metabolic flexibility and stamina'
    ],
    inbound: [
      { name: 'Adi Lakshmi (Peace)', score: '84%', color: 'violet', msg: '✓ Mental equanimity prevents stress eating, but sleep rhythm remains broken.' }
    ],
    outbound: [
      { name: 'Vidya Lakshmi (Knowledge)', score: '74% (Capped to 46%)', color: 'blue', msg: '🚨 Brain fog and mid-afternoon energy crashes limit retention.' },
      { name: 'Vijaya Lakshmi (Execution)', score: '68% (Fatigue Drag)', color: 'amber', msg: '🚨 Work stamina drops rapidly after 4:00 PM.' }
    ],
    launchpads: [
      { name: 'Apple Health & Wearables Gateway', url: 'https://health.vgurukool.com', icon: '⌚', color: 'rose', host: 'health.vgurukool.com ↗', desc: 'Biometric telemetry sync for sleep stages, resting HRV, and recovery.' },
      { name: 'Dinacharya Circadian Planner', url: 'https://health.vgurukool.com/dinacharya', icon: '☀️', color: 'amber', host: 'health.vgurukool.com ↗', desc: 'Solar-aligned daily schedule: wake up, meal times, and sleep hygiene.' },
      { name: 'Satvic Nutrition & Agni Tracker', url: 'https://health.vgurukool.com/nutrition', icon: '🍲', color: 'emerald', host: 'health.vgurukool.com ↗', desc: 'Log seasonal prana-rich meals and rate post-meal digestive lightness.' },
      { name: 'Nidra Sleep Recovery Protocol', url: 'https://health.vgurukool.com/sleep', icon: '🌙', color: 'indigo', host: 'health.vgurukool.com ↗', desc: '14-day protocol to transition from 5h to 7.5h restorative sleep.' }
    ],
    subFacets: [
      { name: '1. Restorative Sleep (Nidra)', score: 25, color: 'rose', desc: 'Severe deficit: averaging only 5h 12m; deep sleep stage critically low.' },
      { name: '2. Digestive Fire (Agni)', score: 40, color: 'rose', desc: 'Sluggish digestion due to irregular late-evening dinners.' },
      { name: '3. Physical Prana & Movement', score: 35, color: 'rose', desc: 'Under 4,000 steps per day; sedentary deep study posture.' },
      { name: '4. Satvic Food Purity', score: 36, color: 'amber', desc: 'Too many processed snacks during afternoon work sessions.' }
    ],
    sadhana: [
      { id: 'dhanya_sd1', title: 'Hard 9:30 PM Screen Sunset', desc: 'No smartphones or laptops in bedroom after 9:30 PM.', done: false },
      { id: 'dhanya_sd2', title: 'Morning 20-Min Surya Namaskar & Sunlight', desc: 'Direct sunlight exposure to reset master circadian clock.', done: true },
      { id: 'dhanya_sd3', title: 'Triphala & Warm Milk Wind-Down', desc: 'Ayurvedic calming tonic 45 minutes before sleep.', done: false }
    ],
    questions: [
      { id: 'dhanya_q1', text: 'How restorative, deep, and consistent is your sleep duration (7+ hours without insomnia or digital disruption)?', score: 30, weight: 3 },
      { id: 'dhanya_q2', text: 'How vibrant, light, and energetic does your physical body feel throughout the waking day (active digestive Agni)?', score: 35, weight: 3 },
      { id: 'dhanya_q3', text: 'How pure, freshly cooked, and Satvic is your daily nutrition (free from excess processed sugar, caffeine, and late night snacking)?', score: 38, weight: 2 }
    ]
  },
  {
    id: 'gaja',
    sanskritName: 'Gaja Lakshmi (गजलक्ष्मी)',
    englishTitle: 'Sovereignty & Physical Sanctuary',
    subtitle: 'Living Environment, Vāstu & Dignified Mobility',
    canonicalProse: 'Gaja Lakshmi represents royal grace, spatial sovereignty, physical mobility, and noble societal influence (Samrajya). In modern life she embodies a serene, orderly, and harmonious residential environment aligned with sacred geometry (Vāstu), safe and dependable mobility/vehicles, and functional physical tools that command natural dignity and respect.',
    ontologicalDomain: 'Sanctuary Architecture, Spatial Vāstu & Dignity',
    scripture: 'Rig Veda / Vāstu Shastra — "Samrajya & Griha Shanti (Spatial Dignity)"',
    icon: Shield,
    emoji: '🐘',
    accentColor: '#06B6D4',
    colorName: 'cyan',
    automatedScore: 74,
    scoreSource: 'assessment',
    counselor: 'Rishi Vishwakarma',
    statusBadge: 'Harmonizing State (Score 40–74): Spatial Sanctuary Growing',
    statusClass: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    statusDesc: 'Your physical sanctuary, workspace order, and vehicle reliability are largely supportive. Minor spatial clutter in secondary rooms creates subtle subconscious distraction.',
    actions: [
      '⚡ Action: Complete seasonal Brahmasthan decluttering in home center',
      '🌿 Action: Enhance study sanctum with live indoor plants and natural light'
    ],
    modernManifestations: [
      'Harmonious, decluttered living sanctuary aligned with natural light and ventilation',
      'Dependable, safe, and well-maintained mobility equipment and transportation',
      'Commanding executive presence and poise in professional and civic settings'
    ],
    inbound: [
      { name: 'Dhana Lakshmi (Capital)', score: '82%', color: 'emerald', msg: '✓ Strong capital allows maintenance of a secure living environment.' }
    ],
    outbound: [
      { name: 'Adi Lakshmi (Peace)', score: '84%', color: 'violet' },
      { name: 'Santana Lakshmi (Lineage)', score: '76%', color: 'pink' }
    ],
    launchpads: [
      { name: 'Vāstu Living Space Audit', url: 'https://gaja.vgurukool.com', icon: '🏛️', color: 'amber', host: 'gaja.vgurukool.com ↗', desc: 'Spatial energy alignment audit for study desks, temple sanctum, and sleeping zones.' },
      { name: 'Griha Sanctuary Tool Hub', url: 'https://gaja.vgurukool.com/sanctuary', icon: '🧹', color: 'cyan', host: 'gaja.vgurukool.com ↗', desc: 'Home and workspace maintenance cadences, air purity, and declutter checklist.' },
      { name: 'Vehicle & Mobility Readiness', url: 'https://gaja.vgurukool.com/mobility', icon: '🚗', color: 'blue', host: 'gaja.vgurukool.com ↗', desc: 'Dignified mobility maintenance, emergency vehicle kit, and insurance inspection.' },
      { name: 'Environmental Noise Armor', url: 'https://gaja.vgurukool.com/acoustics', icon: '🎧', color: 'teal', host: 'gaja.vgurukool.com ↗', desc: 'Acoustic sanctuary setup to insulate creative work from street distractions.' }
    ],
    subFacets: [
      { name: '1. Workspace Sanctuary & Order', score: 80, color: 'emerald', desc: 'Study sanctum is organized, serene, and free from loose wires.' },
      { name: '2. Directional Vāstu Harmony', score: 75, color: 'emerald', desc: 'Northeast temple and study orientation verified.' },
      { name: '3. Residential Maintenance & Cleanliness', score: 68, color: 'amber', desc: 'Secondary storage areas need seasonal reorganization.' },
      { name: '4. Safe Mobility & Commute Peace', score: 61, color: 'amber', desc: 'Commute has mild traffic stress; consider audio sanyama.' }
    ],
    sadhana: [
      { id: 'gaja_sd1', title: 'Morning 5-Min Workspace Purification', desc: 'Wipe desk with natural camphor oil and light dhoop incense.', done: true },
      { id: 'gaja_sd2', title: 'Sunday Griha Shanti Declutter', desc: 'Remove 10 unneeded physical items from residential sanctum.', done: false },
      { id: 'gaja_sd3', title: 'Evening Tool Reset', desc: 'Return all physical stationery, notebooks, and tools to place.', done: true }
    ],
    questions: [
      { id: 'gaja_q1', text: 'How orderly, peaceful, and clean is your residential sanctuary and study environment (free from sensory clutter)?', score: 72, weight: 3 },
      { id: 'gaja_q2', text: 'How safe, dignified, and dependable are your physical tools, hardware, and transportation mobility?', score: 74, weight: 3 },
      { id: 'gaja_q3', text: 'How naturally do your living spaces foster elevated contemplative focus and sovereign leadership?', score: 68, weight: 2 }
    ]
  },
  {
    id: 'santana',
    sanskritName: 'Santana Lakshmi (सन्तानलक्ष्मी)',
    englishTitle: 'Family Lineage & Discipleship',
    subtitle: 'Paramparā, Kula Dharma & Relational Warmth',
    canonicalProse: 'Santana Lakshmi (Prajā Lakshmi) governs the continuity of noble character, relational warmth, the flourishing of children, and the intergenerational transmission of sacred values (Paramparā). Genuine wealth extends far beyond a single human lifespan; it is measured by the emotional cohesion of the household (Kula Dharma), loving reverence for aging elders, and the mentorship of disciples.',
    ontologicalDomain: 'Intergenerational Continuity, Kula Dharma & Mentorship',
    scripture: 'Smriti Shastras — "Paramparā & Kula Dharma (Sacred Transmission)"',
    icon: Users,
    emoji: '👶',
    accentColor: '#EC4899',
    colorName: 'pink',
    automatedScore: 75,
    scoreSource: 'assessment',
    counselor: 'Mata Shandili',
    statusBadge: 'Abundant State (Score 75–100): Kula Cohesion Strong',
    statusClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    statusDesc: 'Intergenerational harmony, reverence for elders, and loving relationships are well-nurtured. Your household cadence of shared meals and sacred rituals provides emotional groundedness.',
    actions: [
      '⚡ Action: Establish bi-weekly ancestral storytelling evening for children',
      '🕊️ Action: Schedule dedicated uninterrupted quality time with life partner'
    ],
    modernManifestations: [
      'Unbroken cadence of device-free family dinners cultivating deep conversation',
      'Active mentoring of disciples, junior scholars, or apprentices in righteous craft',
      'Honoring and caring for elderly parents with practical devotion and regular communication'
    ],
    inbound: [
      { name: 'Gaja Lakshmi (Sanctuary)', score: '71%', color: 'amber', msg: '✓ Peaceful home environment provides physical backdrop for family harmony.' }
    ],
    outbound: [
      { name: 'Adi Lakshmi (Peace)', score: '84%', color: 'violet' },
      { name: 'Dhairya Lakshmi (Armor)', score: '65%', color: 'orange' }
    ],
    launchpads: [
      { name: 'Kula Family Ledger & Calendar', url: 'https://santana.vgurukool.com', icon: '👨‍👩‍👧‍👦', color: 'pink', host: 'santana.vgurukool.com ↗', desc: 'Coordinate family dinners, festivals, and sacred family council gatherings.' },
      { name: 'Paramparā Discipleship Portal', url: 'https://santana.vgurukool.com/mentorship', icon: '📜', color: 'fuchsia', host: 'santana.vgurukool.com ↗', desc: 'Track mentorship hours with younger students and apprentice learners.' },
      { name: 'Pitru Memory & Tithi Tracker', url: 'https://santana.vgurukool.com/pitru', icon: '🪔', color: 'amber', host: 'santana.vgurukool.com ↗', desc: 'Lunar tithi notifications for ancestral memorial rites and gratitude rituals.' },
      { name: 'Vedic Parenting & Samskara Guide', url: 'https://santana.vgurukool.com/samskara', icon: '🌱', color: 'teal', host: 'santana.vgurukool.com ↗', desc: 'Milestone ceremonies and value-based upbringing resources.' }
    ],
    subFacets: [
      { name: '1. Household Cadence & Dinners', score: 88, color: 'emerald', desc: '7/7 nights of shared family dining without screens.' },
      { name: '2. Receptive Listening & Cohesion', score: 78, color: 'emerald', desc: 'Strong emotional warmth and rapid conflict resolution.' },
      { name: '3. Discipleship & Mentorship Logged', score: 72, color: 'amber', desc: '3.5 hours per week dedicated to mentoring junior aspirants.' },
      { name: '4. Ancestral Gratitude & Rituals', score: 66, color: 'amber', desc: 'Observing main annual rites; need more regular monthly remembrances.' }
    ],
    sadhana: [
      { id: 'santana_sd1', title: 'Nightly Device-Free Family Dinner', desc: 'Strict no-phone rule at the dining table with meaningful dialogue.', done: true },
      { id: 'santana_sd2', title: 'Weekly 1-on-1 Deep Connection Check-In', desc: 'Dedicated 30-min listening session with child or spouse.', done: true },
      { id: 'santana_sd3', title: 'Monthly Lineage Wisdom Transmission', desc: 'Share family history or epic tale during evening sandhya.', done: false }
    ],
    questions: [
      { id: 'santana_q1', text: 'How harmonious, emotionally safe, and warm are your relationships within your immediate family household?', score: 78, weight: 3 },
      { id: 'santana_q2', text: 'How actively are you transmitting ethical character, noble culture, and truth to the next generation (children / mentees)?', score: 76, weight: 3 },
      { id: 'santana_q3', text: 'How deeply do you honor, respect, and fulfill your obligations to aging elders and ancestors (Pitru Rna)?', score: 74, weight: 2 }
    ]
  },
  {
    id: 'dhairya',
    sanskritName: 'Veera / Dhairya Lakshmi (धैर्यलक्ष्मी)',
    englishTitle: 'Fortitude, Stoicism & Risk Armor',
    subtitle: 'Adversity Quotient, Titiksha & Legal Defenses',
    canonicalProse: 'Dhairya Lakshmi (Veera Lakshmi) is the goddess of internal fortitude, stoic resilience (Titiksha), fearlessness (Abhayam), and comprehensive contingency armor. Material success is inherently fragile if an individual is easily paralyzed by market crashes, health crises, or social disruption. True Dhairya wealth is the ability to confront catastrophic uncertainty with moral poise and maintain structural risk defenses.',
    ontologicalDomain: 'Adversity Quotient, Titiksha & Contingency Armor',
    scripture: 'Bhagavad Gita — "Titiksha & Abhayam (Fortitude in Adversity)"',
    icon: Heart,
    emoji: '🛡️',
    accentColor: '#F97316',
    colorName: 'orange',
    automatedScore: 58,
    scoreSource: 'assessment',
    counselor: 'Acharya Chanakya',
    statusBadge: 'Harmonizing State (Score 40–74): Risk Armor Needs Reinforcement',
    statusClass: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    statusDesc: 'Your psychological fortitude (Titiksha) is commendable, but your structural armor has blindspots. While term life insurance is active, you lack an updated estate trust and legal directives.',
    actions: [
      '⚠️ Urgent Action: Draft comprehensive legal Will and healthcare proxy',
      '🛡️ Action: Review cyber-security 2FA and cold wallet seed phrase security'
    ],
    modernManifestations: [
      'Calm nervous system regulation during high-stress crises without panic or denial',
      'Comprehensive personal risk insulation (term life, adequate medical coverage, estate will)',
      'Willingness to take calculated, righteous risks and speak unpopular truths'
    ],
    inbound: [
      { name: 'Adi Lakshmi (Peace)', score: '84%', color: 'violet', msg: '✓ Inner spiritual foundation generates immense moral courage.' }
    ],
    outbound: [
      { name: 'Vijaya Lakshmi (Triumph)', score: '68%', color: 'amber' },
      { name: 'Dhana Lakshmi (Capital)', score: '82%', color: 'emerald' }
    ],
    launchpads: [
      { name: 'Dhairya Risk & Armor Auditor', url: 'https://dhairya.vgurukool.com', icon: '🛡️', color: 'cyan', host: 'dhairya.vgurukool.com ↗', desc: 'Audit insurance adequacy, liability coverage, and catastrophic safety margins.' },
      { name: 'Legal Trust & Will Vault', url: 'https://dhairya.vgurukool.com/estate', icon: '📜', color: 'blue', host: 'dhairya.vgurukool.com ↗', desc: 'Digital registry for estate planning, guardian directives, and asset transfer.' },
      { name: 'Titiksha Adversity Training', url: 'https://dhairya.vgurukool.com/stoicism', icon: '⚔️', color: 'orange', host: 'dhairya.vgurukool.com ↗', desc: 'Cold shower training, voluntary hardship, and crisis visualization exercises.' },
      { name: 'Digital Security Fortress', url: 'https://dhairya.vgurukool.com/security', icon: '🔐', color: 'teal', host: 'dhairya.vgurukool.com ↗', desc: 'Hardware security keys, encrypted password vaults, and disaster recovery backup.' }
    ],
    subFacets: [
      { name: '1. Psychological Fortitude (Abhayam)', score: 85, color: 'emerald', desc: 'Calm under market panic and high-pressure operational deadlines.' },
      { name: '2. Health & Term Insurance Coverage', score: 80, color: 'emerald', desc: '15x term life active; comprehensive ₹25L health insurance.' },
      { name: '3. Legal Will & Estate Safeguards', score: 45, color: 'rose', desc: 'Deficit: No formalized will or emergency financial power of attorney.' },
      { name: '4. Physical Resilience Under Stress', score: 50, color: 'amber', desc: 'High stress tolerance, but physical adrenaline depletes Dhanya.' }
    ],
    sadhana: [
      { id: 'dhairya_sd1', title: 'Morning Cold Water Face Dip / Cold Shower', desc: 'Awaken the vagus nerve and build psychological Titiksha.', done: true },
      { id: 'dhairya_sd2', title: 'Schedule Estate Planning Consultation', desc: 'Book appointment with attorney to formalize family trust.', done: false },
      { id: 'dhairya_sd3', title: 'Monthly Disaster Recovery Drill', desc: 'Verify backup passwords, emergency cash stash, and first-aid kits.', done: false }
    ],
    questions: [
      { id: 'dhairya_q1', text: 'How calmly and stoically do you maintain mental poise when confronting sudden adversity or severe life disruptions (Titiksha)?', score: 68, weight: 3 },
      { id: 'dhairya_q2', text: 'How comprehensive are your structural legal and insurance defenses (life, health, disaster reserves, estate will)?', score: 62, weight: 3 },
      { id: 'dhairya_q3', text: 'How boldly do you stand up for righteous truth and take calculated, courageous actions in the presence of fear?', score: 66, weight: 2 }
    ]
  },
  {
    id: 'vijaya',
    sanskritName: 'Vijaya Lakshmi (विजयलक्ष्मी)',
    englishTitle: 'Execution Mastery & Triumph',
    subtitle: 'Relentless Grit, Sprint Velocity & Finishing Power',
    canonicalProse: 'Vijaya Lakshmi (Jaya Lakshmi) is the embodiment of triumph over external obstacles, professional mastery, execution discipline, and victorious completion (Kaushalam). She grants the stamina to see audacious visions through to triumphant reality through continuous craftsmanship and ethical victory (Dharma Vijaya). True Vijaya wealth is the track record of finishing what one starts.',
    ontologicalDomain: 'Relentless Execution, Grit & Professional Kaushalam',
    scripture: 'Bhagavad Gita — "Yogah Karmasu Kaushalam (Triumph Through Mastery)"',
    icon: Trophy,
    emoji: '🏆',
    accentColor: '#EAB308',
    colorName: 'amber',
    automatedScore: 71,
    scoreSource: 'assessment',
    counselor: 'Vidura',
    statusBadge: 'Harmonizing State (Score 40–74): Execution Velocity Strong',
    statusClass: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    statusDesc: 'You execute with ethical discipline (Kaushalam) and maintain impressive sprint habit consistency (88% sprint velocity). However, bodily fatigue occasionally slows afternoon delivery.',
    actions: [
      '⚡ Action: Complete pending sprint milestone before starting new initiatives',
      '🎯 Action: Institute 90-minute morning deep work sprint with zero slack notifications'
    ],
    modernManifestations: [
      'Consistent track record of finishing complex, high-friction multi-month projects',
      'Unbroken daily habit streaks in deep cognitive work and mission priorities',
      'Transforming competitive market challenges into ethical strategic triumphs'
    ],
    inbound: [
      { name: 'Vidya Lakshmi (Wisdom)', score: '74%', color: 'blue', msg: '✓ Intellectual discernment gives strategic direction to execution.' },
      { name: 'Dhanya Lakshmi (Vitality)', score: '34% ⚠️', color: 'rose', msg: '🚨 Sleep exhaustion forces willpower overwork, risking burnout.' }
    ],
    outbound: [
      { name: 'Dhana Lakshmi (Capital)', score: '82%', color: 'emerald' }
    ],
    launchpads: [
      { name: 'Vijaya Sprint & OKR Engine', url: 'https://vijaya.vgurukool.com', icon: '🏆', color: 'amber', host: 'vijaya.vgurukool.com ↗', desc: 'Track key performance indicators, quarterly OKRs, and project milestones.' },
      { name: 'Daily Habit Streak Tracker', url: 'https://vijaya.vgurukool.com/habits', icon: '🔥', color: 'orange', host: 'vijaya.vgurukool.com ↗', desc: '19-day streak on daily deep work and fitness routines.' },
      { name: 'Pomodoro Deep Focus Flow', url: 'https://vijaya.vgurukool.com/focus', icon: '⏱️', color: 'rose', host: 'vijaya.vgurukool.com ↗', desc: 'Distraction-free timer enforcing 50-minute sprints with 10-minute breath breaks.' },
      { name: 'Dharma Vijaya Ethics Auditor', url: 'https://vijaya.vgurukool.com/ethics', icon: '⚖️', color: 'teal', host: 'vijaya.vgurukool.com ↗', desc: 'Ensure all business wins and competitive achievements follow Satya and Ahimsa.' }
    ],
    subFacets: [
      { name: '1. Sprint Velocity & Output', score: 88, color: 'emerald', desc: 'Consistently completes 88% of planned quarterly milestones.' },
      { name: '2. Habit Discipline & Consistency', score: 74, color: 'emerald', desc: '19-day unbroken habit streak across core daily routines.' },
      { name: '3. Project Completion Discipline', score: 60, color: 'amber', desc: 'Tendency to launch new projects before archiving finished ones.' },
      { name: '4. Physical Stamina in Sprints', score: 50, color: 'rose', desc: 'Choked by Dhanya sleep deficit; late afternoon productivity drops.' }
    ],
    sadhana: [
      { id: 'vijaya_sd1', title: 'Morning 90-Min Focus Sprint Block', desc: 'Complete highest-leverage task before checking email or Slack.', done: true },
      { id: 'vijaya_sd2', title: 'Daily Evening Task Closure Audit', desc: 'Mark completed tasks and clearly define top 3 priorities for tomorrow.', done: true },
      { id: 'vijaya_sd3', title: 'Weekly Project Pruning Review', desc: 'Cancel or pause projects that do not align with annual objectives.', done: false }
    ],
    questions: [
      { id: 'vijaya_q1', text: 'How consistently do you see ambitious goals and major projects through to triumphant completion without abandoning them?', score: 70, weight: 3 },
      { id: 'vijaya_q2', text: 'How disciplined and unbreakable is your daily habit execution rhythm during stressful or demanding periods?', score: 72, weight: 3 },
      { id: 'vijaya_q3', text: 'How effectively do you convert setbacks into ethical competitive victories (Dharma Vijaya)?', score: 64, weight: 2 }
    ]
  },
  {
    id: 'vidya',
    sanskritName: 'Vidya Lakshmi (विद्यालक्ष्मी)',
    englishTitle: 'Epistemic Discernment & Wisdom',
    subtitle: 'Jnana, Socratic Comprehension & Polymathy',
    canonicalProse: 'Vidya Lakshmi is the goddess of multiple intelligences, artistic discernment, sacred scholarship (Svadhyaya), and applied wisdom (Jnana & Vijnana). Intellectual capital is the only form of wealth that inherently multiplies when shared with the world. True Vidya wealth is the razor-sharp capacity for critical inquiry (Viveka), philosophical literacy across classical and modern disciplines, cognitive agility, and the generous transmission of truth.',
    ontologicalDomain: 'Epistemic Mastery, Viveka Discernment & Polymathy',
    scripture: 'Saraswati Rahasya Upanishad — "Jnana & Vijnana (Sacred Scholarship & Applied Discernment)"',
    icon: BookOpen,
    emoji: '📖',
    accentColor: '#3B82F6',
    colorName: 'blue',
    automatedScore: 68,
    scoreSource: 'assessment',
    counselor: 'Acharya Brihaspati',
    statusBadge: 'Harmonizing State (Score 40–74): Rajas to Sattva Transition',
    statusClass: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    statusDesc: 'Your scholarship and inquiry are developing, but cognitive endurance is prone to scatter. You absorb concepts quickly via DeepTutor, but long-form retention is threatened by bodily fatigue.',
    actions: [
      '⚡ Action: Anchor daily 45-min deep work blocks',
      '🧘 Action: Replace evening blue-light with classical reading'
    ],
    modernManifestations: [
      'Dedicated daily Svadhyaya study of primary philosophical texts and cutting-edge craft',
      'Ability to explain complex concepts in elementary terms (Feynman mastery)',
      'Sharp critical discernment separating signal from digital algorithmic noise'
    ],
    inbound: [
      { name: 'Adi Lakshmi (Peace)', score: '84%', color: 'violet', msg: '✓ Inner stillness creates fertile soil for deep epistemic inquiry.' },
      { name: 'Dhanya Lakshmi (Vitality)', score: '34% ⚠️', color: 'rose', msg: '🚨 Critical Bottleneck: Chronic sleep deficit is capping your cognitive retention ceiling!' }
    ],
    outbound: [
      { name: 'Vijaya Lakshmi (Execution)', score: '68%', color: 'amber' },
      { name: 'Dhana Lakshmi (Capital)', score: '82%', color: 'emerald' }
    ],
    launchpads: [
      { name: 'DeepTutor Socratic Studio', url: 'https://vidya.vgurukool.com/deeptutor', icon: '🧠', color: 'blue', host: 'vidya.vgurukool.com ↗', desc: 'Engage in Socratic dialogue on Upanishadic philosophy with automated Feynman comprehension verification.' },
      { name: 'LearnHouse LMS Gurukool', url: 'https://vidya.vgurukool.com/lms', icon: '🎓', color: 'indigo', host: 'lms.vgurukool.com ↗', desc: 'Resume active study cohorts: Sanskrit Syntax, Vedic Astronomy, and Leadership Ethics (Week 4).' },
      { name: 'Granth & Lector Sacred Reader', url: 'https://vidya.vgurukool.com/granth', icon: '📜', color: 'violet', host: 'granth.vgurukool.com ↗', desc: 'Listen and read synchronised Sanskrit shlokas with word-by-word sandhi breakdown and audio chant.' },
      { name: 'Bhasha Vidya Drills', url: 'https://vidya.vgurukool.com/bhasha', icon: '🗣️', color: 'teal', host: 'bhasha.vgurukool.com ↗', desc: '14-day Sanskrit grammar streak active. Complete today\'s Dhatupatha drill to maintain consistency.' }
    ],
    subFacets: [
      { name: '1. Scriptural Literacy & Vedic Philosophy', score: 90, color: 'emerald', desc: 'Extensive comprehension of Bhagavad Gita and core Upanishads.' },
      { name: '2. Contemplative Svadhyaya & Reflection', score: 85, color: 'emerald', desc: 'Consistent study of Upanishads & Gita via Granth.' },
      { name: '3. Applied Craft & Logic (Vijnana)', score: 70, color: 'amber', desc: 'Developing; requires more real-world project builds.' },
      { name: '4. Cognitive Endurance & Retention', score: 45, color: 'rose', desc: 'Constrained by Dhanya (Health) sleep disruption.' }
    ],
    sadhana: [
      { id: 'vidya_sd1', title: 'Morning 30-min Svadhyaya Study Block', desc: 'Read 5 shlokas with commentary on Granth Reader before digital notifications.', done: true },
      { id: 'vidya_sd2', title: 'DeepTutor Socratic Feynman Verification', desc: 'Explain today\'s learned concept to DeepTutor in simple terms to test retention.', done: true },
      { id: 'vidya_sd3', title: 'Mandatory 9:30 PM Digital Sleep Wind-Down', desc: 'Protects biological Dhanya vitality so morning study retention doesn\'t collapse.', done: false }
    ],
    questions: [
      { id: 'vidya_q1', text: 'How dedicatedly do you pursue sacred scholarship, philosophical literacy, and daily self-study (Svadhyaya)?', score: 76, weight: 3 },
      { id: 'vidya_q2', text: 'How effectively do you apply theoretical insights into rigorous real-world problem solving and craft (Vijnana)?', score: 74, weight: 3 },
      { id: 'vidya_q3', text: 'How sharp is your intellectual discernment (Viveka) in filtering out false information and cognitive biases?', score: 72, weight: 2 }
    ]
  }
];

export const VEDIC_ARCHETYPES = [
  {
    id: 'raja_rishi',
    title: '👑 Raja-Rishi (King-Sage)',
    tagline: 'Sovereign Mastery & Holistic Abundance',
    description: 'Sovereign synthesis of inner serenity and outward leadership. Master of all eight dimensions with minimum 70% in all pillars and Harmonic Index >= 75%.',
    advice: 'Anchor your abundance by mentoring upcoming leaders and protecting the weakest spokes across your community.'
  },
  {
    id: 'tapasvi_yogi',
    title: '🧘 Tapasvi-Yogi (Ascetic Seeker)',
    tagline: 'Inner Sanctum & Spiritual Transcendence',
    description: 'High spiritual grounding and discernment (Adi >= 85%, Vidya >= 80%, Dhairya >= 75%). Worldly capital is kept minimal by conscious choice.',
    advice: 'Ensure your biological vessel (Dhanya) is honored with adequate nutrition to sustain long contemplative states.'
  },
  {
    id: 'kshatriya_neta',
    title: '⚔️ Kshatriya-Neta (Righteous Sovereign)',
    tagline: 'Executive Leadership & Courageous Expansion',
    description: 'Tireless executive execution and risk defense (Vijaya >= 85%, Gaja >= 80%, Dhairya >= 80%). A commander of action and institutional scale.',
    advice: 'Guard against burnout by balancing execution velocity with daily stillness (Adi) and restorative sleep (Dhanya).'
  },
  {
    id: 'vaishya_pati',
    title: '🌾 Vaishya-Pati (Dharmic Enterprise Builder)',
    tagline: 'Capital Circulation, Enterprise & Generosity',
    description: 'Master of enterprise and righteous material flow (Dhana >= 85%, Santana >= 75%, Vijaya >= 75%). Builds sustainable commerce and generous endowments.',
    advice: 'Continue cultivating Dāna and ensure financial pursuits do not eclipse contemplative serenity (Adi).'
  },
  {
    id: 'brahmana_acharya',
    title: '📜 Brahmana-Acharya (Sacred Scholar & Polymath)',
    tagline: 'Epistemic Transmission & Philosophical Depth',
    description: 'Deep epistemic discernment and wisdom transmission (Vidya >= 90%, Adi >= 80%, Santana >= 75%). Preserver and teacher of foundational truth.',
    advice: 'Translate theoretical insights into actionable daily habits (Vijaya) to keep scholarship practically grounded.'
  },
  {
    id: 'karma_yogi',
    title: '⚙️ Karma-Yogi (Dedicated Craftsman)',
    tagline: 'Grounded Execution & Selfless Action',
    description: 'Pragmatic, disciplined execution and physical vitality (Vijaya >= 80%, Dhanya >= 75%, Adi >= 70%). Dedicated to the pure mastery of craft.',
    advice: 'Cultivate higher strategic risk armor (Dhairya) and capital stewardship (Dhana) to protect your craft.'
  },
  {
    id: 'unprofiled',
    title: '🌱 Unprofiled Seeker',
    tagline: 'Awaiting Diagnostic Calibration',
    description: 'Welcome Seeker. Complete the 3-minute Psychometric Likert Audit to calculate your 8-spoke Harmonic Index and reveal your authentic Vedic archetype.',
    advice: 'Begin by answering the 8 anchor questions honestly based on your actual daily behaviors.'
  }
];

export const LIKERT_ANCHORS = [
  { value: 20, label: '1: Never / Critical Deficit', desc: 'Severe absence or chronic dysfunction in daily life.' },
  { value: 40, label: '2: Rarely / Emerging', desc: 'Inconsistent occurrence; requires conscious effort and reminders.' },
  { value: 60, label: '3: Moderate / Inconsistent', desc: 'Present but fluctuates under stress or workload.' },
  { value: 80, label: '4: Harmonized / Consistent', desc: 'Established stable rhythm practiced with natural ease.' },
  { value: 100, label: '5: Exemplary / Abundant', desc: 'Mastered standard; actively inspires and elevates others.' }
];

export function calculateHarmonicIndex(scoresMap) {
  const values = Object.values(scoresMap).map(v => Math.max(1, Number(v) || 1));
  if (values.length === 0) return 0;
  const reciprocalSum = values.reduce((sum, v) => sum + (1 / v), 0);
  return Math.round((values.length / reciprocalSum) * 10) / 10;
}

export function calculateArithmeticMean(scoresMap) {
  const values = Object.values(scoresMap).map(v => Number(v) || 0);
  if (values.length === 0) return 0;
  const sum = values.reduce((acc, v) => acc + v, 0);
  return Math.round((sum / values.length) * 10) / 10;
}

export function findCriticalBottleneck(scoresMap) {
  let minKey = null;
  let minVal = Infinity;

  Object.entries(scoresMap).forEach(([k, v]) => {
    const val = Number(v) || 0;
    if (val < minVal) {
      minVal = val;
      minKey = k;
    }
  });

  const item = INITIAL_LAKSHMI_DATA.find(l => l.id === minKey) || INITIAL_LAKSHMI_DATA[2];
  return {
    id: minKey || 'dhanya',
    score: minVal === Infinity ? 34 : minVal,
    name: item.sanskritName.split(' ')[0],
    fullName: item.sanskritName,
    item
  };
}

export function classifyArchetype(scoresMap, harmonicIndex) {
  const get = (id) => Number(scoresMap[id]) || 0;
  const vals = Object.values(scoresMap).map(Number);
  const minScore = vals.length ? Math.min(...vals) : 0;
  const highScoresCount = vals.filter(v => v >= 85).length;

  if (minScore >= 70 && harmonicIndex >= 75 && highScoresCount >= 2) {
    return VEDIC_ARCHETYPES[0]; // Raja-Rishi
  }
  if (get('adi') >= 85 && get('vidya') >= 80 && get('dhairya') >= 75) {
    return VEDIC_ARCHETYPES[1]; // Tapasvi-Yogi
  }
  if (get('vijaya') >= 85 && get('gaja') >= 80 && get('dhairya') >= 80) {
    return VEDIC_ARCHETYPES[2]; // Kshatriya-Neta
  }
  if (get('dhana') >= 85 && get('santana') >= 75 && get('vijaya') >= 75) {
    return VEDIC_ARCHETYPES[3]; // Vaishya-Pati
  }
  if (get('vidya') >= 90 && get('adi') >= 80 && get('santana') >= 75) {
    return VEDIC_ARCHETYPES[4]; // Brahmana-Acharya
  }
  if (get('vijaya') >= 80 && get('dhanya') >= 75 && get('adi') >= 70) {
    return VEDIC_ARCHETYPES[5]; // Karma-Yogi
  }
  // Default fallback based on highest score or general balance
  if (harmonicIndex >= 65) {
    return VEDIC_ARCHETYPES[0];
  }
  return VEDIC_ARCHETYPES[5]; // Karma-Yogi fallback
}

export function calculateBlendedScore(selfScore, empiricalScore) {
  return Math.round((0.40 * Number(selfScore)) + (0.60 * Number(empiricalScore)));
}

export function getBlindspotVariance(empiricalScore, selfScore) {
  const delta = Number(empiricalScore) - Number(selfScore);
  if (delta <= -15) {
    return {
      delta,
      status: 'inflation',
      label: 'Perception Inflation (Wishful Thinking)',
      color: 'rose',
      desc: 'Self-reported score is significantly higher than objective telemetry. High risk of blindspot neglect.'
    };
  } else if (delta >= 15) {
    return {
      delta,
      status: 'deflation',
      label: 'Anxiety Deflation (Impostor Syndrome)',
      color: 'cyan',
      desc: 'Objective telemetry confirms higher actual mastery than your self-judgment. Unwarranted pessimism.'
    };
  } else {
    return {
      delta,
      status: 'calibrated',
      label: 'Grounded Realism',
      color: 'emerald',
      desc: 'Self-perception and automated companion telemetry are within balanced alignment.'
    };
  }
}

export const MULTI_YEAR_LONGITUDINAL_DATA = {
  baseline2024: {
    year: '2024',
    label: '2024 Baseline',
    archetype: '⚙️ Karma-Yogi',
    harmonicIndex: 58.2,
    arithmeticMean: 66.7,
    empiricalHarmonic: 48.3,
    blendedHarmonic: 52.5,
    scores: { adi: 52, dhana: 70, dhanya: 38, gaja: 60, santana: 68, dhairya: 56, vijaya: 48, vidya: 62 },
    empirical: { adi: 45, dhana: 62, dhanya: 26, gaja: 52, santana: 60, dhairya: 44, vijaya: 38, vidya: 55 }
  },
  midpoint2025: {
    year: '2025',
    label: '2025 Midpoint',
    archetype: '⚔️ Kshatriya-Neta',
    harmonicIndex: 63.7,
    arithmeticMean: 68.3,
    empiricalHarmonic: 59.1,
    blendedHarmonic: 61.2,
    scores: { adi: 72, dhana: 78, dhanya: 36, gaja: 68, santana: 72, dhairya: 60, vijaya: 64, vidya: 70 },
    empirical: { adi: 68, dhana: 75, dhanya: 27, gaja: 64, santana: 70, dhairya: 52, vijaya: 58, vidya: 65 }
  },
  present2026: {
    year: '2026',
    label: '2026 Present',
    archetype: '👑 Raja-Rishi',
    harmonicIndex: 68.4,
    arithmeticMean: 71.4,
    empiricalHarmonic: 66.8,
    blendedHarmonic: 69.1,
    scores: { adi: 84, dhana: 82, dhanya: 34, gaja: 71, santana: 76, dhairya: 65, vijaya: 68, vidya: 74 },
    empirical: { adi: 82, dhana: 79, dhanya: 28, gaja: 74, santana: 75, dhairya: 58, vijaya: 71, vidya: 68 }
  }
};

export const SUPPORTED_YEARS = ['2024', '2025', '2026'];

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
  return calculateLakshmiScore(lakshmiItem.questions);
}

export function getScoreRangeConfig(score) {
  if (score <= 40) {
    return {
      label: '🚨 Critical Bottleneck',
      color: '#EF4444',
      bgColor: '#FEF2F2',
      borderColor: '#FECDD3',
      badgeBg: '#FEE2E2',
      badgeColor: '#991B1B'
    };
  } else if (score <= 74) {
    return {
      label: '⚖️ Harmonizing Transition',
      color: '#F59E0B',
      bgColor: '#FEF3C7',
      borderColor: '#FDE68A',
      badgeBg: '#FEF3C7',
      badgeColor: '#92400E'
    };
  } else {
    return {
      label: '🌿 Satvic Abundance',
      color: '#10B981',
      bgColor: '#ECFDF5',
      borderColor: '#A7F3D0',
      badgeBg: '#D1FAE5',
      badgeColor: '#065F46'
    };
  }
}

export function getDefaultMultiYearState() {
  const multiYear = {};
  const currentDefaults = {};
  INITIAL_LAKSHMI_DATA.forEach(item => {
    currentDefaults[item.id] = { ...item };
  });

  SUPPORTED_YEARS.forEach(yr => {
    const yrProfile = yr === '2024' ? MULTI_YEAR_LONGITUDINAL_DATA.baseline2024 :
                      (yr === '2025' ? MULTI_YEAR_LONGITUDINAL_DATA.midpoint2025 : MULTI_YEAR_LONGITUDINAL_DATA.present2026);
    
    const yearMap = {};
    INITIAL_LAKSHMI_DATA.forEach(def => {
      const targetScore = yrProfile.scores[def.id] || 70;
      const targetEmpirical = yrProfile.empirical[def.id] || 65;
      const updatedQuestions = (def.questions || []).map(q => ({
        ...q,
        score: targetScore
      }));

      yearMap[def.id] = {
        ...def,
        questions: updatedQuestions,
        automatedScore: targetEmpirical,
        scoreSource: 'assessment'
      };
    });
    multiYear[yr] = yearMap;
  });

  return multiYear;
}
