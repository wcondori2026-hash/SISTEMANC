import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

// Update the import path to the correct relative location
import { AnexosService } from '../services/anexos.service';

@Component({
  selector: 'app-modal-anexos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-anexos.component.html',
  styleUrls: ['./modal-anexos.component.css']
})
export class ModalAnexosComponent {
  archivos: any[] = [];
  mensaje: string = '';
  mensajeTipo: 'success' | 'danger' | 'info' = 'info';
  cargando: boolean = false;

  constructor(
    private anexosService: AnexosService,
    private dialogRef: MatDialogRef<ModalAnexosComponent>
  ) {}

  cerrarDialog() {
    this.dialogRef.close();
  }

  onFileChange(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Validaciones: solo PDF/JPG/PNG y máx 5MB
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!['pdf','jpg','jpeg','png'].includes(ext || '')) {
        this.mensaje = 'Solo se permiten archivos PDF, JPG o PNG.';
        this.mensajeTipo = 'danger';
        setTimeout(() => this.mensaje = '', 3500);
        continue;
      }
      if (file.size > 5 * 1024 * 1024) {
        this.mensaje = 'El archivo supera el tamaño máximo de 5MB.';
        this.mensajeTipo = 'danger';
        setTimeout(() => this.mensaje = '', 3500);
        continue;
      }
      let preview = '';
      if (['jpg','jpeg','png'].includes(ext || '')) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.archivos.push({
            nombre: file.name,
            tamano: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
            tipo: ext?.toUpperCase(),
            file: file,
            preview: e.target.result
          });
        };
        reader.readAsDataURL(file);
      } else {
        this.archivos.push({
          nombre: file.name,
          tamano: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
          tipo: ext?.toUpperCase(),
          file: file,
          preview: ''
        });
      }
    }
  }

  enviarArchivos() {
    if (this.archivos.length === 0) {
      this.mensaje = 'No hay archivos para enviar.';
      this.mensajeTipo = 'info';
      setTimeout(() => this.mensaje = '', 2500);
      return;
    }
    this.cargando = true;
    const files = this.archivos.map(a => a.file);
    this.anexosService.subirArchivos(files).subscribe({
      next: (resp: any) => {
        this.mensaje = resp?.mensaje || 'Archivos enviados correctamente.';
        this.mensajeTipo = 'success';
        this.archivos = [];
        this.cargando = false;
        setTimeout(() => this.mensaje = '', 2500);
      },
      error: (err: any) => {
        this.mensaje = 'Error al enviar archivos: ' + (err?.error?.mensaje || 'Intenta nuevamente.');
        this.mensajeTipo = 'danger';
        this.cargando = false;
        setTimeout(() => this.mensaje = '', 3500);
      }
    });
  }

  eliminarArchivo(idx: number) {
    this.archivos.splice(idx, 1);
  }
}
