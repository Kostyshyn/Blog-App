<template>
	<section>
		<div class="profile">
			<div class="grid-row">
				<div class="col-4">
					<div class="profile-avatar box">
						<h2>
							Avatar
						</h2>
					</div>
				</div>
				<div class="col-8">
					<div class="profile-info box">
						<h2>
							Info
						</h2>
					</div>					
				</div>
			</div>
			<div class="grid-row">
				<div class="col-12">
					<div class="profile-controll box">
						<router-link to="/posts/create" tag="a" class="button profile-controll-button">Create post</router-link>
						<button class="button profile-controll-button" v-on:click="logout">Logout</button>
					</div>
				</div>
			</div>
			<div class="grid-row">
				<div class="col-12">
					<div class="profile-content box">
						<h2>
							Content
						</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
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