import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ModalGastosComponent } from '../modal-gastos/modal-gastos.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrar-viaticos',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  standalone: true,
  imports: [RouterModule, MenuComponent, BreadcrumbComponent, CommonModule, FormsModule, ModalGastosComponent]
})
export class RegistrarViaticosComponent {
  gastosEjemplo = [
    { subcategoria: 'Almuerzo', proyecto: 'Obra 00120', documento: 'Boleta Nro 0012-2023', monto: 100, igv: 18, total: 118 },
    { subcategoria: 'Cena', proyecto: 'Obra 001230', documento: 'Recibo de honorarios 200-2', monto: 500, igv: 0, total: 500 },
    { subcategoria: 'Transporte', proyecto: 'Obra 00120', documento: 'Factura 1234', monto: 50, igv: 9, total: 59 },
    { subcategoria: 'Hospedaje', proyecto: 'Obra 00120', documento: 'Boleta Nro 0013-2023', monto: 200, igv: 36, total: 236 },
    { subcategoria: 'Materiales', proyecto: 'Obra 001230', documento: 'Factura 5678', monto: 80, igv: 14.4, total: 94.4 }
  ];
  totalGastos = 1007.4;
  estado = 'Nuevo';
  estados = ['Nuevo', 'Asignado', 'Cerrado', 'Anulado'];
  // Datos de asignación
  responsable = '';
  descripcion = '';
  monto = '';
  fechaAsignacion = '';
  asignaciones = [
    { nro: 1, monto: 2000, fecha: '20/12/2023', descripcion: '' },
    { nro: 2, monto: 2000, fecha: '20/12/2023', descripcion: '' },
    { nro: 3, monto: 2000, fecha: '20/12/2023', descripcion: '' }
  ];
  // Datos de rendición
  datos = '';
  fechaCierre = '';
  devolucion = '';
  reembolso = '';
  descripcionRendicion = '';

  menuActivo = false;

  mostrarModalGastos = false;

  grabar() {}
  cargarAnexos() {}
  cerrar() {}
  salir() {}
  cambiarEstado(e: any) { this.estado = e.target.value; }
  agregarAsignacion() {}

  abrirModalGastos() {
    this.mostrarModalGastos = true;
  }
  cerrarModalGastos() {
    this.mostrarModalGastos = false;
  }

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu(): void {
    this.menuActivo = false;
  }
}
