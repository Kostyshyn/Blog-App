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
				<p><span class="icon calendar"></span>{{ comment.date | formatDate }}</p>
			</div>
		</div>
		<div class="comment-text">
			<p>{{ comment.text }}</p>
		</div>
	</div>
</template>


<script>

import moment from '../bower/moment/min/moment-with-locales.min.js'

export default {
	name: 'comment',
	props: ['comment'],
	data: function(){
		return {}
	},
	filters: {
		formatDate: function(date){
			return moment(date).format('ll');
		}
	},
	methods: {
	}
}
</script>