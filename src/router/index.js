import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/projects',
		name: 'projects',
		component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
	},
	{
		path: '/links',
		name: 'links',
		component: () => import(/* webpackChunkName: "links" */ '../views/Links.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
	},
	{
		path: '/thankyou',
		name: 'thankyou',
		component: () => import(/* webpackChunkName: "contact" */ '../views/ThankYou.vue')
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
            return { el: to.hash };
        }
        return { x: 0, y: 0 };
    }
})

export default router