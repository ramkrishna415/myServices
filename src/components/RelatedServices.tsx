import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

interface RelatedServicesProps {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-app">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 reveal">Related Services</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 reveal max-w-2xl mx-auto">
          Explore other ways I can help you build, fix, and grow your digital products.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={service.path}
                className="card p-6 group reveal block"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{service.tagline}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

