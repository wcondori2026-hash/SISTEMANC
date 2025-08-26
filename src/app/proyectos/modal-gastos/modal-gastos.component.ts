import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-gastos',
  templateUrl: './modal-gastos.component.html',
  styleUrls: ['./modal-gastos.component.css'],
  imports: [CommonModule]
})
export class ModalGastosComponent implements OnInit {

  totalGastos: number = 0;
  gastos = [
    { categoria: 'Viatico', subcategoria: 'Almuerzo', documento: 'Boleta Nro 0012-2023', monto: 100, igv: 18, total: 118, responsable: 'Alejandro' },
    { categoria: 'Gasto de Proyecto', subcategoria: 'Planilla', documento: 'Recibo de honorarios', monto: 500, igv: 0, total: 500, responsable: 'Pedros Perez' }
  ];

  calcularTotalGastos() {
    this.totalGastos = this.gastos.reduce((acc, g) => acc + g.total, 0);
  }

  constructor(public dialogRef: MatDialogRef<ModalGastosComponent>) {}

  ngOnInit() {
    this.calcularTotalGastos();
  }

  cerrar() {
    this.dialogRef.close();
  }
}
