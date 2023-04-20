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