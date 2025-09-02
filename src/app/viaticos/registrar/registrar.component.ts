import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ModalGastosComponent } from '../modal-gastos/modal-gastos.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-registrar-viaticos',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  imports: [RouterModule, MenuComponent, BreadcrumbComponent, CommonModule, FormsModule]
})
export class RegistrarViaticosComponent {
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

  constructor(
    private dialog: MatDialog
  ){}

  grabar() {}
  cargarAnexos() {}
  salir() {}
  cambiarEstado(e: any) { this.estado = e.target.value; }
  agregarAsignacion() {}

  abrirModalGastos() {
    this.dialog.open(ModalGastosComponent, {
      width: '90vw',
      maxWidth: '100vw',
      height: '90vh',
      panelClass: 'custom-modal-gastos'
    });
  }

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu(): void {
    this.menuActivo = false;
  }
}
