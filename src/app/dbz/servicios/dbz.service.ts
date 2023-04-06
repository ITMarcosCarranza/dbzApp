import { Injectable } from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }
 
  private _personajes:Personaje[]=[
    {nombre:"Kokun",poder:1500},
    {nombre:"Vegeta",poder:7500}
  ];

  get personajes(){
    return [...this._personajes];
  }
  agregar(personaje:Personaje){
    this._personajes.push(personaje);
  }
}
