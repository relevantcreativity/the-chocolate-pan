// JavaScript Document

(function($){
	
    $(document).ready(function() {		
		$('#drop-nav:first').children().hover(
    		function(){
				$(this).addClass('hover');
    		},
    		function(){
        		$(this).removeClass('hover');
    		}
    	);
		$('.example').sdExample();
		$('select').sdSelectMenu();
		$('input, textarea')
			.bind('focus', function() {
					$(this).addClass('focus');
			}).bind('blur', function() {
					$(this).removeClass('focus');
		});
		$('.fancy').fancybox();
    });
})(jQuery);