angular.module('themes', []).
	controller("themeControl", function canvasCtrl($scope){
		$scope.themes = [
			{name: "standard", url: "styles.css"},
			{name: "dark", url: "themes/dark/styles.css"},
			{name: "light", url: "themes/light/styles.css"},
			{name: "sepia", url: "themes/sepia/styles.css"}
		];
		
		$scope.currentTheme = $scope.themes[1];
		
		$scope.setTheme = function(theme){
			$scope.currentTheme = theme;
		}
	});
