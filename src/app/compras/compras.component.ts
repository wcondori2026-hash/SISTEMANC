
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { MenuComponent } from '../components/menu/menu.component';
import { Compra, ComprasService } from '../compras/services/compras.service';
import { AuthService } from '../login/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MenuComponent,
    BreadcrumbComponent
]
})
export class ComprasComponent implements OnInit {

  displayedColumns: string[] = [
    'num', 'razonSocial', 'concepto', 'categoria', 'proyecto', 'cliente', 'documento', 'fecha', 'estado', 'acciones'
  ];
  compras: Compra[] = [];
  comprasFiltradas: Compra[] = [];
  comprasPaginadas: Compra[] = [];
  page: number = 1;
  pageSize: number = 10;
  total: number = 0;

  // Filtros
  filtroCodigo: string = '';
  filtroProyecto: string = '';
  filtroConcepto: string = '';
  filtroFecha: string = '';
  filtroCategoria: string = '';
  filtroRazonSocial: string = '';
  filtroCliente: string = '';
  filtroDocumento: string = '';
  filtroEtapa: string = '';

  menuActivo = false;

  constructor(private comprasService: ComprasService, private router: Router, private auth: AuthService) {}

  irARegistro() {
    this.router.navigate(['/compras/registrar']);
  }

  ngOnInit() {
    this.comprasService.getCompras().subscribe((data: any) => {
      this.compras = data;
      this.filtrar();
    });
  }

  filtrar() {
    this.comprasFiltradas = this.compras.filter(c => {
      return (
        (!this.filtroCodigo || c.documento?.toLowerCase().includes(this.filtroCodigo.toLowerCase())) &&
        (!this.filtroProyecto || c.proyecto?.toLowerCase().includes(this.filtroProyecto.toLowerCase())) &&
        (!this.filtroConcepto || c.concepto?.toLowerCase().includes(this.filtroConcepto.toLowerCase())) &&
        (!this.filtroFecha || c.fecha === this.filtroFecha) &&
        (!this.filtroCategoria || c.categoria?.toLowerCase().includes(this.filtroCategoria.toLowerCase())) &&
        (!this.filtroRazonSocial || c.razonSocial?.toLowerCase().includes(this.filtroRazonSocial.toLowerCase())) &&
        (!this.filtroCliente || c.cliente?.toLowerCase().includes(this.filtroCliente.toLowerCase())) &&
        (!this.filtroDocumento || c.documento?.toLowerCase().includes(this.filtroDocumento.toLowerCase())) &&
        (!this.filtroEtapa || c.estado === this.filtroEtapa)
      );
    });
    this.total = this.comprasFiltradas.length;
    this.setPage(1);
  }

  setPage(page: number) {
    this.page = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.comprasPaginadas = this.comprasFiltradas.slice(start, end);
  }

  cambiarPageSize(size: string) {
    this.pageSize = Number(size);
    this.setPage(1);
  }

  getPages(): number[] {
    return Array(Math.ceil(this.total / this.pageSize)).fill(0).map((x, i) => i + 1);
  }

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu() {
    this.menuActivo = false;
  }
}
