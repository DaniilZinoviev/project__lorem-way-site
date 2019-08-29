$(document).ready(function(){
    
    // Slick.js Slider on Home-section
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
      // if element should not scroll      
      if ( $(anchor.attr("href")).parent().hasClass("hidden")  ) return false;
        
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
    
    // Animations
    $(".section-head h2, .section-head p").animated("fadeInRight");
    $(".blocks_container .block:nth-child(odd)").animated("fadeInLeft");
    $(".blocks_container .block:nth-child(even)").animated("fadeInRight");
    $("button").animated("fadeIn");
    
    $(".pricing").waypoint(function () {
        $(".plan").each(function(index) {
            setTimeout(() => {
                this.classList.add("animated", "zoomIn")
            }, index * 150);
        })
    }, {
        offset: "20%"
    });
    
    $(".how_it_work").waypoint(function() {
        $(".step").each(function(index) {
            setTimeout(() => {
                this.classList.add("animated", "fadeInRight");
            }, index * 150);
        });
    }, {
        offset: "20%"
    });
    
    // Pop-up Form
    $('.pop-up--btn').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
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
