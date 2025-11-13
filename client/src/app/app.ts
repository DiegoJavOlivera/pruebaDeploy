import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludar } from './services/saludar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');
  saludarService = inject(Saludar);

  saludar() {
    this.saludarService.saludar();
  }
}
