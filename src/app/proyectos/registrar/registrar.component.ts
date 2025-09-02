import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalActividadesComponent } from '../modal-actividades/modal-actividades.component';
import { ModalAnexosComponent } from '../modal-anexos/modal-anexos.component';
import { ModalGastosComponent } from '../modal-gastos/modal-gastos.component';
import { ModalPagosComponent } from '../modal-pagos/modal-pagos.component';
import { ModalResumenComponent } from '../modal-resumen/modal-resumen.component';
import { ProyectosService, Responsable, Integrante } from '../services/proyectos.service';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-proyecto',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  imports: [RouterModule, MenuComponent, BreadcrumbComponent, CommonModule, FormsModule]
})
export class RegistrarProyectoComponent implements OnInit {

  menuActivo = false;

  constructor(private proyectosService: ProyectosService, private dialog: MatDialog) {}

  abrirModalResumen() {
    this.dialog.open(ModalResumenComponent, {
      width: '90vw',
      maxWidth: '100vw',
      height: '90vh',
      panelClass: 'custom-modal-resumen'
    });
  }
  abrirModalPagos() {
    this.dialog.open(ModalPagosComponent, {
      width: '90vw',
      maxWidth: '100vw',
      height: '90vh',
      panelClass: 'custom-modal-pagos'
    });
  }
  abrirModalGastos() {
    this.dialog.open(ModalGastosComponent, {
      width: '90vw',
      maxWidth: '100vw',
      height: '90vh',
      panelClass: 'custom-modal-gastos'
    });
  }
  abrirModalAnexos() {
    this.dialog.open(ModalAnexosComponent, {
      width: '90vw',
      maxWidth: '100vw',
      height: '90vh',
      panelClass: 'custom-modal-anexos'
    });
  }

  abrirModalActividades() {
    this.dialog.open(ModalActividadesComponent, {
      width: '90vw',
      maxWidth: '100vw',
      height: '90vh',
      panelClass: 'custom-modal-actividades'
    });
  }


  // Autocompletado
  cotizacionInput: string = '';
  cotizacionOpciones: string[] = [];
  clienteInput: string = '';
  clienteOpciones: string[] = [];
  documentoInput: string = '';
  documentoOpciones: string[] = [];

  // Selects dinámicos
  responsables: Responsable[] = [];
  integrantes: Integrante[] = [];
  responsableSeleccionado: number | null = null;
  integranteSeleccionado: number | null = null;


  ngOnInit() {
    this.proyectosService.getResponsables().subscribe(data => this.responsables = data);
    this.proyectosService.getIntegrantes().subscribe(data => this.integrantes = data);
  }

  buscarCotizacion() {
    if (this.cotizacionInput.length > 1) {
      this.proyectosService.buscarCotizacion(this.cotizacionInput).subscribe(data => this.cotizacionOpciones = data);
    } else {
      this.cotizacionOpciones = [];
    }
  }

  buscarCliente() {
    if (this.clienteInput.length > 1) {
      this.proyectosService.buscarCliente(this.clienteInput).subscribe(data => this.clienteOpciones = data);
    } else {
      this.clienteOpciones = [];
    }
  }

  buscarDocumento() {
    if (this.documentoInput.length > 1) {
      this.proyectosService.buscarDocumento(this.documentoInput).subscribe(data => this.documentoOpciones = data);
    } else {
      this.documentoOpciones = [];
    }
  }

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu(): void {
    this.menuActivo = false;
  }
}
