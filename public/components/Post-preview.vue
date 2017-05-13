<template>
	<div class="col-4">
		<div class="post-preview-wrap">
			<div class="post-preview box">
				<div class="post-preview-info">
					<div class="post-preview-header">
						<div class="post-info">
							<div class="post-author">
								<a href="">
									<div class="post-author-avatar" style="background-image: url('{{ post.author.profile_img }}');">
									</div>
									<div class="post-author-name">
										{{ post.author.username }}
									</div>
								</a>
							</div>
							<div class="post-date">
								<p><span class="icon calendar"></span>
									{{ post.date | moment }}
								</p>
							</div>
						</div>	
						<h1><a v-link="{ name: 'post', params: { href: post.href } }">{{ post.title }}</a>
						</h1>
						<div class="post-preview-tags">
							<span class="tag" v-for="tag in post.tags" v-link="{ path: '/categories/' + tag }">
								{{ tag }}
							</span>
						</div>
					</div>
					<div class="post-preview-content">
						<div class="post-preview-text">
							<p>{{ post.text }}</p>
						</div>
						<div class="post-preview-controll">
							<div class="post-comment">
								<span class="icon comment-icon big_icon"></span>
								<div class="comment-count">
									{{ post.comments.length }}
								</div>
							</div>
							<div class="post-like" v-on:click="like">
								<span class="icon like big_icon"></span>
								<div class="like-count">
									{{ post.likes.length }}
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<style>

</style>

<script>

export default {
	name: 'post-preview',
	props: ['post'],
	data: function(){
		return {

		}
	},
	methods: {
		like: function(){
			this.$http.get('/api/posts/' + this.post.href + '/like').then(function(response){

			this.post.likes = response.data.data.likes;

			}, function(response){
			    // error callback
			    console.log('error:', response);
			});
		}
	}
}
</script>