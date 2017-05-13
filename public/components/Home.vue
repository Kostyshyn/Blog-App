<template>
	<section>
		<div class="grid-row">
			<div class="col-12">
				<div class="main-page-header box">
					<h1>Home page</h1>
				</div>
			</div>
		</div>	
		<post-preview></post-preview>
	</section>
</template>

<style>

</style>

<script>

import PostPreview from './PostPreview.vue'

export default {
	components: { PostPreview },
	data: function(){
		return {

		}
	},
	methods: {
		// getData: function(){
		// 	this.$http.get('/api/posts').then(function(response){
		// 	    // success callback
		// 	    console.log('data:', response.);
		// 	}, function(response){
		// 	    // error callback
		// 	    console.log('error:', response);
		// 	});
		// },
		// sendData: function(){
		// 	this.$http.post('/api', {info: this.info}).then(function(response){

		// 		console.log('sended:', response);

		// 	}, function(response){
		// 	    // error callback
		// 	    console.log('error:', response);
		// 	});
		// }
	},
	created: function(){

	}
}
</script>