import React, { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  title: string;
  year: string;
  description: string;
  color: string;
  bgColor: string;
  icon: string;
  image: string;
}

interface FloatingElementProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

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

const Timeline: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which timeline items are visible
      const newVisibleItems: number[] = [];
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            newVisibleItems.push(index);
          }
        }
      });
      
      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineData: TimelineItem[] = [
    {
      title: "Video Editing",
      year: "2020",
      description: "My tech journey began with video editing, where I learned the fundamentals of digital content creation. This phase was primarily focused on learning rather than earning, as I built my foundation in creative digital skills.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-100 to-pink-100",
      icon: "🎬",
      image: "https://readdy.ai/api/search-image?query=professional%20video%20editing%20workspace%20with%20modern%20computer%20setup%2C%20video%20editing%20software%20on%20screen%2C%20creative%20atmosphere%2C%20high%20quality%20professional%20photography&width=400&height=300&seq=videoimg&orientation=landscape"
    },
    {
      title: "3D Animation",
      year: "2022",
      description: "In 2022, I expanded my skills to include 3D animation, focusing on Blender. This marked the beginning of my earning phase, as I started taking on freelance projects while continuing to develop my technical abilities.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
      icon: "🎨",
      image: "https://readdy.ai/api/search-image?query=3D%20animation%20workspace%20with%20Blender%20software%20open%20on%20screen%2C%203D%20models%20and%20animations%20visible%2C%20professional%20lighting%2C%20creative%20environment%2C%20high%20quality%20render&width=400&height=300&seq=3dimg&orientation=landscape"
    },
    {
      title: "IoT Development",
      year: "2023",
      description: "2023 marked my entry into IoT development, where I began working with Arduino and various sensors. This period was characterized by rapid skill acquisition and participation in hackathons, where I developed projects like my Defence System and portfolio website.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-100 to-emerald-100",
      icon: "🔧",
      image: "https://readdy.ai/api/search-image?query=IoT%20development%20workspace%20with%20Arduino%20boards%2C%20Raspberry%20Pi%2C%20sensors%2C%20breadboards%2C%20electronic%20components%2C%20clean%20organized%20workspace%2C%20professional%20lighting%2C%20high%20quality%20photography&width=400&height=300&seq=iotimg&orientation=landscape"
    },
    {
      title: "Web & Mobile Development",
      year: "2024 - Present",
      description: "Since 2024, I've been focused on building cross-platform apps using Flutter and Firebase, while also expanding my IoT skills by working on projects that involve controlling sensors and devices over the internet. I enjoy combining mobile development with real-world IoT solutions and actively participate in hackathons to sharpen my skills.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-100 to-red-100",
      icon: "📱",
      image: "https://readdy.ai/api/search-image?query=modern%20web%20and%20mobile%20app%20development%20workspace%20with%20multiple%20screens%20showing%20code%20and%20Flutter%20UI%2C%20clean%20organized%20desk%2C%20professional%20lighting%2C%20high%20quality%20photography&width=400&height=300&seq=webimg&orientation=landscape"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-green-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-orange-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FloatingElement delay={0}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              My Journey
            </h2>
          </FloatingElement>
          <FloatingElement delay={0.5}>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              From video editing to IoT and application development, my technical evolution has been driven by curiosity and practical learning.
            </p>
          </FloatingElement>
        </div>
        
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Simple Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1">
            {/* Base gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-500 via-green-500 to-orange-500 opacity-20 rounded-full"></div>
            
            {/* Progress line */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 via-green-500 to-orange-500 rounded-full transition-all duration-1000 ease-out"
              style={{
                height: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`,
                opacity: 0.5
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`relative pl-16 md:pl-24 transition-all duration-500 ${
                  visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className={`absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className={`${item.bgColor} rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300`}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-2 text-dark">{item.title}</h3>
                      <p className="text-primary font-semibold mb-4">{item.year}</p>
                      <p className="text-dark-light">{item.description}</p>
                    </div>
                    <div className="md:w-1/2">
                      <div className="relative rounded-lg overflow-hidden shadow-lg h-48">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      </section>
  );
};

export default Timeline;