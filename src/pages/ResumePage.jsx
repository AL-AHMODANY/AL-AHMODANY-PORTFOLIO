import { motion } from 'framer-motion';
import { 
  Mail, 
  Globe, 
  Github, 
  GraduationCap, 
  Printer, 
  Download, 
  MapPin, 
  Phone, 
  Linkedin, 
  User, 
  Languages, 
  Award, 
  Briefcase, 
  BookOpen, 
  Target,
  Users,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Code,
  Palette,
  Database,
  Smartphone,
  Monitor,
  Zap
} from 'lucide-react';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';

const ResumePage = () => {
  const contactInfo = [
    { icon: Mail, label: 'rahmanhamad36@gmail.com', href: 'mailto:rahmanhamad36@gmail.com' },
    { icon: Phone, label: '+234 812 911 7778', href: 'tel:+2348129117778' },
    { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/2348129117778' },
    { icon: MapPin, label: 'Remote Worldwide', href: null },
    { icon: Linkedin, label: 'linkedin.com/in/al-ahmodany', href: 'https://linkedin.com/in/al-ahmodany' },
    { icon: Globe, label: 'al-ahmodany.dev', href: 'https://al-ahmodany.dev' },
  ];

  const languages = [
    { name: 'English', level: 5 },
    { name: 'Arabic', level: 5 },
  ];

  const awards = [
    {
      title: 'Outstanding Frontend Developer',
      institution: 'Freelance Client Recognition',
      year: '2024'
    },
    {
      title: 'Best UI Implementation',
      institution: 'E-commerce Project Excellence',
      year: '2023'
    }
  ];

  const workExperience = [
    {
      company: 'Freelance',
      position: 'Frontend Developer',
      period: '2023 – present',
      location: 'Remote',
      achievements: [
        'Developed and implemented strategic React applications resulting in a 40% increase in client satisfaction.',
        'Collaborated with cross-functional teams to drive business growth and user engagement.',
        'Established and maintained strong client relationships with key partners resulting in a 35% increase in project revenue.',
        'Conducted market research and analysis to identify new opportunities resulting in the successful launch of 7+ live projects.'
      ]
    },
    {
      company: 'Self-Directed Learning',
      position: 'Frontend Developer',
      period: '2021 – 2023',
      location: 'Remote',
      achievements: [
        'Worked closely with modern web technologies to provide expert development services',
        'Built and managed dedicated learning path in React, JavaScript, and modern CSS frameworks',
        'Contributed to open-source projects with proven track record of success in acting as an individual contributor to the development of 15+ personal projects and innovative solutions since 2021.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Self-Directed Frontend Development',
      school: 'Online Learning Platforms',
      period: '2021 – 2024',
      location: 'Remote'
    },
    {
      degree: 'Advanced React Development',
      school: 'Udemy & freeCodeCamp',
      period: '2022 – 2023',
      location: 'Online'
    }
  ];

  const skills = [
    'Strategic thinking and problem-solving',
    'Component architecture and design patterns',
    'Effective communication and client relations',
    'Modern JavaScript and React development strategy',
    'Team collaboration and project leadership',
    'Creative and innovative UI/UX thinking'
  ];

  const printCV = () => {
    window.print();
  };

  return (
    <div className="pt-28">
      <section className="section-padding max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6"
        >
          <div>
            <span className="tag">Resume</span>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl mt-4 leading-none">
              My <span className="text-gradient">CV</span>
            </h1>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button onClick={printCV} className="btn-primary">
              <Printer size={16} /> Print or Save PDF
            </button>
            <a href="/cv.pdf" download="AL-AHMODANY-CV.pdf" className="btn-outline">
              <Download size={16} /> Download CV
            </a>
            <a href="https://github.com/AL-AHMODANY" target="_blank" rel="noreferrer" className="btn-outline">
              <Github size={16} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="resume-content" 
          className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-5 min-h-[800px]">
            {/* Left Sidebar - Dark */}
            <div className="lg:col-span-2 bg-slate-700 dark:bg-slate-800 text-white p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="font-display font-bold text-3xl mb-2">AL-AHMODANY</h1>
                <p className="text-slate-300 text-lg">Frontend Developer</p>
                <p className="text-slate-300 text-sm">React Specialist</p>
              </div>

              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-slate-600 flex items-center justify-center">
                <User size={48} className="text-slate-300" />
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Mail size={16} />
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Contact</h3>
                </div>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <contact.icon 
                        size={14} 
                        className={`mt-0.5 flex-shrink-0 ${
                          contact.label === 'WhatsApp' 
                            ? 'text-[#25D366]' 
                            : 'text-slate-300'
                        }`} 
                      />
                      {contact.href ? (
                        <a 
                          href={contact.href} 
                          className={`text-sm transition-colors ${
                            contact.label === 'WhatsApp' 
                              ? 'text-[#25D366] hover:text-[#128C7E]' 
                              : 'text-slate-300 hover:text-white'
                          }`}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                          {contact.label}
                        </a>
                      ) : (
                        <span className="text-slate-300 text-sm">{contact.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <User size={16} />
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Profile</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I'm AL-AHMODANY, a frontend developer with a passion for creating exceptional user experiences. 
                  With expertise in React and modern web technologies, I strive to build innovative solutions that 
                  drive success for my clients. My focus is on clean code, responsive design, and delivering 
                  high-quality applications that exceed expectations.
                </p>
              </div>

              {/* Languages */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Languages size={16} />
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Languages</h3>
                </div>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-300 text-sm">{lang.name}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-3 h-3 rounded-full ${
                              i < lang.level ? 'bg-accent' : 'bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award size={16} />
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Awards</h3>
                </div>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index}>
                      <h4 className="text-white text-sm font-semibold">{award.title}</h4>
                      <p className="text-slate-300 text-xs">{award.institution}</p>
                      <p className="text-slate-400 text-xs">{award.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Light */}
            <div className="lg:col-span-3 p-8 bg-gray-50 dark:bg-gray-800">
              {/* Work Experience */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase size={20} className="text-gray-700 dark:text-gray-300" />
                  <h2 className="font-bold text-xl text-gray-800 dark:text-gray-200 uppercase tracking-wider">Work Experience</h2>
                </div>
                
                <div className="space-y-8">
                  {workExperience.map((job, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{job.company}</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">{job.position}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{job.period}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 mt-4">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <span className="text-accent mt-1 flex-shrink-0">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen size={20} className="text-gray-700 dark:text-gray-300" />
                  <h2 className="font-bold text-xl text-gray-800 dark:text-gray-200 uppercase tracking-wider">Education</h2>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.school}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{edu.period}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Target size={20} className="text-gray-700 dark:text-gray-300" />
                  <h2 className="font-bold text-xl text-gray-800 dark:text-gray-200 uppercase tracking-wider">Skills</h2>
                </div>
                
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                  <ul className="space-y-3">
                    {skills.map((skill, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ResumePage;