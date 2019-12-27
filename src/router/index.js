import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/Landing.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Portfolio from '@/components/Portfolio/Portfolio.vue'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    { path: '/', component: Landing },
		{ path: '/about', component: About },
		{ path: '/contact', component: Contact },
		{ path: '/portfolio', name: 'portfolio', component: Portfolio }
  ]
})
