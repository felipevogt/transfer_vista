(function () {
	'use strict';
	angular
	.module('app')
	.component('asistenciaOperador', {
		controller: asistenciaOperadorController,
		templateUrl: 'app/views/vista_operador/asistencia_operador.html',
		controllerAs: 'vm'
	});

	asistenciaOperadorController.$inject = [];

	function asistenciaOperadorController () {
		var vm = this

	}
})();