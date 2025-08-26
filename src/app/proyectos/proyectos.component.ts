import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../components/menu/menu.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { ProyectosService, Proyecto } from './services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent, BreadcrumbComponent],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  proyectosFiltrados: Proyecto[] = [];
  proyectosPaginados: Proyecto[] = [];
  page: number = 1;
  pageSize: number = 10;
  total: number = 0;

  // Filtros
  filtroCodigo: string = '';
  filtroNombre: string = '';
  filtroResponsable: string = '';
  filtroEstado: string = '';
  filtroFechaInicio: string = '';
  filtroFechaFin: string = '';

  // Calendario dinámico
  calendarYear: number = 2023;
  calendarMonth: number = 11; // Diciembre (0-based)
  calendarMatrix: Array<Array<{ day: number, proyectos: Proyecto[] }>> = [];

  menuActivo = false;

  constructor(private proyectosService: ProyectosService, private router: Router) {}
  irANuevoProyecto() {
    this.router.navigate(['/proyectos/registrar']);
  }

  ngOnInit() {
    this.proyectosService.getProyectos().subscribe(data => {
      this.proyectos = data;
      this.filtrar();
  this.generarCalendario();
    });
  }

  filtrar() {
    this.proyectosFiltrados = this.proyectos.filter(p => {
      return (
        (!this.filtroCodigo || p.codigo.toLowerCase().includes(this.filtroCodigo.toLowerCase())) &&
        (!this.filtroNombre || p.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())) &&
        (!this.filtroResponsable || p.cliente.toLowerCase().includes(this.filtroResponsable.toLowerCase())) &&
        (!this.filtroEstado || p.estado === this.filtroEstado) &&
        (!this.filtroFechaInicio || p.fechaInicio === this.filtroFechaInicio) &&
        (!this.filtroFechaFin || p.fechaFin === this.filtroFechaFin)
      );
    });
    this.total = this.proyectosFiltrados.length;
    this.setPage(1);
  }

  setPage(page: number) {
    this.page = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.proyectosPaginados = this.proyectosFiltrados.slice(start, end);
  }

  generarCalendario() {
    // Diciembre 2023
    const year = this.calendarYear;
    const month = this.calendarMonth;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstWeekDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Lunes=0
    const totalDays = lastDay.getDate();

    let matrix: Array<Array<{ day: number, proyectos: Proyecto[] }>> = [];
    let week: Array<{ day: number, proyectos: Proyecto[] }> = [];

    // Rellenar días vacíos al inicio
    for (let i = 0; i < firstWeekDay; i++) {
      week.push({ day: 0, proyectos: [] });
    }

    for (let d = 1; d <= totalDays; d++) {
      // Buscar proyectos en ese día
      const proyectosEnDia = this.proyectos.filter(p => {
        const [dia, mes, anio] = p.fechaInicio.split('/').map(Number);
        return dia === d && mes === (month + 1) && anio === year;
      });
      week.push({ day: d, proyectos: proyectosEnDia });
      if (week.length === 7) {
        matrix.push(week);
        week = [];
      }
    }
    // Rellenar días vacíos al final
    if (week.length > 0) {
      while (week.length < 7) {
        week.push({ day: 0, proyectos: [] });
      }
      matrix.push(week);
    }
    this.calendarMatrix = matrix;
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
