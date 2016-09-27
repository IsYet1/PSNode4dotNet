//notesView.js
(function (angular) {
    var theModule = angular.module("notesView", ["ui.bootstrap"]);

    theModule.controller("notesViewController",
        ["$scope", "$window", "$http",
            function ($scope, $window, $http) {
                console.log("In Controller");
                $scope.notes = [];
                $scope.newNote = createBlankNote();

                var urlParts = $window.location.pathname.split("/");
                var categoryName = urlParts[urlParts.length - 1];

                var notesUrl = "/api/notes/" + categoryName;

                $http.get(notesUrl)
                    .then(function (result) {
                        $scope.notes = result.data;
                    }, function (err) {
                        alert(err);
                        //TODO: Handle Error. Use the view injection technique in previous modules.
                    });

                $scope.save = function () {
                    console.log("In save");
                    $http.post(notesUrl, $scope.newNote)
                        .then(function (result) {
                            //success
                            $scope.notes.push(result.data); //Get all the information that was stored. Post process is adding author.
                                                            //Push the new note into the collection.
                            $scope.newNote = createBlankNote(); //Clear out the form
                        }, function (err) {
                            //failure
                        });
                };
            }
        ]);

    function createBlankNote() {
        return {
            note: "",
            color: "yellow"
        };
    }

})(window.angular);

/*
Notes: Use $window so that it's injectable.
*/