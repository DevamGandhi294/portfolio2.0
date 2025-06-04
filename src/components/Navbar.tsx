import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-10 backdrop-blur-md shadow-soft py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-light hover:text-light-dark transition-colors">
            Gandhi Devam
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${
                location.pathname === '/' 
                  ? 'text-light font-medium' 
                  : 'text-light-dark hover:text-light'
              } transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`${
                location.pathname === '/projects' 
                  ? 'text-light font-medium' 
                  : 'text-light-dark hover:text-light'
              } transition-colors`}
            >
              Projects
            </Link>
            <Link 
              to="/achievements" 
              className={`${
                location.pathname === '/achievements' 
                  ? 'text-light font-medium' 
                  : 'text-light-dark hover:text-light'
              } transition-colors`}
            >
              Achievements
            </Link>
            <Link 
              to="/journey" 
              className={`${
                location.pathname === '/journey' 
                  ? 'text-light font-medium' 
                  : 'text-light-dark hover:text-light'
              } transition-colors`}
            >
              Journey
            </Link>
            <Link 
              to="/contact" 
              className={`${
                location.pathname === '/contact' 
                  ? 'text-light font-medium' 
                  : 'text-light-dark hover:text-light'
              } transition-colors`}
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-light-dark hover:text-light transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md absolute left-0 right-0 top-full shadow-soft py-4 px-6 mt-1 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`${
                  location.pathname === '/' 
                    ? 'text-dark font-medium' 
                    : 'text-dark-light hover:text-dark'
                } transition-colors`}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className={`${
                  location.pathname === '/projects' 
                    ? 'text-dark font-medium' 
                    : 'text-dark-light hover:text-dark'
                } transition-colors`}
              >
                Projects
              </Link>
              <Link 
                to="/achievements" 
                className={`${
                  location.pathname === '/achievements' 
                    ? 'text-dark font-medium' 
                    : 'text-dark-light hover:text-dark'
                } transition-colors`}
              >
                Achievements
              </Link>
              <Link 
                to="/journey" 
                className={`${
                  location.pathname === '/journey' 
                    ? 'text-dark font-medium' 
                    : 'text-dark-light hover:text-dark'
                } transition-colors`}
              >
                Journey
              </Link>
              <Link 
                to="/contact" 
                className={`${
                  location.pathname === '/contact' 
                    ? 'text-dark font-medium' 
                    : 'text-dark-light hover:text-dark'
                } transition-colors`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;