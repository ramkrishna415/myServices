import { useState } from 'react';
import { Mail, Phone, Send, MessageCircle, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/services';

const contactSchema = {
  '@type': 'ContactPage',
  name: 'Contact Ramkrishna Upadhyay',
  description: 'Get in touch with Ramkrishna Upadhyay for website development, bug fixing, document modification, and AI chatbot development services.',
};

export default function ContactPage() {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.service) newErrors.service = 'Please select a service';
    if (!form.message.trim()) {
      newErrors.message = 'Please describe your project';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      const subject = `Project Inquiry: ${form.service} — from ${form.name}`;
      const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nService: ${form.service}\n\nProject Details:\n${form.message}`;
      window.location.href = `mailto:goluupadhyay600@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Ramkrishna, I would like to discuss a project with you.\n\nName: \nService needed: \nProject details: "
  );

  return (
    <div ref={ref}>
      <SEO
        title="Contact | Ramkrishna Upadhyay — Freelance Web Developer"
        description="Get in touch with Ramkrishna Upadhyay for professional website development, bug fixing, document modification, and AI chatbot development services. Email, phone, and WhatsApp available."
        keywords="contact web developer, hire freelance developer, Ramkrishna Upadhyay contact, website development inquiry, freelance web developer contact"
        canonicalPath="/contact"
        structuredData={{ '@context': 'https://schema.org', ...contactSchema }}
      />

      {/* Header */}
      <section className="hero-gradient pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-app text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider animate-fade-in-down">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 mb-6 animate-fade-in-up">
            Let's <span className="gradient-text">Build Together</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Have a project in mind? Send me a message and I will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding">
        <div className="container-app">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6 reveal">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Reach out through any of these channels. I am available for freelance projects worldwide.
                </p>
              </div>

              <a
                href="mailto:goluupadhyay600@gmail.com"
                className="card p-5 flex items-center gap-4 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    goluupadhyay600@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:6207448181"
                className="card p-5 flex items-center gap-4 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    +91 6207448181
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/916207448181?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl flex items-center gap-4 group block bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="text-sm text-green-100">WhatsApp</div>
                  <div className="font-semibold">Chat with me instantly</div>
                </div>
              </a>

              <div className="card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div className="font-semibold text-gray-900 dark:text-white">India — Working Worldwide</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal">
              <div className="card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Your email client should have opened with your message. If not, please email me directly at goluupadhyay600@gmail.com.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', phone: '', service: '', message: '' });
                      }}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                      Fill out the form below and I will respond within 24 hours.
                    </p>
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={form.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                              errors.name
                                ? 'border-red-500 focus:ring-red-500/20'
                                : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500/20 focus:border-blue-500'
                            }`}
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle size={14} /> {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                              errors.email
                                ? 'border-red-500 focus:ring-red-500/20'
                                : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500/20 focus:border-blue-500'
                            }`}
                            placeholder="you@example.com"
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle size={14} /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Phone <span className="text-gray-400">(optional)</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            placeholder="+91 12345 67890"
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Service <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="service"
                            value={form.service}
                            onChange={(e) => handleChange('service', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                              errors.service
                                ? 'border-red-500 focus:ring-red-500/20'
                                : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500/20 focus:border-blue-500'
                            }`}
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => (
                              <option key={s.slug} value={s.name}>{s.name}</option>
                            ))}
                            <option value="Other">Other / Not Sure</option>
                          </select>
                          {errors.service && (
                            <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                              <AlertCircle size={14} /> {errors.service}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Project Details <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={form.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                            errors.message
                              ? 'border-red-500 focus:ring-red-500/20'
                              : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500/20 focus:border-blue-500'
                          }`}
                          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle size={14} /> {errors.message}
                          </p>
                        )}
                      </div>

                      <button type="submit" className="btn-primary w-full text-base py-4">
                        Send Message <Send size={18} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
