import {NgModule} from '@angular/core';
import {<%= nombreSoloMayusculas %>_ROUTER_MODULE} from "./imports/<%= nombreGuiones %>-router-module";
import {<%= nombreSoloMayusculas %>_DECLARATIONS} from "./imports/<%= nombreGuiones %>-declarations";
import {<%= nombreSoloMayusculas %>_PROVIDERS} from "./imports/<%= nombreGuiones %>-providers";
import {<%= nombreSoloMayusculas %>_IMPORTS} from "./imports/<%= nombreGuiones %>-imports";


@NgModule({
  declarations: [
    ...<%= nombreSoloMayusculas %>_DECLARATIONS,
  ],
  imports: [
    <%= nombreSoloMayusculas %>_ROUTER_MODULE,
    ...<%= nombreSoloMayusculas %>_IMPORTS,
  ],
  providers: [
    ...<%= nombreSoloMayusculas %>_PROVIDERS,
  ]
})
export class <%= nombreMayuscula %>Module {
}
