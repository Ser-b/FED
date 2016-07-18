$(document).ready(function() {
ScrollSpy()
	});

function ScrollSpy() {
	var sections = [];
	
	var $navbar = $('nav');
	$('nav a').each(function(){
	sections.push($($(this).attr('href')));
	});

	$(window).scroll(function(e){
	var	scrollTop = $(this).scrollTop() + ($(window).height() / 2);
	for (var i in sections) {
		var section = sections[i];
		if (scrollTop > section.offset().top){
			id = section.attr('id');
		}
	}
	
	console.log(id);
	$('nav a').removeClass('current');
	$('nav a[href="#' + id + '"]').addClass('current');
	})

console.log(sections);
	}
