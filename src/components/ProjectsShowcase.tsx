import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsShowcase: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const filteredProjects = filter === 'all' 
    ? projects.slice(0, 6) // Only show first 6 projects on homepage
    : projects.filter(project => project.category === filter).slice(0, 6);

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my technical projects across IoT, web, mobile, and AI domains.
          </p>
        </div>
        
        <div className="mb-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 rounded-full shadow-inner">
            <button 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'iot' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('iot')}
            >
              IoT & Embedded
            </button>
            <button 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'web' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('web')}
            >
              Web & App
            </button>
            <button 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'ai' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('ai')}
            >
              AI/ML
            </button>
            <button 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === '3d' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('3d')}
            >
              3D & Game
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="transform transition-all duration-500"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
              <i className="ri-folder-search-line text-5xl"></i>
            </div>
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
        
        <div className="text-center mt-16">
          <Link 
            to="/projects" 
            className="group inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
          >
            View All Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              <i className="ri-arrow-right-line text-xl"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;