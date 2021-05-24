import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaPokemonComponent} from './ruta/ruta-pokemon/ruta-pokemon.component';

const routes: Routes = [
    {
        path: '',
        component: RutaPokemonComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PokemonPageRoutingModule {}
