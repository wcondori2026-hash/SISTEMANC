import { Component } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CotizacionService, Cotizacion } from './services/cotizacion.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent, BreadcrumbComponent],
})
export class CotizacionComponent {
  get totalPages() {
    return Math.ceil(this.totalItems / this.pageSize);
  }
  cotizaciones: Cotizacion[] = [];
  totalItems = 0;
  page = 1;
  pageSize = 10;
  filtros = {
    codigo: '',
    cliente: '',
    fecha: '',
    responsable: '',
    etapa: ''
  };

  constructor(private cotizacionService: CotizacionService, private router: Router) {
    this.buscar();
  }

  buscar() {
    this.cotizacionService.getCotizaciones(this.page, this.pageSize, this.filtros)
      .subscribe(res => {
        this.cotizaciones = res.data;
        this.totalItems = res.total;
      });
  }

  cambiarPagina(p: number) {
    this.page = p;
    this.buscar();
  }

  etapaColor(etapa: string) {
    switch (etapa) {
      case 'Nuevo': return 'bg-secondary text-white';
      case 'Asignado': return 'bg-warning text-dark';
      case 'Anulado': return 'bg-danger text-white';
      case 'Cerrado': return 'bg-success text-white';
      default: return '';
    }
  }

  // Eliminado constructor duplicado

  nuevo() {
    this.router.navigate(['/cotizacion/registrar']);
  }
  editar() { alert('Editar cotización'); }
  anular() { alert('Anular cotización'); }
  exportarExcel() { alert('Exportar a Excel'); }
  salir() { alert('Salir'); }
  verCotizacion(nro: number) { alert('Ver cotización ' + nro); }
}
