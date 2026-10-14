export interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Startup Founder',
    company: 'TechVenture Inc.',
    message: 'Ramkrishna built our entire web platform from scratch. His React skills are outstanding and he delivered ahead of schedule. The site is fast, beautiful, and exactly what we envisioned.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    message: 'We had a critical bug breaking our checkout. Ramkrishna diagnosed and fixed it within hours. Professional, responsive, and genuinely skilled. Highly recommend his bug fixing service.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'HR Manager',
    company: 'GlobalReach',
    message: 'I needed my resume reformatted for ATS systems. Ramkrishna delivered a polished, professional document that got me through to more interviews. Excellent document modification service.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'E-commerce Owner',
    company: 'ShopSmart',
    message: 'The AI chatbot Ramkrishna built for our store handles customer questions 24/7. It has reduced our support tickets by 60%. Incredible work and seamless integration.',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'Product Manager',
    company: 'InnovateHub',
    message: 'Ramkrishna rebuilt our landing page and conversions jumped 40%. His attention to detail and understanding of UX is top-notch. Will definitely work with him again.',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'Small Business Owner',
    company: 'Patel Enterprises',
    message: 'From concept to launch, Ramkrishna handled everything for our business website. Professional, communicative, and technically excellent. Could not be happier with the result.',
    rating: 5,
  },
];

export const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Vite', category: 'Build Tool' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'OpenAI API', category: 'AI' },
  { name: 'Git', category: 'Tools' },
  { name: 'REST APIs', category: 'Integration' },
  { name: 'Stripe', category: 'Payments' },
];

export const homeFaqs = [
  { question: 'What services do you offer?', answer: 'I offer four core services: website development, website bug fixing, document modification, and AI chatbot development. Each is tailored to your specific needs and delivered with professional quality.' },
  { question: 'How much do your services cost?', answer: 'Pricing depends on project scope and complexity. Website development starts at $199, bug fixing from $29 per issue, document modification from $15, and AI chatbot development from $299. Contact me for a detailed quote.' },
  { question: 'How long does a project take?', answer: 'Timelines vary by project. Landing pages take 3-5 days, business websites 1-2 weeks, bug fixes 24-48 hours, and AI chatbots 1-3 weeks. I provide a specific timeline after understanding your requirements.' },
  { question: 'Do you work with clients remotely?', answer: 'Yes, I work with clients globally. All communication, file sharing, and project management happen online, making collaboration seamless regardless of location.' },
  { question: 'Can you work with my existing codebase?', answer: 'Absolutely. I regularly work with existing codebases, including inherited projects and code written by other developers. I can extend, debug, or refactor any React or JavaScript project.' },
  { question: 'Do you provide support after project completion?', answer: 'Yes. All projects include a support period, and I offer ongoing maintenance packages for updates, security patches, and new features. Your success is my priority.' },
];
