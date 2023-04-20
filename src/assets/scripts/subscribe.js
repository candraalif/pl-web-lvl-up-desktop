$('#email-subscribe').on('focus', function(){
	$(this).parent('.form-group').addClass('active')
})
$('#email-subscribe').on('blur', function(){
	$(this).parent('.form-group').removeClass('active')
})