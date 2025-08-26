import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Proyecto {
  id: number;
  codigo: string;
  nombre: string;
  cliente: string;
  documento: string;
  fechaInicio: string;
  fechaFin: string;
  estado: string;
}

export interface Responsable {
  id: number;
  nombre: string;
}

export interface Integrante {
  id: number;
  nombre: string;
}

@Injectable({ providedIn: 'root' })
export class ProyectosService {
  buscarCotizacion(term: string): Observable<string[]> {
    // Simulación de búsqueda en API
    const cotizaciones = ['PRJ001', 'PRJ002', 'PRJ003', 'PRJ004'];
    return of(cotizaciones.filter(c => c.toLowerCase().includes(term.toLowerCase())));
  }

  buscarCliente(term: string): Observable<string[]> {
    // Simulación de búsqueda en API
    const clientes = ['Juan Castro', 'Ana Pérez', 'Luis Gómez', 'Empresa S.A.'];
    return of(clientes.filter(c => c.toLowerCase().includes(term.toLowerCase())));
  }

  buscarDocumento(term: string): Observable<string[]> {
    // Simulación de búsqueda en API
    const documentos = ['DNI 44239356', 'DNI 12345678', 'DNI 87654321', 'RUC 20123456789'];
    return of(documentos.filter(d => d.toLowerCase().includes(term.toLowerCase())));
  }

  getResponsables(): Observable<Responsable[]> {
    // Simulación de API para responsables
    return of([
      { id: 1, nombre: 'Giacomo Guilizzoni Founder & CEO' },
      { id: 2, nombre: 'Marco Botton Tuttofare' }
    ]);
  }

  getIntegrantes(): Observable<Integrante[]> {
    // Simulación de API para integrantes
    return of([
      { id: 1, nombre: 'Giacomo Guilizzoni Founder & CEO' },
      { id: 2, nombre: 'Marco Botton Tuttofare' }
    ]);
  }
  getProyectos(): Observable<Proyecto[]> {
    // Simulación de datos como si vinieran de un backend
    return of([
      {
        id: 1,
        codigo: 'PRJ001',
        nombre: 'Obra Lima',
        cliente: 'Juan Castro',
        documento: 'DNI 44239356',
        fechaInicio: '10/11/2023',
        fechaFin: '10/11/2023',
        estado: 'Finalizado'
      },
      {
        id: 2,
        codigo: 'PRJ002',
        nombre: 'Obra Callao',
        cliente: 'Ana Pérez',
        documento: 'DNI 12345678',
        fechaInicio: '12/11/2023',
        fechaFin: '15/11/2023',
        estado: 'En proceso'
      },
      {
        id: 3,
        codigo: 'PRJ003',
        nombre: 'Obra Surco',
        cliente: 'Luis Gómez',
        documento: 'DNI 87654321',
        fechaInicio: '01/12/2023',
        fechaFin: '05/12/2023',
        estado: 'Pendiente'
      }
    ]);
  }
}
