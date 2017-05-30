<template>
	<div class="comment">
		<div class="comment-info">
			<div class="comment-author">
				<a href="">
					<div class="comment-author-avatar">
					</div>
					<div class="comment-author-name">
						{{ comment.author.username }}
					</div>
				</a>
			</div>
			<div class="comment-date">
				<p><span class="icon calendar"></span>{{ comment.date }}</p>
			</div>
		</div>
		<div class="comment-text">
			<p>{{ comment.text }}</p>
		</div>
	</div>
</template>


<script>
export default {
	name: 'comment',
	props: ['comment'],
	data: function(){
		return {}
	},
	methods: {
	}
}
</script>