<template>
	<div id="comments">
		<section>
			<div class="grid-row">
				<div class="col-12">
					<div class="comment-form box">
						<h3>Add comment</h3>
						<form action="">
							<textarea name="" id="" cols="30" rows="10"></textarea>
							<button class="button primary">Send comment</button>
						</form>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="grid-row">
				<div class="col-12">
					<div class="comments-list">
						<comment></comment>
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
	data: function(){
		return {}
	},
	methods: {
	}
}
</script>