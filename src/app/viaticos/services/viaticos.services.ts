import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Viatico {
  nro: number;
  codigo: string;
  proyecto: string;
  fecha: string;
  cierre: string;
  monto: number;
  gastos: number;
  devolucion: number;
  reembolso: number;
  etapa: string;
}

@Injectable({ providedIn: 'root' })
export class ViaticosService {
  private viaticos: Viatico[] = [
    { nro: 1, codigo: 'NC0001', proyecto: 'Obra Callao', fecha: '10/11/2023', cierre: '10/11/2023', monto: 1500, gastos: 1000, devolucion: 500, reembolso: 0, etapa: 'Nuevo' },
    { nro: 2, codigo: 'NC0002', proyecto: 'Obra Huascar', fecha: '10/11/2023', cierre: '10/11/2023', monto: 1500, gastos: 1000, devolucion: 500, reembolso: 0, etapa: 'Asignado' },
    { nro: 3, codigo: 'NC0003', proyecto: 'Obra Castilla', fecha: '20/11/2023', cierre: '10/11/2023', monto: 1500, gastos: 1000, devolucion: 500, reembolso: 0, etapa: 'Anulado' },
    { nro: 4, codigo: 'NC0004', proyecto: 'Obra Huacho', fecha: '30/11/2023', cierre: '10/11/2023', monto: 1500, gastos: 1000, devolucion: 500, reembolso: 0, etapa: 'Cerrado' }
  ];

  getViaticos(page: number, pageSize: number, filtro: any): Observable<{ data: Viatico[]; total: number }> {
    let data = this.viaticos;
    if (filtro.codigo) {
      data = data.filter(v => v.codigo.includes(filtro.codigo));
    }
    if (filtro.proyecto) {
      data = data.filter(v => v.proyecto.includes(filtro.proyecto));
    }
    if (filtro.etapa) {
      data = data.filter(v => v.etapa === filtro.etapa);
    }
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return of({ data: data.slice(start, end), total: data.length });
  }
}
