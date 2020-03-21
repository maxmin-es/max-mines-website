$(document).ready(function() {
	let bg = $('.project-container').css('background');
	
	// projects fade
	$("#projects").mouseover(function() {
		$('.project-container').css({'background':'url(./img/maxdark.jpg) no-repeat center center fixed', 'background-size':'cover'})
		$('.project-body').css({'opacity':'0%'});
		$('.item-c').css({'opacity':'0%'});
	});
	$("#projects").mouseleave(function() {
		$('.project-container').css({'background':bg, 'background-size':'cover'})
		$('.project-body').css({'opacity':'80%'});
		$('.item-c').css({'opacity':'100%'});
	});

	// resume fade
	$("#resume").mouseover(function() {
		// bg = $('.project-container').css('background');
		$('.project-container').css({'background':'url(./img/lp3.jpg) no-repeat center center fixed', 'background-size':'cover'})
		$('.project-body').css({'opacity':'0%'});
		$('.item-c').css({'opacity':'0%'});
	});
	$("#resume").mouseleave(function() {
		$('.project-container').css({'background':bg, 'background-size':'cover'})
		$('.project-body').css({'opacity':'80%'});
		$('.item-c').css({'opacity':'100%'});
	});

	// music fade
	$("#music").mouseover(function() {
		// bg = $('.project-container').css('background');
		$('.project-container').css({'background': 'url(./img/lp2.jpg) no-repeat center center fixed', 'background-size':'cover'});
		$('.project-body').css({'opacity':'0%'});
		$('.item-c').css({'opacity':'0%'});
	});
	$("#music").mouseleave(function() {
		$('.project-container').css({'background':bg, 'background-size':'cover'})
		$('.project-body').css({'opacity':'80%'});
		$('.item-c').css({'opacity':'100%'});
	});
});