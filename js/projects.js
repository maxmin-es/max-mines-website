$(document).ready(function() {
	let bg = $('.container').css('background');
	
	// projects fade
	$("#projects").mouseover(function() {
		$('.project').css({'opacity':'0%'});
	});
	$("#projects").mouseleave(function() {
		$('.project').css({'opacity':'100%'});
	});

	// music fade
	$("#resume").mouseover(function() {
		$('.project').css({'opacity':'0%'});
	});
	$("#resume").mouseleave(function() {
		$('.project').css({'opacity':'100%'});
	});

	// music fade
	$("#music").mouseover(function() {
		$('.project').css({'opacity':'0%'});
	});
	$("#music").mouseleave(function() {
		$('.project').css({'opacity':'100%'});
	});
});