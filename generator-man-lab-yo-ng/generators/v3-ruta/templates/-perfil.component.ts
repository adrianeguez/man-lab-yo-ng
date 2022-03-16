import {Component, Input} from '@angular/core';
import {<%= nombreMayuscula %>ResponseDto} from '../../servicios/dto/<%= nombreGuiones %>.response-dto';
import {<%= nombreSoloMayusculas %>_TABS_ARRAY} from './constantes/<%= nombreGuiones %>-tabs-array';

@Component({
  selector: 'app-<%= nombreGuiones %>-perfil',
  templateUrl: './<%= nombreGuiones %>-perfil.component.html',
  styleUrls: ['./<%= nombreGuiones %>-perfil.component.scss']
})
export class <%= nombreMayuscula %>PerfilComponent {
  @Input()
  registro: <%= nombreMayuscula %>ResponseDto = {};
  @Input()
  tabsArray: TabsArrays[] = <%= nombreSoloMayusculas %>_TABS_ARRAY();

  constructor() {
  }

}
