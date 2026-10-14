import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import CTABanner from '@/components/CTABanner';
import { useReveal } from '@/hooks/useReveal';
import { projects, categories } from '@/data/projects';

export default function PortfolioPage() {
  const ref = useReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div ref={ref}>
      <SEO
        title="Portfolio | Web Development Projects by Ramkrishna Upadhyay"
        description="Explore the portfolio of Ramkrishna Upadhyay — featuring e-commerce platforms, analytics dashboards, AI chatbots, landing pages, and custom web applications built with React and Vite."
        keywords="web development portfolio, React projects, website development examples, freelance developer portfolio, AI chatbot projects"
        canonicalPath="/portfolio"
      />

      {/* Header */}
      <section className="hero-gradient pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-app text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider animate-fade-in-down">My Work</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 mb-6 animate-fade-in-up">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            A collection of websites, web applications, and AI chatbots I have built for clients across various industries.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="container-app">
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div key={project.id} className="card overflow-hidden group reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-xs font-semibold text-blue-600 dark:text-blue-400 backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500 dark:text-gray-400">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      <CTABanner title="Have a Project in Mind?" subtitle="Let's turn your idea into a polished, production-ready website or application." />
    </div>
  );
}
