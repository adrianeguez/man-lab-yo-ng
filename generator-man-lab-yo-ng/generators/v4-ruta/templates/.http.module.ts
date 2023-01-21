import {NgModule} from '@angular/core';
import {<%= nombreMayuscula %>HttpService} from './<%= nombreGuiones %>.http.service';

@NgModule({
  providers: [<%= nombreMayuscula %>HttpService],
})
export class <%= nombreMayuscula %>HttpModule {
}
