import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
	{
		path: 'viaticos',
		loadComponent: () => import('./viaticos/viaticos.component').then(m => m.ViaticosComponent),
		canActivate: [authGuard],
		data: { titulo: 'Administrativo / Viáticos' }
	},
	{
		path: 'viaticos/registrar',
		loadComponent: () => import('./viaticos/registrar/registrar.component').then(m => m.RegistrarViaticosComponent),
		canActivate: [authGuard],
		data: { titulo: 'Administrativo / Nuevo Viáticos' }
	},
	{
		path: 'ventas/registrar',
		loadComponent: () => import('./ventas/registrar/registrar.component').then(m => m.RegistrarVentaComponent),
		canActivate: [authGuard],
		data: { titulo: 'Administrativo / Nuevo Ventas' }
	},
	{
		path: 'ventas',
		loadComponent: () => import('./ventas/ventas.component').then(m => m.VentasComponent),
		canActivate: [authGuard],
		data: { titulo: 'Administrativo / Ventas' }
	},
	{
		path: '',
		loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
		data: { titulo: 'Benvenido' }
	},
		{
			path: 'cotizacion/registrar',
			loadComponent: () => import('./cotizacion/registrar/registrar.component').then(m => m.RegistrarCotizacionComponent),
			canActivate: [authGuard],
			data: { titulo: 'Administrativo / Nueva Cotización' }
		},
		{
			path: 'cotizacion',
			loadComponent: () => import('./cotizacion/cotizacion.component').then(m => m.CotizacionComponent),
			canActivate: [authGuard],
			data: { titulo: 'Administrativo / Cotización' }
		},
		{
			path: 'dashboard',
			loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
			canActivate: [authGuard],
			data: { titulo: 'Bienvenido al Sistema Administrativo Digital NC' }
		},
	{
		path: 'compras',
		loadComponent: () => import('./compras/compras.component').then(m => m.ComprasComponent),
		canActivate: [authGuard],
		data: { titulo: 'Administrativo / Módulo de Compras/Gastos' }
	},
	{
		path: 'compras/registrar',
		loadComponent: () => import('./compras/registrar/registrar.component').then(m => m.RegistrarComponent),
		canActivate: [authGuard],
		data: { titulo: 'Administrativo / Nuevo Registro de Compras/Gastos ' }
	},
	{
		path: 'proyectos',
		loadComponent: () => import('./proyectos/proyectos.component').then(m => m.ProyectosComponent),
		canActivate: [authGuard],
		data: { titulo: 'Administrativo / Gestión de Proyectos - Obras' }
	},
	{
		path: 'proyectos/registrar',
		loadComponent: () => import('./proyectos/registrar/registrar.component').then(m => m.RegistrarProyectoComponent),
		canActivate: [authGuard],
		data: { titulo: 'Administrativo / Nuevo Gestión de Proyectos - Obras' }
	}
];
