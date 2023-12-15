import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { PremiacaoComponent } from './premiacao.component';
import { buscar } from '../../cep-service.service';

describe('PremiacaoComponent', () => {
  let component: PremiacaoComponent;
  let fixture: ComponentFixture<PremiacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
    cep: any;
    logradouro: any;
    localidade: any;
    bairro: any;
    uf: any;
    ddd: any;
  service: any;

    constructor() {}

    ngOnInit(): void {}

    buscaCEP() {
        this.service.getCEP(this.cep).subscribe((data: { cep: any; logradouro: any; localidade: any; bairro: any; uf: any; }) => {
            this.cep = data.cep;
            this.logradouro = data.logradouro;
            this.localidade = data.localidade;
            this.bairro = data.bairro;
            this.uf = data.uf;

            console.log(this.bairro);
        });
    }
    blur(event: any) {
        this.buscaCEP();

        console.log(this.buscaCEP);
    }
}
