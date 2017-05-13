const openButton = document.querySelector('.open_button');
const hiddenMenu = document.querySelector('.menu');
const container = document.querySelector('.container');
const dimmed = document.querySelector('.dimm');
const fixedMenu = document.querySelector('.fixed_menu') || null;
const mobileMenuLinks = Array.from(document.querySelectorAll('.mobile_menu > .menu > li'));

// Navbar animation 

openButton.addEventListener('click', function(){
	hiddenMenu.classList.toggle('hidden');
	dimmed.classList.toggle('dimmed');

});

dimmed.addEventListener('click', function(){
	hiddenMenu.classList.toggle('hidden');
	dimmed.classList.toggle('dimmed');

});

mobileMenuLinks.forEach(function(l){
	l.addEventListener('click', function(){
		hiddenMenu.classList.toggle('hidden');
		dimmed.classList.toggle('dimmed');
		// window.scrollTo(0, 0);
	});
});