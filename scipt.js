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