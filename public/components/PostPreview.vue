<template>
	<div>
		<div v-if="posts">
			<div class="grid-row">
				<div class="col-12">

					<div class="posts-preview-filter">
						<button class="button" v-on:click="popular">Popular</button>
						<button class="button" v-on:click="latest">Latest</button>
						<button class="button" v-on:click="topRated">Top rated</button>
					</div>

				</div>
			</div>
			<div class="posts-preview">
				<div class="grid-row" v-for="row in chunk">
					<div class="col-4" v-for="post in row">
						<div class="post-preview-wrap">
							<div class="post-preview box">
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
								<div class="post-preview-img">
									<div class="post-preview-head">									
									</div>
								</div>
								<div class="post-preview-info">
									<div class="post-preview-header">

										<h1>
											<router-link :to="{ name: 'post', params: {
												href: post.href
											} }" tag="a" exact >{{ post.title }}</router-link>
										</h1>	
									</div>
									<div class="post-preview-content">
										<div class="post-preview-tags">
											<span class="tag" v-for="tag in post.tags">
												<router-link :to="{ name: 'categories', params: { tag: tag } }" tag="a" exact >
													{{ tag }}
												</router-link>
											</span>
										</div>
										<div class="post-preview-controll">
											<div class="post-views">
												<span class="icon view-icon"></span>
												<div class="views-count">
													{{ post.views }}
												</div>
											</div>
											<div class="post-comment-icon">
												<router-link to="/posts" tag="a">
													<span class="icon comment-icon"></span>
													<div class="comment-icon-count">
														{{ post.comments.length }}
													</div>
												</router-link>
											</div>
											<div class="post-like" v-on:click="like(post, $event)">
												<span v-bind:class="checkLikes(post.likes)"></span>
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
		</div>
		<div class="grid-row"  v-else>
			<div class="col-12">
				<div class="preloader">
					<div class="preloader-cover" v-if="!error">
						
					</div>
					<div v-else>
						<h1>Connection error</h1>
						<h3>{{ error }}</h3>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>


<script>

import _ from '../bower/lodash/dist/lodash.min.js'
import moment from '../bower/moment/min/moment-with-locales.min.js'
import { Event } from '../js/index.js'

export default {
	name: 'post-preview',
	props: ['user'],
	data: function(){
		return {
			posts: null,
			error: null
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

			    var posts = response.data.data;

			    this.posts = posts;

			    // var self = this;
			    // setTimeout(function(){

			    // 	self.posts = response.data.data;

			    // }, 3000);

			}, function(response){
			    // error callback
			    // this.error = response.body.message;
			    this.error = 'AJAX Request failed';
			});
		},
		like: function(post, event){
			var post = post;
			var self = this;
			var elem = event.currentTarget;
			this.$http.get('/api/posts/' + post.href + '/like').then(function(response){
			    // success callback
			    post.likes = response.data.data.post.likes;
			    self.user.likes = response.data.data.user.likes;
			}, function(response){
			    // error callback
			    console.log('error:', response);
			});
		},
		checkLikes: function(likes){
			var self = this;
		
			if (this.user && this.user.likes){

				var like = _.intersectionBy(this.user.likes, likes, '_id');

				if (like.length > 0){
					return 'icon like';
				} else {
					return 'icon like-disabled';
				}
			} else {
				return 'icon like-disabled';
			}
		},
		popular: function(){
			this.posts.sort(function(a, b){
			    return b.views - a.views;
			});
		},
		topRated: function(){
			this.posts.sort(function(a, b){
			    return b.likes.length - a.likes.length;
			});
		},
		latest: function(){
			console.log('latest')
		}
	},
	created: function(){
		this.getPosts();
	}
}
</script>

