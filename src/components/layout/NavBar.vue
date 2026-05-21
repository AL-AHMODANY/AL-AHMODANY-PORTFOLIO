<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-3' : 'py-5'"
  >
    <div
      class="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between rounded-2xl transition-all duration-500"
      :class="scrolled ? 'card-glass shadow-xl mx-4 md:mx-8' : ''"
    >
      <router-link to="/" class="font-display font-bold text-xl tracking-tight flex items-center gap-2">
        <span class="text-gradient">AL</span>
        <span class="text-muted opacity-60">•</span>
        <span class="text-sm font-mono opacity-70 hidden sm:block">AHMODANY</span>
      </router-link>

      <nav class="hidden md:flex items-center gap-1">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 hover:text-accent"
          :class="$route.path === link.path ? 'text-accent bg-accent/10' : 'text-[var(--muted)]'"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <div class="flex items-center gap-3">
        <button
          @click="themeStore.toggleTheme()"
          class="w-9 h-9 rounded-full card-glass flex items-center justify-center hover:border-accent/40 transition-all duration-300 hover:scale-110"
          :aria-label="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="themeStore.isDark" :size="16" class="text-accent" />
          <Moon v-else :size="16" class="text-[var(--muted)]" />
        </button>

        <router-link to="/contact" class="btn-primary hidden md:inline-flex text-xs px-4 py-2">
          Hire Me
        </router-link>

        <button
          @click="menuOpen = !menuOpen"
          class="w-9 h-9 rounded-full card-glass flex items-center justify-center md:hidden"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation menu"
        >
          <X v-if="menuOpen" :size="16" />
          <Menu v-else :size="16" />
        </button>
      </div>
    </div>

    <transition name="slide-down">
      <div v-if="menuOpen" class="md:hidden mx-4 mt-2 p-4 card-glass rounded-2xl shadow-xl">
        <nav class="flex flex-col gap-1">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="menuOpen = false"
            class="px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-300"
            :class="$route.path === link.path ? 'text-accent bg-accent/10' : 'text-[var(--muted)]'"
          >
            {{ link.label }}
          </router-link>
        </nav>
        <router-link to="/contact" class="btn-primary mt-3 w-full justify-center">
          Hire Me
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Menu, X } from 'lucide-vue-next'
import { useThemeStore } from '../../stores/theme.js'

const themeStore = useThemeStore()
const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
