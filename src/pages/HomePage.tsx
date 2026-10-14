import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Rocket, Shield, Zap, Clock, MessageSquare } from 'lucide-react';
import SEO from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/services';
import { testimonials, technologies, homeFaqs } from '@/data/content';
import { projects } from '@/data/projects';

const SITE_URL = 'https://ramkrishnaupadhyay.dev';

const personSchema = {
  '@type': 'Person',
  name: 'Ramkrishna Upadhyay',
  jobTitle: 'Freelance Web Developer & Software Developer',
  email: 'goluupadhyay600@gmail.com',
  telephone: '+91-6207448181',
  qualification: 'B.Tech Graduate',
  url: SITE_URL,
  knowsAbout: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'AI Chatbot Development', 'Website Bug Fixing'],
};

const professionalServiceSchema = {
  '@type': 'ProfessionalService',
  name: 'Ramkrishna Upadhyay - Web Development Services',
  description: 'Professional website development, bug fixing, document modification, and AI chatbot development services.',
  url: SITE_URL,
  provider: { '@type': 'Person', name: 'Ramkrishna Upadhyay' },
  areaServed: 'Worldwide',
  offers: services.map((s) => ({
    '@type': 'Offer',
    name: s.name,
    description: s.tagline,
  })),
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function HomePage() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <SEO
        title="Ramkrishna Upadhyay | Freelance Web Developer & Software Developer"
        description="Professional freelance web developer offering website development, bug fixing, document modification, and AI chatbot development services. Build, fix & upgrade your digital products with React and Vite."
        keywords="freelance web developer, website development services, React developer, website bug fixing, AI chatbot development, document modification, professional web developer, custom website development"
        canonicalPath="/"
        structuredData={[
          { '@context': 'https://schema.org', ...personSchema },
          { '@context': 'https://schema.org', ...professionalServiceSchema },
          { '@context': 'https://schema.org', ...faqSchema },
        ]}
      />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float delay-300" />
        </div>
        <div className="container-app relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for projects
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Build, Fix &amp; Upgrade
              <br />
              <span className="gradient-text">Your Digital Products</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              Professional website development, bug fixing, document modification and AI chatbot development by Ramkrishna Upadhyay.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-secondary text-base px-8 py-4">
                View Services
              </Link>
              <Link to="/contact" className="btn-ghost text-base">
                Contact Me
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '40+', label: 'Happy Clients' },
              { value: '4+', label: 'Years Experience' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-app">
          <div className="text-center mb-16 reveal">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">What I Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Services I Offer</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              From building new websites to fixing bugs, modifying documents, and developing AI chatbots — I provide end-to-end digital solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={service.path}
                  className="card p-8 group reveal block"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{service.tagline}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Why Choose Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Quality work, delivered on time
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                I am committed to delivering professional, high-quality results that exceed expectations. Here is what sets me apart.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Rocket, title: 'Fast Delivery', desc: 'Projects completed on schedule without compromising quality.' },
                  { icon: Shield, title: 'Clean, Secure Code', desc: 'Maintainable, well-structured code that follows best practices.' },
                  { icon: Zap, title: 'Performance Focused', desc: 'Optimized for speed, SEO, and Core Web Vitals.' },
                  { icon: MessageSquare, title: 'Clear Communication', desc: 'Regular updates and transparent collaboration throughout.' },
                  { icon: Clock, title: 'Ongoing Support', desc: 'Post-launch support and maintenance to keep things running.' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4" style={{ transitionDelay: `${i * 80}ms` }}>
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="reveal">
              <div className="card p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 border-blue-200 dark:border-blue-900">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">5.0 Rating</span>
                </div>
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "Ramkrishna rebuilt our landing page and conversions jumped 40%. His attention to detail and understanding of UX is top-notch."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    ET
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Emma Thompson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Product Manager, InnovateHub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding">
        <div className="container-app">
          <div className="text-center mb-12 reveal">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">My Toolkit</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Technologies I Work With</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, i) => (
              <div
                key={tech.name}
                className="card p-6 text-center reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="font-semibold text-gray-900 dark:text-white">{tech.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-app">
          <div className="text-center mb-12 reveal">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Recent Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of websites, applications, and AI chatbots I have built for clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <div key={project.id} className="card overflow-hidden group reveal">
                <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link to="/portfolio" className="btn-secondary">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-app">
          <div className="text-center mb-16 reveal">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Four simple steps from idea to launch. Clear, transparent, and efficient.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discuss', desc: 'Share your project requirements and goals. I provide a quote and timeline.' },
              { step: '02', title: 'Plan', desc: 'I create a detailed plan with milestones, design mockups, and technical approach.' },
              { step: '03', title: 'Build', desc: 'I develop your project with clean code, regular updates, and feedback rounds.' },
              { step: '04', title: 'Launch', desc: 'Testing, optimization, deployment, and post-launch support.' },
            ].map((item, i) => (
              <div key={i} className="relative reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl font-extrabold text-blue-100 dark:text-blue-950 mb-2">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 -right-3 text-blue-200 dark:text-blue-900">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-app">
          <div className="text-center mb-12 reveal">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Client Feedback</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">"{t.message}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion faqs={homeFaqs} subtitle="Answers to common questions about my services and process." />

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
