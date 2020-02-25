import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Tunes from '../views/Tunes.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/tunes',
			component: Tunes
		},
		{
			path: '/about',
			component: About
		}
	]
});
/* component: () =>
				import('../views/About.vue') */
