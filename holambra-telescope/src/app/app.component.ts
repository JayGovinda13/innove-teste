import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DesafiosComponent } from './components/desafios/desafios.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { PremiacaoComponent } from './components/premiacao/premiacao.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, DesafiosComponent, CronogramaComponent, PremiacaoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'holambra-telescope';
}
