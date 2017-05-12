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
						<h1><a v-link="{ path: '/posts/' + post.href }">{{ post.title }}</a>
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
.post-preview-wrap {

}
.post-preview-info {
	padding: 20px 20px 15px 20px; 
}
.post-preview-info a {
	text-decoration: none;
	color: black;
}
.post-preview-info a:hover {
	text-decoration: underline;
}
.post-preview-header {
	border-bottom: 2px solid #cac9cd;
}
.post-preview-header h1 {
	font-size: 1.3em;
	position: relative;
}
.post-preview-header h1 a {
	color: grey;
}
.post-bookmark {
	position: absolute;
	right: 0px;
	top: 0px;
	height: 25px;
	display: none;
}
.post-bookmark a {
	display: inline-block;
 	height: 25px;
}
.post-bookmark span {
	margin-right: 0px;
}
.post-info {
	width: 100%;
	height: 42px;
	position: relative;
	margin-bottom: 10px;
}
.post-date, .post-author {
	padding: 10px 0px;
	width: 49%;
	display: inline-block;
}
.post-author {
	margin-top: -15px;
}
.post-author a {
	display: inline-block;
	color: #1ca7ea;
}
.post-author a:hover .post-author-name {
	text-decoration: underline;
}
.post-author-name {
	display: inline-block;
	height: 40px;
	line-height: 40px;
	margin-left: 45px; 	
}
.post-author-avatar {
	display: inline-block;
	height: 40px;
	width: 40px;
	background-position: center;
	background-size: cover;
	background-color: grey;
	border-radius: 50%;
	position: absolute;
}
.post-date {
	color: grey;
	text-align: right;
}
.post-preview-text {
	padding: 15px 0px;
	border-bottom: 2px solid #cac9cd;
	line-height: 22px;
}
.post-preview-controll {
	padding-top: 15px;
	text-align: right;
}
.post-like, .post-comment, .comment-count, .like-count {
	cursor: pointer;
	height: 25px;
	display: inline-block;
}
.post-comment { 
	margin-right: 20px;
	position: relative;
}
.comment-count {
	position: absolute;
	top: 2px;
}
.post-like {
	position: relative;
}
.post-comment span { 
	height: 25px;
}
.post-like span { 
	display: inline-block;
	height: 25px;
}
.like-count {
	position: absolute;
	top: 2px;
}
.post-preview-tags {
	width: 100%;
	padding: 10px 0px 20px 0px;
}
/*tags*/
.tag {
	cursor: pointer;
	display: inline-block;
	min-width: 60px;
	padding: 0px 10px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	color: white;
	border-radius: 4px;
	margin-right: 5px;
	/*background-color: #1abc9c;*/
	background-color: #ff5722;
}
.tag a {
	color: inherit;
	text-decoration: none;
}
.tag a:hover {
	text-decoration: none;
}
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