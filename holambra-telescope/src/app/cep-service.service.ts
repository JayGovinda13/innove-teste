
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpCliente: HttpClient) { }
}

export function buscar(cep: any, String: StringConstructor) {
  throw new Error('Function not implemented.');
}
