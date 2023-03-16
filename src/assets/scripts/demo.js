$(window).on('scroll', function (){
	var windowpos = $(window).scrollTop()
	if( windowpos >= 80 ) {
		$('#header').addClass('active')
	} else {
		$('#header').removeClass('active')
	}
});

$(document).on('ready', function(){
	$('.jumbotron .bg-image .bg-image-item').each(function() {
		let bg = $(this).data('image-bg')
		$(this).css('background-image', 'url('+bg+')')
	})
	// Run Image Slider
	function nextBgImage(){
		var items = $('.jumbotron .bg-image .bg-image-item')
		var activeItem = $('.jumbotron .bg-image .bg-image-item.active')
		var nextItem = activeItem.next()
		if(activeItem.is(':last-child'))
			var nextItem = items.eq(0)
		activeItem.removeClass('active')
		nextItem.addClass('active')
	}
	function prevBgImage(){
		var items = $('.jumbotron .bg-image .bg-image-item')
		var activeItem = $('.jumbotron .bg-image .bg-image-item.active')
		var prevItem = activeItem.prev()
		if(activeItem.is(':first-child'))
			var prevItem = items.last()
		activeItem.removeClass('active')
		prevItem.addClass('active')
	}
	// Set Image Change Interval (in milisecond, 10000 = 10s)
	setInterval(function(){ nextBgImage() }, 10000)
  $('.bg-image-control-prev').on('click', function(){
		prevBgImage()
	})
	$('.bg-image-control-next').on('click', function(){
		nextBgImage()
	})
})