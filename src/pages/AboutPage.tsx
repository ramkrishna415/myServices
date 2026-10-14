import { Link } from 'react-router-dom';
import { ArrowRight, Code2, GraduationCap, Briefcase, Lightbulb, Users, Target } from 'lucide-react';
import SEO from '@/components/SEO';
import CTABanner from '@/components/CTABanner';
import { useReveal } from '@/hooks/useReveal';
import { technologies } from '@/data/content';

const personSchema = {
  '@type': 'Person',
  name: 'Ramkrishna Upadhyay',
  jobTitle: 'Freelance Web Developer & Software Developer',
  email: 'goluupadhyay600@gmail.com',
  telephone: '+91-6207448181',
  qualification: 'B.Tech Graduate',
  knowsAbout: ['React', 'Vite', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Supabase', 'AI Integration'],
};

export default function AboutPage() {
  const ref = useReveal<HTMLDivElement>();

  const skills = [
    { name: 'React & Vite', level: 95 },
    { name: 'TypeScript & JavaScript', level: 92 },
    { name: 'Tailwind CSS & UI Design', level: 90 },
    { name: 'Node.js & Backend APIs', level: 85 },
    { name: 'Supabase & PostgreSQL', level: 85 },
    { name: 'AI Integration & Chatbots', level: 80 },
  ];

  const values = [
    { icon: Target, title: 'Goal-Oriented', desc: 'I focus on outcomes that matter — conversions, performance, and user satisfaction.' },
    { icon: Lightbulb, title: 'Problem Solver', desc: 'I enjoy tackling complex challenges and finding elegant, efficient solutions.' },
    { icon: Users, title: 'Client-Centric', desc: 'Your success is my priority. I listen, communicate clearly, and deliver beyond expectations.' },
    { icon: Code2, title: 'Quality First', desc: 'Clean, maintainable code built on best practices and modern development standards.' },
  ];

  return (
    <div ref={ref}>
      <SEO
        title="About | Ramkrishna Upadhyay — Freelance Web Developer"
        description="Meet Ramkrishna Upadhyay, a B.Tech graduate and freelance web developer specializing in React, Vite, and AI chatbot development. Learn about my skills, experience, and development approach."
        keywords="Ramkrishna Upadhyay, freelance web developer, B.Tech graduate, React developer, software developer, web developer India"
        canonicalPath="/about"
        structuredData={{ '@context': 'https://schema.org', ...personSchema }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">About Me</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 mb-6">
                Ramkrishna <span className="gradient-text">Upadhyay</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I am a B.Tech graduate and freelance web developer with a passion for building fast, beautiful, and functional digital products. I specialize in React, Vite, and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  <GraduationCap size={18} /> B.Tech Graduate
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  <Briefcase size={18} /> Freelance Developer
                </span>
              </div>
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Work With Me <ArrowRight size={20} />
              </Link>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-20" />
                <div className="relative card p-8 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/36706459/pexels-photo-36706459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Ramkrishna Upadhyay, freelance web developer, working at a dual monitor setup"
                    loading="eager"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-app max-w-3xl">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I Am</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I am Ramkrishna Upadhyay, a freelance web developer and software developer with a B.Tech degree and a deep passion for technology. I help businesses, startups, and individuals build, fix, and upgrade their digital products — from responsive websites to AI-powered chatbots.
              </p>
              <p>
                My journey in web development started during my engineering studies, where I discovered a love for creating things that people can interact with online. Since then, I have honed my skills in React, Vite, Tailwind CSS, and modern development tools, delivering projects that are fast, accessible, and visually impressive.
              </p>
              <p>
                I believe great software is not just about code — it is about understanding what users need and delivering an experience that feels effortless. Whether it is a business website that converts visitors into customers, a bug fix that saves a launch, or an AI chatbot that automates support, I bring the same level of dedication and craftsmanship to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Development Skills</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                A blend of frontend, backend, and AI skills that let me handle projects end-to-end.
              </p>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <div key={skill.name} style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                The tools and frameworks I use to build modern web applications.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technologies.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="card p-4 text-center"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">{tech.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Why work with me */}
      <section className="section-padding">
        <div className="container-app">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Development Approach</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide every project I work on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="card p-6 text-center reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/20">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why work with me */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-app max-w-3xl text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Me?</h2>
          <div className="space-y-4 text-left">
            {[
              'Direct communication — you work with me, not a project manager or agency',
              'Technical expertise across the full stack — frontend, backend, and AI',
              'Transparent pricing with no hidden fees or surprises',
              'Fast turnaround without sacrificing quality',
              'Post-launch support to ensure your product keeps running smoothly',
              'A genuine investment in your project\'s success',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight size={14} className="text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Let's Work Together" subtitle="I am available for freelance projects. Let's discuss how I can help you achieve your goals." />
    </div>
  );
}
