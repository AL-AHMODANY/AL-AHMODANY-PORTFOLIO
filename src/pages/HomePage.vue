<template>
  <div>
    <!-- HERO SECTION -->
    <section class="min-h-screen relative flex items-center justify-center overflow-hidden hero-gradient grid-pattern">
      <div class="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-accent/8 blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/3 right-1/5 w-80 h-80 rounded-full bg-blue-500/6 blur-3xl animate-pulse-slow" style="animation-delay: 2s"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow" style="animation-delay: 4s"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <div class="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full card-glass text-xs font-mono text-accent mb-8 border border-accent/20 animate-fade-in">
            <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Available for new projects
          </div>

          <h1 class="font-display font-extrabold leading-none mb-4">
            <span class="block text-5xl md:text-7xl lg:text-8xl tracking-tight">AL-</span>
            <span class="block text-5xl md:text-7xl lg:text-8xl tracking-tight text-gradient">AHMODANY</span>
          </h1>

          <div class="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span class="font-mono text-[var(--muted)] text-sm">&lt;</span>
            <span class="font-display text-xl md:text-2xl font-semibold text-[var(--muted)]">
              {{ currentRole }}<span class="typed-cursor"></span>
            </span>
            <span class="font-mono text-[var(--muted)] text-sm">/&gt;</span>
          </div>

          <p class="font-body text-[var(--muted)] text-lg max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
            I build polished Vue experiences for brands, communities, and digital products that need more
            than just a pretty interface. My focus is clear architecture, responsive design, smooth interaction,
            and frontend systems that are easy to scale after launch.
          </p>

          <div class="flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
            <span
              v-for="item in specialties"
              :key="item"
              class="px-3 py-1.5 rounded-full card-glass text-xs font-mono text-[var(--muted)] border border-[var(--border)]"
            >
              {{ item }}
            </span>
          </div>

          <div class="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <router-link to="/projects" class="btn-primary group">
              <Folder :size="16" class="group-hover:rotate-12 transition-transform" />
              View Projects
            </router-link>
            <router-link to="/resume" class="btn-outline">
              <FileText :size="16" />
              View Resume
            </router-link>
            <router-link to="/contact" class="btn-outline">
              <Send :size="16" />
              Contact Me
            </router-link>
          </div>

          <div class="flex gap-3 justify-center lg:justify-start mb-10">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              :target="s.external ? '_blank' : undefined"
              :rel="s.external ? 'noreferrer' : undefined"
              class="w-10 h-10 rounded-xl card-glass flex items-center justify-center hover:border-accent/50 hover:text-accent hover:scale-110 transition-all duration-300"
            >
              <component :is="s.icon" :size="16" />
            </a>
          </div>

          <div class="flex gap-8 justify-center lg:justify-start pt-8 border-t border-[var(--border)]">
            <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
              <p class="font-display font-bold text-2xl text-gradient">{{ stat.value }}</p>
              <p class="text-[var(--muted)] text-xs font-mono mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="flex-1 flex items-center justify-center relative order-1 lg:order-2">
          <div class="relative w-72 h-72 md:w-96 md:h-96 max-w-full">
            <div class="absolute inset-0 rounded-full border border-accent/15 animate-spin-slow"></div>
            <div class="absolute inset-4 rounded-full border border-accent/10 animate-spin-slow" style="animation-direction: reverse; animation-duration: 15s"></div>
            <div class="absolute inset-8 rounded-full border border-accent/8 animate-spin-slow" style="animation-duration: 25s"></div>
            <div class="identity-ring absolute inset-2 rounded-full"></div>
            <div class="absolute inset-6 rounded-full bg-gradient-to-br from-accent/15 via-emerald-500/10 to-blue-500/10 blur-xl"></div>

            <div class="absolute inset-6 rounded-full card-glass border border-accent/30 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              <div class="relative z-10 text-center px-4">
                <p class="font-display font-black text-2xl md:text-3xl text-gradient leading-none">AL</p>
                <p class="font-mono text-[10px] md:text-xs text-accent mt-1 tracking-[0.28em] pl-[0.28em] uppercase">
                  AHMODANY
                </p>
                <div class="mt-3 flex items-center gap-1.5 justify-center">
                  <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  <span class="font-mono text-[10px] text-[var(--muted)]">Frontend Dev</span>
                </div>
              </div>
            </div>

            <div
              v-for="badge in techBadges"
              :key="badge.name"
              class="absolute card-glass rounded-xl px-3 py-1.5 text-xs font-mono border border-[var(--border)] hover:border-accent/50 hover:text-accent transition-all animate-float shadow-lg cursor-default"
              :style="badge.style"
            >
              {{ badge.icon }} {{ badge.name }}
            </div>

            <div
              v-for="(particle, index) in particles"
              :key="index"
              class="absolute w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse"
              :style="particle.style"
            ></div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span class="text-xs font-mono text-[var(--muted)]">scroll</span>
        <ChevronDown :size="16" class="text-accent" />
      </div>
    </section>

    <!-- HIGHLIGHTS -->
    <section class="section-padding max-w-7xl mx-auto">
      <div class="mb-12 text-center md:text-left reveal">
        <span class="tag">Working Style</span>
        <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
          Built for <span class="text-gradient">clarity and polish</span>
        </h2>
        <p class="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto md:mx-0">
          I care about what users feel on the screen and what developers inherit behind it.
          The best frontend work balances speed, maintainability, and visual confidence.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in highlights"
          :key="item.title"
          class="reveal card-glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 group"
          :style="`transition-delay: ${index * 0.1}s`"
        >
          <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
            <component :is="item.icon" :size="22" class="text-accent" />
          </div>
          <h3 class="font-display font-semibold text-lg mb-2">{{ item.title }}</h3>
          <p class="text-[var(--muted)] text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- FEATURED PROJECTS -->
    <section class="section-padding max-w-7xl mx-auto">
      <div class="flex items-end justify-between gap-8 mb-12">
        <div class="max-w-2xl">
          <span class="tag">Featured Work</span>
          <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
            Selected<br /><span class="text-gradient">Projects</span>
          </h2>
          <p class="text-[var(--muted)] text-lg mt-4">
            A quick look at the kinds of products I have shipped: community platforms, e-commerce experiences,
            utility apps, and interfaces designed to feel modern from first click to final checkout.
          </p>
        </div>
        <router-link to="/projects" class="btn-outline hidden md:inline-flex">
          View All <ArrowRight :size="16" />
        </router-link>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.title"
          :project="project"
          :delay="index * 0.1"
          class="reveal"
        />
      </div>

      <div class="flex justify-center mt-8 md:hidden">
        <router-link to="/projects" class="btn-outline">
          View All <ArrowRight :size="16" />
        </router-link>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="section-padding bg-[var(--card)] border-y border-[var(--border)]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <span class="tag">What I Do</span>
          <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
            Services I <span class="text-gradient">Provide</span>
          </h2>
          <p class="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto">
            Whether you need a full interface built from scratch or an existing product refined,
            I help teams move from rough ideas to production-ready frontend experiences.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="reveal card-glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden"
            :style="`transition-delay: ${index * 0.08}s`"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-accent/3 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="text-3xl mb-5">{{ service.icon }}</div>
              <h3 class="font-display font-bold text-lg mb-3">{{ service.title }}</h3>
              <p class="text-[var(--muted)] text-sm leading-relaxed mb-5">{{ service.desc }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in service.tags"
                  :key="tag"
                  class="text-xs font-mono px-2 py-0.5 rounded-md bg-accent/8 text-accent border border-accent/15"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS PREVIEW -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto">
        <div class="card-glass rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
          <div class="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <div class="text-center mb-12">
              <span class="tag">Tech Stack</span>
              <h2 class="font-display font-bold text-4xl mt-3">Tools of the Trade</h2>
              <p class="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto">
                These are the tools I rely on most in production work, from interface architecture and styling
                to deployment, state management, and practical integration work.
              </p>
            </div>

            <div class="flex flex-wrap justify-center gap-3">
              <span
                v-for="skill in allSkills"
                :key="skill.name"
                class="reveal flex items-center gap-2 px-4 py-2 card-glass rounded-full text-sm font-mono hover:border-accent/40 hover:text-accent transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-0.5"
              >
                <span>{{ skill.icon }}</span>{{ skill.name }}
              </span>
            </div>

            <div class="text-center mt-10">
              <router-link to="/skills" class="btn-primary">
                Explore Skills <ArrowRight :size="16" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS COUNTER -->
    <section class="section-padding max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <span class="tag">Snapshot</span>
        <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
          Numbers behind the <span class="text-gradient">work</span>
        </h2>
        <p class="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
          Small details matter, but measurable delivery matters too. These numbers give a quick view of my
          current body of work and the kind of consistency I aim for on every build.
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(counter, index) in counters"
          :key="counter.label"
          class="reveal card-glass rounded-2xl p-8 text-center hover:border-accent/30 transition-all duration-500 group"
          :style="`transition-delay: ${index * 0.1}s`"
        >
          <component :is="counter.icon" :size="28" class="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <p class="font-display font-black text-4xl md:text-5xl text-gradient mb-2">{{ counter.value }}</p>
          <p class="text-[var(--muted)] text-sm font-mono">{{ counter.label }}</p>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section-padding bg-[var(--card)] border-y border-[var(--border)]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <span class="tag">Kind Words</span>
          <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
            Client <span class="text-gradient">Testimonials</span>
          </h2>
          <p class="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto">
            A few words from people I have built for or collaborated with. The goal is always the same:
            ship work that feels reliable, thoughtful, and easy to trust.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.name"
            class="reveal card-glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 flex flex-col"
            :style="`transition-delay: ${index * 0.1}s`"
          >
            <div class="flex gap-1 mb-5">
              <Star v-for="n in 5" :key="n" :size="14" class="text-amber-400 fill-amber-400" />
            </div>
            <p class="text-[var(--muted)] text-sm leading-relaxed mb-6 flex-1 italic">"{{ testimonial.quote }}"</p>
            <div class="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
              <div class="w-10 h-10 rounded-xl font-display font-bold text-sm flex items-center justify-center" :style="`background: ${testimonial.color}20; color: ${testimonial.color}`">
                {{ testimonial.initials }}
              </div>
              <div>
                <p class="font-display font-semibold text-sm">{{ testimonial.name }}</p>
                <p class="text-[var(--muted)] text-xs font-mono">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="max-w-4xl mx-auto text-center">
        <div class="card-glass rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-500/8"></div>
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
          <div class="relative z-10">
            <span class="tag mb-6 inline-block">Let's Connect</span>
            <h2 class="font-display font-black text-4xl md:text-6xl mb-6 leading-tight">
              Have a project in<br /><span class="text-gradient">mind?</span>
            </h2>
            <p class="text-[var(--muted)] text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              If you need a Vue developer who cares about product feel, interface quality, and delivery discipline,
              I would love to hear what you are building and where you need support.
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/contact" class="btn-primary text-base px-8 py-4">
                Start a Conversation <ArrowRight :size="18" />
              </router-link>
              <router-link to="/resume" class="btn-outline text-base px-8 py-4">
                <FileText :size="18" /> View Resume
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Folder,
  Send,
  ChevronDown,
  ArrowRight,
  Code2,
  Palette,
  Zap,
  Github,
  Mail,
  FileText,
  Star,
  FolderOpen,
  Clock,
  Users,
  Award,
} from 'lucide-vue-next'
import ProjectCard from '../components/ui/ProjectCard.vue'
import { projects } from '../data/projects.js'
import { skills as allSkills } from '../data/skills.js'

const roles = ['Vue Developer', 'UI Engineer', 'Frontend Specialist', 'Product-Focused Builder']
const currentRole = ref(roles[0])
const specialties = ['Vue 3 apps', 'Tailwind UI', 'Firebase integration', 'E-commerce flows', 'Arabic and English UX']

let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typeTimer = null

function typeEffect() {
  const target = roles[roleIndex]

  if (!isDeleting) {
    currentRole.value = target.substring(0, charIndex + 1)
    charIndex++

    if (charIndex === target.length) {
      isDeleting = true
      typeTimer = setTimeout(typeEffect, 2000)
      return
    }
  } else {
    currentRole.value = target.substring(0, charIndex - 1)
    charIndex--

    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }

  typeTimer = setTimeout(typeEffect, isDeleting ? 55 : 90)
}

onMounted(() => {
  typeTimer = setTimeout(typeEffect, 500)
})

onUnmounted(() => {
  clearTimeout(typeTimer)
})

const socials = [
  { label: 'GitHub', href: 'https://github.com/AL-AHMODANY', icon: Github, external: true },
  { label: 'Email', href: 'mailto:contact@al-ahmodany.dev', icon: Mail, external: false },
  { label: 'Resume', href: '/resume', icon: FileText, external: false },
]

const stats = [
  { value: '7+', label: 'Projects Shipped' },
  { value: '2+', label: 'Years Building' },
  { value: '5', label: 'Product Types' },
]

const techBadges = [
  { name: 'Vue.js', icon: 'VUE', style: 'top: 2%; left: 8%; animation-delay: 0s' },
  { name: 'Tailwind', icon: 'UI', style: 'bottom: 8%; left: 2%; animation-delay: 1.5s' },
  { name: 'Vite', icon: 'V', style: 'top: 14%; right: 4%; animation-delay: 0.8s' },
  { name: 'Firebase', icon: 'DB', style: 'bottom: 18%; right: 3%; animation-delay: 2.5s' },
]

const particles = [
  { style: 'top: 20%; left: 5%; animation-delay: 0s' },
  { style: 'top: 70%; left: 8%; animation-delay: 1s' },
  { style: 'top: 45%; right: 5%; animation-delay: 2s' },
  { style: 'top: 80%; right: 15%; animation-delay: 0.5s' },
  { style: 'top: 10%; right: 25%; animation-delay: 1.5s' },
]

const highlights = [
  {
    icon: Code2,
    title: 'Clean Frontend Architecture',
    desc: 'Reusable Vue 3 component systems, clear state flow, and project structure that stays manageable as features grow.',
  },
  {
    icon: Palette,
    title: 'Design-Led Implementation',
    desc: 'Interfaces that respect spacing, typography, motion, and visual hierarchy so products feel intentional instead of assembled.',
  },
  {
    icon: Zap,
    title: 'Performance With Polish',
    desc: 'Fast loading, responsive behavior, smooth interactions, and practical optimization work that improves real user experience.',
  },
]

const services = [
  {
    icon: 'DEV',
    title: 'Frontend Development',
    desc: 'Full Vue.js application builds for startups, businesses, and organizations that need reliable product interfaces from the ground up.',
    tags: ['Vue 3', 'Vite', 'JavaScript'],
  },
  {
    icon: 'UI',
    title: 'Design to Code Delivery',
    desc: 'Converting wireframes or Figma files into responsive, production-ready interfaces without losing the detail that made the design strong.',
    tags: ['Tailwind CSS', 'Figma', 'Responsive UI'],
  },
  {
    icon: 'SHOP',
    title: 'E-commerce Experiences',
    desc: 'Storefronts, product pages, carts, and checkout flows built to feel smooth, trustworthy, and conversion-friendly across devices.',
    tags: ['Pinia', 'Vue Router', 'Product UX'],
  },
  {
    icon: 'FAST',
    title: 'Frontend Optimization',
    desc: 'Improving existing products through cleanup, performance tuning, accessibility fixes, and better interaction design.',
    tags: ['Lighthouse', 'Refactoring', 'Accessibility'],
  },
  {
    icon: 'API',
    title: 'Firebase and API Integration',
    desc: 'Authentication, realtime data, forms, dashboards, and backend-powered UI flows connected cleanly to the frontend layer.',
    tags: ['Firestore', 'Auth', 'REST APIs'],
  },
  {
    icon: 'RWD',
    title: 'Responsive Product UI',
    desc: 'Layouts and components that stay readable, usable, and visually strong from mobile screens to large desktop displays.',
    tags: ['Mobile First', 'Cross Browser', 'Scalable CSS'],
  },
]

const counters = [
  { icon: FolderOpen, value: '7+', label: 'Live Projects' },
  { icon: Clock, value: '2+', label: 'Years in Practice' },
  { icon: Users, value: '10+', label: 'Core User Flows Built' },
  { icon: Award, value: '100%', label: 'Launch Focus' },
]

const testimonials = [
  {
    name: 'Amir Hassan',
    role: 'CEO - Nour Zamon',
    initials: 'AH',
    color: '#00FF94',
    quote: 'He brought structure to a fast-moving project and translated ideas into a clean product we were proud to launch.',
  },
  {
    name: 'Yusuf Kamara',
    role: 'Director - Mosque Management',
    initials: 'YK',
    color: '#38BDF8',
    quote: 'The final system felt thoughtful from top to bottom. It was easy to use, easy to explain to our community, and clearly built with care.',
  },
  {
    name: 'Sara Malik',
    role: 'Founder - LearnHub',
    initials: 'SM',
    color: '#8B5CF6',
    quote: 'Strong design instincts, clear communication, and reliable delivery. The platform looked premium and worked exactly the way we needed.',
  },
]

const featuredProjects = projects.slice(0, 3)
</script>

<style scoped>
.identity-ring {
  background: conic-gradient(from 0deg, #00FF94, transparent, transparent, #00FF94, transparent, transparent, #00FF94);
  animation: rotateBorder 4s linear infinite;
  opacity: 0.8;
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
