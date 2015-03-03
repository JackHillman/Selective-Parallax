(function ( $ ) {
	$.fn.parallax = function(strength) {
		var height = $(window).height();
		var width = $(window).width();
		if (strength === undefined) {
			strength = 1.2;
		}

		function isScrolledIntoView(elem) {
		    var docViewTop = $(window).scrollTop();
		    var docViewBottom = docViewTop + height;
		    var elemTop = $(elem).offset().top;
		    var elemBottom = elemTop + $(elem).height();
		    var elemHeight = $(elem).height();
		    return ((elemBottom - elemHeight <= docViewBottom) && (elemTop + elemHeight >= docViewTop));
		}

		if (isScrolledIntoView(this) === true) {
			var counter = ($(window).scrollTop() - $(this).offset().top);
			var offset = counter / strength;
			var scrollAmount = offset + 'px';
			$(this).css({
				'background-position': '50%' + scrollAmount
			});
		}
		return this;
	};
}( jQuery ));