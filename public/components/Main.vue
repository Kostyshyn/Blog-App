<template>
	<div>
		<div class="dimm"></div>
		<navbar></navbar>
		<div class="grid-container">
			<div class="main-content">
				<router-view></router-view>
			</div>
			<blog-footer></blog-footer>
		</div>
	</div>
</template>

<style>

</style>

<script>

import Navbar from './Navbar.vue'
import BlogFooter from './Footer.vue'

export default {
	components: {
		Navbar,
		BlogFooter
	},
	data: function(){
		return {

		}
	},
	methods: {
	}
}
</script>