// NAV BT3
$(document).ready(function(){
	//sidebar menu
	$('#nb-close-toggle').click(function(){        
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
    
      $('.pricing-table:nth-child(3)').addClass('pop-out'); 

      $('.pricing-table').hover( 
        function() {
          if ( $(this).hasClass('pop-out') ) {
            /* do nothing */
          } else {
            $('.pricing-table').removeClass('pop-out');
            $(this).addClass('pop-out');
          }
        }, function() {
          $(this).removeClass('pop-out');
          $('.pricing-table:nth-child(3)').addClass('pop-out');
        }
      );
    
    var $btn = document.getElementById('nb-close-toggle');

    $btn.addEventListener('click',function(e){
      this.classList.toggle('is-open');
      this.classList.toggle('is-closed');

    });
});
