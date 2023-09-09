import { Component, Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {

  constructor() { }
  @Input() paises: Country[] = []

}
