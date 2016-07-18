$(document).ready(function() {
	Scrolling();
});

function Scrolling() {
$("nav a").click(function(e){
	var sectionID = e.currentTarget.id + "Section";
	e.preventDefault(); 
	
	$("html body").animate({
		scrollTop: $("#" + sectionID).offset().top},1000)
	
})
	};
