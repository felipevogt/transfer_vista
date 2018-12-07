(function () {
	'use strict';
	angular
	.module('app')
	.component('asignarChofer', {
		controller: asignarChoferController,
		templateUrl: 'app/views/vista_operador/asignar_chofer.html',
		controllerAs: 'vm'
	});

	asignarChoferController.$inject = [];

	function asignarChoferController () {
		var vm = this

	}
})();