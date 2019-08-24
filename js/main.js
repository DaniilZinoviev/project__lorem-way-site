$(document).ready(function(){
	$('.slider').slick({
		autoplay : true,
		arrows: false,
		dots : true,
		fade: true,
		draggable : false,
		dotsClass : 'dots',
		appendDots: $(".dots")
	});
	
	$(".dots li > button").html("");
	
	// Scroll script
	
	$('a[href^="#"]').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
	   scrollTop: $(anchor.attr("href")).offset().top
	  }, 1000);
	  e.preventDefault();
	 });
	 return false;
	
	// Ajax form
	
	$("#quote").submit(function(){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function(){
			alert("Спасибо за заявку! Мы скоро с Вами свяжемся");
		});
		return false;
	});
});
