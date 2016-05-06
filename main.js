(function() {
  'use strict';
  // Link script tag to html doc!!!

  // add class movebtn to first button
  $( ".movebtn" ).click(function() {

    $('.box').find('.bird')
    .animate({
      left: 800
    },
    'slow');
});

// add class fadebtn to second button
$( ".fadebtn" ).click(function() {
  $( "img" )
  .fadeOut( "slow");
});

})();
