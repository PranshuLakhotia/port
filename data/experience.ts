export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'project' | 'education';
  description: string[];
  technologies: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    duration: 'Jan 2024 - Present',
    type: 'work',
    current: true,
    description: [
      'Developed and maintained multiple web applications using React, Next.js, and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive designs and optimized application performance',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    id: '2',
    title: 'Frontend Developer Intern',
    company: 'StartupXYZ',
    location: 'San Francisco, CA',
    duration: 'Jun 2023 - Dec 2023',
    type: 'work',
    description: [
      'Built responsive web interfaces using React and TypeScript',
      'Collaborated with UI/UX designers to implement pixel-perfect designs',
      'Optimized application performance and improved loading times by 40%',
      'Participated in agile development processes and daily standups'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma']
  },
  {
    id: '3',
    title: 'AI-Powered E-commerce Platform',
    company: 'Final Year Project',
    location: 'University',
    duration: 'Aug 2023 - May 2024',
    type: 'project',
    description: [
      'Developed a full-stack e-commerce platform with AI-powered product recommendations',
      'Implemented machine learning algorithms for personalized user experiences',
      'Built RESTful APIs and integrated payment gateways',
      'Achieved 95% accuracy in product recommendation system'
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL']
  },
  {
    id: '4',
    title: 'Web Development Bootcamp',
    company: 'Coding Academy',
    location: 'Online',
    duration: 'Jan 2023 - May 2023',
    type: 'education',
    description: [
      'Completed intensive 500+ hour full-stack web development program',
      'Built 10+ projects including e-commerce sites, social media apps, and APIs',
      'Learned modern web technologies and best practices',
      'Collaborated on team projects using Git and agile methodologies'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
  },
  {
    id: '5',
    title: 'Bachelor of Technology',
    company: 'XYZ University',
    location: 'India',
    duration: '2020 - 2024',
    type: 'education',
    description: [
      'Computer Science and Engineering with specialization in AI/ML',
      'Relevant coursework: Data Structures, Algorithms, Machine Learning, Web Development',
      'CGPA: 8.5/10',
      'Active member of coding club and tech societies'
    ],
    technologies: ['Python', 'Java', 'C++', 'Machine Learning', 'Data Structures']
  },
  {
    id: '6',
    title: 'Task Management System',
    company: 'Academic Project',
    location: 'University',
    duration: 'Feb 2023 - Apr 2023',
    type: 'project',
    description: [
      'Developed a collaborative task management system for teams',
      'Implemented real-time updates using WebSocket connections',
      'Built responsive UI with drag-and-drop functionality',
      'Integrated user authentication and role-based access control'
    ],
    technologies: ['Vue.js', 'Express.js', 'Socket.io', 'MongoDB', 'JWT']
  }
];

export const getExperiencesByType = (type: string) => {
  if (type === 'all') return experiences;
  return experiences.filter(exp => exp.type === type);
};

export const experienceTypes = [
  { key: 'all', label: 'All' },
  { key: 'work', label: 'Work Experience' },
  { key: 'project', label: 'Projects' },
  { key: 'education', label: 'Education' },
];
