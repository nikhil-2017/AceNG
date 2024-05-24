import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import Home from '@/views/Home.vue'
import Mission from '@/views/Mission.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'mission',
          name: 'Mission',
          component: Mission
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        }
      ]
    }
  ]
})

export default router
