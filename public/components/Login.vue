<template>
	<section>
		<div class="grid-row">
			<div class="col-12">
				<div class="login-form box">
					<h1>Enter login and password</h1>
					<form action="">
						<input type="text" placeholder="Login" v-model="username">
						<input type="password" placeholder="Password" v-model="password">
						<button class="button primary" v-on:click="auth">Login</button>
						<p class="login-error" v-if="error">{{ error }}</p>
					</form>
				</div>
			</div>
		</div>
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

			this.$router.replace('/profile');

			}, function(response){
			    // error callback
			    console.log('error:', response.body.message);
			    this.error = response.body.message;
			});
		}
	}
}
</script>