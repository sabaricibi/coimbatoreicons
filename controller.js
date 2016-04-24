/**
 * Created by ShivaG on 4/24/2016.
 */



var app = angular.module("myIconList", []);
app.controller("myIconCtrl", function($scope) {
    $scope.icons = [
        {
            "age": 78,
            "id": "joe",
            "name": "Joe Anand",
            "designation": "Call Women"

        },
        {
            "age": 25,
            "id": "cibi",
            "name": "Sabari Cibi",
            "designation": "Software Engineer"
        },

        {
            "age": 81,
            "id": "shry",
            "name": "Shry Hary",
            "designation": "Monk"
        }

    ]
    $scope.addIcon = function () {
        $scope.icons.push({
            "age": $scope.addAge,
            "id": $scope.addID,
            "name": $scope.addName,
            "designation": $scope.addDesignation
        });
    }

    $scope.removeItem = function (x) {
        $scope.icons.splice(x, 1);
    }
});