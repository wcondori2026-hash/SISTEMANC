import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-gastos',
  templateUrl: './modal-gastos.component.html',
  styleUrls: ['./modal-gastos.component.css'],
  imports: [CommonModule]
})
export class ModalGastosComponent {
  @Input() gastos: any[] = [];
  @Input() total: number = 0;
  @Output() cerrar = new EventEmitter<void>();
  @Output() salir = new EventEmitter<void>();

  onCerrar() {
    this.cerrar.emit();
  }

  onSalir() {
    this.salir.emit();
  }
}
