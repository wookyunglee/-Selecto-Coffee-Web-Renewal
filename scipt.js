// nav

$(function () {
	$(window).scroll(function (){
		let scrollTop = $(window).scrollTop();
	if (scrollTop == 0) {
        $(".top-bar").removeClass("hover");
      } else if (scrollTop >= 100) {
        $(".top-bar").addClass("hover");
      }
});
});

$(function(){
	$(".menu-1").mouseenter(function(){
		$(".down_menu").addClass("hover");
	});
	$(".menu-1").mouseleave(function(){
		$(".down_menu").removeClass("hover");
	});
});


// banner

var SliderBox__i = 0;

setInterval(function () {
	$(".slider-box").attr("data-index", ++SliderBox__i % 3);
}, 3000);

// one-for-one

$(function () {
	$(".img-cup").click(function(){
		$(".img-milk").addClass("one-active");
		$(".limiter").addClass("one-limiter-active");
		
	});
});



// information__news

$(function () {
		
	$(".notice-btn").click(function(){
		$(this).addClass("information-active");
		$(".notice-box").addClass("information-active");
		$(".news-btn").removeClass("information-active");
		$(".news-box").removeClass("information-active");
	});
	
	$(".news-btn").click(function(){
		$(this).addClass("information-active");
		$(".news-box").addClass("information-active");
		$(".notice-btn").removeClass("information-active");
		$(".notice-box").removeClass("information-active");
	});
	
});