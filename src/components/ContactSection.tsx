import React, { useState, FormEvent, useEffect, useRef } from 'react';

interface FloatingElementProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{success?: boolean, message: string} | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which items are visible
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    
    try {
      // Simulate form submission - replace with actual logic in production
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        success: false,
        message: 'Failed to send message. Please try again or contact me directly via email.'
      });
    } finally {
      setLoading(false);
    }
  };

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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden min-h-screen">
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
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <FloatingElement delay={0}>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Get In Touch
            </h2>
          </FloatingElement>
          <FloatingElement delay={0.5}>
            <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-orange-500 mx-auto rounded-full shadow-lg animate-pulse"></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-xl leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </FloatingElement>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            ref={el => itemRefs.current[0] = el}
            className={`lg:w-1/2 transition-all duration-700 ease-out transform ${
              visibleItems.includes(0) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-90'
            }`}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-1 relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-700 to-green-700 transform rotate-12 scale-150 group-hover:rotate-0 transition-transform duration-1000"></div>
              </div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500/20 transition-colors" 
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500/20 transition-colors" 
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500/20 transition-colors" 
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500/20 transition-colors" 
                    placeholder="Your message"
                  />
                </div>
                
                {status && (
                  <div className={`p-4 rounded-lg ${
                    status.success 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {status.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-70 transform hover:scale-105"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div 
            ref={el => itemRefs.current[1] = el}
            className={`lg:w-1/2 transition-all duration-700 ease-out transform ${
              visibleItems.includes(1) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-90'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-1 relative overflow-hidden mb-8">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-700 to-pink-700 transform rotate-12 scale-150 group-hover:rotate-0 transition-transform duration-1000"></div>
              </div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mr-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <i className="ri-map-pin-line text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Location</h4>
                      <p className="text-gray-400">Udhana, Surat (394210), Gujarat, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mr-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <i className="ri-mail-line text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Email</h4>
                      <a href="mailto:dev294gandhi@gmail.com" className="text-gray-400 hover:text-white transition-colors">dev294gandhi@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl mr-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <i className="ri-phone-line text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Phone</h4>
                      <a href="tel:+917862949437" className="text-gray-400 hover:text-white transition-colors">+91 7862949437</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mr-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <i className="ri-linkedin-box-line text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/devam-gandhi-752418272/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        devam-gandhi-752418272
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59569.12771418334!2d72.80677079999999!3d21.17024915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sUdhna%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1723115201748!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-15px) rotateZ(2deg); }
        }
        
        .floating-element {
          animation: floating 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;