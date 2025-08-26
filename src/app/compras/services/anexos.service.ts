import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AnexosService {
  constructor(private http: HttpClient) {}

  subirArchivos(archivos: File[]): Observable<any> {
    const formData = new FormData();
    archivos.forEach((file, idx) => {
      formData.append('files', file, file.name);
    });
  // URL real del backend
  // URL personalizada del backend
  return this.http.post<any>('https://api.midominio.com/v1/documentos/anexos', formData);
  }
}
