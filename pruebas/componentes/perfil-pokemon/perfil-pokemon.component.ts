import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MostrarPokemonListaComponent} from '../mostrar-pokemon-lista/mostrar-pokemon-lista.component';
import {PokemonInterface} from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-perfil-pokemon',
  templateUrl: './perfil-pokemon.component.html',
  styleUrls: ['./perfil-pokemon.component.scss'],
})
export class PerfilPokemonComponent implements OnInit {

  @Input()
  componenteModal?: MostrarPokemonListaComponent;

  constructor(public modalController: ModalController,) {
  }

  ngOnInit() {
  }

  cerrar(registro: PokemonInterface){
    this.modalController.dismiss({
      registro
    });
  }

}
