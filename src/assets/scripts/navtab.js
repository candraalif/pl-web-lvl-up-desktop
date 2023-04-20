// Momentum Nav Tab
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