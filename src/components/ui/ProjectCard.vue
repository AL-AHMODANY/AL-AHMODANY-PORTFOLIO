<template>
  <div
    class="group card-glass rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
    :style="`transition-delay: ${delay}s`"
    @click="openModal"
  >
    <!-- Screenshot / Image -->
    <div class="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        @error="handleImageError"
        ref="imgEl"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <!-- Live button -->
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a
          :href="project.url"
          target="_blank"
          class="btn-primary text-xs px-4 py-2"
          @click.stop
        >
          <ExternalLink :size="14" /> Live Demo
        </a>
      </div>
      <!-- Category badge -->
      <div class="absolute top-3 left-3">
        <span class="text-xs font-mono px-2.5 py-1 rounded-full text-black font-semibold" :style="`background: ${project.color}`">
          {{ project.category }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
        {{ project.title }}
      </h3>
      <p class="text-[var(--muted)] text-sm leading-relaxed mb-4 line-clamp-2">
        {{ project.description }}
      </p>
      <!-- Tech stack -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tech in project.tech.slice(0, 3)" :key="tech" class="tag text-xs">
          {{ tech }}
        </span>
      </div>
      <!-- Links -->
      <div class="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
        <a :href="project.url" target="_blank" class="flex items-center gap-1.5 text-xs font-mono text-accent hover:underline" @click.stop>
          <Globe :size="13" /> View Live
        </a>
        <span class="text-[var(--border)]">·</span>
        <a href="https://github.com" target="_blank" class="flex items-center gap-1.5 text-xs font-mono text-[var(--muted)] hover:text-accent transition-colors" @click.stop>
          <Github :size="13" /> Source
        </a>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <Teleport to="body">
    <transition name="modal">
      <div v-if="modalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="modalOpen = false"></div>
        <div class="relative card-glass rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-accent/20">
          <button @click="modalOpen = false" class="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center hover:bg-accent/20 transition-colors">
            <X :size="16" />
          </button>
          <div class="h-64 overflow-hidden rounded-t-3xl">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover object-top" @error="handleImageError" />
          </div>
          <div class="p-8">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h2 class="font-display font-bold text-2xl mb-1">{{ project.title }}</h2>
                <span class="tag">{{ project.category }}</span>
              </div>
              <a :href="project.url" target="_blank" class="btn-primary text-xs">
                <ExternalLink :size="14" /> Visit Site
              </a>
            </div>
            <p class="text-[var(--muted)] leading-relaxed mb-6">{{ project.description }}</p>
            <div>
              <p class="font-display font-semibold text-sm mb-3">Tech Stack</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { ExternalLink, Globe, Github, X } from 'lucide-vue-next'

const props = defineProps({
  project: Object,
  delay: { type: Number, default: 0 }
})

const modalOpen = ref(false)
const imgEl = ref(null)

function openModal() { modalOpen.value = true }

function handleImageError() {
  if (imgEl.value) {
    imgEl.value.style.display = 'none'
    imgEl.value.parentElement.style.background = `linear-gradient(135deg, ${props.project.color}20, #111118)`
  }
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: all 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .relative, .modal-leave-to .relative { transform: scale(0.95); }
</style>