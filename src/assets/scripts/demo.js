console.log('Hola hmm!')

$(window).on('scroll', function (){
  var windowpos = $(window).scrollTop()
  console.log(windowpos)
  if( windowpos >= 80 ) {
       $('#header').addClass('active')
  } else {
       $('#header').removeClass('active')
  }
});
