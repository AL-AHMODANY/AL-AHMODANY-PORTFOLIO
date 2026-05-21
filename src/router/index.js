import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', name: 'Home', component: () => import('../pages/HomePage.vue') },
    { path: '/about', name: 'About', component: () => import('../pages/AboutPage.vue') },
    { path: '/projects', name: 'Projects', component: () => import('../pages/ProjectsPage.vue') },
    { path: '/skills', name: 'Skills', component: () => import('../pages/SkillsPage.vue') },
    { path: '/resume', name: 'Resume', component: () => import('../pages/ResumePage.vue') },
    { path: '/contact', name: 'Contact', component: () => import('../pages/ContactPage.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../pages/NotFoundPage.vue') },
  ],
})

export default router