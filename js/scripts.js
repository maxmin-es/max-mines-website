$(document).ready(function() {
	let bg = $('.container').css('background');
	
	// projects fade
	$("#projects").mouseover(function() {
		$('.item-b').css({'opacity':'0'});
		$('.item-c').css({'opacity':'0'});
		$('.container').css({'background':'url(./img/maxdark.jpg) no-repeat center center fixed', 'background-size':'cover'})

	});
	$("#projects").mouseleave(function() {
		$('.container').css({'background':bg, 'background-size':'cover'})
		$('.item-b').css({'opacity':'.8'});
		$('.item-c').css({'opacity':'1'});
	});

	// resume fade
	$("#resume").mouseover(function() {
		$('.item-b').css({'opacity':'0'});
		$('.item-c').css({'opacity':'0'});
		$('.container').css({'background':'url(./img/lp3.jpg) no-repeat center center fixed', 'background-size':'cover'})

	});
	$("#resume").mouseleave(function() {
		$('.container').css({'background':bg, 'background-size':'cover'})
		$('.item-b').css({'opacity':'.8'});
		$('.item-c').css({'opacity':'1'});
	});

	// music fade
	$("#music").mouseover(function() {
		$('.item-b').css({'opacity':'0'});
		$('.item-c').css({'opacity':'0'});
		$('.container').css({'background': 'url(./img/lp2.jpg) no-repeat center center fixed', 'background-size':'cover'});

	});
	$("#music").mouseleave(function() {
		$('.container').css({'background':bg, 'background-size':'cover'})
		$('.item-b').css({'opacity':'.8'});
		$('.item-c').css({'opacity':'1'});
	});
});