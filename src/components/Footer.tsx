import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-semibold text-white mb-4 inline-block">
              Gandhi Devam
            </Link>
            <p className="text-gray-400 max-w-md">
              Computer Engineering student passionate about creating innovative solutions through IoT, web, and mobile development.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/DevamGandhi294" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <i className="ri-github-fill text-xl"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/devam-gandhi-752418272/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a 
                  href="https://www.instagram.com/dev_294_gandhi_/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Gandhi Devam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;