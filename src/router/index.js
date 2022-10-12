import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import GitHubUserSearchView from '../views/projects/GitHubUserSearchView.vue'
import ResumeView from '../views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/projects/GitHubUserSearch',
      name: 'GitubUserSearch',
      component: GitHubUserSearchView
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumeView
    }
  ]
})

export default router
