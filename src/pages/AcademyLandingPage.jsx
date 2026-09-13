import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  ChevronRight,
  PlusCircle,
  Bot,
  Coins,
  Crown,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  LogIn
} from 'lucide-react';

const COURSES = [
  {
    id: 'gita-journey',
    category: 'sacred',
    status: 'Available Now',
    statusColor: '#10B981',
    statusBg: 'rgba(16, 185, 129, 0.15)',
    title: 'The Bhagavad Gita: 18-Week Journey',
    devanagari: 'श्रीमद्भगवद्गीता • Complete 701 Verses',
    description: 'Comprehensive study of all 18 chapters chunked into 5-verse interactive lessons with authentic audio pronunciation, transliteration, English/Hindi commentary, and chapter exit quizzes.',
    duration: '18 Weeks • 182 Activities',
    instructor: 'Rajni',
    launchUrl: 'https://learnhouse.vgurukool.com/orgs/default/courses/course_7f895b1e-2123-420a-ac53-1326bfef3b50',
    actionText: 'Enter Course'
  },
  {
    id: 'upanishads-vedanta',
    category: 'sacred',
    status: 'Coming Soon',
    statusColor: '#818CF8',
    statusBg: 'rgba(129, 140, 248, 0.15)',
    title: 'Principal Upanishadic Wisdom',
    devanagari: 'उपनिषद् • The Essence of Vedanta',
    description: 'Deep exploration of Isha, Kena, Katha, and Prashna Upanishads unraveling the nature of pure consciousness, universal Brahman, and practical non-dual philosophy.',
    duration: '8 Weeks • 10 Upanishads',
    instructor: 'Curriculum Council',
    launchUrl: 'https://learnhouse.vgurukool.com',
    actionText: 'Curriculum Preview'
  },
  {
    id: 'sanskrit-pronunciation',
    category: 'sanskrit',
    status: 'Coming Soon',
    statusColor: '#F59E0B',
    statusBg: 'rgba(245, 158, 11, 0.15)',
    title: 'Spoken Sanskrit & Metered Chanting',
    devanagari: 'सरलसंस्कृतम् • Conversational & Pronunciation',
    description: 'Phonetic mastery of the Sanskrit alphabet, Devanagari script, and traditional Vedic chanting meters (Anushtup, Trishtup) through interactive audio playback labs.',
    duration: '6 Weeks • Audio Labs',
    instructor: 'Visiting Scholars',
    launchUrl: 'https://learnhouse.vgurukool.com',
    actionText: 'Course Outline'
  },
  {
    id: 'yoga-sutras',
    category: 'philosophy',
    status: 'Coming Soon',
    statusColor: '#14B8A6',
    statusBg: 'rgba(20, 184, 166, 0.15)',
    title: 'Patanjali Yoga Sutras & Mind Mastery',
    devanagari: 'योगसूत्राणि • The Psychology of Consciousness',
    description: 'Practical analysis of the 8 limbs of Raja Yoga, meditation mechanics (Dharana, Dhyana, Samadhi), and cognitive frameworks to cultivate unwavering mental focus.',
    duration: '10 Weeks • 196 Sutras',
    instructor: 'Curriculum Council',
    launchUrl: 'https://learnhouse.vgurukool.com',
    actionText: 'Syllabus Preview'
  },
  {
    id: 'dhana-lakshmi-finance',
    category: 'prosperity',
    status: 'Available Now',
    statusColor: '#10B981',
    statusBg: 'rgba(16, 185, 129, 0.15)',
    title: 'Dhana Lakshmi: Ethical Wealth & Finance',
    devanagari: 'धनलक्ष्मी • Arthashastra & Financial Intelligence',
    description: 'Harmonizing ancient Indian economic ethics with modern personal finance, conscious budgeting, productive investment, and generational prosperity management.',
    duration: '4 Weeks • Integrated App',
    instructor: 'Vgurukool Economics',
    launchUrl: 'https://dhana-lakshmi.vgurukool.com',
    actionText: 'Launch App'
  },
  {
    id: 'gaja-lakshmi-leadership',
    category: 'prosperity',
    status: 'Coming Soon',
    statusColor: '#A855F7',
    statusBg: 'rgba(168, 85, 247, 0.15)',
    title: 'Gaja Lakshmi: Dharmic Governance & Leadership',
    devanagari: 'गजलक्ष्मी • Leadership, Duty & Statecraft',
    description: 'Principles of Rajadharma and ethical crisis management for executives, entrepreneurs, and team leaders inspired by classical Vedic statecraft and servant leadership.',
    duration: '6 Weeks • Cohort Seminars',
    instructor: 'Visiting Fellows',
    launchUrl: 'https://gaja-lakshmi.vgurukool.com',
    actionText: 'Cohort Info'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'sacred', label: 'Sacred Literature' },
  { id: 'philosophy', label: 'Philosophy & Yoga' },
  { id: 'sanskrit', label: 'Sanskrit & Chanting' },
  { id: 'prosperity', label: 'Wealth & Governance' },
];

export function AcademyLandingPage({ keycloak, authenticated, onNavigateTab }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract user details and roles
  const userInfo = useMemo(() => {
    if (!authenticated || !keycloak?.tokenParsed) {
      return null;
    }
    const token = keycloak.tokenParsed;
    const roles = token.realm_access?.roles || [];

    let primaryRole = 'Student';
    let roleBadgeBg = 'rgba(16, 185, 129, 0.2)';
    let roleBadgeColor = '#34D399';

    if (roles.includes('admin')) {
      primaryRole = 'Platform Admin';
      roleBadgeBg = 'rgba(245, 158, 11, 0.2)';
      roleBadgeColor = '#FBBF24';
    } else if (roles.includes('instructor')) {
      primaryRole = 'Instructor';
      roleBadgeBg = 'rgba(99, 102, 241, 0.2)';
      roleBadgeColor = '#818CF8';
    }

    const displayName = token.given_name || token.preferred_username || 'Member';
    return {
      name: displayName,
      username: token.preferred_username,
      email: token.email,
      role: primaryRole,
      roleBadgeBg,
      roleBadgeColor,
      isInstructor: primaryRole === 'Instructor' || primaryRole === 'Platform Admin',
      isAdmin: primaryRole === 'Platform Admin'
    };
  }, [authenticated, keycloak]);

  // Filter courses
  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'all') return COURSES;
    return COURSES.filter(c => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div style={{ padding: '0 32px 64px 32px' }}>

      {/* HERO BANNER */}
      <div style={{
        margin: '24px 0 36px 0',
        padding: '48px 36px',
        borderRadius: '24px',
        background: 'radial-gradient(circle at 50% 10%, rgba(245, 158, 11, 0.12) 0%, rgba(30, 41, 59, 0.9) 60%), #1E293B',
        border: '1px solid #334155',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '999px',
          backgroundColor: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          color: '#FBBF24',
          fontSize: '12px',
          fontWeight: 700,
          marginBottom: '20px'
        }}>
          <Sparkles size={14} />
          <span>Vgurukool Universal Academy • Unified Keycloak SSO</span>
        </div>

        <h1 style={{
          fontSize: '36px',
          fontWeight: 900,
          lineHeight: 1.25,
          color: 'white',
          letterSpacing: '-0.5px',
          maxWidth: '800px',
          margin: '0 auto 16px auto'
        }}>
          Master Ancient Vedic Wisdom.<br />
          <span style={{
            background: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 50%, #EAB308 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Cultivate Modern Prosperity.
          </span>
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#94A3B8',
          maxWidth: '680px',
          margin: '0 auto 28px auto',
          lineHeight: 1.6
        }}>
          A multi-disciplinary online Gurukool bringing together sacred classical texts, Sanskrit linguistics, holistic wellness, ethical wealth creation, and personalized AI tutoring.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href="https://learnhouse.vgurukool.com"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '12px',
              backgroundColor: '#EA580C',
              color: 'white',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)'
            }}
          >
            <GraduationCap size={18} />
            <span>Launch Academy (LearnHouse)</span>
          </a>

          {!authenticated && (
            <button
              onClick={() => keycloak.login()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                backgroundColor: 'rgba(51, 65, 85, 0.8)',
                border: '1px solid #475569',
                color: '#F8FAFC',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <LogIn size={18} color="#FBBF24" />
              <span>Sign In with Keycloak SSO</span>
            </button>
          )}

          <button
            onClick={() => onNavigateTab && onNavigateTab('dashboard')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '12px',
              backgroundColor: 'transparent',
              border: '1px solid #475569',
              color: '#CBD5E1',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            <Coins size={18} color="#F59E0B" />
            <span>View Ashta Lakshmi Suite</span>
          </button>
        </div>
      </div>

      {/* AUTHENTICATED MEMBER LAUNCHPAD (Dynamic) */}
      {authenticated && userInfo && (
        <div style={{
          marginBottom: '40px',
          padding: '24px 28px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(67, 20, 7, 0.3)), #1E293B',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingBottom: '20px',
            borderBottom: '1px solid #334155'
          }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.6px', fontFamily: 'monospace' }}>
                Single Sign-On Member Launchpad
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'white', margin: '4px 0 2px 0' }}>
                Namaste, {userInfo.name} 🙏
              </h2>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                Logged in as <span style={{
                  padding: '2px 8px',
                  borderRadius: '6px',
                  background: userInfo.roleBadgeBg,
                  color: userInfo.roleBadgeColor,
                  fontWeight: 700,
                  fontSize: '11px',
                  fontFamily: 'monospace'
                }}>{userInfo.role}</span>. Select any service to launch with active SSO session:
              </p>
            </div>

            {userInfo.isInstructor && (
              <a
                href="https://learnhouse.vgurukool.com/orgs/default/courses"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  backgroundColor: '#EA580C',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)'
                }}
              >
                <PlusCircle size={15} />
                <span>+ Author New Course</span>
              </a>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '20px'
          }}>
            {/* Launch Card 1: LMS Academy */}
            <div style={{
              padding: '18px',
              borderRadius: '14px',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid #334155',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <GraduationCap size={24} color="#EA580C" />
                  <span style={{ fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: 'rgba(234, 88, 12, 0.2)', color: '#FB923C' }}>
                    LMS Academy
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', margin: '0 0 6px 0' }}>
                  LearnHouse Academy
                </h3>
                <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
                  Access the Gita 18-week journey, interactive Sanskrit audio recitations, and exit quizzes.
                </p>
              </div>
              <a
                href="https://learnhouse.vgurukool.com/orgs/default/dashboard"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#FB923C',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginTop: '16px',
                  textDecoration: 'none'
                }}
              >
                <span>Launch Academy Dashboard</span>
                <ArrowRight size={13} />
              </a>
            </div>

            {/* Launch Card 2: AI Tutor */}
            <div style={{
              padding: '18px',
              borderRadius: '14px',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid #334155',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <Bot size={24} color="#818CF8" />
                  <span style={{ fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: 'rgba(129, 140, 248, 0.2)', color: '#A5B4FC' }}>
                    AI Companion
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', margin: '0 0 6px 0' }}>
                  MAIC AI Personal Tutor
                </h3>
                <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
                  Dialogue with your intelligent Vedic tutor, explore verse meanings, and study at your own pace.
                </p>
              </div>
              <a
                href="https://maic.vgurukool.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#A5B4FC',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginTop: '16px',
                  textDecoration: 'none'
                }}
              >
                <span>Launch AI Tutor</span>
                <ArrowRight size={13} />
              </a>
            </div>

            {/* Launch Card 3: Ashta Lakshmi */}
            <div style={{
              padding: '18px',
              borderRadius: '14px',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid #334155',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <Coins size={24} color="#F59E0B" />
                  <span style={{ fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#FBBF24' }}>
                    Wealth & Growth
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', margin: '0 0 6px 0' }}>
                  Ashta Lakshmi Suite
                </h3>
                <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
                  Assess and cultivate your 8 dimensions of life: finance, nourishment, knowledge, and leadership.
                </p>
              </div>
              <button
                onClick={() => onNavigateTab && onNavigateTab('dashboard')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#FBBF24',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginTop: '16px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <span>Open Ashta Lakshmi Dashboard</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MULTI-COURSE CATALOG SECTION */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#EA580C', textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: 'monospace' }}>
              Comprehensive Curriculum
            </span>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'white', margin: '4px 0 0 0' }}>
              Course Catalog &amp; Programs
            </h2>
            <p style={{ fontSize: '13px', color: '#94A3B8', margin: '4px 0 0 0' }}>
              Filter programs across sacred literature, philosophy, Sanskrit pronunciation, and ethical governance.
            </p>
          </div>

          {/* Discipline Category Filter Buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: selectedCategory === cat.id ? '#EA580C' : '#334155',
                  color: selectedCategory === cat.id ? 'white' : '#CBD5E1',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {filteredCourses.map(course => (
            <div
              key={course.id}
              style={{
                padding: '24px',
                borderRadius: '18px',
                backgroundColor: '#1E293B',
                border: '1px solid #334155',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    backgroundColor: course.statusBg,
                    color: course.statusColor,
                    fontFamily: 'monospace'
                  }}>
                    {course.status}
                  </span>
                  <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace' }}>
                    {course.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'white', margin: '0 0 4px 0' }}>
                  {course.title}
                </h3>
                <div style={{ fontSize: '12px', color: '#F59E0B', fontStyle: 'italic', marginBottom: '10px' }}>
                  {course.devanagari}
                </div>
                <p style={{ fontSize: '12.5px', color: '#94A3B8', lineHeight: 1.55, margin: 0 }}>
                  {course.description}
                </p>
              </div>

              <div style={{
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid #334155',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '11.5px', color: '#64748B' }}>
                  Instructor: <strong style={{ color: '#CBD5E1' }}>{course.instructor}</strong>
                </span>

                <a
                  href={course.launchUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    backgroundColor: course.status === 'Available Now' ? '#EA580C' : '#334155',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <span>{course.actionText}</span>
                  <ChevronRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* INSTRUCTOR PROPOSAL BANNER */}
        <div style={{
          marginTop: '32px',
          padding: '28px 32px',
          borderRadius: '18px',
          background: 'linear-gradient(135deg, #1E293B 0%, rgba(234, 88, 12, 0.1) 100%)',
          border: '1px solid rgba(234, 88, 12, 0.25)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#EA580C', textTransform: 'uppercase', letterSpacing: '0.6px', fontFamily: 'monospace' }}>
              Are you an Educator or Scholar?
            </span>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'white', margin: '4px 0 6px 0' }}>
              Author &amp; Host Courses on Vgurukool
            </h3>
            <p style={{ fontSize: '12.5px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
              Teach Sanskrit, classical philosophy, mindfulness, or ethical leadership. Instructors like <strong>Rajni</strong> get access to our structured LMS course builder with audio pronunciation and interactive quizzes.
            </p>
          </div>

          <a
            href="https://learnhouse.vgurukool.com"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 20px',
              borderRadius: '10px',
              backgroundColor: '#334155',
              border: '1px solid #475569',
              color: '#F8FAFC',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            <PlusCircle size={16} color="#FB923C" />
            <span>Join Educator Studio</span>
          </a>
        </div>
      </div>

      {/* FIVE PILLARS OF GURUKOOL */}
      <div style={{
        paddingTop: '32px',
        borderTop: '1px solid #334155'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: 'monospace' }}>
            Holistic Curriculum Framework
          </span>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'white', margin: '4px 0 0 0' }}>
            The Five Pillars of the Gurukool
          </h2>
          <p style={{ fontSize: '13px', color: '#94A3B8', margin: '4px 0 0 0' }}>
            Uniting classical consciousness with practical everyday living and modern intellect.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '14px'
        }}>
          <div style={{ padding: '18px', borderRadius: '14px', backgroundColor: '#1E293B', border: '1px solid #334155', textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>📜</div>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'white', margin: '0 0 4px 0' }}>Vedic &amp; Shastras</h4>
            <p style={{ fontSize: '11.5px', color: '#94A3B8', margin: 0 }}>Bhagavad Gita, Upanishads, and philosophical foundations.</p>
          </div>

          <div style={{ padding: '18px', borderRadius: '14px', backgroundColor: '#1E293B', border: '1px solid #334155', textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🗣️</div>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'white', margin: '0 0 4px 0' }}>Bhasha &amp; Chanting</h4>
            <p style={{ fontSize: '11.5px', color: '#94A3B8', margin: 0 }}>Sanskrit phonetics, metric chanting, and grammatical appreciation.</p>
          </div>

          <div style={{ padding: '18px', borderRadius: '14px', backgroundColor: '#1E293B', border: '1px solid #334155', textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🌿</div>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'white', margin: '0 0 4px 0' }}>Ayurveda &amp; Mind</h4>
            <p style={{ fontSize: '11.5px', color: '#94A3B8', margin: 0 }}>Daily rhythms (Dinacharya), holistic health, and meditation.</p>
          </div>

          <div style={{ padding: '18px', borderRadius: '14px', backgroundColor: '#1E293B', border: '1px solid #334155', textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🪙</div>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'white', margin: '0 0 4px 0' }}>Ethical Wealth</h4>
            <p style={{ fontSize: '11.5px', color: '#94A3B8', margin: 0 }}>Dhana Lakshmi, ethical enterprise, and resource stewardship.</p>
          </div>

          <div style={{ padding: '18px', borderRadius: '14px', backgroundColor: '#1E293B', border: '1px solid #334155', textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🤖</div>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'white', margin: '0 0 4px 0' }}>AI &amp; Innovation</h4>
            <p style={{ fontSize: '11.5px', color: '#94A3B8', margin: 0 }}>MAIC AI personal tutor and modern technology synthesis.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
