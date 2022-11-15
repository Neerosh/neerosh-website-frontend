import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'
import GitHubUserSearchView from '../views/projects/GitHubUserSearchView.vue'
import UtilitiesTidView from '../views/projects/UtilitiesTidView.vue'
import PythonScriptsView from '../views/projects/PythonScriptsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumeView
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
      path: '/projects/PythonScripts',
      name: 'PythonScripts',
      component: PythonScriptsView
    },
    {
      path: '/projects/UtilitiesTid',
      name: 'UtilitiesTid',
      component: UtilitiesTidView
    }
  ]
})

export default router
