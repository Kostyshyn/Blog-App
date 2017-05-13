<template>
	<div class="dimm"></div>
	<nav class="fixed_menu">	
		<div class="navbar">
			<div class="desktop_menu">
				<ul>
					<li><a v-link="{ path: '/', exact: true }">Home</a></li>
					<li><a v-link="{ path: '/categories' }">Categories</a></li>
					<li><a v-link="{ path: '/contacts' }">Contacts</a></li>
				</ul>
			</div>
			<div class="mobile_menu">
				<div class="open_button">
					<img src="../img/list-menu.png" alt="">
				</div>
				<div class="open_header">Меню</div>
				<ul class="menu hidden">
					<li><a v-link="{ path: '/' }" class="menu_active">Home</a></li>
					<li><a v-link="{ path: '/posts/categories' }">Categories</a></li>
					<li><a v-link="{ path: '/contacts' }">Contacts</a></li>
					<li class="hidden_button"><a v-link="{ path: '/login' }" class="button">Login</a></li>
					<li class="hidden_button"><a v-link="{ path: '/signup' }" class="button yellow">Sign Up</a></li>
				</ul>
			</div>
			<ul class="navbar_buttons">
				<li>
					<a v-link="{ path: '/login' }" class="button white">Login</a>	
				</li>
				<li>
					<a v-link="{ path: '/signup' }" class="button yellow">Sign Up</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="grid-container">
		<div class="main-content">
			<router-view></router-view>	
		</div>
	</div>
</template>

<style>

</style>

<script>
export default {
	data: function(){
		return {
			user: null
		}
	},
	methods: {
	}
}
</script>