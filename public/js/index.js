
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import Posts from '../components/Posts.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

export var router = new VueRouter({
    history: true,
    hashbang: false,
    linkActiveClass: 'active'
});

router.map({
	'/': {
		component: Home
	},
	'/posts': {
		component: Posts
	}
});

// router.redirect({
// 	'*': '/'
// });

router.start(Main, '#app');