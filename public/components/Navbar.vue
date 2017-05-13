<template>
	<nav class="fixed_menu">	
		<div class="navbar">
			<div class="desktop_menu">
				<ul>
					<li><router-link to="/" tag="a" exact >Home</router-link></li>
					<li><router-link to="/posts" tag="a">Posts</router-link></li>
					<li><router-link to="/contacts" tag="a">Contacts</router-link></li>
				</ul>
			</div>
			<div class="mobile_menu">
				<div class="open_button">
					<img src="img/list-menu.png" alt="">
				</div>
				<div class="open_header">Меню</div>
				<ul class="menu hidden">
					<li><router-link to="/" tag="a" exact >Home</router-link></li>
					<li><router-link to="/posts" tag="a">Posts</router-link></li>
					<li><router-link to="/contacts" tag="a">Contacts</router-link></li>
					<li class="hidden_button"><router-link to="/login" tag="a" class="button">Login</router-link></li>
					<li class="hidden_button"><router-link to="/signup" tag="a" class="button yellow">Sign Up</router-link></li>
				</ul>
			</div>
			<ul class="navbar_buttons">
				<li>
					<router-link to="/login" tag="a" class="button white">Login</router-link>	
				</li>
				<li>
					<router-link to="/signup" tag="a" class="button yellow">Sign Up</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>


<script>
export default {
	name: 'navbar',
	data: function(){
		return {}
	},
	methods: {
	}
}
</script>