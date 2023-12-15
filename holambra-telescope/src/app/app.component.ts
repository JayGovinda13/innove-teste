import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DesafiosComponent } from './components/desafios/desafios.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { FooterComponent } from './components/footer/footer.component';
import { PremioComponent } from './premio/premio.component';
import { CepComponent } from './components/cep/cep.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, DesafiosComponent, CronogramaComponent, PremioComponent, FooterComponent, CepComponent, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'holambra-telescope';


constructor(private CepsServise: CepServiceService){}

consultaCep(valor, form){
  this.CepsServise
}

}