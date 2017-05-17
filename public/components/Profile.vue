<template>
	<div class="profile box">
		<router-link to="/create-post" tag="a" class="button">Create post</router-link>
		<button class="button" v-on:click="logout">Logout</button>
	</div>
</template>


<script>
export default {
	name: 'profile',
	data: function(){
		return {}
	},
	methods: {
		logout: function(){
			this.$http.get('/api/logout').then(function(response){
				this.$router.replace('/');
			}, function(response){
				// error callback
				console.log('error:', response.body.message);
				this.error = response.body.message;
			});
		}
	}
}
</script>