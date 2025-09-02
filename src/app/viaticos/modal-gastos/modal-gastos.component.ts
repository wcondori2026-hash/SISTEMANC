import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-modal-gastos',
  templateUrl: './modal-gastos.component.html',
  styleUrls: ['./modal-gastos.component.css'],
  imports: [CommonModule]
})
export class ModalGastosComponent {
  @Input() total: number = 0;
  @Output() cerrar = new EventEmitter<void>();
  @Output() salir = new EventEmitter<void>();

  totalGastos: number = 0;
  gastos = [
    { subcategoria: 'Almuerzo', proyecto: 'Proyecto', documento: 'Boleta Nro 0012-2023', monto: 100, igv: 18, total: 118, responsable: 'Alejandro' },
    { subcategoria: 'Planilla', proyecto: 'Proyecto', documento: 'Recibo de honorarios', monto: 500, igv: 0, total: 500, responsable: 'Pedros Perez' }
  ];

  calcularTotalGastos() {
    this.totalGastos = this.gastos.reduce((acc, g) => acc + g.total, 0);
  }

  constructor(public dialogRef: MatDialogRef<ModalGastosComponent>) {}

  onCerrar() {
     this.dialogRef.close();
  }
}
