angular
.module('app')
.config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('app', {
		url: '/',
	})
	.state('ingresarReserva', {
		url: '/ingresarReserva',
		component: 'ingresarReserva'
	})
	.state('asignarChofer', {
		url: '/asignarChofer',
		component: 'asignarChofer'
	})
	.state('listarReservas', {
		url: '/listarReservas',
		component: 'listarReservas'
	})
	.state('asistenciaOperador', {
		url: '/asistenciaOperador',
		component: 'asistenciaOperador'
	});
}
