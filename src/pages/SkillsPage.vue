<template>
  <div class="pt-28">
    <section class="section-padding max-w-7xl mx-auto">
      <div class="text-center mb-16 reveal">
        <span class="tag">Expertise</span>
        <h1 class="font-display font-extrabold text-5xl md:text-7xl mt-4 mb-4 leading-none">
          Skills and <span class="text-gradient">Technologies</span>
        </h1>
        <p class="text-[var(--muted)] text-xl max-w-3xl mx-auto leading-relaxed">
          A working stack shaped by real product delivery: modern Vue development, practical tooling,
          responsive UI work, and a steady commitment to improving code quality over time.
        </p>
      </div>

      <div class="flex flex-wrap gap-3 justify-center mb-14 reveal">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-300"
          :class="activeCategory === category ? 'bg-accent text-black font-semibold shadow-[0_0_20px_rgba(0,255,148,0.3)]' : 'card-glass text-[var(--muted)] hover:border-accent/40 hover:text-accent'"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-4 mb-20">
        <div
          v-for="(skill, index) in filteredSkills"
          :key="skill.name"
          class="card-glass rounded-2xl p-6 reveal hover:border-accent/30 transition-all duration-300 group"
          :style="`transition-delay: ${index * 0.04}s`"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <span class="text-2xl group-hover:scale-110 transition-transform duration-300">{{ skill.icon }}</span>
              <div>
                <p class="font-display font-semibold">{{ skill.name }}</p>
                <p class="text-xs font-mono text-[var(--muted)]">{{ skill.category }}</p>
              </div>
            </div>
            <span class="font-mono font-bold text-accent text-sm">{{ skill.level }}%</span>
          </div>
          <div class="h-2 rounded-full bg-[var(--border)] overflow-hidden">
            <div
              class="h-full rounded-full bg-gradient-to-r from-accent to-emerald-300 transition-all duration-1000"
              :style="`width: ${animating ? skill.level : 0}%`"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-[var(--card)] border-y border-[var(--border)]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <span class="tag">Workflow</span>
          <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
            Tools and <span class="text-gradient">Environment</span>
          </h2>
          <p class="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto">
            I prefer tools that help me move quickly without sacrificing structure: fast builds, reliable state management,
            clear debugging, and deployment setups that keep iteration simple.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(tool, index) in tools"
            :key="tool.name"
            class="reveal card-glass rounded-2xl p-6 text-center hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            :style="`transition-delay: ${index * 0.05}s`"
          >
            <span class="text-3xl mb-3 block group-hover:scale-125 transition-transform duration-300">{{ tool.icon }}</span>
            <p class="font-display font-semibold text-sm">{{ tool.name }}</p>
            <p class="text-[var(--muted)] text-xs font-mono mt-1">{{ tool.type }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding max-w-7xl mx-auto">
      <div class="text-center mb-14">
        <span class="tag">Growth</span>
        <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
          Learning <span class="text-gradient">Roadmap</span>
        </h2>
        <p class="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
          I treat learning like part of the job, not something extra. These are the areas I am actively deepening next.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in roadmap"
          :key="item.title"
          class="reveal card-glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 relative overflow-hidden group"
          :style="`transition-delay: ${index * 0.1}s`"
        >
          <div class="absolute top-3 right-3">
            <span
              class="text-xs font-mono px-2 py-0.5 rounded-full"
              :class="item.status === 'Active' ? 'bg-accent/20 text-accent border border-accent/30' : item.status === 'Next' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'"
            >
              {{ item.status }}
            </span>
          </div>
          <span class="text-4xl mb-4 block">{{ item.icon }}</span>
          <h3 class="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors">{{ item.title }}</h3>
          <p class="text-[var(--muted)] text-sm leading-relaxed mb-4">{{ item.desc }}</p>
          <div class="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400 transition-all duration-1000" :style="`width: ${item.progress}%`"></div>
          </div>
          <p class="text-[var(--muted)] text-xs font-mono mt-2">{{ item.progress }}% complete</p>
        </div>
      </div>
    </section>

    <section class="section-padding bg-[var(--card)] border-y border-[var(--border)]">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <span class="tag">Process</span>
          <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
            How I <span class="text-gradient">Work</span>
          </h2>
          <p class="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
            My workflow is simple on purpose: understand the problem, build the right structure, refine the experience, and ship with confidence.
          </p>
        </div>

        <div class="space-y-4">
          <div
            v-for="(step, index) in workflow"
            :key="step.title"
            class="reveal card-glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 flex items-start gap-6"
            :style="`transition-delay: ${index * 0.1}s`"
          >
            <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 font-display font-black text-accent text-lg">
              {{ String(index + 1).padStart(2, '0') }}
            </div>
            <div class="flex-1">
              <h3 class="font-display font-bold text-lg mb-1">{{ step.title }}</h3>
              <p class="text-[var(--muted)] text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
            <span class="text-2xl hidden md:block">{{ step.icon }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { skills } from '../data/skills.js'

const activeCategory = ref('All')
const animating = ref(false)

const categories = computed(() => ['All', ...new Set(skills.map(skill => skill.category))])

const filteredSkills = computed(() => {
  if (activeCategory.value === 'All') return skills
  return skills.filter(skill => skill.category === activeCategory.value)
})

onMounted(() => {
  setTimeout(() => {
    animating.value = true
  }, 300)
})

const tools = [
  { name: 'VS Code', icon: '💻', type: 'Editor' },
  { name: 'Vite', icon: '⚡', type: 'Build Tool' },
  { name: 'Git', icon: '🐙', type: 'Version Control' },
  { name: 'Figma', icon: '🖌️', type: 'Design' },
  { name: 'Vercel', icon: '▲', type: 'Deployment' },
  { name: 'Firebase', icon: '🔥', type: 'Backend' },
  { name: 'Postman', icon: '📬', type: 'API Testing' },
  { name: 'Chrome DevTools', icon: '🔍', type: 'Debugging' },
]

const roadmap = [
  { icon: '🔷', title: 'TypeScript Mastery', desc: 'Deepening type-safe development patterns for larger Vue codebases and more reliable component systems.', status: 'Active', progress: 65 },
  { icon: '🧪', title: 'Testing with Vitest', desc: 'Building stronger unit and integration testing habits so product changes stay safer as applications grow.', status: 'Active', progress: 45 },
  { icon: '🟥', title: 'Nuxt and SSR', desc: 'Expanding into server-side rendering and SEO-aware application delivery with the modern Nuxt stack.', status: 'Next', progress: 20 },
  { icon: '🎬', title: 'Advanced Motion', desc: 'Exploring richer interaction work and more choreographed animation systems for premium product experiences.', status: 'Active', progress: 55 },
  { icon: '📦', title: 'Design Systems', desc: 'Creating reusable UI foundations, token systems, and component libraries that support consistent scaling.', status: 'Next', progress: 30 },
  { icon: '☁️', title: 'Cloud and DevOps', desc: 'Learning more about deployment pipelines, automation, and the production workflows behind frontend delivery.', status: 'Planned', progress: 10 },
]

const workflow = [
  { title: 'Understand the problem', desc: 'Start with user needs, product context, and the exact outcome the interface should help create.', icon: '🔍' },
  { title: 'Shape the UI system', desc: 'Plan component structure, layout patterns, and data flow before complexity spreads.', icon: '📐' },
  { title: 'Build with quality', desc: 'Implement with Vue 3, clear naming, reusable patterns, and performance-aware frontend decisions.', icon: '⚡' },
  { title: 'Refine and test', desc: 'Review responsiveness, interaction states, accessibility, and the small details that make products feel complete.', icon: '🧪' },
  { title: 'Ship and iterate', desc: 'Launch confidently, collect feedback, and improve the product without losing the clarity of the original build.', icon: '🚀' },
]
</script>
