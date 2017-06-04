<template>
	<div id="comments">
		<section>
			<div class="grid-row">
				<div class="col-8">
					<div class="comment-form">
						<h3>Add comment</h3>
						<form action="">
							<textarea v-model="text" name="text" id="" cols="30" rows="10"></textarea>
							<button class="button primary" v-on:click="sendComment">Send comment</button>
						</form>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="grid-row">
				<div class="col-8">
					<div class="comments-list" v-for="comment in comments">
						<comment :comment="comment"></comment>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>


<script>

import Comment from './Comment.vue'

export default {
	name: 'comments',
	components: {
		Comment
	},
	props: ['comments', 'href'],
	data: function(){
		return {
			text: null,
			info: null,
			newComment: null,
			error: null
		}
	},
	methods: {
		sendComment: function(e){
			e.preventDefault();
			this.$http.post('/api/posts/' + this.href + '/comments', {
				text: this.text
			}).then(function(response){

			this.newComment = response.data.data; // add populate 

			this.comments.push(this.newComment);

			}, function(response){
			    // error callback
			    console.log('error:', response.body.message);
			    this.error = response.body.message;
			});
		}
	}
}
</script>