import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Home Automation',
    description: 'Wi-Fi-based control using ESP8266 and Firebase with features like IR, voice control, TTP229 touch, and energy monitoring with PZEM.',
    image: 'https://readdy.ai/api/search-image?query=smart%20home%20automation%20system%20with%20IoT%20devices%2C%20ESP8266%20microcontroller%20connected%20to%20sensors%20and%20displays%2C%20modern%20home%20setting%2C%20professional%20lighting%2C%20high%20quality%20render&width=600&height=400&seq=smarthomeimg&orientation=landscape',
    category: 'iot',
    technologies: ['ESP8266', 'Firebase', 'IoT'],
    github: 'https://github.com/DevamGandhi294/home-application/blob/main/homeweb.zip',
    demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7308213537015799810/',
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800',
    viewText: 'Basic prototype at github and video at linkedin'
  },
  {
    id: 2,
    title: 'IoT Rover Project',
    description: 'Real-time monitoring with GPS, sensors, and ESP32-CAM for live streaming and control. Award-winning project at Robocraze\'s Arduino Project-A-Thon.',
    image: 'https://readdy.ai/api/search-image?query=IoT%20rover%20robot%20with%20camera%2C%20GPS%20module%2C%20and%20sensors%2C%20Arduino-based%20with%20ESP32-CAM%20for%20streaming%2C%20professional%20lighting%2C%20high%20quality%20render%2C%20clean%20background&width=600&height=400&seq=roverimg&orientation=landscape',
    category: 'iot',
    technologies: ['ESP32', 'GPS', 'Sensors'],
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800',
    viewText: "Now it can't be publically shown"
  },
  {
    id: 3,
    title: '3D Portfolio Website',
    description: 'Created an interactive personal portfolio using HTML, CSS, and Three.js with integrated GLTF/GLB models for an immersive user experience.',
    image: 'https://readdy.ai/api/search-image?query=3D%20portfolio%20website%20with%20interactive%20elements%2C%20Three.js%20visualization%2C%20modern%20web%20design%2C%20professional%20lighting%2C%20high%20quality%20render%2C%20clean%20background&width=600&height=400&seq=portfolioimg&orientation=landscape',
    category: 'web',
    technologies: ['HTML', 'CSS', 'Three.js'],
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    viewText: "Now it is not available",
  },
  {
    id: 4,
    title: 'E-Commerce App & Website',
    description: 'Cake business platform built with Flutter, Firebase, HTML, CSS, and JS for order placement and management. Collaborative project with Divya.',
    image: 'https://readdy.ai/api/search-image?query=e-commerce%20cake%20shop%20app%20and%20website%20mockup%20on%20devices%2C%20Flutter%20UI%2C%20Firebase%20backend%2C%20professional%20product%20photography%20of%20cakes%2C%20clean%20modern%20design%2C%20professional%20lighting&width=600&height=400&seq=ecommerceimg&orientation=landscape',
    category: 'web',
    technologies: ['Flutter', 'Firebase', 'HTML/CSS/JS'],
    demoLink: 'https://baked-by-diyaa.vercel.app/',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    viewText: 'Open website'
  },
  {
    id: 5,
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
    id: 6,
    title: '3D Battle Royale Game',
    description: 'Developed a multiplayer game prototype using Unity and Blender, focused on 3D mechanics and interaction for an engaging battle royale experience.',
    image: 'https://readdy.ai/api/search-image?query=3D%20battle%20royale%20game%20prototype%20screenshot%2C%20Unity%20game%20development%2C%203D%20models%20and%20environment%2C%20professional%20lighting%2C%20high%20quality%20render%2C%20clean%20background&width=600&height=400&seq=gameimg&orientation=landscape',
    category: '3d',
    technologies: ['Unity', 'Blender', '3D Game'],
    status: 'Prototype',
    statusColor: 'bg-yellow-100 text-yellow-800',
    viewText: "it can't be uploaded on github"
  },
  // {
  //   id: 7,
  //   title: 'IoT Weather Station',
  //   description: 'Built a weather monitoring system using ESP32, DHT22, BMP280, and other sensors with real-time data visualization on a mobile app.',
  //   image: 'https://readdy.ai/api/search-image?query=IoT%20weather%20station%20with%20multiple%20sensors%2C%20digital%20display%2C%20ESP32%20microcontroller%2C%20real-time%20data%20visualization%2C%20professional%20lighting%2C%20high%20quality%20render&width=600&height=400&seq=weatherimg&orientation=landscape',
  //   category: 'iot',
  //   technologies: ['ESP32', 'IoT', 'Sensors'],
  //   status: 'Completed',
  //   statusColor: 'bg-green-100 text-green-800'
  // },
  // {
  //   id: 8,
  //   title: 'E-Learning Platform',
  //   description: 'Developed a responsive e-learning platform with course management, progress tracking, and interactive quiz features using React and Firebase.',
  //   image: 'https://readdy.ai/api/search-image?query=e-learning%20platform%20interface%20on%20multiple%20devices%2C%20modern%20UI%20design%2C%20educational%20content%2C%20course%20listings%2C%20progress%20tracking%20features%2C%20clean%20professional%20design&width=600&height=400&seq=elearningimg&orientation=landscape',
  //   category: 'web',
  //   technologies: ['React', 'Firebase', 'Material UI'],
  //   status: 'In Development',
  //   statusColor: 'bg-blue-100 text-blue-800'
  // }
];