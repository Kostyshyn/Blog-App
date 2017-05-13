
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import Post from '../components/Post.vue'
import Posts from '../components/Posts.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

import _ from '../bower/lodash/dist/lodash.min.js'
import moment from '../bower/moment/min/moment-with-locales.min.js'

Vue.filter('chunk', function(value, size){
	return _.chunk(value, size);
});

Vue.filter('moment', function(date){
	return moment(date).format('ll');
});

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/signup',
			component: Signup
		},
		{
			path: '/posts',
			component: Posts
		}
	]
});

const app = new Vue({
	el: '#app',
	router,
	render: h => h(Main)
});