import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../login/services/auth.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() menuActivo = false;
  @Output() mostrarMenu = new EventEmitter<void>();
  titulo = '';
  user: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setTitulo();
    });
  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.setTitulo();
  }

  onMostrarMenu() {
    this.mostrarMenu.emit();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  setTitulo() {
    let route = this.route.snapshot;
    let titulo = '';
    // Recorre el árbol de rutas activas
    while (route) {
      if (route.data && route.data['titulo']) {
        titulo = route.data['titulo'];
      }
      route = route.firstChild!;
    }
    this.titulo = titulo || 'Bienvenido al Sistema Administrativo Digital NC';
  }

  cerrarMenu() {
    this.menuActivo = false;
  }
}
