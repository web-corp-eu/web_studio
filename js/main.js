// NAV BT3
$(document).ready(function(){
	//sidebar menu
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		if ($(this).hasClass('open')){
			$('.menu').animate({
				left: "0px"
			}, 200);
			$('body').animate({
				left: "285px"
			}, 200);
		} else {
			$('.menu').animate({
	      left: "-285px"
	    }, 200);
	    $('body').animate({
	      left: "0px"
	    }, 200);
		}
	});
});
