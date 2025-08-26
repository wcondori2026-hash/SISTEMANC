import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Venta {
  nro: number;
  proveedor: string;
  tipo: string;
  glosa: string;
  codigo: string;
  proyecto: string;
  fecha: string;
  monto: number;
  igv: number;
  detraccion: number;
  retencion: number;
  total: number;
  etapa: string;
}

@Injectable({ providedIn: 'root' })
export class VentasService {
  private ventas: Venta[] = [
    { nro: 1, proveedor: 'Consultores SAC', tipo: 'Factura', glosa: 'venta de materiales', codigo: 'NC0001', proyecto: 'Obra Callao', fecha: '10/11/2023', monto: 1000, igv: 180, detraccion: 0, retencion: 0, total: 1180, etapa: 'Nuevo' },
    { nro: 2, proveedor: 'Consultores SAC', tipo: 'Factura', glosa: 'venta de materiales', codigo: 'NC0002', proyecto: 'Obra Callao', fecha: '10/11/2023', monto: 1000, igv: 180, detraccion: 0, retencion: 0, total: 1180, etapa: 'Enviado cli' },
    { nro: 3, proveedor: 'Consultores SAC', tipo: 'Factura', glosa: 'venta de materiales', codigo: 'NC0003', proyecto: 'Obra Callao', fecha: '10/11/2023', monto: 1000, igv: 180, detraccion: 0, retencion: 0, total: 1180, etapa: 'Anulado' },
    { nro: 4, proveedor: 'Consultores SAC', tipo: 'Factura', glosa: 'venta de materiales', codigo: 'NC0004', proyecto: 'Obra Callao', fecha: '10/11/2023', monto: 1000, igv: 180, detraccion: 0, retencion: 0, total: 1180, etapa: 'Pagado' },
    { nro: 5, proveedor: 'Proveedor X', tipo: 'Boleta', glosa: 'servicio', codigo: 'NC0005', proyecto: 'Obra Surco', fecha: '12/11/2023', monto: 2000, igv: 360, detraccion: 0, retencion: 0, total: 2360, etapa: 'Pagado' },
    { nro: 6, proveedor: 'Proveedor Y', tipo: 'Libre', glosa: 'consultoría', codigo: 'NC0006', proyecto: 'Obra Lima', fecha: '15/11/2023', monto: 1500, igv: 270, detraccion: 0, retencion: 0, total: 1770, etapa: 'Nuevo' }
  ];

  getVentas(page: number, pageSize: number): Observable<{ data: Venta[]; total: number }> {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const data = this.ventas.slice(start, end);
    return of({ data, total: this.ventas.length });
  }
}
