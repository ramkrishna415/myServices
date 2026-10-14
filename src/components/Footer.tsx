import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container-app py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-4" aria-label="Ramkrishna Upadhyay home">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                <Code2 size={20} />
              </span>
              <span>
                <span className="text-blue-600 dark:text-blue-400">Ramkrishna</span> Upadhyay
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Freelance web developer and software developer specializing in React, bug fixing, document modification, and AI chatbot development.
            </p>
            <div className="flex gap-3">
              <a href="mailto:goluupadhyay600@gmail.com" className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="tel:6207448181" className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Phone">
                <Phone size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.path}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">All Services</Link></li>
              <li><Link to="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Me</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-4">Get In Touch</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Ready to start your project? Let's talk about how I can help.
            </p>
            <a href="mailto:goluupadhyay600@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mb-1">
              goluupadhyay600@gmail.com
            </a>
            <a href="tel:6207448181" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mb-4">
              +91 6207448181
            </a>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Contact Me <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Ramkrishna Upadhyay. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
