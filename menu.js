var mynav = document.getElementById("mynav");
var menu = document.getElementById("menu");
var close = document.getElementById("close");


menu.addEventListener('click', function(){
	mynav.style.left = '0px';
})

close.addEventListener('click', function(){
	mynav.style.left = '-250px';
})




