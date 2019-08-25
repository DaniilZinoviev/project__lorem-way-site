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
	  return false;
	 });
	
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
    
    // Menu Toggle Button
    $( ".menu-btn" ).on( "click", function() {
      this.classList.toggle("close");
      $("header nav").toggleClass("show");
    });
    
    // Slider for "Happy Clients"-section
    let ind = 1;  // Index of current slide
    let animationDelay = 200;  // Delay of translate-animation
    let isPaused = false;  // Pause between clicks on arrows
    let elems = $(".commentaries .commentary");  // Slides
    
    elems.eq(ind).addClass("active");
    elems.eq(prevElemInd()).css("transform", 'translateX(-500px)');
    elems.eq(nextElemInd()).css("transform", 'translateX(500px)');
    
    $(".commentaries .arrow-left").on("click", function() {
        if (isPaused) return;     // Stop fast-clicking
        isPaused = true;
        
        // get ready neigbours
        elems.eq(prevElemInd()).css("transform", 'translateX(-500px)');
        
        // hide current
        elems.eq(ind).removeClass("active");
        elems.eq(ind).css("transform", 'translateX(500px)');
       
        // show next\prev   
        setTimeout(function() {
            ind = prevElemInd();
            elems.eq(ind).css("transform", 'translateX(-50%)');
            elems.eq(ind).addClass("active");
            isPaused = false;
        }, animationDelay);
    });
    
    $(".commentaries .arrow-right").on("click", function() {
        if (isPaused) return;     // Stop fast-clicking
        isPaused = true;
        
        // get ready neigbours
        elems.eq(nextElemInd()).css("transform", 'translateX(500px)');
        
        // hide current
        elems.eq(ind).removeClass("active");
        elems.eq(ind).css("transform", 'translateX(-500px)');
       
        // show next\prev   
        setTimeout(function() {
            ind = nextElemInd();
            elems.eq(ind).css("transform", 'translateX(-50%)');
            elems.eq(ind).addClass("active");
            isPaused = false;
        }, animationDelay);
        
        
    });
    
    function prevElemInd() {
        if (ind - 1 < 0) {
            return elems.length - 1;
        }
        return ind - 1;
    }
    function nextElemInd() {
        if (ind + 1 >= elems.length) {
            return 0;
        }
        return ind + 1;
    }
    
});
