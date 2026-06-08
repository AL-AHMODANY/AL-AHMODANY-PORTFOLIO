import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Github, FileText, Send, CheckCircle, Loader, ChevronDown, Phone } from 'lucide-react';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const subjects = ['Freelance Project', 'Job Opportunity', 'Collaboration', 'General Inquiry'];

  const contactItems = [
    { label: 'Email', value: 'rahmanhamad36@gmail.com', sub: 'Best place to reach me directly', icon: Mail },
    { label: 'Phone', value: '+234 812 911 7778', sub: 'Available for calls and WhatsApp', icon: Phone },
    { label: 'Location', value: 'Remote Worldwide', sub: 'Flexible across time zones', icon: MapPin },
    { label: 'Response Time', value: 'Within 24 Hours', sub: 'Often faster on weekdays', icon: Clock },
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/AL-AHMODANY', icon: Github, external: true },
    { label: 'Email', href: 'mailto:rahmanhamad36@gmail.com', icon: Mail, external: false },
    { label: 'WhatsApp', href: 'https://wa.me/2348129117778', icon: WhatsAppIcon, external: true },
    { label: 'Phone', href: 'tel:+2348129117778', icon: Phone, external: false },
  ];

  const [faqs, setFaqs] = useState([
    {
      q: 'What kinds of work do you usually take on?',
      a: 'Mostly frontend product work: React applications, dashboards, landing pages, storefronts, admin panels, and interface improvement projects.',
      open: false,
    },
    {
      q: 'How long does a typical project take?',
      a: 'It depends on scope, but smaller marketing or landing page work can take about a week while fuller product interfaces often run for several weeks.',
      open: false,
    },
    {
      q: 'Can you work from designs or rough ideas?',
      a: 'Both. I can translate Figma files carefully into code, or help shape a cleaner interface when the idea is still early and loosely defined.',
      open: false,
    },
    {
      q: 'Do you handle revisions and iteration after delivery?',
      a: 'Yes. I prefer collaborative feedback loops because they usually produce better final work and smoother launches.',
      open: false,
    },
    {
      q: 'Are you open to remote long-term opportunities?',
      a: 'Yes. If the product, team, and frontend expectations are a strong fit, I am open to longer partnerships and remote roles.',
      open: false,
    },
  ]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);
    
    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/xdkovgka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Contact Form',
          message: form.message,
          _replyto: form.email,
          _subject: `Portfolio Contact: ${form.subject || 'New Message'}`,
        }),
      });

      if (response.ok) {
        setSending(false);
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setSending(false);
      alert('Failed to send message. Please try again or contact me directly at rahmanhamad36@gmail.com');
    }
  };

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => 
      i === index ? { ...faq, open: !faq.open } : faq
    ));
  };

  return (
    <div className="pt-28">
      <section className="section-padding max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag">Get in Touch</span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl mt-4 mb-4 leading-none">
            Let's build<br /><span className="text-gradient">something solid</span>
          </h1>
          <p className="text-[var(--muted)] text-xl max-w-3xl mx-auto leading-relaxed">
            If you have a product idea, need frontend support, or want help improving an existing interface,
            this is the right place to start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glass rounded-2xl p-6 border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
                <p className="font-display font-bold">Currently available</p>
              </div>
              <p className="text-[var(--muted)] text-sm">
                Open to freelance projects, long-term collaboration, and remote product work.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="tag text-xs">Freelance</span>
                <span className="tag text-xs">Remote</span>
                <span className="tag text-xs">Contract</span>
              </div>
            </motion.div>

            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card-glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[var(--muted)] text-xs font-mono mb-1">{item.label}</p>
                    <p className="font-display font-semibold">{item.value}</p>
                    {item.sub && <p className="text-[var(--muted)] text-xs mt-0.5">{item.sub}</p>}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card-glass rounded-2xl p-6"
            >
              <p className="font-display font-semibold mb-4">Connect online</p>
              <div className="grid grid-cols-2 gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noreferrer' : undefined}
                    className={`py-3 rounded-xl card-glass flex items-center justify-center gap-2 text-xs font-mono hover:border-accent/50 transition-all duration-300 group ${
                      social.label === 'WhatsApp' 
                        ? 'hover:text-[#25D366] hover:border-[#25D366]/50' 
                        : 'hover:text-accent'
                    }`}
                  >
                    <social.icon size={15} className="group-hover:scale-110 transition-transform" />
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="card-glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              {submitted ? (
                <div className="relative z-10 text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-accent" />
                  </div>
                  <h2 className="font-display font-bold text-2xl mb-3">Message sent</h2>
                  <p className="text-[var(--muted)] mb-8">Thanks for reaching out. I will reply as soon as I can, usually within one day.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline">Send another message</button>
                </div>
              ) : (
                <div className="relative z-10">
                  <h2 className="font-display font-bold text-2xl mb-3">Start the conversation</h2>
                  <p className="text-[var(--muted)] text-sm mb-8">
                    Share the project goal, current stage, timeline, or any blocker you want help solving.
                  </p>

                  <form onSubmit={submitForm} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-[var(--muted)] mb-2">Your name *</label>
                        <input
                          name="name"
                          type="text"
                          placeholder="Ahmed Mohamed"
                          value={form.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl card-glass border border-[var(--border)] font-body text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 bg-transparent placeholder:text-[var(--muted)]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-[var(--muted)] mb-2">Email address *</label>
                        <input
                          name="email"
                          type="email"
                          placeholder="hello@example.com"
                          value={form.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl card-glass border border-[var(--border)] font-body text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 bg-transparent placeholder:text-[var(--muted)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--muted)] mb-2">Subject</label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {subjects.map((subject) => (
                          <button
                            key={subject}
                            type="button"
                            onClick={() => setForm({ ...form, subject })}
                            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                              form.subject === subject
                                ? 'bg-accent text-black'
                                : 'card-glass text-[var(--muted)] hover:border-accent/40'
                            }`}
                          >
                            {subject}
                          </button>
                        ))}
                      </div>
                      <input
                        name="subject"
                        type="text"
                        placeholder="Or type your own..."
                        value={form.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl card-glass border border-[var(--border)] font-body text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 bg-transparent placeholder:text-[var(--muted)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--muted)] mb-2">Message *</label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Tell me about the product, what you need built, and where you are stuck right now..."
                        value={form.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl card-glass border border-[var(--border)] font-body text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 bg-transparent placeholder:text-[var(--muted)] resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={sending || !form.name || !form.email || !form.message}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sending ? <Loader size={18} className="animate-spin" /> : <Send size={18} />}
                      {sending ? 'Sending...' : 'Send message'}
                    </button>

                    <p className="text-[var(--muted)] text-xs text-center font-mono">
                      Messages are sent directly to rahmanhamad36@gmail.com
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag">FAQ</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(index)} 
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-display font-semibold text-sm md:text-base">{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                      faq.open ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {faq.open && (
                  <div className="px-6 pb-6">
                    <p className="text-[var(--muted)] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;