export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  liveDemoUrl: string;
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    name: 'E-Commerce Platform',
    description: 'Full-featured online store with product catalog, cart, and secure checkout.',
    longDescription: 'A complete e-commerce solution built with React and Supabase, featuring product search and filtering, shopping cart, secure payment integration, order management, and an admin dashboard for inventory control.',
    image: 'https://images.pexels.com/photos/17485352/pexels-photo-17485352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'E-commerce website with online checkout shown on a laptop screen',
    technologies: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'Stripe'],
    liveDemoUrl: '#',
    githubUrl: '#',
    category: 'Web Development',
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description: 'Real-time SaaS dashboard with charts, filters, and data visualization.',
    longDescription: 'A modern analytics dashboard for SaaS businesses, featuring real-time data visualization, customizable widgets, date range filters, export functionality, and role-based access control.',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Sleek laptop showing a data analytics dashboard with graphs and charts',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveDemoUrl: '#',
    githubUrl: '#',
    category: 'Web Development',
  },
  {
    id: 'restaurant-website',
    name: 'Restaurant Website',
    description: 'Elegant restaurant site with menu, reservations, and online ordering.',
    longDescription: 'A beautiful restaurant website with interactive menu, table reservation system, online ordering, and a content management system for easy menu updates. Mobile-first design optimized for local SEO.',
    image: 'https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A tablet displaying a restaurant website interface',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    liveDemoUrl: '#',
    githubUrl: '#',
    category: 'Web Development',
  },
  {
    id: 'ai-support-bot',
    name: 'AI Customer Support Bot',
    description: 'Intelligent support chatbot with natural language understanding.',
    longDescription: 'A custom AI chatbot integrated into a SaaS platform, trained on the company knowledge base. Handles 70% of support queries automatically, routes complex issues to human agents, and includes analytics on conversation quality.',
    image: 'https://images.pexels.com/photos/17560575/pexels-photo-17560575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A smartphone displaying an AI chatbot interface with conversational AI',
    technologies: ['React', 'OpenAI API', 'Node.js', 'Supabase'],
    liveDemoUrl: '#',
    githubUrl: '#',
    category: 'AI Chatbot',
  },
  {
    id: 'portfolio-site',
    name: 'Developer Portfolio',
    description: 'Modern developer portfolio with project showcase and blog.',
    longDescription: 'A high-performance personal portfolio website for a software engineer, featuring animated hero section, project gallery, technical blog with MDX, contact form, and dark mode support. SEO-optimized for personal brand visibility.',
    image: 'https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A programmer coding on an iMac, representing portfolio website development',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveDemoUrl: '#',
    githubUrl: '#',
    category: 'Web Development',
  },
  {
    id: 'mobile-app-landing',
    name: 'Mobile App Landing Page',
    description: 'High-converting landing page for a mobile app launch.',
    longDescription: 'A conversion-optimized landing page for a fitness mobile app, featuring animated hero, feature highlights, app store badges, testimonial carousel, and email capture form. Achieved a 45% conversion rate on launch.',
    image: 'https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A smartphone displaying a mobile app interface on a reflective surface',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    liveDemoUrl: '#',
    githubUrl: '#',
    category: 'Web Development',
  },
];

export const categories = ['All', 'Web Development', 'AI Chatbot'];
