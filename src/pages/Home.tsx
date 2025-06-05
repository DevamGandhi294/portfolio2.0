import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ContactSection from '../components/ContactSection';

// Add CSS animation keyframes
const styles = `
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

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <style>{styles}</style>
      <Hero />

      {/* About Content */}
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
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-soft h-full transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://static.readdy.ai/image/a33c314a9c02a579d6173c720a39d07b/93b7a48bbcac6fe0ccb58bccf58ee5bd.webp" 
                  alt="Gandhi Devam" 
                  className="w-full h-[400px] object-cover rounded-lg border-4 border-primary/30"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <FloatingElement delay={0}>
                <h3 className="text-2xl font-semibold mb-4 text-white">Innovative and detail-oriented Computer Engineering student</h3>
              </FloatingElement>
              <FloatingElement delay={0.2}>
                <p className="text-gray-300 mb-6">
                  I am passionate about IoT, web, and mobile application development. My journey began in 2020 with video editing, which sparked my interest in digital creation. Over the years, I've expanded my skills to include 3D animation, IoT systems, web development, and most recently, Flutter for mobile app development.
                </p>
              </FloatingElement>
              <FloatingElement delay={0.4}>
                <p className="text-gray-300 mb-6">
                  While I consider myself an average student academically, my true strength lies in practical application and project development. I thrive on solving real-world challenges through technology and have participated in numerous hackathons to push my boundaries.
                </p>
              </FloatingElement>
              <FloatingElement delay={0.6}>
                <p className="text-gray-300 mb-6">
                  I'm constantly seeking opportunities to contribute to impactful tech projects while exploring new technologies to enhance my skill set.
                </p>
              </FloatingElement>
              
              <FloatingElement delay={0.8}>
                <div className="flex space-x-4">
                  <a href="https://github.com/DevamGandhi294" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                    <i className="ri-github-fill text-xl text-white"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/devam-gandhi-752418272/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                    <i className="ri-linkedin-fill text-xl text-white"></i>
                  </a>
                  <a href="https://www.instagram.com/dev_294_gandhi_/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                    <i className="ri-instagram-fill text-xl text-white"></i>
                  </a>
                </div>
              </FloatingElement>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <FloatingElement delay={1}>
              <h3 className="text-2xl font-semibold mb-6 text-white">Personal Information</h3>
            </FloatingElement>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FloatingElement delay={1.2}>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full mr-4 mt-1">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-white">Location</h4>
                    <p className="text-gray-300">Surat (394210), Gujarat, India</p>
                  </div>
                </div>
              </FloatingElement>
              <FloatingElement delay={1.4}>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full mr-4 mt-1">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-white">Email</h4>
                    <a href="mailto:dev294gandhi@gmail.com" className="text-gray-300 hover:text-white transition-colors">dev294gandhi@gmail.com</a>
                  </div>
                </div>
              </FloatingElement>
              <FloatingElement delay={1.6}>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full mr-4 mt-1">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-white">Phone</h4>
                    <a href="tel:+917862949437" className="text-gray-300 hover:text-white transition-colors">+91 7862949437</a>
                  </div>
                </div>
              </FloatingElement>
              <FloatingElement delay={1.8}>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full mr-4 mt-1">
                    <i className="ri-calendar-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-white">Experience</h4>
                    <p className="text-gray-300">4+ years in digital creation and development</p>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      {/* <ContactSection /> */}
    </main>
  );
};

export default Home;
