(function () {
	'use strict';
	angular
	.module('app')
	.component('sidebar', {
		controller: sidebarController,
		templateUrl: 'app/sidebar/sidebar.html',
		controllerAs: 'vm'
	});

	sidebarController.$inject = [];

	function sidebarController () {
		var vm = this

	}
})();