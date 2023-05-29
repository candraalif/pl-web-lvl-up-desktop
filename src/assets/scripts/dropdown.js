// General Dropdown
// $('[data-has-dropdown=true]').each(function(){
// 	var ddContainer = $(this)
//   var ddTrigger = $(this).find('.dropdown-trigger')
// 	ddTrigger.on({
// 		click: function(){
//       $('[data-has-dropdown=true]').removeClass('dropdown-active')
//       ddContainer.toggleClass('dropdown-active') 
// 		}
// 	})
// })
$('body').on('click', function(e) {
  if ( $(e.target).parents(".dropdown-container").length < 1 && e.target.className != 'dropdown-trigger' ) {
    $('[data-has-dropdown=true]').removeClass('dropdown-active')
  } else if( e.target.className == 'dropdown-trigger' ) {
    // $('[data-has-dropdown=true]').removeClass('dropdown-active')
    $(e.target).parents('[data-has-dropdown=true]').toggleClass('dropdown-active')
  }
})
