export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'ml' | 'other';
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI/UX',
    longDescription: 'A comprehensive e-commerce platform built with Next.js, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard. Includes advanced features like product recommendations, inventory management, and order tracking.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'web',
    image: '/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
    year: 2024
  },
  {
    id: '2',
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI-powered features',
    longDescription: 'An intelligent chat application that leverages OpenAI GPT models for enhanced conversations. Features include real-time messaging, AI-powered responses, message history, user authentication, and customizable chat themes.',
    technologies: ['React', 'Node.js', 'Socket.io', 'OpenAI API', 'PostgreSQL'],
    category: 'ml',
    image: '/projects/ai-chat.jpg',
    githubUrl: 'https://github.com/username/ai-chat',
    liveUrl: 'https://ai-chat-demo.vercel.app',
    featured: true,
    year: 2024
  },
  {
    id: '3',
    title: 'Task Management Dashboard',
    description: 'Collaborative project management tool',
    longDescription: 'A comprehensive task management dashboard for teams with features like project creation, task assignment, progress tracking, team collaboration, file sharing, and detailed analytics. Built with modern web technologies for optimal performance.',
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Chart.js', 'Socket.io'],
    category: 'web',
    image: '/projects/task-manager.jpg',
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
    featured: false,
    year: 2023
  },
  {
    id: '4',
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with detailed forecasts',
    longDescription: 'A stunning weather application that provides detailed weather forecasts, interactive maps, weather alerts, and location-based recommendations. Features beautiful animations and intuitive user interface.',
    technologies: ['React Native', 'TypeScript', 'Weather API', 'Maps SDK'],
    category: 'mobile',
    image: '/projects/weather-app.jpg',
    githubUrl: 'https://github.com/username/weather-app',
    featured: false,
    year: 2023
  },
  {
    id: '5',
    title: 'Machine Learning Model Trainer',
    description: 'Platform for training and deploying ML models',
    longDescription: 'A comprehensive platform for data scientists to train, evaluate, and deploy machine learning models. Includes data preprocessing tools, model comparison, hyperparameter tuning, and automated deployment pipelines.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'AWS'],
    category: 'ml',
    image: '/projects/ml-trainer.jpg',
    githubUrl: 'https://github.com/username/ml-trainer',
    featured: true,
    year: 2024
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'Modern portfolio with animations and dark mode',
    longDescription: 'A modern, responsive portfolio website built with Next.js, MUI, and Framer Motion. Features smooth animations, dark/light mode toggle, contact form, and optimized performance.',
    technologies: ['Next.js', 'MUI', 'Framer Motion', 'TypeScript'],
    category: 'web',
    image: '/projects/portfolio.jpg',
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.vercel.app',
    featured: false,
    year: 2024
  }
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};
