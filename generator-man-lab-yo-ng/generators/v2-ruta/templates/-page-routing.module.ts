import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Ruta<%= nombreMayuscula %>Component} from './ruta/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component';

const routes: Routes = [
    {
        path: '',
        component: Ruta<%= nombreMayuscula %>Component
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class <%= nombreMayuscula %>PageRoutingModule {}
