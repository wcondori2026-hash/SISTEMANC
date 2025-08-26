import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal-actividades',
  templateUrl: './modal-actividades.component.html',
  styleUrls: ['./modal-actividades.component.css'],
  imports: [CommonModule]
})
export class ModalActividadesComponent {
  actividades = [
    { descripcion: 'FACTURA.pdf', avance: '90%', fecha: '20/12/2023' },
    { descripcion: 'Boleta.docx', avance: '50%', fecha: '20/12/2023' },
    { descripcion: 'Boleta.png', avance: '30%', fecha: '20/12/2023' },
    { descripcion: 'factura.pdf', avance: '10%', fecha: '20/12/2023' }
  ];
  observaciones = [
    { descripcion: 'FACTURA.pdf', fecha: '20/12/2023' },
    { descripcion: 'Boleta.docx', fecha: '20/12/2023' },
    { descripcion: 'Boleta.png', fecha: '20/12/2023' },
    { descripcion: 'factura.pdf', fecha: '20/12/2023' }
  ];

  constructor(public dialogRef: MatDialogRef<ModalActividadesComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }
}
