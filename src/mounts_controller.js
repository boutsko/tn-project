var app = angular.module('thSample', []);

app.controller('MountsController', function($scope){
    $scope.title = "Альпы"

    $scope.mounts = [
        {title: "Маттерхорн", alt: 4478},
        {title: "Монблан", alt: 4810}
    ];
});

