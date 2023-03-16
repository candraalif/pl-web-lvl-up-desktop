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
	
  var i = 0;
	var jumboImages = $('.jumbotron .bg-image .bg-image-item')
	// set initial background-image
	jumboImages.eq(0).addClass('active')
	// change image every after 5 seconds
  setInterval(function(){
		jumboImages.removeClass('active')
    jumboImages.eq(i++).addClass('active')
    if(i == jumboImages.length)
      i = 0
  }, 5000)
	$('.bg-image-control-prev').on('click', function(){
		//next
	})
})