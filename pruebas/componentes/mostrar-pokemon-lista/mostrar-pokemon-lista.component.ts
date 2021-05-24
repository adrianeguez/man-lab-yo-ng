import {Component, Input, OnInit} from '@angular/core';
import {PokemonInterface} from '../../interfaces/pokemon.interface';
import {ModalController} from '@ionic/angular';
import {PerfilEntrenadorComponent} from '../perfil-pokemon/perfil-pokemon.component';
import {RutaPokemonComponent} from '../../ruta/ruta-pokemon/ruta-pokemon.component';

@Component({
  selector: 'app-mostrar-pokemon-lista',
  templateUrl: './mostrar-pokemon-lista.component.html',
  styleUrls: ['./mostrar-pokemon-lista.component.scss'],
})
export class MostrarPokemonListaComponent implements OnInit {

  @Input()
  registro?: PokemonInterface;


  @Input()
  componente: RutaPokemonComponent | any = {};

  abierto = false;

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }

  async abrirPerfil() {
    const modal = await this.modalController.create({
      component: PerfilPokemonComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        componenteModal: this
      }
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
  }

  crearEditar(registro){
    this.componente.crearEditar(registro);
  }

}
