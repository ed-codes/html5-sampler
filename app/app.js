/**
 * HTML5 Sampler
 * @author Eduard Fastovski <ed@theworkingparty.com.au>, Eve Andersson <eve@theworkingparty.com.au>
 */

/**
 * Main AngularJS Web Application
 */


'use strict';

var app = angular.module( 'html5Sampler', [
  'html5Sampler.controllers',
  'ui.slider'
] ) ;




var context ;
window.addEventListener( 'load', init, false ) ;
function init( ) {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext ;
    context = new AudioContext( ) ;
  }
  catch( e ) {
    alert( 'Web Audio API is not supported in this browser' ) ;
  }
}