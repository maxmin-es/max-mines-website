$(document).ready(function() {
	let bg = $('.container').css('background');
	
	// projects fade
	$("#projects").mouseover(function() {
		$('.container').css({'background':'url(./img/maxdark.jpg) no-repeat center center fixed', 'background-size':'cover'})
		$('.item-b').css({'opacity':'0%'});
		$('.item-c').css({'opacity':'0%'});
	});
	$("#projects").mouseleave(function() {
		$('.container').css({'background':bg, 'background-size':'cover'})
		$('.item-b').css({'opacity':'80%'});
		$('.item-c').css({'opacity':'100%'});
	});

	// resume fade
	$("#resume").mouseover(function() {
		// bg = $('.container').css('background');
		$('.container').css({'background':'url(./img/lp3.jpg) no-repeat center center fixed', 'background-size':'cover'})
		$('.item-b').css({'opacity':'0%'});
		$('.item-c').css({'opacity':'0%'});
	});
	$("#resume").mouseleave(function() {
		$('.container').css({'background':bg, 'background-size':'cover'})
		$('.item-b').css({'opacity':'80%'});
		$('.item-c').css({'opacity':'100%'});
	});

	// music fade
	$("#music").mouseover(function() {
		// bg = $('.container').css('background');
		$('.container').css({'background': 'url(./img/lp2.jpg) no-repeat center center fixed', 'background-size':'cover'});
		$('.item-b').css({'opacity':'0%'});
		$('.item-c').css({'opacity':'0%'});
	});
	$("#music").mouseleave(function() {
		$('.container').css({'background':bg, 'background-size':'cover'})
		$('.item-b').css({'opacity':'80%'});
		$('.item-c').css({'opacity':'100%'});
	});
});