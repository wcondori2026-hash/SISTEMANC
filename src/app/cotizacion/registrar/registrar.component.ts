import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-cotizacion',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  standalone: true,
  imports: [RouterModule, MenuComponent, BreadcrumbComponent, CommonModule]
})
export class RegistrarCotizacionComponent {
  estado = 'Nuevo';
  estados = ['Nuevo', 'Asignado', 'Cerrado', 'Anulado'];
  productos = [
    { cod: '0.1', descripcion: 'Altura: 3.0 M DE CERCO  MEDIDA DE PAÑO 2.06 M DIMENSIONES DE PLACA: Ancho y largo: 0.50 m x 2.00 m  Espesor: 3.5 cm.', cantidad: 58, unidad: 'ML', precio: 140, total: 8120 },
    { cod: '0.1', descripcion: 'Altura: 3.0 M DE CERCO  MEDIDA DE PAÑO 2.06 M DIMENSIONES DE PLACA: Ancho y largo: 0.50 m x 2.00 m  Espesor: 3.5 cm.', cantidad: 58, unidad: 'ML', precio: 140, total: 8120 },
    { cod: '0.1', descripcion: 'Altura: 3.0 M DE CERCO  MEDIDA DE PAÑO 2.06 M DIMENSIONES DE PLACA: Ancho y largo: 0.50 m x 2.00 m  Espesor: 3.5 cm.', cantidad: 58, unidad: 'ML', precio: 140, total: 8120 }
  ];
  subtotal = 618.00;
  igv = 618.00;
  descuento = 618.00;
  total = 618.00;

  menuActivo = false;

  grabar() { alert('Cotización grabada'); }
  cargarAnexos() { alert('Cargar anexos'); }
  cerrar() { alert('Cerrar cotización'); }
  salir() { alert('Salir'); }

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu(): void {
    this.menuActivo = false;
  }
}
