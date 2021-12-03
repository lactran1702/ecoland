

//
// pHome.js
// Page module
//

'use strict';

var pHome = (function () {

  //
  // Variables
  //
  //
  // Functions
  //
  function init() {
    console.log('<pHome> => INIT!');
    $(window).on('resize', onResize);
    onResize();
    // PRELOADER.hide();
    // alert('pHome!');
  }

  function onResize(e) {
    // do your fucking resizing
    console.log('Browser size: ' + window.innerWidth + 'x' + window.innerHeight);
  }

  //
  // Event
  //

  init();
  //
  // Return
  //

  return true;

})();