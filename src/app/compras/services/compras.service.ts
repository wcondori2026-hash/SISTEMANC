import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Compra {
  num: number;
  razonSocial: string;
  concepto: string;
  categoria: string;
  proyecto: string;
  cliente: string;
  documento: string;
  fecha: string;
  estado: string;
}

@Injectable({ providedIn: 'root' })
export class ComprasService {
  private compras: Compra[] = [
    { num: 1, razonSocial: 'Empresa A', concepto: 'Viáticos', categoria: 'Viáticos', proyecto: 'Obra Callao', cliente: 'Juan Castro', documento: 'Boleta 001-2023', fecha: '10/11/2023', estado: 'Nuevo' },
    { num: 2, razonSocial: 'Empresa B', concepto: 'Gasto Proyecto', categoria: 'Gasto Proyecto', proyecto: 'Obra Huacho', cliente: 'Juan Castro', documento: 'Boleta 001-2023', fecha: '10/11/2023', estado: 'Anulado' },
    { num: 3, razonSocial: 'Empresa C', concepto: 'Gasto Fijo', categoria: 'Gasto Fijo', proyecto: 'Obra Castillo', cliente: 'Juan Castro', documento: 'Boleta 001-2023', fecha: '10/11/2023', estado: 'Aceptado' }
  ];

  getCompras(): Observable<Compra[]> {
    // Simula una llamada HTTP
    return of(this.compras);
  }
}
