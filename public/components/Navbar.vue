<template>
	<nav class="fixed_menu">	
		<div class="navbar">
			<div class="desktop_menu">
				<ul>
					<li class="logo"><h2>WebDev</h2></li>
					<li><router-link to="/" tag="a" exact >Home</router-link></li>
					<li><router-link to="/posts" tag="a">Posts</router-link></li>
					<li><router-link to="/contacts" tag="a">Contacts</router-link></li>
				</ul>
			</div>
			<div class="mobile_menu">
				<span class="logo"><h2>WebDev</h2></span>
				<div class="open_button">
					<img src="img/list-menu-black.png" alt="">
				</div>
				<div class="open_header">Menu</div>
				<ul class="menu hidden">
					<li><router-link to="/" tag="a" exact >Home</router-link></li>
					<li><router-link to="/posts" tag="a">Posts</router-link></li>
					<li><router-link to="/contacts" tag="a">Contacts</router-link></li>
					<li class="divider"></li>
					<li class="hidden_button" v-if="user">
						<router-link to="/profile" tag="a" class="profile-button">
							<div class="user-avatar" v-bind:style="{ 'background-image': 'url(../img/' + user.profile_img + ');' }">
							</div>
							<div class="button main-button">
								{{ user.username }}
							</div>
						</router-link>	
					</li>
					<li class="hidden_button" v-else-if="!isAuth">
						<router-link to="/login" tag="a" class="button">Login</router-link>
						<router-link to="/signup" tag="a" class="button main-button">Sign Up</router-link>
					</li>	
				</ul>
			</div>
			<ul class="navbar_buttons" v-if="user">
				<li>
					<router-link to="/profile" tag="a" class="profile-button">
						<div class="user-avatar" v-bind:style="{ 'background-image': 'url(../img/' + user.profile_img + ');' }">
						</div>
						<div class="button main-button">
							{{ user.username }}
						</div>
					</router-link>	
				</li>
			</ul>
			<ul class="navbar_buttons" v-else-if="!isAuth">
				<li>
					<router-link to="/login" tag="a" class="button">Login</router-link>	
				</li>
				<li>
					<router-link to="/signup" tag="a" class="button main-button">Sign Up</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>


<script>

import auth from '../js/auth.js'
import { Event } from '../js/index.js'

export default {
	name: 'navbar',
	props: ['user', 'isAuth'],
	data: function(){
		return {

		}
	},
	methods: {

	},
	created: function(){

	}
}
</script>