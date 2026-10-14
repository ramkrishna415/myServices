import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Code2 } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | Ramkrishna Upadhyay"
        description="The page you are looking for does not exist. Browse my web development services, portfolio, or contact me directly."
        canonicalPath="/404"
      />
      <section className="min-h-[70vh] flex items-center justify-center hero-gradient pt-20">
        <div className="container-app text-center">
          <div className="relative inline-block mb-8">
            <h1 className="text-8xl md:text-9xl font-extrabold gradient-text">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 size={200} className="text-blue-500/5 -z-10" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Oops! The page you are looking for does not exist or has been moved. Let me help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home size={18} /> Back to Home
            </Link>
            <Link to="/services" className="btn-secondary">
              <ArrowLeft size={18} /> View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
