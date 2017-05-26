
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import Post from '../components/Post.vue'
import Posts from '../components/Posts.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Profile from '../components/Profile.vue'
import CreatePost from '../components/CreatePost.vue'

import auth from './auth.js'

Vue.use(VueResource);
Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	scrollBehavior(to, from, savedPosition){
		if (savedPosition){
			setTimeout(() => {
				window.scrollTo(savedPosition.x, savedPosition.y);
			}, 200);
		} else if (to.hash){ 
			setTimeout(() => {
				window.scrollTo(0, to.hash.offsetTop);
			}, 200);
		} else {
			setTimeout(() => {
				window.scrollTo(0, 0);
			}, 200);
		}
	},
	routes: [
		{
			name: 'home',
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
		},
		{
			name: 'create-post',
			path: '/posts/create',
			component: CreatePost,
			meta: { auth: true }
		},
		{
			name: 'post',
			path: '/posts/:href',
			component: Post,
			props: true
		},
		{
			name: 'categories',
			path: '/posts/categories/:tag',
			component: Posts,
			props: true
		},
		{
			name: 'profile',
			path: '/profile',
			component: Profile,
			props: true,
			meta: { auth: true }
		},
		{
			path: '*',
			redirect: '/'
		}
	]
});

export var Event = new Vue({});

router.beforeEach(function(to, from, next){
	if (to.meta.auth){
		console.log('private route');
	}
	Event.$emit('changeState')
	next();
});

const app = new Vue({
	el: '#app',
	router,
	render: h => h(Main)
});