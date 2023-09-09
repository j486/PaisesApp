import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  constructor(private paisService: PaisService) { }

  termino: string = ''
  hayError: boolean = false
  paises: Country[]=[]

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe( (resp)=> {
      this.paises = resp
      console.log(resp)
    }, (err) => {
      this.hayError = true;
      this.paises = []
    });
    console.log(this.termino)
  }

suguerencias($event: string){
  this.hayError = false;
  // TDOO crear suguerencias
}

}
