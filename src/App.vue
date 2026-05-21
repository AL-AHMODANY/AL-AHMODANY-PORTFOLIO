<template>
  <div class="min-h-screen" :class="{ dark: isDark }">
    <div class="cursor-glow hidden lg:block" ref="cursorGlow"></div>
    <NavBar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from './stores/theme.js'
import NavBar from './components/layout/NavBar.vue'
import FooterSection from './components/layout/FooterSection.vue'
import ScrollToTop from './components/ui/ScrollToTop.vue'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.isDark)
const cursorGlow = ref(null)
const route = useRoute()
let observer = null

function handleMouseMove(e) {
  if (cursorGlow.value) {
    cursorGlow.value.style.left = e.clientX + 'px'
    cursorGlow.value.style.top = e.clientY + 'px'
  }
}

function queueRevealScan() {
  nextTick(() => {
    observeRevealElements()
    setTimeout(observeRevealElements, 80)
  })
}

function observeRevealElements() {
  if (!observer) return

  document.querySelectorAll('.reveal').forEach((el) => {
    if (el.classList.contains('visible')) return
    observer.observe(el)
  })
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  queueRevealScan()
})

watch(
  () => route.fullPath,
  () => {
    queueRevealScan()
  }
)

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  observer?.disconnect()
})
</script>
