(function($){
	$.fn.easyParallax = function(options){

		var settings = $.extend({
			pValue: 0.1
		}, options );
		var container = $(this);

		var scrollStart = $(window).scrollTop();

		var pSiz = settings.pValue;

		var pPos = scrollStart*pSiz;
		
		$(document).scroll(function(){
			var dynamicScr = $(window).scrollTop();
			container.css('transform', 'translate(0,' + (pPos - (dynamicScr*settings.pValue)) + 'px)')
		});
		
	}
}( jQuery ))