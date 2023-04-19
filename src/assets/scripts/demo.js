import 'slick-carousel'

$(window).on('scroll', function (){
	// formOnBlur()
	var windowpos = $(window).scrollTop()
	if( windowpos >= 80 ) {
		$('#header').addClass('active')
	} else {
		$('#header').removeClass('active')
	}
	$('.bg-image').css('top', windowpos/1.5 );
});

var topBanner = $('#top-banner')
topBanner.find('.top-banner-close').on('click', function(e){
	e.preventDefault()
	topBanner.css('max-height',0)
})

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

// Carousel
$('.carousel').each(function(){
	var slideShown = $(this).data('shown')
	if (!slideShown)
		slideShown = 4
	$(this).slick({
		infinite: false,
		slidesToShow: slideShown
	});
})
$('.merch-filterable').each(function(){
	var filterarea = $(this)
	var filterbuttons = filterarea.find('.merch-filter .btn-pills')
	var carousel = filterarea.find('.carousel')
	function merchFilter(filter){
		if(filter == 'all'){
			carousel.slick('slickUnfilter')
		} else {
			carousel.slick('slickUnfilter')
			carousel.slick('slickFilter', function() {
				return $('.merch-item[data-product='+ filter +']', this).length === 1
			})
			carousel.slick('slickGoTo', 0)
		}
	}
	filterbuttons.each(function(){
		$(this).on('click', function(){
			var datafilter = $(this).data('product')
			filterbuttons.addClass('btn-secondary')
			$(this).removeClass('btn-secondary')
			console.log('data filter: ' + datafilter)
			merchFilter(datafilter)
		})
	})
})

// Search Form Pills Tab
$('.m-tab').each(function(){
	var tab = $(this)
	var nav = $(this).find('.m-tab-nav-item')
	nav.each(function(){
		$(this).on('click', function(){
			nav.removeClass('active')
			$(this).addClass('active')
			var id = $(this).data('id')
			tab.find('.m-tab-content-item').removeClass('active')
			tab.find('.m-tab-content-item[data-id='+id+']').addClass('active')
		})
	})
})

// Modal
var modalTrigger = $('[data-trigger=modal]')
function openModal(id) {
	var modal = $('.modal[data-modal='+id+']')
	modal.addClass('active')
	$('body').css('overflow', 'hidden')
}
function closeModal(id) {
	var modal = $('.modal[data-modal='+id+']')
	if (!id)
		var modal = $('.modal')
	modal.removeClass('active')
	$('body').css('overflow', 'visible')
}
modalTrigger.each(function(){
	$(this).on('click', function(){
		var modalId = $(this).data('modal')
		openModal(modalId)
	})
})
$('.modal').each(function(){
	var modalId = $(this).data('modal')
	$(this).find('.modal-close').on('click', function(){
		closeModal(modalId)
	})
	$(this).on('click', function(e){
		if (e.target == this)
			closeModal(modalId)
	})
})
$(document).on('keydown', function(event) {
	if (event.key == "Escape") {
		closeModal()
	}
})

// $('.product-form-tab-nav-item').filter('[data-id=flight]').css('outline', '1px solid red')