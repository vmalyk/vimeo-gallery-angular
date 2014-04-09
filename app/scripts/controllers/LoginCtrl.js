app.controller('LoginCtrl', function LoginCtrl($scope, $window, Facebook) {
   	// Define user empty data :/
    $scope.user = {};
      
    // Defining user logged status
    $scope.logged = false;

    $scope.$watch(
        function() {
          return Facebook.isReady();
        },
        function(newVal) {
          if (newVal)
            $scope.facebookReady = true;
        }
    );

    $scope.IntentLogin = function() {
        Facebook.getLoginStatus(function(response) {  
            (response.status == 'connected') ? $scope.loginUser() : $scope.login();
        });
    };
      
      
    $scope.login = function() {
        Facebook.login(function(response) {
            (response.status == 'connected') && $scope.loginUser();              
        });
    };
      
    $scope.loginUser = function() {
        $scope.logged = true;
        $window.location.hash ="Gallery"; 
    }    
     

})