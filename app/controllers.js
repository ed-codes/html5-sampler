angular.module( 'html5Sampler.controllers', [ ] ).
controller( 'tracksController', function( $scope ) {
    $scope.numTracks = 3 ;
    $scope.tracksList = [ ] ;

    // default track object

    $scope.defaultTrack = {
      duration: '120',
      start: 20,
      end: 100,
      button: null,
      audio: null
    } ;

    // scope methods

    $scope.createTrack = function( index ) {
      var obj = { name: 'Track ' + index } ;

      for( var key in $scope.defaultTrack ) {
        obj[ key ] = $scope.defaultTrack[ key ] ;
      }

      return obj ;
    }

    $scope.add = function( ) {
      $scope.newtrack = $scope.createTrack( $scope.tracksList.length + 1 ) ;
      $scope.tracksList.push( $scope.newtrack ) ;
    }

    $scope.remove = function( obj ) {
      var index = $scope.tracksList.indexOf( obj ) ;
      $scope.tracksList.splice( index, 1 ) ; 
    }

    $scope.loadAudioFile = function( url ) {
      var request = new XMLHttpRequest( ) ;

      request.open( 'get', url, true ) ;
      request.responseType = 'arraybuffer' ;

      request.onload = function () {
        context.decodeAudioData( request.response,
          function( incomingBuffer ) {
            $scope.playAudioFile( incomingBuffer ) ; 
          }
        ) ;
      } ;

      request.send( ) ;
    }

    $scope.playAudioFile = function( buffer ) {
      var source = context.createBufferSource( ) ;

      source.buffer = buffer ;
      source.connect( context.destination ) ;
      source.start( 0 ) ;
    } ;


    for( var i = 0 ; i < $scope.numTracks ; i++ ) {
      var obj = $scope.createTrack( i + 1 ) ; { } ;
      $scope.tracksList.push( obj ) ;
    } ;

    //$scope.loadAudioFile( 'test.wav' ) ;

} ) ;