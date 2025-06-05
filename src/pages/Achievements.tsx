import React from 'react';
import Achievements from '../components/Achievements';

// Add CSS animation keyframes
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .floating-element {
    animation: float 6s ease-in-out infinite;
  }
`;

interface FloatingElementProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ delay = 0, children, className = "" }) => (
  <div 
    className={`floating-element ${className}`}
    style={{
      animationDelay: `${delay}s`
    }}
  >
    {children}
  </div>
);

const AchievementsPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <style>{styles}</style>

      {/* Hero Section */}
      <section className="relative h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dynamic floating orbs */}
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

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <FloatingElement delay={0}>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent animate-pulse h-[80px]">
                    My Achievements
                  </h1>
                </FloatingElement>
                <FloatingElement delay={0.2}>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    Celebrating milestones and accomplishments in my journey
                  </p>
                </FloatingElement>
                <FloatingElement delay={0.4}>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <i className="ri-trophy-line mr-2"></i>
                      Awards
                    </div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <i className="ri-medal-line mr-2"></i>
                      Certifications
                    </div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <i className="ri-star-line mr-2"></i>
                      Recognition
                    </div>
                  </div>
                </FloatingElement>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative w-full h-[400px] animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl transform rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl transform -rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-orange-500/20 rounded-3xl overflow-hidden">
                    <img 
                      src="\pic\archivement.jpg" 
                      alt="Achievements" 
                      className="w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dynamic floating orbs */}
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
          <Achievements />
        </div>
      </section>
    </main>
  );
};

export default AchievementsPage; 
