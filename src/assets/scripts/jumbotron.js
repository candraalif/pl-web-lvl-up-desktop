// Jumbotron Background Image Slider
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

// Search Form Focus Mode
// function formOnFocus(){
// 	$('.jumbotron').addClass('focus')
// 	$('html, body').animate({
// 		scrollTop: 0
// 	})
// 	$('.brand-background').addClass('hide')
// }
// function formOnBlur(){
// 	$('.jumbotron').removeClass('focus')
// 	$('.brand-background').removeClass('hide')
// }
$('.product-form-tab').each(function(){
	var tab = $(this)
	var nav = $(this).find('.product-form-tab-nav-item')
	nav.each(function(){
		$(this).on('click', function(){
			var isTab = $(this).data('tab')
			if(isTab != false) {
				// formOnFocus()
				nav.removeClass('active')
				$(this).addClass('active')
				var id = $(this).data('id')
				tab.find('.product-form-tab-content-item').removeClass('active')
				tab.find('.product-form-tab-content-item[data-id='+id+']').addClass('active')
			} else {
				// Nothing
			}
		})
	})
})
// $('.product-form-input input').on('focus', function(){
// 	formOnFocus()
// })
// $('.jumbotron-overlay').on('click', function(){
// 	formOnBlur()
// })

// Search Form Pills Tab
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

// Scroll Down
$('.btn-scroll-down').on('click', function(){
	var jumbotronheight = $('.jumbotron').outerHeight()
	var headerheight = $('header').outerHeight()
	var scrollto = jumbotronheight - headerheight
	// console.log('scrollto: '+scrollto)
	$('html, body').animate({
		scrollTop: scrollto
	})
})