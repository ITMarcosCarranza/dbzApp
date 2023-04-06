import { Component, Input } from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
get personajes(){
  return this.dbzService.personajes;
}

  constructor(private dbzService:DbzService){
  }

}
