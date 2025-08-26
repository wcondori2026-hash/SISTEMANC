import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pagos',
  templateUrl: './modal-pagos.component.html',
  styleUrls: ['./modal-pagos.component.css'],
  imports: [CommonModule]
})
export class ModalPagosComponent {
  pagos = [
    { nro: 1, tipo: 'Factura', concepto: 'pago de instalacion', monto: 100.00, igv: 18.00, total: 118.00 },
    { nro: 2, tipo: 'Boleta/Libre', concepto: 'venta de placas', monto: 500.00, igv: 0, total: 500.00 }
  ];

  constructor(public dialogRef: MatDialogRef<ModalPagosComponent>) {}

  getTotal() {
    return this.pagos.reduce((acc, p) => acc + p.total, 0);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
