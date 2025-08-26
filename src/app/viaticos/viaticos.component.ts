import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViaticosService, Viatico } from './services/viaticos.services';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../components/menu/menu.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-viaticos',
  templateUrl: './viaticos.component.html',
  styleUrls: ['./viaticos.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent, BreadcrumbComponent],
})
export class ViaticosComponent implements OnInit {
  viaticos: Viatico[] = [];
  total = 0;
  page = 1;
  pageSize = 10;
  filtro = {
    codigo: '',
    proyecto: '',
    fecha: '',
    responsable: '',
    etapa: ''
  };
  menuActivo = false;

  etapas = ['Nuevo', 'Asignado', 'Anulado', 'Cerrado'];

  constructor(private viaticosService: ViaticosService, private router: Router) {}

  ngOnInit(): void {
    this.cargarViaticos();
    // Si quieres filtrar por algún campo al iniciar, por ejemplo etapa:
    // this.viaticos = this.viaticos.filter(v => v.etapa === 'Nuevo');
  }

  cargarViaticos() {
    this.viaticosService.getViaticos(this.page, this.pageSize, this.filtro).subscribe(res => {
      this.viaticos = res.data;
      this.total = res.total;
    });
  }

  buscar() {
    this.page = 1;
    this.viaticosService.getViaticos(this.page, this.pageSize, this.filtro).subscribe(res => {
      this.viaticos = res.data;
      this.total = res.total;
    });
  }

  cambiarPagina(p: number) {
    this.page = p;
    this.cargarViaticos();
  }

  nuevo() {
    this.router.navigate(['/viaticos/registrar']);
  }
  editar() {}
  anular() {}
  exportarExcel() {}
  salir() {}

  getTotalPages(): number {
    return (this.total && this.pageSize) ? Math.ceil(this.total / this.pageSize) : 0;
  }

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu() {
    this.menuActivo = false;
  }

}
