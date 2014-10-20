Bbadcontroller('ContactController', [
        '$scope',
        function ($scope) {

		$scope.data = [
			{
				Name: "Aswin",
				Number: "123"
            },
			{
				Name: "xyz",
				Number: "129034"
            },
			{
				Name: "asd",
				Number: "2346"
            }
            ];

		$scope.nggridOptions = {
			data: 'data',
			/*columnDefs: [{
		field: 'name',
		displayName: 'Name',
		enableCellEdit: true
                },
             {
		field: 'age',
		displayName: 'Age',
		enableCellEdit: true,
		cellTemplate: '<div ng-class="{red: row.getProperty(col.field) < 23}"><div class="ngCellText" style="text-align:center">{{row.getProperty(col.field)}}</div></div>'
                }],
showSelectionCheckbox: true,
selectWithCheckboxOnly: true,
enableCellEdit: true,
enableColumnResize: true,*/

			plugins: [new ngGridFlexibleHeightPlugin()]
		};

		console.log($scope.nggridOptions);


        }]);
