$(window).on('scroll', function (){
	var windowpos = $(window).scrollTop()
	if( windowpos >= 80 ) {
		$('#header').addClass('active')
	} else {
		$('#header').removeClass('active')
	}
});

$(document).on('ready', function(){
	var jumbo = $('.jumbotron')
	var jumboImages = jumbo.find('.bg-image > .bg-image-item').attr('src')
	jumbo.css('background-image','url('+jumboImages+')')
	console.log('Image Bg = '+ jumboImages)
})