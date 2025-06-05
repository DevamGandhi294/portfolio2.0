import React, { useState, useEffect, useRef, FormEvent } from 'react';

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

const Contact: React.FC = () => {
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    
    // Simulate form submission
    try {
      // Replace with actual email sending logic in production
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
                    Get in Touch
                  </h1>
                </FloatingElement>
                <FloatingElement delay={0.2}>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    Let's discuss your next project or opportunity
                  </p>
                </FloatingElement>
                <FloatingElement delay={0.4}>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <i className="ri-mail-line mr-2"></i>
                      Email
                    </div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <i className="ri-phone-line mr-2"></i>
                      Phone
                    </div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <i className="ri-map-pin-line mr-2"></i>
                      Location
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
                      src="https://images.pexels.com/photos/10667753/pexels-photo-10667753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Contact" 
                      className="w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-soft">
                <h2 className="text-3xl font-bold mb-6 text-white">Send Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Message subject"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
                {status && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    status.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}>
                    {status.message}
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-soft">
                  <h2 className="text-3xl font-bold mb-6 text-white">Contact Info</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full mr-4">
                        <i className="ri-map-pin-line text-xl text-white"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Location</h3>
                        <p className="text-gray-300">Surat (394210), Gujarat, India</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full mr-4">
                        <i className="ri-mail-line text-xl text-white"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Email</h3>
                        <a href="mailto:dev294gandhi@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                          dev294gandhi@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full mr-4">
                        <i className="ri-phone-line text-xl text-white"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Phone</h3>
                        <a href="tel:+917862949437" className="text-gray-300 hover:text-white transition-colors">
                          +91 7862949437
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full mr-4">
                        <i className="ri-linkedin-line text-xl text-white"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">LinkedIn</h3>
                        <a 
                          href="https://www.linkedin.com/in/devam-gandhi-752418272/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          devam-gandhi-752418272
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-soft">
                  <h2 className="text-3xl font-bold mb-6 text-white">Location</h2>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7153587386!2d72.8799!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0x9c792c49e35a4c0a!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
