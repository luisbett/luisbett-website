import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/projects',
		name: 'projects',
		component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectsPage.vue')
	},
	{
		path: '/links',
		name: 'links',
		component: () => import(/* webpackChunkName: "links" */ '../views/LinksPage.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import(/* webpackChunkName: "contact" */ '../views/ContactPage.vue')
	},
	{
		path: '/thankyou',
		name: 'thankyou',
		component: () => import(/* webpackChunkName: "thankyou" */ '../views/ThankYouPage.vue')
	},
	{
		path: '/error',
		name: 'error',
		component: () => import(/* webpackChunkName: "error" */ '../views/ErrorPage.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { el: to.hash,
			behavior: 'smooth' };
        }
		return { left: 0, top: 0 };
    }
})

export default router
