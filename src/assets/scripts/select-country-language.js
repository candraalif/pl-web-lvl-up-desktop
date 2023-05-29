$('input[name="country-language"]').each(function(){
  $(this).on('click', function(){
    var go = $(this).val()
    $(this).parents('form').find('.language-currency-submit a').attr('href', go)
  })
})
