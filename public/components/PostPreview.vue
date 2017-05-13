<template>
	<div class="posts-preview">
		<div class="grid-row">
			<div class="col-4">
				<div class="post-preview-wrap">
					<div class="post-preview box">
						<div class="post-preview-info">
							<div class="post-preview-header">
								<div class="post-info">
									<div class="post-author">
										<a href="">
											<div class="post-author-avatar">
											</div>
											<div class="post-author-name">
												Kostyshyn	
											</div>
										</a>
									</div>
									<div class="post-date">
										<p><span class="icon calendar"></span>7.05.2017</p>
									</div>
								</div>	
								<h1><router-link to="/posts/postid" tag="a" exact >Blog about web design and development.</router-link>
								</h1>

								<div class="post-preview-tags">
									<span class="tag">
										<a href="">
											vue
										</a>
									</span>
									<span class="tag">
										<a href="">
											nodejs
										</a>
									</span>
								</div>
							</div>
							<div class="post-preview-content">
								<div class="post-preview-text">
									<p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст.</p>
								</div>
								<div class="post-preview-controll">
									<div class="post-comment-icon">
										<a href="">
											<span class="icon comment-icon big_icon"></span>
											<div class="comment-icon-count">
												3
											</div>
										</a>
									</div>
									<div class="post-like">
										<a href="">
											<span class="icon like big_icon"></span>
											<div class="like-count">
												145
											</div>
										</a>
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
export default {
	name: 'post-preview',
	data: function(){
		return {}
	},
	methods: {
	}
}
</script>

