import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalAnexosVentasComponent } from '../modal-anexos/modal-anexos.component';

@Component({
  selector: 'app-registrar-venta',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  imports: [RouterModule, MenuComponent, BreadcrumbComponent, CommonModule, FormsModule]
})
export class RegistrarVentaComponent {

  menuActivo = false;

  constructor(private dialog: MatDialog) {}

  abrirModalAnexos() {
    this.dialog.open(ModalAnexosVentasComponent, {
      width: '90vw',
      maxWidth: '100vw',
      height: '90vh',
      panelClass: 'custom-modal-anexos'
    });
  }
  // Ejemplo de datos para la tabla de detalle
  detalle = [
    { nro: 1, tipo: 'Poste', unidad: 'Unidad', cantidad: 10, total: 2000 },
    { nro: 2, tipo: 'Placa', unidad: 'Unidad', cantidad: 10, total: 5000 },
    { nro: 3, tipo: 'Fierros', unidad: 'Unidad', cantidad: 10, total: 1000 },
    { nro: 4, tipo: 'Cementos', unidad: 'Unidad', cantidad: 100, total: 2000 }
  ];

  estado = 'Nuevo';
  estados = ['Enviado al cliente', 'Pagado', 'No pagado', 'Anulado'];

  agregarDetalle() {}
  eliminarDetalle(nro: number) {
    this.detalle = this.detalle.filter(d => d.nro !== nro);
  }
  grabar() {}
  cargarAnexos() {}
  cerrar() {}
  salir() {}

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu(): void {
    this.menuActivo = false;
  }
}
