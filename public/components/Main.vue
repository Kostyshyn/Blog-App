<template>
	<div class="dimm"></div>
	<nav class="fixed_menu">	
		<div class="navbar">
			<div class="desktop_menu">
				<ul>
					<li><a v-link="{ path: '/', exact: true }">Home</a></li>
					<li><a v-link="{ path: '/categories' }">Categories</a></li>
					<li><a v-link="{ path: '/contacts' }">Contacts</a></li>
				</ul>
			</div>
			<div class="mobile_menu">
				<div class="open_button">
					<img src="../img/list-menu.png" alt="">
				</div>
				<div class="open_header">Меню</div>
				<ul class="menu hidden">
					<li><a v-link="{ path: '/' }" class="menu_active">Home</a></li>
					<li><a v-link="{ path: '/posts/categories' }">Categories</a></li>
					<li><a v-link="{ path: '/contacts' }">Contacts</a></li>
					<li class="hidden_button"><a v-link="{ path: '/login' }" class="button">Login</a></li>
					<li class="hidden_button"><a v-link="{ path: '/signup' }" class="button yellow">Sign Up</a></li>
				</ul>
			</div>
			<ul class="navbar_buttons">
				<li>
					<a v-link="{ path: '/login' }" class="button white">Login</a>	
				</li>
				<li>
					<a v-link="{ path: '/signup' }" class="button yellow">Sign Up</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="grid-container">
		<div class="main-content">
			<section>
				<router-view></router-view>	
			</section>
		</div>
	</div>
</template>

<style>
.main-content {
	width: 100%;
	min-height: 100vh;
	height: auto;
	background-color: #eeeeee;
}

/*icons*/

.calendar {
	background-image: url('../img/calendar-grey.png');
}
.like {
	background-image: url('../img/like.png')
}
.comment-icon {
	background-image: url('../img/comment.png')
}
.big_icon {
	width: 25px;
	height: 25px;
}
/*******
*******Navbar*******
******/
nav {
	width: 100%;
	z-index: 5;
}
.fixed_menu {
	box-shadow: 0 0 10px rgba(0,0,0,0.5);
	background-color: #47c9af;
	color: white;
	height: 60px;
	position: fixed;
	top: 0;
	transition: all .3s ease-out;
	transform: translateY(0);
}
.hidden_top {
	transform: translateY(-60px);
}
.desktop_menu {
	padding-left: 25px;
}
.desktop_menu ul {
	margin: 0;
	padding: 0;
}
.desktop_menu ul li {
	float: left;
	list-style-type: none;
	display: inline-block;
	margin-right: 18px; 
	margin-top: 18px;	
}
.desktop_menu ul li a {
	text-decoration: none;	
	color: white;
	font-size: 18px;
}
.desktop_menu ul li a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: white;
    transition: width .2s ease-out;
}
.desktop_menu ul li a:hover::after {
    width: 100%;
}
.desktop_menu ul li .active::after {
	content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: white;
} 
.mobile_menu {
	display: none;
}
.open_button {
	width: 60px;
	height: 60px;
	text-align: center;
	float: right;
	padding-right: 10px;
}
.open_button img {
	cursor: pointer;
	height: 30px;
	width: 30px;
	margin-top: 15px;
}
.open_header {
	display: inline-block;
	height: 60px;
	line-height: 60px;
	float: right;
}
.navbar {
	width: 80%;
	margin: 0 auto;
	max-width: 1400px;
}
.navbar .navbar_buttons {
	margin: 0;
	padding: 0;
	float: right;
	margin-right: 20px;
}
.navbar .top_navbar_buttons {
	margin: 0;
	padding: 0;
	float: right;
	margin-right: 8px;
}
.navbar .navbar_buttons li{
	list-style-type: none;
	display: inline-block;
	line-height: 60px;
	margin-right: 5px; 
}
.navbar .menu li{
	list-style-type: none;
	height: 40px;
	line-height: 40px;
	padding-left: 15px;
	transition: .2s;
}
.navbar .menu li .menu_active {
	color: black;
}
.navbar .menu li a {
	color: black;
	font-size: 20px;
	text-decoration: none;
	color: grey;
}
.navbar .menu .hidden_button {
	display: none;
	margin: 10px 10px;
	padding: 0;
}
.navbar .menu .hidden_button a {
	width: 100%;
	margin: 0 auto;
	color: white;
	height: 40px;
	line-height: 40px;
}
.menu {
	background-color: white;
	top: 60px;
	right: -325px;
	height: 100vh;
	width: 325px;
	position: absolute;
	margin: 0;
	padding: 0;
	transition: all .3s ease-in-out;
	transform: translateX(-325px);
}
.hidden {
	transform: translateX(0);
}
/******
*******Grid******
*******/
@media screen and (max-width: 1200px) {
	section, .top_menu, .navbar {
		width: 100%;
	}
}
@media screen and (max-width: 980px) {
	.menu {
		width: 315px;
		right: -315px;
		transform: translateX(-315px);
	}
	.desktop_menu ul li a {
		font-size: 18px;
	}
	.hidden {
		transform: translateX(0);
	}
	.button {
		padding: 0 10px;
	}
}
@media screen and (max-width: 780px) {   
	.desktop_menu {
		display: none;
	}
	.dimmed {
		display: block;
	}
	.mobile_menu {
		display: block;
	}
	footer .footer_info {
		display: none;
	}
}
@media screen and (max-width: 560px) {
	[class*='col-'] {
	  	float: left;
	  	padding: 10px 0px;
	}
	section {
		padding: 10px;
		width: 100%;
	}
/*	.main-post-date, .main-post-author {
		width: 49%;
	}*/
	.col-4 { width: 100%; }
	.navbar_buttons {
		display: none;
	}
	.navbar .menu .hidden_button {
		display: block;
	}
	.menu {
		top: 60px;
		width: 250px;
		right: -250px;
		transform: translateX(-250px);
	}
	.hidden {
		transform: translateX(0);
	}
}
</style>

<script>
export default {
	data: function(){
		return {
			user: null
		}
	},
	methods: {
		
	}
}
</script>