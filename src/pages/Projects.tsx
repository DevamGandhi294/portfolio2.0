import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

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

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
                    My Projects
                  </h1>
                </FloatingElement>
                <FloatingElement delay={0.2}>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    Exploring the intersection of creativity and technology through innovative solutions
                  </p>
                </FloatingElement>
                <FloatingElement delay={0.4}>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <i className="ri-code-box-line mr-2"></i>
                      Web Development
                    </div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <i className="ri-smartphone-line mr-2"></i>
                      Mobile Apps
                    </div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <i className="ri-cpu-line mr-2"></i>
                      IoT Projects
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
                      src="../pic/project.jpg" 
                      alt="Projects" 
                      className="w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
          <FloatingElement delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Project Showcase
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-orange-500 mx-auto rounded-full shadow-lg animate-pulse"></div>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.6}>
            <div className="mb-12 flex justify-center">
              <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-white/10 backdrop-blur-md rounded-full">
                <button 
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    filter === 'all' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/20'
                  }`}
                  onClick={() => setFilter('all')}
                >
                  All Projects
                </button>
                <button 
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    filter === 'iot' 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/20'
                  }`}
                  onClick={() => setFilter('iot')}
                >
                  IoT & Embedded
                </button>
                <button 
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    filter === 'web' 
                      ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/20'
                  }`}
                  onClick={() => setFilter('web')}
                >
                  Web & App
                </button>
                <button 
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    filter === 'ai' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/20'
                  }`}
                  onClick={() => setFilter('ai')}
                >
                  AI/ML
                </button>
                <button 
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    filter === '3d' 
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/20'
                  }`}
                  onClick={() => setFilter('3d')}
                >
                  3D & Game
                </button>
              </div>
            </div>
          </FloatingElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="transform transition-all duration-700 ease-out"
                style={{
                  opacity: 0,
                  transform: 'translateY(50px)',
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;
