(function () {
	'use strict';
	angular
	.module('app')
	.component('ingresarReserva', {
		controller: ingresarReservaController,
		templateUrl: 'app/views/vista_operador/ingresar_reserva.html',
		controllerAs: 'vm'
	});

	ingresarReservaController.$inject = [];

	function ingresarReservaController () {
		var vm = this

	}
})();