import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) { }

  termino: string = ''
  hayError: boolean = false
  paises: Country[]=[]
  paisesSugeridos: Country[]=[]
  mostrarSugerencia: boolean = false

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe( (resp)=> {
      this.paises = resp
      console.log(resp)
    }, (err) => {
      this.hayError = true;
      this.paises = []
    });
    console.log(this.termino)
  }

suguerencias(termino: string){
  this.termino = termino;
  this.hayError = false;
  this.mostrarSugerencia = true;
  this.paisService.buscarPais(termino)
  .subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
  (err) => this.paisesSugeridos = [])
}

buscarSugerido(termino: string){
  this.buscar(termino);
  this.mostrarSugerencia = false
}

}
