<template>
	<div>
		<div v-if="post">
			<div class="post-wrap">
				<section>
					<div class="grid-row">
						<div class="col-12">
							<div class="post">
								<div class="post-header">
									<div class="main-post-info">
										<div class="main-post-author">
											<a href="">
												<div class="main-post-author-avatar" v-bind:style="{ 'background-image': 'url(../img/' + post.author.profile_img + ');' }">
												</div>
												<div class="main-post-author-name">
													{{ post.author.username }}
												</div>
											</a>
										</div>
										<div class="main-post-date">
											<p><span class="icon calendar"></span>
												{{ post.date | formatDate }}
											</p>
										</div>
										<div class="author-info">
											<p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nisi?</em></p>
										</div>
									</div>
									<h1>{{ post.title }}</h1>
									<div class="post-tags">
										<span class="tag" v-for="tag in post.tags">
											<router-link :to="{ name: 'categories', params: { tag: tag } }" tag="a" exact >
												{{ tag }}
											</router-link>
										</span>
									</div>
								</div>
								<div class="main-post-text">
									<p>{{ post.text }}</p>
								</div>
								<div class="main-post-controll">
									<div class="post-bookmark">
										<a href="" class="button">
											Add to bookmarks
										</a>
									</div>
									<div class="post-like">
										<span class="icon like big_icon"></span>
										<div class="like-count">
											13
										</div>
									</div>
								</div>
								<div class="divider"></div>
							</div>
						</div>
					</div>
				</section>				
				<!-- comments list and form -->
				<comments :comments="post.comments" :href="post.href"></comments>
			</div>
		</div>
	</div>
</template>

<style>

</style>

<script>

import moment from '../bower/moment/min/moment-with-locales.min.js'
import Comments from './Comments.vue'

export default {
	name: 'post',
	props: ['href'],
	data: function(){
		return {
			post: null
		}
	},
	components: {
		Comments
	},
	filters: {
		formatDate: function(date){
			return moment(date).format('ll');
		}
	},
	methods: {
		getPost: function(){
			this.$http.get('/api/posts/' + this.href).then(function(response){
			    // success callback
			    this.post = response.data.data;
			}, function(response){
			    // error callback
			    console.log('error:', response);
			});
		}

	},
	created: function(){
		this.getPost();
	}
}
</script>