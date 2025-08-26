import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

interface Anexo {
  nro: number;
  descripcion: string;
  tamano: string;
  tipo: string;
}

@Component({
  selector: 'app-modal-anexos-ventas',
  templateUrl: './modal-anexos.component.html',
  styleUrls: ['./modal-anexos.component.css'],
  imports: [CommonModule]
})
export class ModalAnexosVentasComponent {
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const ext = file.name.split('.').pop()?.toUpperCase() || '';
      const tamano = file.size > 1024 * 1024 ? `${Math.round(file.size / (1024 * 1024))} MB` : `${Math.round(file.size / 1024)} KB`;
      this.anexos.push({
        nro: this.anexos.length + 1,
        descripcion: file.name,
        tamano,
        tipo: ext
      });
    }
  }
  anexos: Anexo[] = [
    { nro: 1, descripcion: 'FACTURA.pdf', tamano: '40 MB', tipo: 'PDF' },
    { nro: 2, descripcion: 'Boleta.docx', tamano: '38 MB', tipo: 'DOCX' },
    { nro: 3, descripcion: 'Boleta.png', tamano: '41 MB', tipo: 'PNG' },
    { nro: 4, descripcion: 'factura.pdf', tamano: '4 MB', tipo: 'PDF' }
  ];

  constructor(public dialogRef: MatDialogRef<ModalAnexosVentasComponent>) {}

  seleccionarArchivo() {
    // Acción para seleccionar archivo
  }

  cerrar() {
    this.dialogRef.close();
  }

  salir() {
    this.dialogRef.close();
  }

  eliminarAnexo(nro: number) {
    this.anexos = this.anexos.filter(a => a.nro !== nro);
  }
}
