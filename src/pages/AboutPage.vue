<template>
  <div class="pt-28">
    <section class="section-padding max-w-7xl mx-auto">
      <div class="mb-16 reveal">
        <span class="tag">About Me</span>
        <h1 class="font-display font-extrabold text-5xl md:text-7xl mt-4 mb-6 leading-none">
          Building interfaces with<br /><span class="text-gradient">care and intent</span>
        </h1>
        <p class="text-[var(--muted)] text-xl max-w-3xl leading-relaxed">
          I am a frontend developer who treats UI as both a technical system and a user-facing craft.
          My work lives at the intersection of clean code, strong visual judgment, and practical product thinking.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 mb-24">
        <div class="space-y-6">
          <div class="card-glass rounded-2xl p-8 reveal">
            <h2 class="font-display font-bold text-2xl mb-5 text-gradient">My Story</h2>
            <div class="space-y-4 text-[var(--muted)] leading-relaxed text-sm">
              <p>
                What first pulled me into web development was the feeling of turning a blank file into something interactive,
                useful, and alive. That combination of logic and visual feedback still feels powerful every time I build.
              </p>
              <p>
                Over the last few years I have focused deeply on the Vue ecosystem, responsive interfaces, and the kind of
                frontend work that turns ideas into products people can actually use with confidence.
              </p>
              <p>
                I enjoy projects that need both structure and polish: dashboards that must stay maintainable, storefronts that
                need to earn trust, and content-heavy sites that need clear hierarchy and smooth interaction.
              </p>
              <p>
                The way I see it, good frontend work is not only about shipping features. It is about making those features feel
                natural, coherent, and durable for the team that will keep building after launch.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="fact in facts"
              :key="fact.label"
              class="card-glass rounded-xl p-5 reveal group hover:border-accent/30 transition-all duration-300"
            >
              <component :is="fact.icon" :size="20" class="text-accent mb-3 group-hover:scale-110 transition-transform" />
              <p class="font-mono text-xs text-[var(--muted)] mb-1">{{ fact.label }}</p>
              <p class="font-display font-semibold text-sm">{{ fact.value }}</p>
            </div>
          </div>
        </div>

        <div class="reveal">
          <div class="card-glass rounded-3xl p-8 h-full relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-500/5"></div>
            <div class="relative z-10">
              <div class="relative w-36 h-36 mx-auto mb-6">
                <div class="absolute inset-0 rounded-full identity-ring-small"></div>
                <div class="absolute inset-1 rounded-full bg-gradient-to-br from-accent/20 to-emerald-600/20 flex items-center justify-center border border-accent/30">
                  <span class="font-display font-black text-3xl text-gradient">AL</span>
                </div>
              </div>

              <div class="text-center mb-8">
                <h2 class="font-display font-bold text-2xl">AL-AHMODANY</h2>
                <p class="text-accent font-mono text-sm mt-1">Frontend Developer</p>
              </div>

              <div class="space-y-2 mb-8">
                <p class="font-display font-semibold text-sm text-[var(--muted)] mb-4">What matters in my work</p>
                <div v-for="value in values" :key="value.text" class="flex items-center gap-3 group">
                  <div class="w-2 h-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span class="text-sm font-body">{{ value.text }}</span>
                </div>
              </div>

              <div class="pt-6 border-t border-[var(--border)]">
                <p class="font-display font-semibold text-sm text-[var(--muted)] mb-3">Languages</p>
                <div class="flex gap-2 flex-wrap">
                  <span class="tag">Arabic (Native)</span>
                  <span class="tag">English (Fluent)</span>
                </div>
              </div>

              <div class="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-3">
                <span class="w-3 h-3 rounded-full bg-accent animate-pulse flex-shrink-0"></span>
                <div>
                  <p class="font-display font-semibold text-sm">Open to meaningful work</p>
                  <p class="text-[var(--muted)] text-xs font-mono">Remote - Freelance - Contract</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-[var(--card)] border-y border-[var(--border)]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <span class="tag">Journey</span>
          <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
            Career <span class="text-gradient">Timeline</span>
          </h2>
          <p class="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
            My path into frontend development has been shaped by self-driven learning, hands-on delivery,
            and a steady shift toward more complex product work.
          </p>
        </div>

        <div class="relative">
          <div class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>

          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            class="relative flex gap-8 mb-12 reveal"
            :style="`transition-delay: ${index * 0.15}s`"
          >
            <div class="relative z-10 w-16 h-16 rounded-2xl card-glass border border-accent/30 flex flex-col items-center justify-center flex-shrink-0 shadow-lg">
              <span class="font-mono text-xs font-bold text-accent">{{ item.year }}</span>
            </div>
            <div class="card-glass rounded-2xl p-6 flex-1 hover:border-accent/30 transition-all duration-300 group">
              <div class="flex items-start justify-between mb-2 gap-4">
                <h3 class="font-display font-bold text-lg group-hover:text-accent transition-colors">{{ item.title }}</h3>
                <span class="tag text-xs whitespace-nowrap">{{ item.type }}</span>
              </div>
              <p class="text-accent font-mono text-sm mb-3">{{ item.company }}</p>
              <p class="text-[var(--muted)] text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding max-w-7xl mx-auto">
      <div class="text-center mb-14">
        <span class="tag">Expertise</span>
        <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
          Technical <span class="text-gradient">Skills</span>
        </h2>
        <p class="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
          I lean heavily into Vue, modern CSS workflows, and practical frontend tooling that helps teams ship quickly without
          losing structure.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(skill, index) in techSkills"
          :key="skill.name"
          class="reveal card-glass rounded-2xl p-5 text-center hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
          :style="`transition-delay: ${index * 0.04}s`"
        >
          <span class="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">{{ skill.icon }}</span>
          <p class="font-display font-semibold text-sm">{{ skill.name }}</p>
          <p class="text-[var(--muted)] text-xs font-mono mt-1">{{ skill.level }}%</p>
          <div class="h-1 rounded-full bg-[var(--border)] mt-2 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400" :style="`width: ${skill.level}%`"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-[var(--card)] border-y border-[var(--border)]">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <span class="tag">Outside the Work</span>
          <h2 class="font-display font-bold text-4xl mt-3">
            Beyond the <span class="text-gradient">screen</span>
          </h2>
          <p class="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
            I care a lot about the craft, but I also try to stay curious, grounded, and observant. Those habits end up shaping the work too.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(fun, index) in funFacts"
            :key="fun.title"
            class="reveal card-glass rounded-2xl p-7 hover:border-accent/30 transition-all duration-500"
            :style="`transition-delay: ${index * 0.1}s`"
          >
            <span class="text-4xl mb-4 block">{{ fun.emoji }}</span>
            <h3 class="font-display font-bold text-lg mb-2">{{ fun.title }}</h3>
            <p class="text-[var(--muted)] text-sm leading-relaxed">{{ fun.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { MapPin, Coffee, Briefcase, Code2 } from 'lucide-vue-next'

const facts = [
  { label: 'Work Style', value: 'Remote First', icon: MapPin },
  { label: 'Experience', value: '2+ Years', icon: Briefcase },
  { label: 'Projects Shipped', value: '7+ Live Builds', icon: Code2 },
  { label: 'Fuel Source', value: 'Coffee and Curiosity', icon: Coffee },
]

const values = [
  { text: 'Readable code over clever code' },
  { text: 'Interfaces should earn trust quickly' },
  { text: 'Performance is part of the product' },
  { text: 'Accessibility should be built in, not added later' },
  { text: 'Good collaboration improves the final UI' },
  { text: 'Learning never stops in frontend work' },
]

const timeline = [
  {
    year: '2024',
    title: 'Independent Frontend Developer',
    company: 'Freelance - Remote',
    type: 'Current',
    desc: 'Building production-facing Vue applications for clients who need polished interfaces, dependable delivery, and room to scale after launch.',
  },
  {
    year: '2023',
    title: 'Frontend Project Delivery',
    company: 'Client Work and Product Builds',
    type: 'Growth',
    desc: 'Focused on shipping real products across e-commerce, management platforms, and interactive web experiences with stronger design systems and cleaner code structure.',
  },
  {
    year: '2022',
    title: 'Frontend Foundation',
    company: 'Practice, Projects, and Iteration',
    type: 'Learning',
    desc: 'Turned core JavaScript, Vue, and CSS skills into actual working products while building the habits that still shape how I approach frontend work today.',
  },
  {
    year: '2021',
    title: 'Self-Taught Start',
    company: 'Docs, Courses, and Personal Experiments',
    type: 'Beginning',
    desc: 'Started learning the web by building small interfaces, breaking things often, and developing a strong curiosity for how good products feel on the frontend.',
  },
]

const techSkills = [
  { name: 'Vue.js 3', icon: '💚', level: 92 },
  { name: 'JavaScript', icon: '⚡', level: 90 },
  { name: 'Tailwind CSS', icon: '🎨', level: 95 },
  { name: 'HTML5', icon: '🧱', level: 98 },
  { name: 'CSS3', icon: '✨', level: 93 },
  { name: 'Vue Router', icon: '🧭', level: 88 },
  { name: 'Pinia', icon: '🍍', level: 85 },
  { name: 'Firebase', icon: '🔥', level: 80 },
  { name: 'Git', icon: '🐙', level: 87 },
  { name: 'Figma', icon: '🖌️', level: 75 },
  { name: 'REST APIs', icon: '🔌', level: 85 },
  { name: 'Vite', icon: '🚀', level: 88 },
]

const funFacts = [
  { emoji: '🌙', title: 'Late-Night Builder', desc: 'Some of my best focused work happens when the noise is gone and the problem is finally quiet enough to solve well.' },
  { emoji: '🎨', title: 'Design Observer', desc: 'I constantly study interfaces, layouts, and motion patterns because frontend quality usually comes from what you notice before you build.' },
  { emoji: '🌍', title: 'Bilingual Product Thinking', desc: 'I think a lot about building experiences that work clearly for both Arabic and English speaking users.' },
  { emoji: '📚', title: 'Always Learning', desc: 'Docs, talks, refactors, and experiments are a regular part of how I keep growing as a developer.' },
  { emoji: '⚡', title: 'Performance Aware', desc: 'I care about how quickly products respond because speed shapes trust before users even read the content.' },
  { emoji: '☕', title: 'Consistently caffeinated', desc: 'A good cup of coffee usually means I am either improving a UI detail or rethinking a component structure.' },
]
</script>

<style scoped>
.identity-ring-small {
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
