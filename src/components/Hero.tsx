import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 3;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0003;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div ref={canvasRef} className="absolute inset-0 z-10" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/100 via-gray-900/100 to-primary/10 z-10" />
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Welcome to my Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovator & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Passionate about IoT, web, and mobile application development. Transforming ideas into impactful tech solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/projects" 
              className="group px-8 py-4 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
            >
              View Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link 
              to="/contact" 
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center text-white bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg mr-4">
                <i className="ri-map-pin-line text-xl text-primary"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Surat (394210)</p>
              </div>
            </div>
            <div className="flex items-center text-white bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg mr-4">
                <i className="ri-phone-line text-xl text-primary"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+91 7862949437</p>
              </div>
            </div>
            <div className="flex items-center text-white bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-colors w-[300px]">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg mr-4">
                <i className="ri-mail-line text-l text-primary"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">dev294gandhi@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;