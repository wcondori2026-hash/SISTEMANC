import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-anexos',
  templateUrl: './modal-anexos.component.html',
  styleUrls: ['./modal-anexos.component.css'],
  imports: [CommonModule]
})
export class ModalAnexosComponent {
  importarArchivo(event: any) {
    const file = event.target.files[0];
    if (file) {
      const nombre = file.name;
      const tamano = Math.round(file.size / 1024 / 1024 * 10) / 10 + ' MB';
      const tipo = file.name.split('.').pop()?.toUpperCase() || '';
      this.anexos.push({ descripcion: nombre, tamano, tipo });
    }
  }
  anexos = [
    { descripcion: 'FACTURA.pdf', tamano: '40 MG', tipo: 'PDF' },
    { descripcion: 'Boleta.docx', tamano: '38MB', tipo: 'DOCX' },
    { descripcion: 'Boleta.png', tamano: '41 MB', tipo: 'PNG' },
    { descripcion: 'factura.pdf', tamano: '4MB', tipo: 'PDF' }
  ];

  constructor(public dialogRef: MatDialogRef<ModalAnexosComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }
}
