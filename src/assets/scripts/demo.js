$(window).on('scroll', function (){
  var windowpos = $(window).scrollTop()
  if( windowpos >= 80 ) {
       $('#header').addClass('active')
  } else {
       $('#header').removeClass('active')
  }
});
