let app = angular.module('novareApp', []);

app.controller('usersCtrl', function ($scope, $http) {
    $scope.getUsers = function () {
        $http.get('http://localhost:8080/users').then(function (response) {
            $scope.usersData = response.data;
            console.log($scope.usersData);
        })
    }
})