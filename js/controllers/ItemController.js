app.controller('ItemCtrl', function($scope) {
    // Defines the empty arrays
    $scope.table = [];  // Items list
    $scope.item = [];   // Items
    $scope.merged = []; // Merged items
    $scope.error = '';  // Errors

    // Items adding function
    $scope.total = 0;
    $scope.add = function() {
        if ( !$scope.item.price || !$scope.item.description ) {
            $scope.error = "Fields can't be blank"
        } else {
            if ($scope.item.description.length > 30) {
                $scope.error = 'Description should be less than 30';
            } else {
                $scope.table.push($scope.item);
                $scope.total += $scope.item.price;
                $scope.item = ''; // Cleans item array
                $scope.error = ''; // Cleans errors array
            }
        }
    };

    //  Sum counting  function
    $scope.sum = function() {
        if($scope.table.length > 0) {
            $scope.temp = {};
            $scope.temp.price = 0;
            angular.forEach($scope.table, function(value, key) {
                $scope.temp.price += value.price;
            });
            $scope.temp.date = new Date();
            $scope.merged.push($scope.temp);

            $scope.table = [];
            $scope.error = '';
        } else {
            $scope.error = "Fields can't be blank";
        }

    };

    // Items removing function
    $scope.removeRow = function (idx) {
        $scope.total = 0;
        $scope.table.splice(idx, 1);

        angular.forEach($scope.table, function(value, key) {
            $scope.total += value.price;
        });
        angular.forEach($scope.merged, function(value, key) {
            $scope.total += value.price;
        });
    };
});