<template>
	<section>
		<h1>Home page</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus beatae repellat nulla tenetur delectus voluptate enim magnam, dolore quae culpa sed suscipit, consectetur architecto molestias praesentium similique molestiae sapiente laudantium.</p>
		<hr>
		<p>data: {{ data }}</p>	
		<br>
		<hr>
		<input type="text" v-model="info">
		<button class="button" v-on:click="sendData">Send</button>	
	</section>
</template>

<style>
	p {
		color: black;
	}
</style>

<script>
export default {
	data: function(){
		return {
			data: null,
			info: null
		}
	},
	methods: {
		getData: function(){
			this.$http.get('/api').then(function(response){

			this.data = response.data.message;

			console.log('data:', this.data);

			}, function(response){
			    // error callback
			    console.log('error:' + response);
			});
		},
		sendData: function(){
			console.log('Info', this.info);

			this.$http.post('/api', {info: this.info}).then(function(response){

				console.log('sended:', response);

			}, function(response){
			    // error callback
			    console.log('error:', response);
			});
		}
	},
	created: function(){
		this.getData();
	}
}
</script>