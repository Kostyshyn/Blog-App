<template>
	<section>
		<h1>Login</h1>	
		<form action="">
			<input type="text" v-model="username" placeholder="Login">
			<br>
			<input type="password" v-model="password" placeholder="Password">
			<button class="button" type="submit" v-on:click="auth">Login</button>
			<p v-model="error">{{ error }}</p>
		</form>	
	</section>
</template>


<script>
export default {
	data: function(){
		return {
			username: null,
			password: null,
			info: null,
			error: null
		}
	},
	methods: {
		auth: function(e){
			e.preventDefault();
			this.$http.post('/api/login', {
				username: this.username,
				password: this.password
			}).then(function(response){

			this.info = response.data;

			console.log('info:', this.info);

			this.$route.router.go('/');

			}, function(response){
			    // error callback
			    console.log('error:', response.body.message);
			    this.error = response.body.message;
			});
		}
	}
}
</script>