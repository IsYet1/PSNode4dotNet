//notesView.js
(function (angular) {
    var theModule = angular.module("notesView", ["ui.bootstrap"]);

    theModule.controller("notesViewController",
        ["$scope", "$window", "$http",
            function ($scope, $window, $http) {
                $scope.notes = [];
                $scope.newNotes = {
                    note: "",
                    color: "yellow"
                };

                var urlParts = $window.location.pathname.split("/");
                var categoryName = urlParts[urlParts.length - 1];

                var notesUrl = "/api/notes/" + categoryName;

                $http.get(notesUrl)
                    .then(function (result) {
                            $scope.notes = result.data;
                        }, function (err) {
                            //TODO: Handle Error. Use the view injection technique in previous modules.
                        }
                    )
            }
        ]);

})(window.angular);

/*
Notes: Use $window so that it's injectable.
*/