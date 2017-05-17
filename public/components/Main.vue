<template>
	<div>
		<div class="dimm"></div>
		<navbar :user="user" :isAuth="isAuth"></navbar>
		<div class="grid-container">
			<div class="main-content">
				<transition name="component-fade" mode="out-in">	
					<router-view></router-view>
				</transition>
			</div>
			<blog-footer></blog-footer>
		</div>
	</div>
</template>

<style>

</style>

<script>

import Navbar from './Navbar.vue'
import BlogFooter from './Footer.vue'
import { Event } from '../js/index.js'

export default {
	components: {
		Navbar,
		BlogFooter
	},
	data: function(){
		return {
			user: null,
			isAuth: false,
			error: null
		}
	},
	methods: {
		checkUser: function(){
			this.$http.get('/api/user').then(function(response){
				this.user = response.data.user;
				if (this.user){
					this.isAuth = true;
				} else {
					this.isAuth = false;
				}
			}, function(response){
					// error callback
				console.log('error:', response.body.message);
				this.error = response.body.message;
			});
		}
	},
	created: function(){
		this.checkUser();
		Event.$on('changeState', this.checkUser);
	}
}
</script>