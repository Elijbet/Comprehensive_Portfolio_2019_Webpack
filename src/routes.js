import Landing from '@/components/Landing.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Portfolio from '@/components/Portfolio/Portfolio.vue'


export const routes = [
	{ path: '/', component: Landing },
	{ path: '/about', component: About },
	{ path: '/contact', component: Contact },
	{ path: '/portfolio', name: 'portfolio', component: Portfolio }
];