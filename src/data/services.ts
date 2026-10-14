import { Code2, Bug, FileText, Bot } from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  icon: typeof Code2;
  tagline: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  features: { title: string; description: string }[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  pricingNote: string;
  keywords: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceDetail[] = [
  {
    slug: 'website-development',
    path: '/website-development',
    name: 'Website Development',
    shortName: 'Web Development',
    icon: Code2,
    tagline: 'Fast, modern, responsive websites built with React and Vite',
    description:
      'Professional website development service for businesses, startups, and individuals. I build responsive, SEO-optimized websites using React, Vite, and Tailwind CSS — from landing pages to full-stack web applications. Every site is crafted for speed, accessibility, and conversions.',
    heroImage: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Wireframe design for a business website development project on paper',
    features: [
      { title: 'Business Websites', description: 'Professional company websites that establish credibility and generate leads with clean design and clear messaging.' },
      { title: 'Portfolio Websites', description: 'Personal and creative portfolio sites that showcase your work with elegant galleries and smooth interactions.' },
      { title: 'Landing Pages', description: 'High-converting single-page landing pages optimized for campaigns, product launches, and lead capture.' },
      { title: 'E-commerce Websites', description: 'Online stores with product catalogs, shopping carts, and secure checkout flows tailored to your business.' },
      { title: 'Full-Stack Applications', description: 'Complete web applications with authentication, dashboards, databases, and API integrations.' },
      { title: 'React / Vite Websites', description: 'Modern React applications built with Vite for blazing-fast performance and excellent developer experience.' },
    ],
    benefits: [
      'Mobile-first responsive design that looks great on every device',
      'SEO-optimized structure with semantic HTML and meta configuration',
      'Fast load times with code splitting and lazy loading',
      'Clean, maintainable code you own and can extend',
      'Dark mode support and modern UI/UX patterns',
      'Cross-browser compatibility and accessibility compliance',
    ],
    process: [
      { step: '01', title: 'Discovery & Planning', description: 'We discuss your goals, audience, and requirements. I create a project plan and wireframes.' },
      { step: '02', title: 'Design & Prototype', description: 'I design the visual layout and user experience, sharing interactive prototypes for feedback.' },
      { step: '03', title: 'Development', description: 'I build the website with React, Vite, and Tailwind CSS — clean, modular, and fully responsive.' },
      { step: '04', title: 'Testing & Launch', description: 'Cross-device testing, performance optimization, SEO setup, and deployment to your domain.' },
    ],
    faqs: [
      { question: 'How long does it take to build a website?', answer: 'A landing page typically takes 3-5 days, a business website 1-2 weeks, and a full-stack application 3-6 weeks depending on complexity. I provide a timeline estimate after our initial discussion.' },
      { question: 'Do you use React for all websites?', answer: 'I specialize in React and Vite for modern web development. For simpler static sites, I can also use plain HTML/CSS/JS if that better suits your needs and budget.' },
      { question: 'Will my website be mobile-friendly?', answer: 'Absolutely. Every website I build follows a mobile-first responsive design approach, ensuring it looks and works perfectly on phones, tablets, and desktops.' },
      { question: 'Can you help with hosting and deployment?', answer: 'Yes. I handle deployment to platforms like Vercel, Netlify, or your preferred hosting provider, and configure your custom domain and SSL.' },
      { question: 'Do you provide ongoing maintenance?', answer: 'Yes, I offer maintenance packages for updates, security patches, and new features after launch.' },
    ],
    pricingNote: 'Projects start at $199 for landing pages. Request a quote for your specific needs.',
    keywords: 'website development services, React website development, business website development, custom website development, freelance web developer, React developer, professional web developer',
    metaTitle: 'Website Development Services | React & Vite Developer',
    metaDescription: 'Professional website development services by Ramkrishna Upadhyay. Build fast, responsive, SEO-optimized websites with React and Vite. Landing pages, e-commerce, full-stack apps.',
  },
  {
    slug: 'bug-fixing',
    path: '/bug-fixing',
    name: 'Website Bug Fixing',
    shortName: 'Bug Fixing',
    icon: Bug,
    tagline: 'Fast, reliable bug fixing for React, JavaScript, and full-stack applications',
    description:
      'Professional website bug fixing service. I diagnose and resolve React errors, JavaScript bugs, frontend issues, backend/API problems, database errors, deployment failures, and responsive design problems — getting your application back on track quickly.',
    heroImage: 'https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'A programmer debugging code on a computer with dual monitors',
    features: [
      { title: 'React Errors', description: 'Fix component rendering issues, state management bugs, hook errors, and React warnings.' },
      { title: 'JavaScript Errors', description: 'Resolve type errors, undefined references, async issues, and unexpected behavior in vanilla JS or frameworks.' },
      { title: 'Frontend Bugs', description: 'Fix layout issues, CSS problems, broken interactions, and cross-browser compatibility errors.' },
      { title: 'Backend / API Problems', description: 'Debug server errors, API response issues, authentication failures, and data flow problems.' },
      { title: 'Database Problems', description: 'Resolve SQL query errors, connection issues, data inconsistencies, and migration problems.' },
      { title: 'Deployment Issues', description: 'Fix build failures, environment configuration, DNS issues, and hosting deployment errors.' },
    ],
    benefits: [
      'Fast turnaround — most bugs fixed within 24-48 hours',
      'Root-cause analysis so the same issue does not recur',
      'Clear explanation of what went wrong and how it was fixed',
      'No risky hacks — only clean, proper solutions',
      'Detailed code review to catch related issues',
      'Support for React, Vite, Node.js, Supabase, and more',
    ],
    process: [
      { step: '01', title: 'Report & Reproduce', description: 'You share the error details, screenshots, or repo access. I reproduce the issue locally.' },
      { step: '02', title: 'Diagnose Root Cause', description: 'I trace the bug to its source through code review, debugging tools, and testing.' },
      { step: '03', title: 'Fix & Test', description: 'I implement a clean fix, test it across scenarios, and verify no regressions occur.' },
      { step: '04', title: 'Deliver & Explain', description: 'I deliver the fix with a clear explanation of the root cause and prevention tips.' },
    ],
    faqs: [
      { question: 'How quickly can you fix a bug?', answer: 'Most bugs are diagnosed and fixed within 24-48 hours. Critical production issues can be addressed urgently — just let me know the severity.' },
      { question: 'Do you need access to my codebase?', answer: 'Yes, typically I need repository access or a shared code snippet. For deployment issues, temporary access to the hosting environment may be needed.' },
      { question: 'What types of bugs do you fix?', answer: 'React errors, JavaScript bugs, CSS and layout problems, API and backend issues, database errors, deployment failures, and responsive design problems. If it is a web development issue, I can help.' },
      { question: 'Will you fix related issues you find?', answer: 'I will flag any related issues I discover during diagnosis. I will fix minor ones at no extra cost and quote larger ones separately.' },
      { question: 'Can you fix bugs in code I did not write?', answer: 'Yes. I regularly work with existing codebases, including inherited projects and code written by other developers.' },
    ],
    pricingNote: 'Bug fixes start at $29 per issue. Hourly rates available for larger debugging projects.',
    keywords: 'website bug fixing, React bug fixing, JavaScript bug fixing, website error fixing, frontend bug fixing, React developer, freelance web developer',
    metaTitle: 'Website Bug Fixing Services | React & JavaScript Error Fixing',
    metaDescription: 'Fast website bug fixing service by Ramkrishna Upadhyay. Fix React errors, JavaScript bugs, frontend issues, API problems, and deployment failures. 24-48 hour turnaround.',
  },
  {
    slug: 'document-modification',
    path: '/document-modification',
    name: 'Document Modification',
    shortName: 'Documents',
    icon: FileText,
    tagline: 'Professional document editing, formatting, and conversion services',
    description:
      'Document modification service for PDFs, resumes, reports, and more. I handle PDF editing, document formatting, resume and CV modification, content editing, file conversion, and layout fixes — delivering polished, professional documents ready for use.',
    heroImage: 'https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'A laptop showing a document with a form on screen for document modification',
    features: [
      { title: 'PDF Editing', description: 'Modify text, images, pages, and metadata in PDF files. Merge, split, compress, and restructure PDFs.' },
      { title: 'Document Formatting', description: 'Apply consistent formatting — fonts, spacing, margins, headers, footers, and styles across your document.' },
      { title: 'Resume / CV Modification', description: 'Professional resume formatting, content refinement, and ATS-friendly layout optimization.' },
      { title: 'Content Modification', description: 'Edit and refine text content for clarity, grammar, tone, and professional presentation.' },
      { title: 'File Conversion', description: 'Convert between PDF, DOCX, HTML, Markdown, and other formats while preserving formatting.' },
      { title: 'Layout & Formatting Fixes', description: 'Fix broken layouts, misaligned content, page breaks, and visual inconsistencies in any document.' },
    ],
    benefits: [
      'Professional, polished documents that make the right impression',
      'ATS-friendly resume formatting for better job application results',
      'Preserved formatting and data integrity during conversions',
      'Fast turnaround — most documents completed within 24 hours',
      'Confidential handling of all your documents',
      'Unlimited revisions until you are satisfied',
    ],
    process: [
      { step: '01', title: 'Share Document', description: 'Send your document and tell me what changes you need. I confirm scope and timeline.' },
      { step: '02', title: 'Modify & Format', description: 'I apply the requested modifications — editing, formatting, converting, or restructuring.' },
      { step: '03', title: 'Review & Revise', description: 'You review the result. I make unlimited revisions until it meets your expectations.' },
      { step: '04', title: 'Deliver', description: 'I deliver the final document in your preferred format, ready for immediate use.' },
    ],
    faqs: [
      { question: 'What file formats do you support?', answer: 'I work with PDF, DOCX, DOC, TXT, HTML, Markdown, and image formats. If you have a specific format need, just ask.' },
      { question: 'Can you make my resume ATS-friendly?', answer: 'Yes. I format resumes with clean structure, standard headings, and keyword optimization so they pass Applicant Tracking Systems used by most employers.' },
      { question: 'How long does document modification take?', answer: 'Most documents are completed within 24 hours. Complex or long documents may take 1-2 days. Rush delivery is available.' },
      { question: 'Is my document kept confidential?', answer: 'Absolutely. All documents are handled with strict confidentiality and are not shared with any third party. I can sign an NDA if required.' },
      { question: 'Do you offer revisions?', answer: 'Yes, unlimited revisions are included until you are completely satisfied with the result.' },
    ],
    pricingNote: 'Document services start at $15 per document. Resume packages from $25.',
    keywords: 'document modification services, PDF modification, resume modification, document formatting, file conversion, CV formatting',
    metaTitle: 'Document Modification Services | PDF Editing & Resume Formatting',
    metaDescription: 'Professional document modification by Ramkrishna Upadhyay. PDF editing, resume and CV formatting, file conversion, and document layout fixes. Fast 24-hour turnaround.',
  },
  {
    slug: 'ai-chatbot-development',
    path: '/ai-chatbot-development',
    name: 'AI Chatbot Development',
    shortName: 'AI Chatbots',
    icon: Bot,
    tagline: 'Custom AI chatbots for websites, customer support, and business automation',
    description:
      'AI chatbot development service for websites and businesses. I build custom AI assistants, customer-support chatbots, FAQ bots, and AI integrations that automate conversations, answer questions, and improve user engagement — powered by modern AI APIs.',
    heroImage: 'https://images.pexels.com/photos/32021560/pexels-photo-32021560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'A smartphone displaying an AI chat interface showcasing chatbot technology',
    features: [
      { title: 'Website AI Assistants', description: 'Intelligent chatbots embedded on your website that guide visitors, answer questions, and capture leads 24/7.' },
      { title: 'Customer Support Chatbots', description: 'Automated support bots that handle common queries, route complex issues, and reduce response times.' },
      { title: 'FAQ Chatbots', description: 'Chatbots trained on your FAQ content to provide instant, accurate answers to frequent customer questions.' },
      { title: 'AI Integrations', description: 'Connect AI capabilities to your existing systems — CRM, databases, and APIs for intelligent automation.' },
      { title: 'Custom AI Solutions', description: 'Bespoke AI tools and features designed for your specific business needs and workflows.' },
      { title: 'Business Automation', description: 'Automate repetitive tasks — data entry, follow-ups, scheduling — with AI-powered workflows.' },
    ],
    benefits: [
      '24/7 automated customer engagement without adding headcount',
      'Reduced support costs and faster response times',
      'Lead capture and qualification through conversational flows',
      'Seamless integration with your website and existing tools',
      'Custom-trained on your content for accurate, relevant responses',
      'Scalable — handles one conversation or thousands simultaneously',
    ],
    process: [
      { step: '01', title: 'Define Use Case', description: 'We identify the chatbot purpose, target audience, and key conversations it needs to handle.' },
      { step: '02', title: 'Design & Train', description: 'I design the conversation flow and train the AI on your content, FAQs, and business data.' },
      { step: '03', title: 'Build & Integrate', description: 'I develop the chatbot and integrate it into your website or platform with a custom UI.' },
      { step: '04', title: 'Test & Deploy', description: 'I test conversation quality, deploy the chatbot, and provide ongoing tuning and improvements.' },
    ],
    faqs: [
      { question: 'What AI technology do you use for chatbots?', answer: 'I integrate modern AI APIs (such as OpenAI) and can build custom solutions with framework-specific implementations. The choice depends on your needs, budget, and data privacy requirements.' },
      { question: 'Can the chatbot learn from my website content?', answer: 'Yes. I train chatbots on your FAQ pages, product information, and documentation so they provide accurate, context-aware answers about your business.' },
      { question: 'How long does it take to build an AI chatbot?', answer: 'A basic FAQ chatbot takes 3-5 days. A custom AI assistant with integrations takes 1-3 weeks depending on complexity and training data.' },
      { question: 'Can the chatbot hand off to a human?', answer: 'Yes. Chatbots can detect when a human is needed and seamlessly route the conversation to your support team with full context.' },
      { question: 'Do you provide ongoing chatbot maintenance?', answer: 'Yes. I offer maintenance packages that include conversation tuning, content updates, and performance monitoring to keep your chatbot accurate and effective.' },
    ],
    pricingNote: 'AI chatbot projects start at $299. Custom integrations quoted based on scope.',
    keywords: 'AI chatbot development, AI chatbot for website, custom AI chatbot, customer support chatbot, FAQ chatbot, AI integration, business automation',
    metaTitle: 'AI Chatbot Development Services | Custom AI Chatbots for Websites',
    metaDescription: 'Custom AI chatbot development by Ramkrishna Upadhyay. Build AI assistants, customer support chatbots, and FAQ bots for your website. Automate engagement 24/7.',
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
