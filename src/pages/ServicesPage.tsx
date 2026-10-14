import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import CTABanner from '@/components/CTABanner';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/services';

const SERVICE_LIST_SCHEMA = {
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `https://ramkrishnaupadhyay.dev${s.path}`,
  })),
};

export default function ServicesPage() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <SEO
        title="Services | Website Development, Bug Fixing, AI Chatbots & More"
        description="Explore professional web development services by Ramkrishna Upadhyay: website development, bug fixing, document modification, and AI chatbot development. Custom solutions for businesses."
        keywords="website development services, website bug fixing, document modification, AI chatbot development, freelance web developer, React developer, custom website development"
        canonicalPath="/services"
        structuredData={{ '@context': 'https://schema.org', ...SERVICE_LIST_SCHEMA }}
      />

      {/* Header */}
      <section className="hero-gradient pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-app text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider animate-fade-in-down">My Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 mb-6 animate-fade-in-up">
            Professional <span className="gradient-text">Web Development</span> Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            From building modern websites to fixing bugs, modifying documents, and developing AI chatbots — I offer comprehensive digital solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-app">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.slug} className="card p-8 group reveal">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f.title} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Check size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        {f.title}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.path} className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                    Explore {service.shortName} <ArrowRight size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-app">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Working Process</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A proven, transparent process that ensures quality results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs, goals, and project scope.' },
              { step: '02', title: 'Planning', desc: 'Creating a roadmap, timeline, and technical approach.' },
              { step: '03', title: 'Development', desc: 'Building with clean code and regular progress updates.' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support.' },
            ].map((item, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-blue-500/20">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Not Sure Which Service You Need?" subtitle="Send me a message and I will help you figure out the best approach for your project." />
    </div>
  );
}
