$(document).ready(function() {
	
	// projects fade
	$("#projects").mouseover(function() {
		$('.container').css({'background':'url(./img/maxdark.jpg) no-repeat center center fixed', 'background-size':'cover'})
		$('.item-b').css({'opacity':'0%'});
		$('.item-c').css({'opacity':'0%'});
	});
	$("#projects").mouseleave(function() {
		$('.container').css({'background':'url(./img/woodsphoto2.jpg) no-repeat center center fixed', 'background-size':'cover'})
		$('.item-b').css({'opacity':'80%'});
		$('.item-c').css({'opacity':'100%'});
	});

	// resume fade
	$("#resume").mouseover(function() {
		$('.container').css({'background':'url(./img/aw_bg.jpg) no-repeat center center fixed', 'background-size':'cover'})
	});
	$("#resume").mouseleave(function() {
		$('.container').css({'background':'url(./img/woodsphoto2.jpg) no-repeat center center fixed', 'background-size':'cover'})
	});

	// music fade
	$("#music").mouseover(function() {
		$('.container').css({'background': 'url(./img/lp2.jpg) no-repeat center center fixed', 'background-size':'cover'});
		$('.item-b').css({'opacity':'0%'});
		$('.item-c').css({'opacity':'0%'});
	});
	$("#music").mouseleave(function() {
		$('.container').css({'background':'url(./img/woodsphoto2.jpg) no-repeat center center fixed', 'background-size':'cover'});
		$('.item-b').css({'opacity':'80%'});
		$('.item-c').css({'opacity':'100%'});
	});
});