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