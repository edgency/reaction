$('#sidebar').affix({
      offset: {
        top: 100
      }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) - 50;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});

/* Carousel */
$(document).ready(function() {
		$(".glyphicon-chevron-right").click(function() {
			var $cur = $("#browser .active");
			if ( $cur.index() < ($("#browser .tabs li").length - 1) ) {
				var index = $cur.index() + 2;
			}
			else {
				var index = 1;
			}

			$cur.removeClass("active");
			
			$("#browser .tabs li:nth-child(" + index + ")").addClass("active");

		});
		$(".glyphicon-chevron-left").click(function() {
			var $cur = $("#browser .active");
			if ( $cur.index() == 0 ) {
				var index = $("#browser .tabs li").length;
			}
			else {
				var index = $cur.index();
			}

			$cur.removeClass("active");
			
			$("#browser .tabs li:nth-child(" + index + ")").addClass("active");

		});

		$("#browser .tabs li").click(function() {
			$("li").removeClass("active");
			$(this).addClass("active");
		});
//		$("#myCarousel").swiperight(function() {  
//		  $(this).carousel('prev');  
//		});  
//		$("#myCarousel").swipeleft(function() {  
//		  $(this).carousel('next');  
//		});  
});