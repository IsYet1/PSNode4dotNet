//notesView.js
(function (angular) {
    var theModule = angular.module("notesView", []);

    theModule.controller("notesViewController",
        ["$scope",
            function ($scope) {
                $scope.notes = [
                    {
                        note: "Hello World",
                        color: "yellow",
                        author: "Shawn W"
                    },
                    {
                        note: "Hello World again",
                        color: "blue",
                        author: "Shawn W"
                    },
                    {
                        note: "Hello World last",
                        color: "green",
                        author: "Shawn W"
                    }
                ];
            }
        ]);

})(window.angular);