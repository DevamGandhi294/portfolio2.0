import { Project } from '../types';
import biiotImg from '../assets/projects/biiot.png';
import surplusImg from '../assets/projects/surplus.png';
import kavachImg from '../assets/projects/kavach.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Home Automation',
    description: 'Wi-Fi-based control using ESP8266 and Firebase with features like IR, voice control, TTP229 touch, and energy monitoring with PZEM.',
    image: 'https://readdy.ai/api/search-image?query=smart%20home%20automation%20system%20with%20IoT%20devices%2C%20ESP8266%20microcontroller%20connected%20to%20sensors%20and%20displays%2C%20modern%20home%20setting%2C%20professional%20lighting%2C%20high%20quality%20render&width=600&height=400&seq=smarthomeimg&orientation=landscape',
    category: 'iot',
    technologies: ['IoT', 'Firebase', 'Flutter'],
    github: 'https://github.com/DevamGandhi294/home-application/blob/main/homeweb.zip',
    demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7308213537015799810/',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    viewText: 'Basic prototype at github and video at linkedin'
  },
  {
    id: 2,
    title: 'IoT Rover Project',
    description: 'Real-time monitoring with GPS, sensors, and ESP32-CAM for live streaming and control. Award-winning project at Robocraze\'s Arduino Project-A-Thon.',
    image: 'https://readdy.ai/api/search-image?query=IoT%20rover%20robot%20with%20camera%2C%20GPS%20module%2C%20and%20sensors%2C%20Arduino-based%20with%20ESP32-CAM%20for%20streaming%2C%20professional%20lighting%2C%20high%20quality%20render%2C%20clean%20background&width=600&height=400&seq=roverimg&orientation=landscape',
    category: 'iot',
    technologies: ['IoT', 'Protocol', 'Sensors'],
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800',
    viewText: "Now it can't be publically shown"
  },
  {
    id: 3,
    title: 'BIIoT – Industrial Machine Monitoring & Student Log System',
    description: 'Industrial IoT-based machine maintenance system to monitor motor health and log which student/operator uses which machine, with analytics and predictive insights.',
    image: 'src/assets/projects/biiot.png',
    category: 'iot',
    technologies: ['IoT', 'Flutter', 'React', 'AI/ML'],
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800',
    viewText: 'Industrial use case with real-time monitoring and analytics'
  },
  {
    id: 4,
    title: 'SurplusForSociety – Smart Waste & Resource Management',
    description: 'IoT-enabled smart waste management system for cities with real-time monitoring, data analytics, and optimized collection using Flutter, web dashboards, and cloud databases.',
    image: 'src/assets/projects/surplus.png',
    category: 'web',
    technologies: ['Flutter', 'Web Development', 'Firebase', 'Social Services'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    viewText: 'Hackathon-level project with real-world city use case'
  },
  {
    id: 5,
    title: 'KAVACH – Advanced IoT Safety & Monitoring System',
    description: 'A powerful multi-device IoT safety system with a central hub, environmental monitoring units for mining sites, and wearable devices for human health and emergency alerts.',
    image: 'src/assets/projects/kavach.png',
    category: 'iot',
    technologies: ['IoT', 'Embedded Systems', 'Cloud', 'Sensors'],
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800',
    viewText: 'Multi-device architecture with real-time alerts'
  },
  {
    id: 6,
    title: 'E-Commerce App & Website',
    description: 'Cake business platform built with Flutter, Firebase, HTML, CSS, and JS for order placement and management. Collaborative project with Divya.',
    image: 'https://readdy.ai/api/search-image?query=e-commerce%20cake%20shop%20app%20and%20website%20mockup%20on%20devices%2C%20Flutter%20UI%2C%20Firebase%20backend%2C%20professional%20product%20photography%20of%20cakes%2C%20clean%20modern%20design%2C%20professional%20lighting&width=600&height=400&seq=ecommerceimg&orientation=landscape',
    category: 'web',
    technologies: ['Flutter', 'Firebase', 'Web Development'],
    demoLink: 'https://baked-by-diyaa.vercel.app/',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    viewText: 'Open website'
  },
  {
    id: 7,
    title: 'Face Detection System',
    description: 'Python and OpenCV-based project for detecting faces, checking human presence, and matching with an authorized database for security applications.',
    image: 'https://readdy.ai/api/search-image?query=face%20detection%20and%20authorization%20system%20with%20Python%20and%20OpenCV%2C%20showing%20facial%20recognition%20interface%2C%20professional%20lighting%2C%20high%20quality%20render%2C%20clean%20background&width=600&height=400&seq=facedetectimg&orientation=landscape',
    category: 'ai',
    technologies: ['Python', 'OpenCV', 'AI/ML'],
    github: 'https://github.com/DevamGandhi294/face_authentication',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    viewText: 'View project details and source code'
  },
  {
    id: 8,
    title: '3D Battle Royale Game',
    description: 'Developed a multiplayer game prototype using Unity and Blender, focused on 3D mechanics and interaction for an engaging battle royale experience.',
    image: 'https://readdy.ai/api/search-image?query=3D%20battle%20royale%20game%20prototype%20screenshot%2C%20Unity%20game%20development%2C%203D%20models%20and%20environment%2C%20professional%20lighting%2C%20high%20quality%20render%2C%20clean%20background&width=600&height=400&seq=gameimg&orientation=landscape',
    category: '3d',
    technologies: ['Unity', 'Blender', '3D Game'],
    status: 'Prototype',
    statusColor: 'bg-yellow-100 text-yellow-800',
    viewText: "it can't be uploaded on github"
  },
];