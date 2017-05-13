
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

import _ from '../bower/lodash/dist/lodash.min.js'
import moment from '../bower/moment/min/moment.min.js'

Vue.filter('chunk', function(value, size){
	return _.chunk(value, size);
});

Vue.filter('moment', function(date){
	return moment(date).format('ll');
});

export var router = new VueRouter({
    history: true,
    hashbang: false,
    linkActiveClass: 'active'
});

router.map({
	'/': {
		component: Home
	},
	'/categories': {
		component: Posts
	},
	'/login': {
		component: Login
	},
	'/signup': {
		component: Signup
	},
	'/posts/:href': {
		name: 'post',
		component: Post,
		props: true
	}
});

// router.redirect({
// 	'*': '/'
// });

router.start(Main, '#app');