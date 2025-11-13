import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Saludar {
  http = inject(HttpClient);
  texto = signal<string | null>(null);
  saludar() {
    return this.http.get(`${environment.apiUrl}/saludar`).subscribe((response: any) => {
      this.texto.set(response.texto);
    });
  }
}
