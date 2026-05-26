import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', component: Home },
		{ path: '/projects', component: ProjectsPage },
		{ path: '/privacy', component: PrivacyPolicy }
	]
})
