<template>
	<section>
		<div class="grid-row">
			<div class="col-12">
				<div class="signup-form box">
					<form action="">
						<h1>Sign Up</h1>
						<input type="text" placeholder="Login" v-model="username">
						<input type="password" placeholder="Password" v-model="password">
						<input type="text" placeholder="Email " v-model="email">
						<input type="password" placeholder="Confirm password" v-model="confirm_password">
						<h3>Write some information about you...</h3>
						<textarea name="user-ifo" id="" cols="30" rows="3"></textarea v-model="user_info">
						<button class="button primary" v-on:click="signup">Sign Up</button>
						<p class="signup-error" v-if="error">{{ error }}</p>
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
			confirm_password: null,
			email: null,
			user_info: null,
			info: null,
			error: null
		}
	},
	methods: {
		signup: function(e){
			e.preventDefault();
			this.$http.post('/api/signup', {
				username: this.username,
				password: this.password,
				email: this.email,
				info: this.user_info
			}).then(function(response){

			this.info = response.data;

			console.log('info:', this.info);

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