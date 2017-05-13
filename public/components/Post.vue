<template>
	<div class="post-wrap">
		<section>
			<div class="grid-row">
				<div class="col-12">
					<div class="post" v-if="post">
						<div class="post-header">
							<div class="main-post-info">
								<div class="main-post-author">
									<a href="">
										<div class="main-post-author-avatar" style="background-image: url('{{ post.author.profile_img }}');">
										</div>
										<div class="main-post-author-name">
											{{ post.author.username }}
										</div>
									</a>
								</div>
								<div class="main-post-date">
									<p><span class="icon calendar"></span>
										{{ post.date | moment }}
									</p>
								</div>
							</div>
							<h1>{{ post.title }}</h1>
							<div class="post-tags">
								<span class="tag" v-for="tag in post.tags" v-link="{ path: '/categories/' + tag }">
									{{ tag }}
								</span>
							</div>

						</div>
						<div class="main-post-text">
							<p>{{ post.text }}</p>
						</div>
						<div class="main-post-controll">

						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style>

</style>

<script>
export default {
	name: 'post',
	data: function(){
		return {
			post: null,
			href: null
		}
	},
	methods: {
		loadPost: function(){
			console.log('href:', this.href);

			this.$http.get('/api/posts/' + this.href).then(function(response){

			this.post = response.data.data
			console.log('data:', response.data);
			}, function(response){
			    // error callback
			    console.log('error:', response);
			});
		}
	},
	created: function(){
		this.href = this.$route.params.href;
		this.loadPost();
	}
}
</script>