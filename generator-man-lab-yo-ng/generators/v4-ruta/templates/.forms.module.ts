import {NgModule} from "@angular/core";
import {<%= nombreMayuscula %>CreateDtoComponent} from "./create-dto/<%= nombreGuiones %>.create.dto.component";
import {<%= nombreMayuscula %>FindDtoComponent} from "./find-dto/<%= nombreGuiones %>.find.dto.component";
import {SharedImportsForm} from "../../../../../constantes/ng/shared-imports-form";
import {<%= nombreMayuscula %>UpdateDtoComponent} from "./update-dto/<%= nombreGuiones %>.update.dto.component";

@NgModule({
    declarations: [
        <%= nombreMayuscula %>FindDtoComponent,
        <%= nombreMayuscula %>CreateDtoComponent,
        <%= nombreMayuscula %>UpdateDtoComponent,
    ],
    exports: [
        <%= nombreMayuscula %>FindDtoComponent,
        <%= nombreMayuscula %>CreateDtoComponent,
        <%= nombreMayuscula %>UpdateDtoComponent,
    ],
    imports: [
        ...SharedImportsForm
    ]
})
export class <%= nombreMayuscula %>FormsModule {
}
