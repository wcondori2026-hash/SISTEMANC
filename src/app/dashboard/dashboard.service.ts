/* Simulación de servicio para dashboard */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  getProjectExecution(): Observable<any> {
    return of({
      labels: ['Obra 001-2025', 'Obra 002-2025', 'Obra 003-2025', 'Obra 004-2025'],
      datasets: [
        { label: 'Costos', data: [12000, 9000, 5000, 2000], backgroundColor: '#1976d2' },
        { label: 'Gastos', data: [10000, 7000, 4000, 1500], backgroundColor: '#ff9800' }
      ]
    });
  }
  getSummary(): Observable<any> {
    return of({
      gastos: 10000,
      facturacion: 8545,
      bolsalibre: 8545
    });
  }
}
