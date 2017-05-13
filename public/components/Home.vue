<template>
	<section>
		<div class="grid-row">
			<div class="col-12">
				<div class="main-page-header box">
					<h1>Blog</h1>
				</div>
			</div>
		</div>
		<div class="posts-preview">
			<div class="grid-row" v-if="posts" v-for="row in posts | chunk 3">
				<post-preview :post="post" v-for="post in row"></post-preview>
			</div>
		</div>
	</section>
</template>

<style>
.main-page-header {
	width: 100%;
	height: 200px;
	padding: 10px; 
	/*margin-bottom: 20px;*/
}
.post-preview {
	width: 100%;
	height: auto;
	transition: .3s;
}
.post-preview:hover {
	/*box-shadow: 0px 0px 3px 1px #d4d4d5;*/
}
</style>

<script>
import PostPreview from './Post-preview.vue'

export default {
	name: 'Home',
	components: {
		PostPreview
	},
	data: function(){
		return {
			posts: null
		}
	},
	methods: {
		getData: function(){
			this.$http.get('/api/posts').then(function(response){

			this.posts = response.data.data;

			// console.log('post:', this.post);

			}, function(response){
			    // error callback
			    console.log('error:' + response);
			});
		},
		sendData: function(){
			console.log('Info', this.info);

			this.$http.post('/api', {info: this.info}).then(function(response){

				console.log('sended:', response);

			}, function(response){
			    // error callback
			    console.log('error:', response);
			});
		}
	},
	created: function(){
		this.getData();
	}
}
</script>