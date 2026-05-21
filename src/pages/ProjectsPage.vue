<template>
  <div class="pt-28">
    <section class="section-padding max-w-7xl mx-auto">
      <div class="text-center mb-12 reveal">
        <span class="tag">Portfolio</span>
        <h1 class="font-display font-extrabold text-5xl md:text-7xl mt-4 mb-4 leading-none">
          Selected <span class="text-gradient">Projects</span>
        </h1>
        <p class="text-[var(--muted)] text-xl max-w-3xl mx-auto leading-relaxed">
          A collection of Vue applications and frontend builds focused on clarity, responsiveness,
          and product experiences that feel polished in real use.
        </p>
      </div>

      <div class="mb-16 reveal">
        <div class="card-glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-500 group">
          <div class="grid lg:grid-cols-2 gap-0">
            <div class="relative h-64 lg:h-auto min-h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <img
                :src="projects[0].image"
                :alt="projects[0].title"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                @error="event => handleImgError(event, projects[0])"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black/40"></div>
              <div class="absolute top-4 left-4">
                <span class="text-xs font-mono font-bold px-3 py-1.5 rounded-full text-black" :style="`background: ${projects[0].color}`">
                  Featured
                </span>
              </div>
            </div>

            <div class="p-10 flex flex-col justify-center">
              <span class="tag mb-4 inline-block">{{ projects[0].category }}</span>
              <h2 class="font-display font-black text-3xl mb-4 group-hover:text-accent transition-colors">
                {{ projects[0].title }}
              </h2>
              <p class="text-[var(--muted)] leading-relaxed mb-6">
                {{ projects[0].description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-8">
                <span v-for="tech in projects[0].tech" :key="tech" class="tag text-xs">{{ tech }}</span>
              </div>
              <div class="flex gap-4 flex-wrap">
                <a :href="projects[0].url" target="_blank" rel="noreferrer" class="btn-primary">
                  <ExternalLink :size="16" /> Live Demo
                </a>
                <a href="https://github.com/AL-AHMODANY" target="_blank" rel="noreferrer" class="btn-outline">
                  <Github :size="16" /> GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap gap-3 justify-center mb-12 reveal">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-300"
          :class="activeCategory === category ? 'bg-accent text-black font-semibold shadow-[0_0_20px_rgba(0,255,148,0.3)]' : 'card-glass text-[var(--muted)] hover:border-accent/40 hover:text-accent'"
        >
          {{ category }} {{ category === 'All' ? `(${projects.length})` : `(${projects.filter(project => project.category === category).length})` }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :project="project"
          :delay="index * 0.05"
          class="reveal"
        />
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-24">
        <p class="text-[var(--muted)] text-lg font-mono">No projects match this category yet.</p>
      </div>
    </section>

    <section class="section-padding bg-[var(--card)] border-y border-[var(--border)]">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div v-for="stat in projectStats" :key="stat.label" class="reveal card-glass rounded-2xl p-6">
            <p class="font-display font-black text-3xl text-gradient mb-2">{{ stat.value }}</p>
            <p class="text-[var(--muted)] text-sm font-mono">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding max-w-4xl mx-auto text-center">
      <div class="reveal card-glass rounded-3xl p-12 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent"></div>
        <div class="relative z-10">
          <span class="text-4xl mb-4 block">🤝</span>
          <h2 class="font-display font-black text-3xl md:text-4xl mb-4">Need a similar product experience?</h2>
          <p class="text-[var(--muted)] mb-8 max-w-xl mx-auto">
            If you are building a dashboard, storefront, content platform, or custom web interface,
            I can help turn the idea into a polished frontend product.
          </p>
          <router-link to="/contact" class="btn-primary">
            Start a Project <ArrowRight :size="16" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ExternalLink, Github, ArrowRight } from 'lucide-vue-next'
import ProjectCard from '../components/ui/ProjectCard.vue'
import { projects } from '../data/projects.js'

const activeCategory = ref('All')

const categories = computed(() => ['All', ...new Set(projects.map(project => project.category))])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(project => project.category === activeCategory.value)
})

const projectStats = [
  { value: '7', label: 'Projects Built' },
  { value: '100%', label: 'Live Deployments' },
  { value: '5', label: 'Product Categories' },
  { value: 'Vue', label: 'Primary Stack' },
]

function handleImgError(event, project) {
  event.target.style.display = 'none'
  event.target.parentElement.style.background = `linear-gradient(135deg, ${project.color}30, #0A0A0F)`
}
</script>
