<template>
  <div class="pt-28">
    <section class="section-padding max-w-6xl mx-auto">
      <div class="text-center mb-16 reveal">
        <span class="tag">Get in Touch</span>
        <h1 class="font-display font-extrabold text-5xl md:text-7xl mt-4 mb-4 leading-none">
          Let's build<br /><span class="text-gradient">something solid</span>
        </h1>
        <p class="text-[var(--muted)] text-xl max-w-3xl mx-auto leading-relaxed">
          If you have a product idea, need frontend support, or want help improving an existing interface,
          this is the right place to start the conversation.
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-8">
        <div class="lg:col-span-2 space-y-4">
          <div class="card-glass rounded-2xl p-6 reveal border border-accent/20">
            <div class="flex items-center gap-3 mb-2">
              <span class="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
              <p class="font-display font-bold">Currently available</p>
            </div>
            <p class="text-[var(--muted)] text-sm">
              Open to freelance projects, long-term collaboration, and remote product work.
            </p>
            <div class="flex gap-2 mt-3 flex-wrap">
              <span class="tag text-xs">Freelance</span>
              <span class="tag text-xs">Remote</span>
              <span class="tag text-xs">Contract</span>
            </div>
          </div>

          <div
            v-for="(item, index) in contactItems"
            :key="item.label"
            class="card-glass rounded-2xl p-6 reveal hover:border-accent/30 transition-all duration-300 group"
            :style="`transition-delay: ${index * 0.1}s`"
          >
            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                <component :is="item.icon" :size="20" class="text-accent" />
              </div>
              <div>
                <p class="text-[var(--muted)] text-xs font-mono mb-1">{{ item.label }}</p>
                <p class="font-display font-semibold">{{ item.value }}</p>
                <p v-if="item.sub" class="text-[var(--muted)] text-xs mt-0.5">{{ item.sub }}</p>
              </div>
            </div>
          </div>

          <div class="card-glass rounded-2xl p-6 reveal">
            <p class="font-display font-semibold mb-4">Connect online</p>
            <div class="grid grid-cols-2 gap-2">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.href"
                :target="social.external ? '_blank' : undefined"
                :rel="social.external ? 'noreferrer' : undefined"
                class="py-3 rounded-xl card-glass flex items-center justify-center gap-2 text-xs font-mono hover:border-accent/50 hover:text-accent transition-all duration-300 group"
              >
                <component :is="social.icon" :size="15" class="group-hover:scale-110 transition-transform" />
                {{ social.label }}
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 reveal">
          <div class="card-glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div v-if="submitted" class="relative z-10 text-center py-12">
              <div class="w-20 h-20 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle :size="36" class="text-accent" />
              </div>
              <h2 class="font-display font-bold text-2xl mb-3">Message sent</h2>
              <p class="text-[var(--muted)] mb-8">Thanks for reaching out. I will reply as soon as I can, usually within one day.</p>
              <button @click="submitted = false" class="btn-outline">Send another message</button>
            </div>

            <div v-else class="relative z-10">
              <h2 class="font-display font-bold text-2xl mb-3">Start the conversation</h2>
              <p class="text-[var(--muted)] text-sm mb-8">
                Share the project goal, current stage, timeline, or any blocker you want help solving.
              </p>

              <div class="space-y-5">
                <div class="grid md:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-xs font-mono text-[var(--muted)] mb-2">Your name *</label>
                    <input
                      v-model="form.name"
                      type="text"
                      placeholder="Ahmed Mohamed"
                      class="w-full px-4 py-3 rounded-xl card-glass border border-[var(--border)] font-body text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 bg-transparent placeholder:text-[var(--muted)]"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-mono text-[var(--muted)] mb-2">Email address *</label>
                    <input
                      v-model="form.email"
                      type="email"
                      placeholder="hello@example.com"
                      class="w-full px-4 py-3 rounded-xl card-glass border border-[var(--border)] font-body text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 bg-transparent placeholder:text-[var(--muted)]"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-mono text-[var(--muted)] mb-2">Subject</label>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <button
                      v-for="subject in subjects"
                      :key="subject"
                      type="button"
                      @click="form.subject = subject"
                      class="px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200"
                      :class="form.subject === subject ? 'bg-accent text-black' : 'card-glass text-[var(--muted)] hover:border-accent/40'"
                    >
                      {{ subject }}
                    </button>
                  </div>
                  <input
                    v-model="form.subject"
                    type="text"
                    placeholder="Or type your own..."
                    class="w-full px-4 py-3 rounded-xl card-glass border border-[var(--border)] font-body text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 bg-transparent placeholder:text-[var(--muted)]"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono text-[var(--muted)] mb-2">Message *</label>
                  <textarea
                    v-model="form.message"
                    rows="5"
                    placeholder="Tell me about the product, what you need built, and where you are stuck right now..."
                    class="w-full px-4 py-3 rounded-xl card-glass border border-[var(--border)] font-body text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 bg-transparent placeholder:text-[var(--muted)] resize-none"
                  ></textarea>
                </div>

                <button
                  @click="submitForm"
                  :disabled="sending"
                  class="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Loader v-if="sending" :size="18" class="animate-spin" />
                  <Send v-else :size="18" />
                  {{ sending ? 'Sending...' : 'Send message' }}
                </button>

                <p class="text-[var(--muted)] text-xs text-center font-mono">
                  I usually respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-[var(--card)] border-y border-[var(--border)]">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-14">
          <span class="tag">FAQ</span>
          <h2 class="font-display font-bold text-4xl md:text-5xl mt-3">
            Common <span class="text-gradient">Questions</span>
          </h2>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.q"
            class="reveal card-glass rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-300"
            :style="`transition-delay: ${index * 0.08}s`"
          >
            <button @click="faq.open = !faq.open" class="w-full text-left px-6 py-5 flex items-center justify-between gap-4">
              <span class="font-display font-semibold text-sm md:text-base">{{ faq.q }}</span>
              <ChevronDown :size="18" class="text-accent flex-shrink-0 transition-transform duration-300" :class="faq.open ? 'rotate-180' : ''" />
            </button>
            <div v-if="faq.open" class="px-6 pb-6">
              <p class="text-[var(--muted)] text-sm leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Mail, MapPin, Clock, Github, FileText, Send, CheckCircle, Loader, ChevronDown } from 'lucide-vue-next'

const submitted = ref(false)
const sending = ref(false)

const form = reactive({ name: '', email: '', subject: '', message: '' })

const subjects = ['Freelance Project', 'Job Opportunity', 'Collaboration', 'General Inquiry']

const contactItems = [
  { label: 'Email', value: 'contact@al-ahmodany.dev', sub: 'Best place to reach me directly', icon: Mail },
  { label: 'Location', value: 'Remote Worldwide', sub: 'Flexible across time zones', icon: MapPin },
  { label: 'Response Time', value: 'Within 24 Hours', sub: 'Often faster on weekdays', icon: Clock },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/AL-AHMODANY', icon: Github, external: true },
  { label: 'Email', href: 'mailto:contact@al-ahmodany.dev', icon: Mail, external: false },
  { label: 'Resume', href: '/resume', icon: FileText, external: false },
]

async function submitForm() {
  if (!form.name || !form.email || !form.message) return

  sending.value = true
  await new Promise(resolve => setTimeout(resolve, 1800))
  sending.value = false
  submitted.value = true
}

const faqs = reactive([
  {
    q: 'What kinds of work do you usually take on?',
    a: 'Mostly frontend product work: Vue applications, dashboards, landing pages, storefronts, admin panels, and interface improvement projects.',
    open: false,
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope, but smaller marketing or landing page work can take about a week while fuller product interfaces often run for several weeks.',
    open: false,
  },
  {
    q: 'Can you work from designs or rough ideas?',
    a: 'Both. I can translate Figma files carefully into code, or help shape a cleaner interface when the idea is still early and loosely defined.',
    open: false,
  },
  {
    q: 'Do you handle revisions and iteration after delivery?',
    a: 'Yes. I prefer collaborative feedback loops because they usually produce better final work and smoother launches.',
    open: false,
  },
  {
    q: 'Are you open to remote long-term opportunities?',
    a: 'Yes. If the product, team, and frontend expectations are a strong fit, I am open to longer partnerships and remote roles.',
    open: false,
  },
])
</script>
