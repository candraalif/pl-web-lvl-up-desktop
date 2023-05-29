$(window).on('scroll', function (){
	var topbannerheight = + $('#top-banner').outerHeight()
	// formOnBlur()
	var windowpos = $(window).scrollTop()
	if( windowpos >= 80 ) {
		$('#header').addClass('active')
	} else {
		$('#header').removeClass('active')
	}
	$('.bg-image').css('top', windowpos/1.5 - topbannerheight )
});

var topBanner = $('#top-banner')
topBanner.find('.top-banner-close').on('click', function(e){
	e.preventDefault()
	topBanner.css('max-height',0)
})
