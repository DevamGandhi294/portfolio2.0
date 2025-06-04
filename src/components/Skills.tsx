import React, { useState, useEffect, useRef } from 'react';

// Define interfaces for the component props and state
interface SkillData {
  name: string;
  level: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  bgGradient: string;
  cardBg: string;
  glowColor: string;
  skills: SkillData[];
}

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
  color: string;
  delay?: number;
  isCardVisible: boolean;
}

interface FloatingElementProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const Skills: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which cards are visible
      const newVisibleCards: number[] = [];
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            newVisibleCards.push(index);
          }
        }
      });
      
      setVisibleCards(newVisibleCards);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      icon: "💻",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900 via-purple-700 to-pink-700",
      cardBg: "from-purple-100/80 to-pink-100/80",
      glowColor: "shadow-purple-500/50",
      skills: [
        { name: "HTML & CSS", level: "Expert", percentage: 95 },
        { name: "JavaScript", level: "Intermediate", percentage: 70 },
        { name: "Flutter", level: "Intermediate", percentage: 70 },
        { name: "Python", level: "Intermediate", percentage: 70 },
        { name: "C++", level: "Intermediate", percentage: 70 }
      ]
    },
    {
      title: "IoT & Embedded",
      icon: "🔧",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900 via-blue-700 to-cyan-700",
      cardBg: "from-blue-100/80 to-cyan-100/80",
      glowColor: "shadow-blue-500/50",
      skills: [
        { name: "Arduino", level: "Expert", percentage: 90 },
        { name: "Raspberry Pi", level: "Advanced", percentage: 85 },
        { name: "ESP8266/ESP32", level: "Expert", percentage: 95 },
        { name: "Sensor Integration", level: "Advanced", percentage: 85 },
        { name: "GSM", level: "Intermediate", percentage: 75 }
      ]
    },
    {
      title: "3D & Tools",
      icon: "🎨",
      color: "from-green-500 to-teal-500",
      bgGradient: "from-green-900 via-green-700 to-teal-700",
      cardBg: "from-green-100/80 to-teal-100/80",
      glowColor: "shadow-green-500/50",
      skills: [
        { name: "Blender", level: "Advanced", percentage: 85 },
        { name: "Unity 3D", level: "Intermediate", percentage: 75 },
        { name: "GitHub", level: "Intermediate", percentage: 70 },
        { name: "Adobe Premiere Pro", level: "Expert", percentage: 90 },
        { name: "Adobe After Effects", level: "Advanced", percentage: 85 }
      ]
    },
    {
      title: "Cloud, DB & Soft Skills",
      icon: "☁️",
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-900 via-orange-700 to-red-700",
      cardBg: "from-orange-100/80 to-red-100/80",
      glowColor: "shadow-orange-500/50",
      skills: [
        { name: "Firebase", level: "Advanced", percentage: 85 },
        { name: "SQL", level: "Intermediate", percentage: 70 },
        { name: "Problem-Solving", level: "Expert", percentage: 90 },
        { name: "Critical Thinking", level: "Advanced", percentage: 85 },
        { name: "Consistency", level: "Expert", percentage: 95 }
      ]
    }
  ];

  const FloatingElement: React.FC<FloatingElementProps> = ({ delay = 0, children, className = "" }) => (
  <div 
    className={`floating-element ${className}`}
    style={{
      animationDelay: `${delay}s`,
      transform: `translateY(${Math.sin(window.scrollY * 0.01 + delay) * 10}px)`
    }}
  >
    {children}
  </div>
);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden min-h-screen">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs with different colors */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-green-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
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
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Skills & Expertise
            </h2>
          </FloatingElement>
          <FloatingElement delay={0.5}>
            <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-orange-500 mx-auto rounded-full shadow-lg animate-pulse"></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-xl leading-relaxed">
              A diverse skill set spanning programming languages, IoT technologies, 3D tools, and soft skills, developed through hands-on experience and continuous learning.
            </p>
          </FloatingElement>
        </div>
        
        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`group relative transition-all duration-700 ease-out transform ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-90'
              }`}
              style={{
                transitionDelay: `${index * 0.2}s`,
                transform: visibleCards.includes(index) 
                  ? `translateY(0) scale(1) rotateX(0deg)` 
                  : `translateY(50px) scale(0.9) rotateX(-10deg)`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* 3D Card Container */}
              <div className={`bg-gradient-to-br ${category.cardBg} backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-1 ${category.glowColor} hover:shadow-3xl relative overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} transform rotate-12 scale-150 group-hover:rotate-0 transition-transform duration-1000`}></div>
                </div>
                
                {/* Glowing border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Enhanced Icon */}
                  <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${category.color} rounded-3xl mb-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg relative`}>
                    <div className="text-4xl animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                      {category.icon}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 rounded-3xl animate-ping group-hover:animate-pulse`}></div>
                  </div>

                  {/* Enhanced Title */}
                  <h3 className={`text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {category.title}
                  </h3>
                  
                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skillIndex} 
                        {...skill} 
                        color={category.color}
                        delay={skillIndex * 0.1}
                        isCardVisible={visibleCards.includes(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Hover overlay effect */}
                {hoveredCard === index && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-3xl animate-pulse`}></div>
                )}
              </div>

              {/* 3D Shadow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-3xl blur-xl transform translate-y-4 translate-x-2 -z-10 group-hover:translate-y-8 group-hover:translate-x-4 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar: React.FC<SkillBarProps> = ({ name, level, percentage, color, delay = 0, isCardVisible }) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isCardVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [isCardVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 + (delay * 1000); // Staggered animation
      const steps = 60;
      const increment = percentage / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.round(increment * currentStep), percentage));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div 
      ref={barRef} 
      className="group transform transition-all duration-500 hover:scale-105"
      style={{
        animationDelay: `${delay}s`
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-700 font-semibold text-lg group-hover:text-gray-900 transition-colors">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent font-bold text-lg`}>
            {count}%
          </span>
        </div>
      </div>
      
      {/* Enhanced Progress Bar */}
      <div className="relative h-4 bg-gray-200/50 rounded-full overflow-hidden shadow-inner">
        {/* Background glow */}
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 blur-sm`}></div>
        
        {/* Main progress bar */}
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-lg`}
          style={{
            width: `${count}%`,
            transition: `width ${1 + delay}s ease-out`
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skill-shimmer"></div>
          
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-50 blur-sm animate-pulse`}></div>
        </div>
        
        {/* Progress indicator dot */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r ${color} rounded-full shadow-lg transform -translate-x-1/2 animate-pulse`}
          style={{
            left: `${count}%`,
            transition: `left ${1 + delay}s ease-out`
          }}
        >
          <div className={`absolute inset-1 bg-white rounded-full`}></div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
          {level}
        </span>
        <div className="flex gap-1">
          {Array.from({length: 5}).map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i < (percentage / 20) 
                  ? `bg-gradient-to-r ${color} shadow-sm` 
                  : 'bg-gray-300'
              }`}
              style={{
                transitionDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;