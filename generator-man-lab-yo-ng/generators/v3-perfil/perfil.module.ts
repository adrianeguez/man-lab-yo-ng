import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {<%= nombreMayuscula %>PerfilComponent} from './<%= nombreGuiones %>-perfil.component';


@NgModule({
    declarations: [
        <%= nombreMayuscula %>PerfilComponent
    ],
    imports: [
        CommonModule
    ]
})
export class <%= nombreMayuscula %>PerfilModule {
}
