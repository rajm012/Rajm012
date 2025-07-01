import { projects as dummyProjects } from './projects';

// Real projects from GitHub repositories
const realProjects = [
  {
    id: 7,
    title: 'GenWeb',
    description: 'GenWeb is an AI-powered website builder built with Next.js, designed to streamline web development using modern tools like Clerk for authentication and Supabase for data storage.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['Next.js', 'React', 'Clerk', 'Supabase', 'AI'],
    github: 'https://github.com/rajm012/GenWeb',
    demo: '',
    tags: ['Web', 'AI', 'Full-Stack']
  },
  {
    id: 8,
    title: 'NetSentinel',
    description: 'Real-time Network Traffic Monitoring and Threat Detection Platform Built using React, FastAPI, Scapy, and modern data visualization tools.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['React', 'FastAPI', 'Scapy', 'Python', 'Data Visualization'],
    github: 'https://github.com/rajm012/NetSentinel',
    demo: '',
    tags: ['Cybersecurity', 'Network', 'Monitoring']
  },
  {
    id: 9,
    title: 'MovieFlix',
    description: 'A full-stack movie ticket booking application that delivers a smooth cinema experience for users and an all-in-one management solution for theatre admins. From wishlist and seat selection to real-time booking confirmation and admin dashboards.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/rajm012/MovieFlix',
    demo: '',
    tags: ['Web', 'Full-Stack', 'Booking System']
  },
  {
    id: 10,
    title: 'Space-Quiz',
    description: 'An interactive, space-themed web quiz application that combines fun and education with real-time data. Made in 3 hrs and 21 mins.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1111&q=80',
    techStack: ['HTML', 'CSS', 'JavaScript', 'NASA API'],
    github: 'https://github.com/rajm012/Space-Quiz',
    demo: '',
    tags: ['Web', 'Educational', 'Quiz']
  },
  {
    id: 11,
    title: 'Traffic-Flow-Simulation',
    description: 'A project for the course Partial Differential Equation that uses LWR and LSTM to estimate Traffic flow.',
    image: 'https://images.unsplash.com/photo-1566155119454-2b581dd44c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['Python', 'LSTM', 'LWR', 'Data Science', 'Simulation'],
    github: 'https://github.com/rajm012/Traffic-Flow-Simulation',
    demo: '',
    tags: ['AI/ML', 'Simulation', 'Mathematics']
  },
  {
    id: 12,
    title: 'Rubiks-Cube-Simulator',
    description: 'A feature-rich, interactive 3D Rubik\'s Cube simulator built with React and Three.js. Made in 3.5 hrs.',
    image: 'https://images.unsplash.com/photo-1577278689329-1914b6814d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['React', 'Three.js', 'JavaScript', '3D Graphics'],
    github: 'https://github.com/rajm012/Rubiks-Cube-Simulator',
    demo: '',
    tags: ['Web', 'Game', '3D']
  },
  {
    id: 13,
    title: 'WebScanner',
    description: 'A full-stack web application to scan and detect security vulnerabilities in websites and networks.',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    techStack: ['Python', 'JavaScript', 'Security APIs', 'Web Development'],
    github: 'https://github.com/rajm012/WebScanner',
    demo: '',
    tags: ['Cybersecurity', 'Web', 'Tool']
  },
  {
    id: 14,
    title: 'Password-Generator',
    description: 'Generate strong, secure, and unique passwords with ease. This web-based password generator offers real-time analysis, strength evaluation, and breach detection to ensure maximum security.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Security APIs'],
    github: 'https://github.com/rajm012/Password-Generator',
    demo: '',
    tags: ['Web', 'Security', 'Tool']
  },
  {
    id: 15,
    title: 'DDoS-Tool-WebApp',
    description: 'A powerful and ethical DDoS testing tool designed for security professionals and developers to simulate and analyze various types of DDoS attacks. This tool helps you understand how attacks work and how to defend against them.',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['Python', 'JavaScript', 'Network Security', 'Web Development'],
    github: 'https://github.com/rajm012/DDoS-Tool-WebApp',
    demo: '',
    tags: ['Cybersecurity', 'Ethical Hacking', 'Web']
  },
  {
    id: 16,
    title: 'Port-Scanner-Webapp',
    description: 'The Basic Port Scanner is a powerful web-based tool designed to scan ports on a target IP address. It provides detailed information about open ports, services, and additional data such as geolocation, operating system detection, and Shodan lookup results.',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['JavaScript', 'Python', 'Networking', 'API Integration'],
    github: 'https://github.com/rajm012/Port-Scanner-Webapp',
    demo: '',
    tags: ['Cybersecurity', 'Networking', 'Web Tool']
  },
  {
    id: 17,
    title: 'Port-Scanner',
    description: 'A powerful, multi-threaded GUI-based Port Scanner built using Python and Tkinter. This tool enables fast and efficient scanning of network ports, service detection, OS detection, and Shodan lookups.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['Python', 'Tkinter', 'Networking', 'Multi-threading'],
    github: 'https://github.com/rajm012/Port-Scanner',
    demo: '',
    tags: ['Cybersecurity', 'Desktop App', 'Network Tool']
  },
  {
    id: 18,
    title: 'Keylogger-Webapp',
    description: 'A Parental Monitoring System designed to help parents monitor their children\'s computer activity in a safe and responsible manner. It allows for keystroke logging, screenshot capture, and email reporting, ensuring that parents can keep an eye on their child\'s online behavior.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    techStack: ['Python', 'JavaScript', 'Web Development', 'Email Integration'],
    github: 'https://github.com/rajm012/Keylogger-Webapp',
    demo: '',
    tags: ['Parental Control', 'Security', 'Web App']
  },
  {
    id: 19,
    title: 'Ethical-Keylogger',
    description: 'An ethical keylogger designed for parental control and safety monitoring. It captures keystrokes, takes periodic screenshots, and sends activity reports via email.',
    image: 'https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['Python', 'Email Integration', 'Screenshots', 'Monitoring'],
    github: 'https://github.com/rajm012/Ethical-Keylogger',
    demo: '',
    tags: ['Parental Control', 'Security', 'Desktop App']
  },
  {
    id: 20,
    title: 'Password Manager',
    description: 'A secure and user-friendly password manager built with Next.js, Clerk for authentication, and Supabase for database storage. This application allows users to securely store, manage, and retrieve their passwords with ease.',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['Next.js', 'Clerk', 'Supabase', 'Encryption', 'React'],
    github: 'https://github.com/rajm012/password-manager',
    demo: '',
    tags: ['Web', 'Security', 'Full-Stack']
  },
  {
    id: 21,
    title: 'Self-Driving Car',
    description: 'A small self driving car which learns its movement through the neural network and will improvise its motion whenever it learns new patterns.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['Neural Networks', 'JavaScript', 'Machine Learning', 'Simulation'],
    github: 'https://github.com/rajm012/Self-Driving-Car',
    demo: '',
    tags: ['AI/ML', 'Simulation', 'Web']
  },
  {
    id: 22,
    title: 'Differential-Equation-by-PINN',
    description: 'This project leverages Physics-Informed Neural Networks (PINNs) to solve Bessel\'s and Legendre\'s differential equations, commonly found in physics and engineering. By embedding differential equations directly into the neural network\'s training process, we achieve accurate, data-driven solutions.',
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    techStack: ['Python', 'PINNs', 'Neural Networks', 'Differential Equations'],
    github: 'https://github.com/rajm012/Diifferential-Equation-by-PINN',
    demo: '',
    tags: ['AI/ML', 'Physics', 'Mathematics']
  },
  {
    id: 23,
    title: 'Safar',
    description: 'Safar is a full-stack travel story application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to document, manage, and share their travel experiences through stories, complete with features for searching, filtering, and favoriting.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'MERN Stack'],
    github: 'https://github.com/rajm012/Safar',
    demo: '',
    tags: ['Web', 'Full-Stack', 'Travel']
  },
  {
    id: 24,
    title: 'File-Encryption-Tool',
    description: 'This is a basic implementation of encryption where symmetric key encryption is used to encrypt content of any type of file and further one can decrypt their file by uploading their file.',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    techStack: ['Cryptography', 'Web Development', 'JavaScript', 'File Processing'],
    github: 'https://github.com/rajm012/File-Encryption-Tool',
    demo: '',
    tags: ['Security', 'Web', 'Encryption']
  },
  {
    id: 25,
    title: 'Transcript Generator',
    description: 'A simple web app to transcribe audio files and recordings using OpenAI\'s Whisper.',
    image: 'https://images.unsplash.com/photo-1619597455793-9a1572c5b1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    techStack: ['OpenAI', 'Whisper API', 'JavaScript', 'Web Development'],
    github: 'https://github.com/rajm012/transcript-generator',
    demo: '',
    tags: ['AI', 'Web', 'Audio Processing']
  },
  {
    id: 26,
    title: 'Simplex Visualizer',
    description: 'A Flask web application that solves linear programming problems using the Simplex method. It provides step-by-step matrix transformations and visualizes 2D & 3D inequalities where applicable.',
    image: 'https://images.unsplash.com/photo-1492962827063-e5ea0d8c01f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    techStack: ['Flask', 'Python', 'Mathematics', 'Data Visualization'],
    github: 'https://github.com/rajm012/simplex-visualizer',
    demo: '',
    tags: ['Web', 'Mathematics', 'Education']
  }
];

// Combine dummy and real projects
export const projects = [...dummyProjects, ...realProjects];
