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
	console.log(jumboImages[0])
	// set initial background-image
	jumboImages.eq(0).css('opacity', 1 )
	// change image every after 5 seconds
  setInterval(function(){
		jumboImages.css('opacity', 0 )
    jumboImages.eq(i++).css('opacity', 1 )
    if(i == jumboImages.length)
      i = 0
  }, 5000)
})