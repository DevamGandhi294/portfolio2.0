import React, { useState, useEffect, useRef } from 'react';

interface EducationItem {
  id: number;
  title: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
  achievements?: string[];
  status: 'completed' | 'current';
}

interface FloatingElementProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const Education: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeTimeline, setActiveTimeline] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which items are visible and update active timeline
      const newVisibleItems: number[] = [];
      let newActiveTimeline = 0;
      
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            newVisibleItems.push(index);
            if (rect.top < windowHeight * 0.5) {
              newActiveTimeline = index;
            }
          }
        }
      });
      
      setVisibleItems(newVisibleItems);
      setActiveTimeline(newActiveTimeline);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const educationData: EducationItem[] = [
    {
      id: 0,
      title: "Bachelor's Degree",
      degree: "B.Tech in Computer Engineering",
      institution: "C.K Pithawala College of Engineering and Technology",
      period: "2023 - Present",
      description: "Currently pursuing my degree with focus on IoT, App development, and Web development. Actively engaged in practical projects and cutting-edge technologies.",
      icon: "🎓",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900 via-purple-700 to-pink-700",
      achievements: ["IoT Projects", "App Development", "Web Technologies", "Current Student"],
      status: 'current'
    },
    {
      id: 1,
      title: "Diploma",
      degree: "Diploma in Computer Engineering",
      institution: "JHDP at Palasana",
      period: "2020 - 2023",
      description: "Successfully completed my Diploma with focus on basic programming, web development and basic IoT. Built strong foundation in computer engineering principles.",
      icon: "📚",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900 via-blue-700 to-cyan-700",
      achievements: ["Programming Fundamentals", "Web Development", "Basic IoT", "Graduated"],
      status: 'completed'
    },
    {
      id: 2,
      title: "Secondary Education",
      degree: "Secondary School",
      institution: "Experimental School",
      period: "2018 - 2020",
      description: "Completed secondary education with average academic performance and active participation in sports related activities.",
      icon: "🏫",
      color: "from-green-500 to-teal-500",
      bgGradient: "from-green-900 via-green-700 to-teal-700",
      achievements: ["Academic Performance", "Sports Activities", "Leadership", "Team Work"],
      status: 'completed'
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

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden min-h-screen">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-green-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
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
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Education Journey
            </h2>
          </FloatingElement>
          <FloatingElement delay={0.5}>
            <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-teal-500 mx-auto rounded-full shadow-lg animate-pulse"></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-xl leading-relaxed">
              My academic path showcasing continuous learning and growth through formal education and hands-on experience in computer engineering.
            </p>
          </FloatingElement>
        </div>

        {/* Enhanced Timeline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Dynamic Timeline Line with Fade */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 opacity-30"></div>
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>
          
          {/* Animated Timeline Progress */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 transition-all duration-1000 ease-out shadow-lg"
            style={{
              height: `${((activeTimeline + 1) / educationData.length) * 100}%`,
              top: 0
            }}
          ></div>

          {/* Education Items */}
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                ref={el => itemRefs.current[index] = el}
                className={`relative transition-all duration-700 ease-out transform ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-20 scale-90'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right text-left' : 'md:pl-8 text-left'
                  } mb-8 md:mb-0`}>
                    <div 
                      className={`group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${
                        index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                      } relative overflow-hidden`}
                      style={{
                        boxShadow: `0 25px 50px -12px ${item.color.includes('purple') ? 'rgba(168, 85, 247, 0.25)' : item.color.includes('blue') ? 'rgba(59, 130, 246, 0.25)' : 'rgba(16, 185, 129, 0.25)'}`
                      }}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'} scale-150 group-hover:rotate-0 transition-transform duration-1000`}></div>
                      </div>
                      
                      {/* Glowing border effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        {/* Status Badge */}
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                          item.status === 'current' 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}>
                          {item.status === 'current' ? '🔥 Current' : '✅ Completed'}
                        </div>

                        <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                          {item.degree}
                        </h3>
                        
                        <p className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-semibold text-lg mb-2`}>
                          {item.period}
                        </p>
                        
                        <p className="text-gray-300 font-medium mb-4">
                          {item.institution}
                        </p>
                        
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Achievement Tags */}
                        <div className="flex flex-wrap gap-2 justify-end">
                          {item.achievements?.map((achievement, achIndex) => (
                            <span 
                              key={achIndex}
                              className={`px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-20 rounded-full text-xs font-medium text-white border border-white/20 hover:scale-110 transition-transform duration-300`}
                              style={{
                                animationDelay: `${achIndex * 0.1}s`
                              }}
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover overlay effect */}
                      {hoveredItem === item.id && (
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 rounded-3xl animate-pulse`}></div>
                      )}
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="flex-shrink-0 w-full md:w-2/12 flex justify-center mb-8 md:mb-0">
                    <div 
                      className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-125 hover:rotate-12 z-20`}
                      style={{
                        boxShadow: `0 0 30px ${item.color.includes('purple') ? 'rgba(168, 85, 247, 0.6)' : item.color.includes('blue') ? 'rgba(59, 130, 246, 0.6)' : 'rgba(16, 185, 129, 0.6)'}`
                      }}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="text-2xl animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                        {item.icon}
                      </div>
                      <div className="absolute inset-0 bg-white rounded-full scale-75"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      
                      {/* Pulsing ring effect */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-30`}></div>
                    </div>
                  </div>

                  {/* Mirror Content - hidden on mobile */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>

                {/* 3D Shadow effect - hidden on mobile */}
                <div className={`hidden md:block absolute ${
                  index % 2 === 0 ? 'left-0' : 'right-0'
                } top-4 w-5/12 ${
                  index % 2 === 0 ? 'pr-8' : 'pl-8'
                }`}>
                  <div className={`bg-gradient-to-br ${item.color} opacity-20 rounded-3xl blur-xl transform translate-y-4 translate-x-2 -z-10 transition-transform duration-500 h-full`}></div>
                </div>
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
          animation: floating 8s ease-in-out infinite; //slow down the animation
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>
    </section>
  );
};

export default Education;