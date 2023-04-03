import 'slick-carousel'

$(window).on('scroll', function (){
	var windowpos = $(window).scrollTop()
	if( windowpos >= 80 ) {
		$('#header').addClass('active')
	} else {
		$('#header').removeClass('active')
	}
	$('.bg-image').css('top', windowpos/1.5 );
});


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

$('.product-form-tab').each(function(){
	var tab = $(this)
	var nav = $(this).find('.product-form-tab-nav-item')
	nav.each(function(){
		$(this).on('click', function(){
			nav.removeClass('active')
			$(this).addClass('active')
			var id = $(this).data('id')
			tab.find('.product-form-tab-content-item').removeClass('active')
			tab.find('.product-form-tab-content-item[data-id='+id+']').addClass('active')
		})
	})
})

$('.invisible-tab').each(function(){
	var tab = $(this)
	var nav = $(this).find('.invisible-tab-nav-item')
	nav.each(function(){
		$(this).on('click', function(){
			nav.removeClass('active')
			$(this).addClass('active')
			var id = $(this).data('id')
			tab.find('.invisible-tab-content-item').removeClass('active')
			tab.find('.invisible-tab-content-item[data-id='+id+']').addClass('active')
		})
	})
})

$('.btn-scroll-down').on('click', function(){
	var windowheight = $(window).height()
	var headerheight = $('#header').height()
	var scrollto = windowheight - headerheight
	console.log('scrollto: '+scrollto)
	$('html, body').animate({
		scrollTop: scrollto
	})
})

// Carousel
$('.carousel').slick({
  infinite: false,
	swipe: false,
  slidesToShow: 4
});