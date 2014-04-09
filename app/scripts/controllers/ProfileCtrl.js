app.controller('ProfileCtrl', function ProfileCtrl($scope, $window, Facebook) {
    
    $scope.me = function() {
        Facebook.api('/me', function(response) {
            $scope.$apply(function() {
                $scope.user = response;
            });
        });
    };
        
    $scope.logout = function() {
        Facebook.logout(function() {
          $scope.$apply(function() {
            $scope.user   = {};
            $window.location.hash = "";
          });
        });
    }

    $scope.me();
    console.log($scope.user);   	
})