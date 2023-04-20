/* src/app.js */

// Styles
import './assets/styles/_app.scss'

// Scripts
import 'slick-carousel'

// Components
$(function() {
  require('./assets/scripts/header')
  require('./assets/scripts/jumbotron')
  require('./assets/scripts/carousel')
  require('./assets/scripts/navtab')
  require('./assets/scripts/modal')
  require('./assets/scripts/subscribe')
})

// Misc
// $('.product-form-tab-nav-item').filter('[data-id=flight]').css('outline', '1px solid red')