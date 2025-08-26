import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-resumen',
  templateUrl: './modal-resumen.component.html',
  styleUrls: ['./modal-resumen.component.css'],
  imports: [CommonModule]
})
export class ModalResumenComponent {
  resumen = {
    costoObra: 35000,
    igv: 3000,
    monto: 32000,
    pagado: 15000,
    pendiente: 20000,
    totalPagos: 35000,
    gastos: 5000,
    viaticos: 1000,
    gastosObra: 4000,
    utilidad: 30000
  };

  constructor(public dialogRef: MatDialogRef<ModalResumenComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }
}
