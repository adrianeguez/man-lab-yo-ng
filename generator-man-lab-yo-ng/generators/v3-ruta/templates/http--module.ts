import {NgModule} from '@angular/core';
import {Http<%= nombreMayuscula %>Service} from './http-<%= nombreGuiones %>-service';

@NgModule({
  providers: [Http<%= nombreMayuscula %>Service],
})
export class Http<%= nombreMayuscula %>Module {
}
