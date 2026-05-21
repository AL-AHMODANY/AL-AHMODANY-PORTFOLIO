<template>
  <footer class="border-t border-[var(--border)] mt-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-t from-accent/3 to-transparent pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
      <div class="grid md:grid-cols-4 gap-10 mb-12">
        <div class="md:col-span-2">
          <p class="font-display font-black text-2xl text-gradient mb-3">AL-AHMODANY</p>
          <p class="text-[var(--muted)] text-sm max-w-md leading-relaxed mb-6">
            Frontend developer focused on Vue.js, modern UI systems, and web experiences that feel clean,
            fast, and reliable from the first interaction to launch day.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :target="social.external ? '_blank' : undefined"
              :rel="social.external ? 'noreferrer' : undefined"
              class="w-10 h-10 rounded-xl card-glass flex items-center justify-center hover:border-accent/50 hover:text-accent hover:scale-110 transition-all duration-300"
            >
              <component :is="social.icon" :size="16" />
            </a>
          </div>
        </div>

        <div>
          <p class="font-display font-semibold text-sm mb-4">Navigation</p>
          <nav class="space-y-2">
            <router-link
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="block text-sm text-[var(--muted)] hover:text-accent transition-colors duration-200 font-body"
            >
              {{ link.label }}
            </router-link>
          </nav>
        </div>

        <div>
          <p class="font-display font-semibold text-sm mb-4">Contact</p>
          <div class="space-y-2">
            <p class="text-sm text-[var(--muted)] font-mono">contact@al-ahmodany.dev</p>
            <p class="text-sm text-[var(--muted)]">Remote collaboration available worldwide.</p>
            <div class="flex items-center gap-2 mt-4">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span class="text-xs font-mono text-accent">Open for freelance and contract work</span>
            </div>
            <router-link to="/contact" class="btn-primary text-xs mt-4 inline-flex">
              Hire Me
            </router-link>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-[var(--muted)] text-xs font-mono">
          © {{ new Date().getFullYear() }} AL-AHMODANY - Built with Vue 3, Tailwind CSS, and deployed on Vercel
        </p>
        <div class="flex gap-4">
          <a href="https://github.com/AL-AHMODANY" target="_blank" rel="noreferrer" class="text-[var(--muted)] text-xs font-mono hover:text-accent transition-colors">
            GitHub
          </a>
          <router-link to="/resume" class="text-[var(--muted)] text-xs font-mono hover:text-accent transition-colors">
            Resume
          </router-link>
          <router-link to="/contact" class="text-[var(--muted)] text-xs font-mono hover:text-accent transition-colors">
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Mail, FileText } from 'lucide-vue-next'

const socials = [
  { label: 'GitHub', href: 'https://github.com/AL-AHMODANY', icon: Github, external: true },
  { label: 'Email', href: 'mailto:contact@al-ahmodany.dev', icon: Mail, external: false },
  { label: 'Resume', href: '/resume', icon: FileText, external: false },
]

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
]
</script>
