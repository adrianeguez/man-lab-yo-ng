import {NgModule} from '@angular/core';
import {<%= nombreSoloMayusculas %>_IMPORTS} from './constantes/<%= nombreGuiones %>-imports';
import {<%= nombreSoloMayusculas %>_PROVIDERS} from './constantes/<%= nombreGuiones %>-providers';
import {<%= nombreSoloMayusculas %>_DECLARATIONS} from './constantes/<%= nombreGuiones %>-declarations';

@NgModule({
  declarations: [
    ...<%= nombreSoloMayusculas %>_DECLARATIONS,
  ],
  imports: [
    ...<%= nombreSoloMayusculas %>_IMPORTS,
  ],
  providers: [
    ...<%= nombreSoloMayusculas %>_PROVIDERS,
  ]
})
export class <%= nombreMayuscula %>Module {
}
