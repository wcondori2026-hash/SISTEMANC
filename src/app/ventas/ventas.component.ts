import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../components/menu/menu.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { VentasService, Venta } from './services/ventas.services';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  imports: [CommonModule, FormsModule, MenuComponent, BreadcrumbComponent, RouterModule],
})
export class VentasComponent {
  ventas: Venta[] = [];
  ventasFiltrados: Venta[] = [];
  ventasPaginados: Venta[] = [];
  total = 0;
  page = 1;
  pageSize = 4;
  totalPages: number = 1;

  constructor(private ventasService: VentasService) {
    this.cargarVentas();
  }

  cargarVentas() {
    this.ventasService.getVentas(this.page, this.pageSize).subscribe(res => {
      this.ventas = res.data;
      this.total = res.total;
    });
  }

  cambiarPagina(nueva: number) {
    this.page = nueva;
    this.cargarVentas();
  }

  menuActivo = false;

  buscar() {}
  nuevo() {}
  editar() {}
  anular() {}
  exportarExcel() {}
  salir() {}

  cambiarPageSize(size: string) {
    this.pageSize = Number(size);
    this.setPage(1);
  }

  setPage(page: number) {
    this.page = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.ventasFiltrados = this.ventasFiltrados.slice(start, end);
  }

  getPages(): number[] {
    return Array(Math.ceil(this.total / this.pageSize)).fill(0).map((x, i) => i + 1);
  }

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu() {
    this.menuActivo = false;
  }

  filtrar(){}
}
