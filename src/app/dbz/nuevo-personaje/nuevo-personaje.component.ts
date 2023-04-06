import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.component.html',
  styleUrls: ['./nuevo-personaje.component.css']
})
export class NuevoPersonajeComponent {
  
  nuevo:Personaje={nombre:'',poder:0}
 
  constructor(private dbzService:DbzService){ 
  }

  agregar(){
    if(this.nuevo.nombre.trim().length===0)
      return;
    this.dbzService.agregar(this.nuevo);
    this.nuevo={nombre:'',poder:0};
  }
}
