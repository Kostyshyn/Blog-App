<template>
	<section>
		<div class="grid-row">
			<div class="col-12">
				<div class="create-post box">
					<form action="">
						<h1>Create post</h1>
						<h3>Title</h3>
						<input type="text" v-model="title">
						<h3>Text</h3>
						<textarea name="text" id="" cols="30" rows="3" v-model="text"></textarea>
						<input type="text" v-model="tags">
						<button class="button primary" v-on:click="createPost">Create</button>
						<p class="post-creating-error" v-if="error">{{ error }}</p>
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
			title: null,
			text: null,
			tags: null,
			info: null,
			location: null,
			error: null
		}
	},
	methods: {
		createPost: function(e){
			e.preventDefault();
			this.tags = this.tags.trim().split(', '); // set 'var tags = ...'
			this.$http.post('/api/posts', {
				title: this.title,
				text: this.text,
				tags: this.tags
			}).then(function(response){
			this.location = response.data.location;

			console.log('info:', this.info);

			this.$router.replace(this.location);

			}, function(response){
			    // error callback
			    console.log('error:', response.body.message);
			    this.error = response.body.message;
			});
		}
	}
}
</script>