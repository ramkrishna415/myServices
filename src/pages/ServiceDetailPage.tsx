import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, Shield, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import RelatedServices from '@/components/RelatedServices';
import { useReveal } from '@/hooks/useReveal';
import { ServiceDetail } from '@/data/services';

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const ref = useReveal<HTMLDivElement>();
  const Icon = service.icon;

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const serviceSchema = {
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    provider: {
      '@type': 'Person',
      name: 'Ramkrishna Upadhyay',
      email: 'goluupadhyay600@gmail.com',
      telephone: '+91-6207448181',
    },
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      description: service.pricingNote,
    },
  };

  return (
    <div ref={ref}>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        canonicalPath={service.path}
        structuredData={[
          { '@context': 'https://schema.org', ...faqSchema },
          { '@context': 'https://schema.org', ...serviceSchema },
        ]}
      />

      {/* Hero */}
      <section className="hero-gradient pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float" />
        </div>
        <div className="container-app relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 animate-fade-in-down" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
              <span>/</span>
              <span className="text-gray-700 dark:text-gray-300">{service.shortName}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                <Icon size={32} />
              </div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{service.shortName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-up delay-100">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up delay-200">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Request This Service <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn-secondary text-base px-8 py-4">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container-app -mt-12 md:-mt-16 relative z-20">
        <div className="rounded-2xl overflow-hidden shadow-2xl reveal">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            loading="eager"
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-app">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive {service.name.toLowerCase()} solutions covering all your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="card p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <Check size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Why choose my {service.name.toLowerCase()} service? Here is what you get.
              </p>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ transitionDelay: `${i * 60}ms` }}>
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { icon: Clock, title: 'Fast Turnaround', value: '24-48h' },
                { icon: Shield, title: 'Quality Assured', value: '100%' },
                { icon: Zap, title: 'Modern Stack', value: 'React+Vite' },
                { icon: Check, title: 'Satisfaction', value: 'Guaranteed' },
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <div key={i} className="card p-6 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-3">
                      <StatIcon size={24} />
                    </div>
                    <div className="text-2xl font-extrabold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-app">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A clear, step-by-step process for your {service.name.toLowerCase()} project.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="relative reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl font-extrabold text-blue-100 dark:text-blue-950 mb-2">{step.step}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                {i < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-3 text-blue-200 dark:text-blue-900">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-app max-w-3xl text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{service.pricingNote}</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        faqs={service.faqs}
        title={`${service.name} FAQs`}
        subtitle={`Common questions about my ${service.name.toLowerCase()} service.`}
      />

      {/* Related */}
      <RelatedServices currentSlug={service.slug} />

      {/* CTA */}
      <CTABanner
        title={`Ready to Start Your ${service.shortName} Project?`}
        subtitle="Let's discuss your requirements and get started today."
      />
    </div>
  );
}
