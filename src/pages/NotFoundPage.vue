<template>
  <div class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
    <div class="absolute inset-0 hero-gradient grid-pattern"></div>
    <div class="text-center relative z-10">
      <div class="font-display font-black text-[180px] md:text-[240px] leading-none text-gradient opacity-20 select-none">404</div>
      <div class="relative -mt-16 md:-mt-24">
        <span class="tag mb-4 inline-block">Lost in the void</span>
        <h1 class="font-display font-bold text-4xl md:text-5xl mb-4">Page Not Found</h1>
        <p class="text-[var(--muted)] text-lg max-w-md mx-auto mb-10">
          This page doesn't exist. Maybe it never did. Let's get you back somewhere real.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <router-link to="/" class="btn-primary">← Back to Home</router-link>
          <router-link to="/projects" class="btn-outline">View Projects</router-link>
        </div>
      </div>
    </div>
  </div>
</template>