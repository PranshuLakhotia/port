export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'ml' | 'tools';
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    level: 90,
    category: 'frontend',
  },
  {
    name: 'Next.js',
    level: 85,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    level: 88,
    category: 'frontend',
  },
  {
    name: 'Vue.js',
    level: 75,
    category: 'frontend',
  },
  {
    name: 'HTML/CSS',
    level: 95,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    category: 'frontend',
  },
  {
    name: 'Material-UI',
    level: 85,
    category: 'frontend',
  },
  {
    name: 'Framer Motion',
    level: 80,
    category: 'frontend',
  },

  // Backend
  {
    name: 'Node.js',
    level: 85,
    category: 'backend',
  },
  {
    name: 'Express.js',
    level: 80,
    category: 'backend',
  },
  {
    name: 'Python',
    level: 88,
    category: 'backend',
  },
  {
    name: 'FastAPI',
    level: 75,
    category: 'backend',
  },
  {
    name: 'MongoDB',
    level: 82,
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    level: 78,
    category: 'backend',
  },
  {
    name: 'Redis',
    level: 70,
    category: 'backend',
  },
  {
    name: 'GraphQL',
    level: 72,
    category: 'backend',
  },

  // ML/AI
  {
    name: 'TensorFlow',
    level: 80,
    category: 'ml',
  },
  {
    name: 'PyTorch',
    level: 75,
    category: 'ml',
  },
  {
    name: 'Scikit-learn',
    level: 85,
    category: 'ml',
  },
  {
    name: 'Pandas',
    level: 90,
    category: 'ml',
  },
  {
    name: 'NumPy',
    level: 88,
    category: 'ml',
  },
  {
    name: 'OpenAI API',
    level: 82,
    category: 'ml',
  },
  {
    name: 'Computer Vision',
    level: 75,
    category: 'ml',
  },
  {
    name: 'NLP',
    level: 78,
    category: 'ml',
  },

  // Tools
  {
    name: 'Git',
    level: 90,
    category: 'tools',
  },
  {
    name: 'Docker',
    level: 80,
    category: 'tools',
  },
  {
    name: 'AWS',
    level: 75,
    category: 'tools',
  },
  {
    name: 'Vercel',
    level: 85,
    category: 'tools',
  },
  {
    name: 'Figma',
    level: 78,
    category: 'tools',
  },
  {
    name: 'VS Code',
    level: 95,
    category: 'tools',
  },
  {
    name: 'Postman',
    level: 85,
    category: 'tools',
  },
  {
    name: 'Webpack',
    level: 70,
    category: 'tools',
  },
];

export const getSkillsByCategory = (category: string) => {
  if (category === 'all') return skills;
  return skills.filter(skill => skill.category === category);
};

export const skillCategories = [
  { key: 'all', label: 'All Skills' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'ml', label: 'ML/AI' },
  { key: 'tools', label: 'Tools' },
];
