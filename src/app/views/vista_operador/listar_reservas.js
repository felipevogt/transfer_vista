(function () {
	'use strict';
	angular
	.module('app')
	.component('listarReservas', {
		controller: listarReservasController,
		templateUrl: 'app/views/vista_operador/listar_reservas.html',
		controllerAs: 'vm'
	});

	listarReservasController.$inject = [];

	function listarReservasController () {
		var vm = this

	}
})();