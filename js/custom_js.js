// JavaScript Document

 $(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() > 767) {
     $('.mobile-dpdown').addClass('mydispOff');
	 $('.slider-contents').removeClass('mydispOff');
    }
    else {
		 $('.mobile-dpdown').removeClass('mydispOff');
		 $('.slider-contents').addClass('mydispOff');
		}
 });

 $(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() > 767) {
     $('.mobile-dpdown').addClass('mydispOff');
	 $('.slider-contents').removeClass('mydispOff');
    }
   else {
		 $('.mobile-dpdown').removeClass('mydispOff');
		 $('.slider-contents').addClass('mydispOff');
		}
 });



//Search box script

  $(document).ready(function(){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }




// HOME PAGE OWL CAROUSEL

