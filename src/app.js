/* src/app.js */

// Styles
import './assets/styles/_app.scss'

// Scripts
import 'slick-carousel'

// Components
$(function() {
  require('./assets/scripts/header')
  require('./assets/scripts/dropdown')
  require('./assets/scripts/jumbotron')
  require('./assets/scripts/carousel')
  require('./assets/scripts/navtab')
  require('./assets/scripts/modal')
  require('./assets/scripts/subscribe')
  require('./assets/scripts/select-country-language')
})

// Misc
$('[href="#"]').on('click', function(e){
  e.preventDefault()
})