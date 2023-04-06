import { Component } from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  nuevo:Personaje={
    nombre:'',
    poder:0
  }

  constructor() {    
  }
 
}
