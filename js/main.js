// NAV BT3
$(document).ready(function(){
	//sidebar menu
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		if ($(this).hasClass('open')){
			$(this).css('position','fixed');
			$('.menu').animate({
				left: "0px"
			}, 500);
			$('body').animate({
				left: "285px"
			}, 500);
		} else {
			$(this).css('position','absolute');
			$('.menu').animate({
	      left: "-285px"
	    }, 500);
	    $('body').animate({
	      left: "0px"
	    }, 500);
		}
	});
});
