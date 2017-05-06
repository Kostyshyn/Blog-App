<template>
	<div>
	
		<ul>
			<li><a v-link="{ path: '/' }">Home</a></li>
	  		<li><a v-link="{ path: '/posts' }">Posts</a></li>
		</ul>
		<hr>
		<router-view></router-view>	

	</div>
</template>


<script>
export default {
	data: function(){
		return {}
	},
	methods: {
	}
}
</script>