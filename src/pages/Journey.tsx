import React from 'react';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import Spline from '@splinetool/react-spline';

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

const Journey: React.FC = () => {
  return (
    <main className="min-h-screen">
      <style>{styles}</style>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/BK3mVotXxDiZcE-C/scene.splinecode" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              From learning to creating, every step has been a milestone in my development journey.
            </p>
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
          <Education />
          <Timeline />
        </div>
      </section>
    </main>
  );
};

export default Journey; 