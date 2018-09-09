var app = angular.module('apps', []);

app.controller('registerCtrl',
		function($scope, $http, $location) {
			$http.get('js/register.json').success(function(data) {
				$scope.admin = data;
			});

			$scope.submit = function($location) {

				var obj = {
					name : $scope.regName,
					email : $scope.regEmail,
					mobile : $scope.regMobile,
					address : $scope.regAddress
				}
				window.location = ('./view.html?name=' + $scope.regName
						+ ' &email=' + $scope.regEmail + ' &mobile='
						+ $scope.regMobile + ' &address=' + $scope.regAddress);

			}

			/*
			 * $location.url('http://test.com/login.jsp?un='+
			 * $scope.form.username+'&pw="+ $scope.form.password');
			 */

		});