import React, { useState, useEffect, useRef } from 'react';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
  glowColor: string;
  type: 'winner' | 'participant' | 'top10' | 'grant';
  category: 'competition' | 'hackathon' | 'award' | 'funding';
}

interface Certification {
  id: number;
  name: string;
  provider: string;
  icon: string;
  color: string;
}

interface FloatingElementProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const Achievements: React.FC = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [visibleAchievements, setVisibleAchievements] = useState<number[]>([]);
  const [visibleCerts, setVisibleCerts] = useState<number[]>([]);
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check which achievements are visible
      const newVisibleAchievements: number[] = [];
      achievementRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            newVisibleAchievements.push(index);
          }
        }
      });

      // Check which certifications are visible
      const newVisibleCerts: number[] = [];
      certRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            newVisibleCerts.push(index);
          }
        }
      });

      setVisibleAchievements(newVisibleAchievements);
      setVisibleCerts(newVisibleCerts);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements: Achievement[] = [
    {
      id: 0,
      title: "Smart India Hackathon 2025 – Winner",
      organization: "Smart India Hackathon (SIH)",
      description: "Winner of Smart India Hackathon 2025 (PS: SH25201) for building an IoT & AI-based monitoring system for skill training equipment and student performance tracking.",
      icon: "ri-trophy-line",
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-900 via-yellow-700 to-orange-700",
      glowColor: "shadow-yellow-500/50",
      type: "winner",
      category: 'hackathon'
    },
    {
      id: 1,
      title: "₹1 Lakh PoC Grant Awarded – Smart Rover Project",
      organization: "Design Innovation Centre (DIC), GTU",
      description: "Received a ₹1,00,000 PoC Grant from DIC (GTU) for developing a Smart Rover for underground drainage inspection using IoT, real-time monitoring, and autonomous navigation to improve urban infrastructure maintenance.",
      icon: "ri-funds-line",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-900 via-emerald-700 to-teal-700",
      glowColor: "shadow-green-500/50",
      type: 'grant',
      category: 'funding'
    },
    {
      id: 2,
      title: "₹9,000 SSIP Design Grant – Smart Rover Concept & Design Pattern",
      organization: "Student Startup & Innovation Policy (SSIP), GTU",
      description: "Received a ₹9,000 SSIP (GTU) design grant for developing the concept, design pattern, and system architecture of a Smart Rover for underground inspection applications.",
      icon: "ri-draft-line",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900 via-cyan-700 to-sky-700",
      glowColor: "shadow-blue-500/50",
      type: 'grant',
      category: 'funding'
    },
    {
      id: 3,
      title: "Winner - Arduino Project-A-Thon",
      organization: "Robocraze",
      description: "Awarded for the IoT Rover project featuring real-time GPS tracking, sensor monitoring, and remote control capabilities.",
      icon: "ri-trophy-line",
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-900 via-yellow-700 to-orange-700",
      glowColor: "shadow-yellow-500/50",
      type: 'winner',
      category: 'competition'
    },
    {
      id: 4,
      title: "Final Year Project Award",
      organization: "JHDP College",
      description: "First Place in the Diploma Final Year Project at JHDP College for innovative technical implementation and problem-solving approach.",
      icon: "ri-user-star-line",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900 via-purple-700 to-pink-700",
      glowColor: "shadow-purple-500/50",
      type: 'winner',
      category: 'award'
    },
    {
      id: 5,
      title: "Top 10 - Hackathon Odoo X Mindbend",
      organization: "Surplus4Society - Application",
      description: "Developed a Flutter and Firebase application that reached the top 10 in this competitive hackathon, demonstrating technical excellence and innovative thinking.",
      icon: "ri-presentation-line",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900 via-blue-700 to-cyan-700",
      glowColor: "shadow-blue-500/50",
      type: 'top10',
      category: 'hackathon'
    },
    {
      id: 6,
      title: "Hackathon - New India Vibrant 2k23",
      organization: "Blockchain Certificate System",
      description: "Developed a blockchain-based certificate verification system that provides secure, tamper-proof credential validation for educational institutions.",
      icon: "ri-code-box-line",
      color: "from-green-500 to-teal-500",
      bgGradient: "from-green-900 via-green-700 to-teal-700",
      glowColor: "shadow-green-500/50",
      type: 'participant',
      category: 'hackathon'
    },
    {
      id: 7,
      title: "Hackathon - NeuraNest Challenge",
      organization: "AI-based Paper Checker",
      description: "Built an AI-based paper checker with feedback system to automate and enhance the grading process while providing constructive feedback to students.",
      icon: "ri-file-list-3-line",
      color: "from-red-500 to-pink-500",
      bgGradient: "from-red-900 via-red-700 to-pink-700",
      glowColor: "shadow-red-500/50",
      type: 'participant',
      category: 'competition'
    },
    {
      id: 8,
      title: "Data Science Challenge 2.0",
      organization: "Scet College",
      description: "Designed a system to detect real vs. fake human presence using advanced data science techniques and machine learning algorithms at a national-level competition.",
      icon: "ri-heart-line",
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-900 via-indigo-700 to-purple-700",
      glowColor: "shadow-indigo-500/50",
      type: 'participant',
      category: 'competition'
    }
  ];

  const certifications: Certification[] = [
    {
      id: 0,
      name: "SAP Certification",
      provider: "Advance Course From Code Unnati",
      icon: "✅",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 1,
      name: "IEEE Wireless Robot Workshop",
      provider: "Hands-on IoT Technologies",
      icon: "🤖",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 2,
      name: "BasicPython",
      provider: "Infosys Springboard",
      icon: "🐍",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      name: "Python for Data Science",
      provider: "Infosys Springboard",
      icon: "📈",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const FloatingElement: React.FC<FloatingElementProps> = ({ delay = 0, children, className = "" }) => (
    <div
      className={`floating-element ${className}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translateY(${Math.sin(scrollY * 0.01 + delay) * 8}px) rotateZ(${Math.sin(scrollY * 0.005 + delay) * 2}deg)`
      }}
    >
      {children}
    </div>
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'winner': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'top10': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-green-500/20 text-green-300 border-green-500/30';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'winner': return '🏆 Winner';
      case 'top10': return '🔥 Top 10';
      case 'grant': return '💰 Grant';
      default: return '✨ Participant';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden min-h-screen">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <FloatingElement delay={0}>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-purple-400 via-blue-400 via-green-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              Achievements & Recognition
            </h2>
          </FloatingElement>
          <FloatingElement delay={0.5}>
            <div className="w-40 h-2 bg-gradient-to-r from-yellow-500 via-purple-500 via-blue-500 via-green-500 to-red-500 mx-auto rounded-full shadow-lg animate-pulse"></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-xl leading-relaxed">
              Recognition and accomplishments from competitions, hackathons, and certifications showcasing technical excellence and innovative problem-solving.
            </p>
          </FloatingElement>
        </div>

        {/* Enhanced Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              ref={el => achievementRefs.current[index] = el}
              className={`group relative transition-all duration-700 ease-out transform ${visibleAchievements.includes(index)
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-20 scale-90'
                }`}
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredAchievement(achievement.id)}
              onMouseLeave={() => setHoveredAchievement(null)}
            >
              {/* 3D Card Container */}
              <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-1 ${achievement.glowColor} hover:shadow-3xl relative overflow-hidden h-full`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} transform rotate-12 scale-150 group-hover:rotate-0 transition-transform duration-1000`}></div>
                </div>

                {/* Glowing border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Status Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit ${getTypeColor(achievement.type)}`}>
                    {getTypeLabel(achievement.type)}
                  </div>

                  {/* Enhanced Icon */}
                  <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${achievement.color} rounded-3xl mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg relative`}>
                    <div className="text-4xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                      <i className={`${achievement.icon} text-2xl text-primary group-hover:scale-110 transition-transform duration-500`}></i>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-50 rounded-3xl animate-ping group-hover:animate-pulse`}></div>
                  </div>

                  {/* Enhanced Title */}
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {achievement.title}
                  </h3>

                  {/* Organization */}
                  <p className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent font-semibold text-lg mb-4`}>
                    {achievement.organization}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed flex-grow">
                    {achievement.description}
                  </p>

                  {/* Category Badge */}
                  <div className="mt-6">
                    <span className={`px-3 py-1 bg-gradient-to-r ${achievement.color} bg-opacity-20 rounded-full text-sm font-medium text-white border border-white/20 capitalize`}>
                      {achievement.category}
                    </span>
                  </div>
                </div>

                {/* Hover overlay effect */}
                {hoveredAchievement === achievement.id && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10 rounded-3xl animate-pulse`}></div>
                )}
              </div>

              {/* 3D Shadow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-20 rounded-3xl blur-xl transform translate-y-4 translate-x-2 -z-10 group-hover:translate-y-8 group-hover:translate-x-4 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Certifications Section */}
        <div className="mt-20">
          <FloatingElement delay={0}>
            <h3 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </h3>
          </FloatingElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                ref={el => certRefs.current[index] = el}
                className={`group relative transition-all duration-700 ease-out transform ${visibleCerts.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-20 scale-90'
                  }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} transform rotate-12 scale-150 group-hover:rotate-0 transition-transform duration-1000`}></div>
                  </div>

                  {/* Glowing border effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                  <div className="relative z-10 flex items-center">
                    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${cert.color} rounded-2xl mr-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <span className="text-2xl">{cert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-lg bg-gradient-to-r ${cert.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {cert.name}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {cert.provider}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay effect */}
                  {hoveredCert === cert.id && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 rounded-2xl animate-pulse`}></div>
                  )}
                </div>

                {/* 3D Shadow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 rounded-2xl blur-xl transform translate-y-2 translate-x-1 -z-10 group-hover:translate-y-4 group-hover:translate-x-2 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-15px) rotateZ(2deg); }
        }
        
        .floating-element {
          animation: floating 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Achievements;