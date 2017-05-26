<template>
	<div class="posts-preview" v-if="posts">
		<div class="grid-row" v-for="row in chunk">
			<div class="col-4" v-for="post in row">
				<div class="post-preview-wrap">
					<div class="post-preview box">
						<div class="post-preview-info">
							<div class="post-preview-header">
								<div class="post-info">
									<div class="post-author">
										<a href="">
											<div class="post-author-avatar" v-bind:style="{ 'background-image': 'url(../img/' + post.author.profile_img + ');' }">
											</div>
											<div class="post-author-name">
												{{ post.author.username }}	
											</div>
										</a>
									</div>
									<div class="post-date">
										<p><span class="icon calendar"></span>
											{{ post.date | formatDate }}
										</p>
									</div>
								</div>	
								<h1><router-link :to="{ name: 'post', params: {
									href: post.href
								} }" tag="a" exact >{{ post.title }}</router-link>
								</h1>

								<div class="post-preview-tags">
									<span class="tag" v-for="tag in post.tags">
										<router-link :to="{ name: 'categories', params: { tag: tag } }" tag="a" exact >
											{{ tag }}
										</router-link>
									</span>
								</div>
							</div>
							<div class="post-preview-content">
								<div class="post-preview-text">
									<p>{{ post.text }}</p>
								</div>
								<div class="post-preview-controll">
									<div class="post-comment-icon">
										<router-link to="/posts" tag="a">
											<span class="icon comment-icon big_icon"></span>
											<div class="comment-icon-count">
												{{ post.comments.length }}
											</div>
										</router-link>
									</div>
									<div class="post-like" v-on:click="like(post)">
										<span class="icon like big_icon" v-bind:class=""></span>
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
		</div>
	</div>		

</template>


<script>

import _ from '../bower/lodash/dist/lodash.min.js'
import moment from '../bower/moment/min/moment-with-locales.min.js'

export default {
	name: 'post-preview',
	data: function(){
		return {
			posts: null
		}
	},
	computed: {
		chunk: function(){
			return _.chunk(this.posts, 3);
		}
	},
	filters: {
		formatDate: function(date){
			return moment(date).format('ll');
		}
	},
	methods: {
		getPosts: function(){
			this.$http.get('/api/posts').then(function(response){
			    // success callback
			    this.posts = response.data.data;
			}, function(response){
			    // error callback
			    console.log('error:', response);
			});
		},
		like: function(post){
			var post = post;
			this.$http.get('/api/posts/' + post.href + '/like').then(function(response){
			    // success callback
			    console.log(response.data.data.likes.length);
			    post.likes = response.data.data.likes;
			}, function(response){
			    // error callback
			    console.log('error:', response);
			});
		}
	},
	created: function(){
		this.getPosts();
	}
}
</script>

