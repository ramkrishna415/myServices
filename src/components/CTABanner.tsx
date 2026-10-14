import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = 'Ready to Build Something Great?',
  subtitle = "Let's discuss your project and bring your ideas to life. Get a free consultation today.",
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="container-app">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 animate-gradient p-8 md:p-16 text-center reveal">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-blue-700 bg-white hover:bg-blue-50 shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Get Started <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/916207448181?text=Hi%20Ramkrishna,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                <Phone size={20} /> WhatsApp Me
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
              <a href="mailto:goluupadhyay600@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} /> goluupadhyay600@gmail.com
              </a>
              <a href="tel:6207448181" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={18} /> +91 6207448181
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
