angular.module( 'html5Sampler.controllers', [ ] ).
controller( 'tracksController', function( $scope ) {
    $scope.tracksList = [
      {
        name: 'Track 1',
        start: 20,
        end: 40
      },
      {
        name: 'Track 2',
        start: 30,
        end: 50
      }
    ] ;

    $scope.add = function( ) {
      $scope.newtrack = { name: 'Track ' + ( $scope.tracksList.length + 1 ) } ;
      $scope.tracksList.push( $scope.newtrack ) ;
    }

    $scope.remove = function( obj ) {
      var index = $scope.tracksList.indexOf( obj ) ;
      $scope.tracksList.splice( index, 1 ) ; 
    }
} ) ;