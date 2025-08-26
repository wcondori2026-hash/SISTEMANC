import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [RouterModule],
})
export class MenuComponent {
  @Input() menuActivo = false;
  @Output() cerrar = new EventEmitter<void>();
  @Output() mostrarMenu = new EventEmitter<void>();

  cerrarMenu() {
    this.cerrar.emit();
  }

  abrirMenu() {
    this.mostrarMenu.emit();
  }
}
