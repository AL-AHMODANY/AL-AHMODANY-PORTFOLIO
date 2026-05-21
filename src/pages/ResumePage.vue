<template>
  <div class="pt-28">
    <section class="section-padding max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 reveal gap-6">
        <div>
          <span class="tag">Resume</span>
          <h1 class="font-display font-extrabold text-5xl md:text-7xl mt-4 leading-none">
            My <span class="text-gradient">CV</span>
          </h1>
        </div>
        <div class="flex gap-3 flex-wrap">
          <button @click="printCV" class="btn-primary">
            <Printer :size="16" /> Print or Save PDF
          </button>
          <a href="/AL-AHMODANY-CV.html" target="_blank" class="btn-outline">
            <Download :size="16" /> Download CV
          </a>
          <a href="https://github.com/AL-AHMODANY" target="_blank" rel="noreferrer" class="btn-outline">
            <Github :size="16" /> GitHub
          </a>
        </div>
      </div>

      <div id="resume-content" class="card-glass rounded-3xl overflow-hidden shadow-2xl">
        <div class="bg-gradient-to-r from-accent/20 via-emerald-600/10 to-blue-500/10 p-10 border-b border-[var(--border)] relative overflow-hidden">
          <div class="absolute inset-0 grid-pattern opacity-30"></div>
          <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div class="relative w-20 h-20 flex-shrink-0">
              <div class="absolute inset-0 rounded-full resume-ring"></div>
              <div class="absolute inset-1 rounded-full bg-gradient-to-br from-accent/30 to-emerald-600/30 flex items-center justify-center border border-accent/30">
                <span class="font-display font-black text-xl text-gradient">AL</span>
              </div>
            </div>
            <div class="flex-1">
              <h2 class="font-display font-black text-3xl">AL-AHMODANY</h2>
              <p class="text-accent font-mono text-sm mt-1">Frontend Developer - Vue.js Specialist - UI Engineer</p>
              <div class="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm text-[var(--muted)]">
                <span class="flex items-center gap-1.5"><Mail :size="13" /> contact@al-ahmodany.dev</span>
                <span class="flex items-center gap-1.5"><Globe :size="13" /> al-ahmodany.dev</span>
                <span class="flex items-center gap-1.5"><Github :size="13" /> github.com/al-ahmodany</span>
                <span class="flex items-center gap-1.5 text-accent font-bold">
                  <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span> Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-8 md:p-10 grid md:grid-cols-3 gap-10">
          <div class="space-y-8">
            <div>
              <h3 class="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span class="w-1 h-5 bg-accent rounded-full"></span> Core Skills
              </h3>
              <div class="space-y-3">
                <div v-for="skill in topSkills" :key="skill.name">
                  <div class="flex justify-between text-xs mb-1.5">
                    <span class="font-mono">{{ skill.name }}</span>
                    <span class="text-accent">{{ skill.level }}%</span>
                  </div>
                  <div class="h-1.5 rounded-full bg-[var(--border)]">
                    <div class="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400" :style="`width: ${skill.level}%`"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span class="w-1 h-5 bg-accent rounded-full"></span> Tools
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tool in toolsList" :key="tool" class="tag text-xs">{{ tool }}</span>
              </div>
            </div>

            <div>
              <h3 class="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span class="w-1 h-5 bg-accent rounded-full"></span> Languages
              </h3>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-sm font-body">Arabic</span>
                  <span class="text-accent text-xs font-mono bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">Native</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm font-body">English</span>
                  <span class="text-accent text-xs font-mono bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">Fluent</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span class="w-1 h-5 bg-accent rounded-full"></span> Strengths
              </h3>
              <ul class="space-y-2">
                <li v-for="skill in softSkills" :key="skill" class="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <span class="text-accent flex-shrink-0">›</span> {{ skill }}
                </li>
              </ul>
            </div>
          </div>

          <div class="md:col-span-2 space-y-10">
            <div>
              <h3 class="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span class="w-1 h-5 bg-accent rounded-full"></span> Professional Summary
              </h3>
              <p class="text-[var(--muted)] leading-relaxed text-sm">
                Frontend developer with hands-on experience building Vue.js interfaces for live products across e-commerce,
                community platforms, dashboards, and utility applications. Strong focus on maintainable component architecture,
                responsive design, user experience quality, and shipping clean interfaces that feel finished in production.
              </p>
            </div>

            <div>
              <h3 class="font-display font-bold text-lg mb-6 flex items-center gap-2">
                <span class="w-1 h-5 bg-accent rounded-full"></span> Experience
              </h3>
              <div class="space-y-7">
                <div
                  v-for="experienceItem in experience"
                  :key="experienceItem.title"
                  class="border-l-2 border-accent/20 pl-5 hover:border-accent transition-colors duration-300 group"
                >
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1 gap-2">
                    <h4 class="font-display font-semibold group-hover:text-accent transition-colors">{{ experienceItem.title }}</h4>
                    <span class="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20 whitespace-nowrap">
                      {{ experienceItem.period }}
                    </span>
                  </div>
                  <p class="text-accent font-mono text-xs mb-3">{{ experienceItem.company }}</p>
                  <ul class="space-y-1.5">
                    <li v-for="point in experienceItem.points" :key="point" class="text-[var(--muted)] text-sm flex gap-2">
                      <span class="text-accent mt-1 flex-shrink-0">›</span>{{ point }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-display font-bold text-lg mb-6 flex items-center gap-2">
                <span class="w-1 h-5 bg-accent rounded-full"></span> Education and Certifications
              </h3>
              <div class="space-y-4">
                <div v-for="edu in education" :key="edu.title" class="flex gap-4 group">
                  <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <GraduationCap :size="18" class="text-accent" />
                  </div>
                  <div>
                    <h4 class="font-display font-semibold text-sm group-hover:text-accent transition-colors">{{ edu.title }}</h4>
                    <p class="text-[var(--muted)] text-xs">{{ edu.institution }}</p>
                    <p class="text-accent font-mono text-xs mt-0.5">{{ edu.year }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span class="w-1 h-5 bg-accent rounded-full"></span> Key Projects
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  v-for="project in keyProjects"
                  :key="project.name"
                  :href="project.url"
                  target="_blank"
                  rel="noreferrer"
                  class="p-3 rounded-xl border border-[var(--border)] hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
                >
                  <p class="font-display font-semibold text-sm group-hover:text-accent transition-colors">{{ project.name }}</p>
                  <p class="text-[var(--muted)] text-xs mt-0.5 font-mono">{{ project.stack }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Mail, Globe, Github, GraduationCap, Printer, Download } from 'lucide-vue-next'

const topSkills = [
  { name: 'Vue.js 3', level: 92 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'HTML5 / CSS3', level: 98 },
  { name: 'Firebase / REST APIs', level: 80 },
]

const toolsList = ['Vite', 'Git', 'Figma', 'VS Code', 'Vercel', 'Postman', 'Pinia', 'Vue Router']

const softSkills = [
  'Design-aware UI implementation',
  'Clear communication and collaboration',
  'Reliable delivery under deadlines',
  'Frontend architecture with reuse in mind',
  'Fast iteration without losing quality',
]

const experience = [
  {
    title: 'Frontend Developer',
    company: 'Freelance - Remote',
    period: '2023 - Present',
    points: [
      'Built and shipped live Vue.js products for client-facing use cases across multiple industries.',
      'Created responsive interfaces for e-commerce, dashboards, and community platforms with clean component structure.',
      'Integrated frontend applications with Firebase, routing, and practical API-driven UI flows.',
      'Focused on performance, readability, and polished interaction details throughout delivery.',
    ],
  },
  {
    title: 'Frontend Builder',
    company: 'Independent Learning and Product Practice',
    period: '2021 - 2023',
    points: [
      'Developed hands-on expertise through personal products, iterative redesigns, and real interface problem solving.',
      'Built confidence in JavaScript, Vue, layout systems, and frontend architecture through constant project work.',
      'Studied modern frontend workflows through official docs, structured courses, and repeated practice.',
    ],
  },
]

const education = [
  { title: 'Self-Directed Frontend Study', institution: 'MDN, Vue Docs, freeCodeCamp, Udemy', year: '2021 - Present' },
  { title: 'Vue.js 3 Course Work', institution: 'Udemy', year: '2022' },
  { title: 'JavaScript and Web Fundamentals', institution: 'freeCodeCamp and practical projects', year: '2021' },
]

const keyProjects = [
  { name: 'Nour Zamon E-Commerce', stack: 'Vue 3 - Pinia - Tailwind', url: 'https://nourzamon-ecommerce.vercel.app/' },
  { name: 'Morkaznourzaman Platform', stack: 'Vue 3 - Firebase - JavaScript', url: 'https://morkaznourzaman.vercel.app/' },
  { name: 'Weather App', stack: 'Vue 3 - OpenWeather API', url: 'https://weather-app-woad-rho-47.vercel.app/' },
  { name: 'Larkon Productivity App', stack: 'Vue 3 - Pinia - Firebase', url: 'https://larkon-app.vercel.app/' },
]

function printCV() {
  window.print()
}
</script>

<style scoped>
.resume-ring {
  background: conic-gradient(from 0deg, #00FF94, transparent, transparent, #00FF94);
  animation: rotateBorder 4s linear infinite;
  border-radius: 50%;
}

@keyframes rotateBorder {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

<style>
@media print {
  header,
  footer,
  button,
  .btn-primary,
  .btn-outline {
    display: none !important;
  }

  body {
    background: white !important;
    color: black !important;
  }

  #resume-content {
    box-shadow: none !important;
    border: 1px solid #eee !important;
  }
}
</style>
