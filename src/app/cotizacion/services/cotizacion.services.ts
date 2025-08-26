import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Cotizacion {
  nro: number;
  codigo: string;
  fecha: string;
  cliente: string;
  subtotal: number;
  igv: number;
  descuento: number;
  total: number;
  etapa: string;
}

@Injectable({ providedIn: 'root' })
export class CotizacionService {
  private cotizaciones: Cotizacion[] = [
    { nro: 1, codigo: 'NC0001', fecha: '10/11/2023', cliente: 'Juan Castro', subtotal: 1500, igv: 1080, descuento: 275, total: 2000, etapa: 'Nuevo' },
    { nro: 2, codigo: 'NC0002', fecha: '11/11/2023', cliente: 'Juan Castro', subtotal: 1500, igv: 1080, descuento: 275, total: 2000, etapa: 'Asignado' },
    { nro: 3, codigo: 'NC0003', fecha: '20/11/2023', cliente: 'Juan Castro', subtotal: 1500, igv: 1080, descuento: 275, total: 2000, etapa: 'Anulado' },
    { nro: 4, codigo: 'NC0004', fecha: '30/11/2023', cliente: 'Juan Castro', subtotal: 1500, igv: 1080, descuento: 275, total: 2000, etapa: 'Cerrado' },
    { nro: 5, codigo: 'NC0005', fecha: '05/12/2023', cliente: 'Ana Pérez', subtotal: 2000, igv: 360, descuento: 0, total: 2360, etapa: 'Nuevo' },
    { nro: 6, codigo: 'NC0006', fecha: '10/12/2023', cliente: 'Carlos Ruiz', subtotal: 1800, igv: 324, descuento: 100, total: 2024, etapa: 'Asignado' }
  ];

  getCotizaciones(
    page: number = 1,
    pageSize: number = 10,
    filtros: {
      codigo?: string;
      cliente?: string;
      fecha?: string;
      responsable?: string;
      etapa?: string;
    } = {}
  ): Observable<{ data: Cotizacion[]; total: number }> {
    let data = [...this.cotizaciones];
    // Filtros simulados
    if (filtros.codigo) {
      data = data.filter(c => c.codigo.toLowerCase().includes((filtros.codigo ?? '').toLowerCase()));
    }
    if (filtros.cliente) {
      data = data.filter(c => c.cliente.toLowerCase().includes((filtros.cliente ?? '').toLowerCase()));
    }
    if (filtros.fecha) {
      data = data.filter(c => c.fecha === filtros.fecha);
    }
    if (filtros.etapa) {
      data = data.filter(c => c.etapa === filtros.etapa);
    }
    // Paginado
    const total = data.length;
    const start = (page - 1) * pageSize;
    const paged = data.slice(start, start + pageSize);
    return of({ data: paged, total });
  }
}
