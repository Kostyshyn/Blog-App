<template>
	<footer>
		<section>
			<div class="footer-info-wrap">
				<div class="grid-row">
					<div class="col-8">
						<div class="footer_info">
							<ul class="footer_map">
								<li><router-link to="/" tag="a" exact >Home</router-link></li>
								<li><router-link to="/posts" tag="a">Posts</router-link></li>
								<li><router-link to="/contacts" tag="a">Contacts</router-link></li>
							</ul>
						</div>
					</div>
					<div class="col-4">
						<div class="footer_info">
							<p>Blog Application</p>
						</div>
					</div>
				</div>
			</div>
			<div class="grid-row">
				<div class="col-12">
					<div class="copy">
						<p>&copy 2017</p>
					</div>
				</div>
			</div>
		</section>
	</footer>
</template>


<script>
export default {
	name: 'blog-footer',
	data: function(){
		return {}
	},
	methods: {
	}
}
</script>