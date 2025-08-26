import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { ModalAnexosComponent } from '../modal-anexos/modal-anexos.component';

@Component({
  standalone: true,
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  imports: [RouterModule, MenuComponent, BreadcrumbComponent, CommonModule]
})
export class RegistrarComponent implements OnInit {

  menuActivo = false;

  constructor(@Inject(MatDialog) private dialog: MatDialog) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu(): void {
    this.menuActivo = false;
  }

  abrirModalAnexos() {
    this.dialog.open(ModalAnexosComponent, {
      width: '900px',
      maxWidth: '98vw',
      disableClose: false
    });
  }
}
