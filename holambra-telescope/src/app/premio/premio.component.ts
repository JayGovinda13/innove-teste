import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CepComponent } from '../components/cep/cep.component';

@Component({
  selector: 'app-premio',
  standalone: true,
  imports: [CepComponent, ],
  templateUrl: './premio.component.html',
  styleUrl: './premio.component.scss',
})
export class PremioComponent {}