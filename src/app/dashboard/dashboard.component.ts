import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { DashboardService } from './dashboard.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChartType, ChartData, ChartOptions } from 'chart.js';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
  CommonModule,
  HttpClientModule,
    MenuComponent,
  BreadcrumbComponent,
  BaseChartDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  barType: ChartType = 'bar';
  barOptions: ChartOptions = { responsive: true, plugins: { legend: { position: 'top' } } };
  projectData: ChartData<'bar'> = { labels: [], datasets: [] };
  summary: any;

  doughnutType: ChartType = 'doughnut';
  doughnutData: ChartData<'doughnut'> = {
    labels: ['Deudas', 'Gastos'],
    datasets: [
      {
        data: [4500, 5500],
        backgroundColor: ['#888', '#e0e0e0']
      }
    ]
  };
  doughnutOptions: ChartOptions = {
    responsive: true,
    plugins: { legend: { display: false } }
  };

  menuActivo = false;

  constructor(
    private dashboardService: DashboardService,
  ) {}

  ngOnInit() {
    this.dashboardService.getProjectExecution().subscribe((data: any) => this.projectData = data);
    this.dashboardService.getSummary().subscribe((data: any) => this.summary = data);
  }

  mostrarMenu() {
    this.menuActivo = true;
  }

  cerrarMenu() {
    this.menuActivo = false;
  }
}
