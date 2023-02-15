import {Component, Input, OnInit} from '@angular/core';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
import {ModalController} from '@ionic/angular';
import {Perfil<%= nombreMayuscula %>Component} from '../perfil-<%= nombreGuiones %>/perfil-<%= nombreGuiones %>.component';
import {Ruta<%= nombreMayuscula %>Component} from '../../ruta/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component';

@Component({
  selector: 'app-mostrar-<%= nombreGuiones %>-lista',
  templateUrl: './mostrar-<%= nombreGuiones %>-lista.component.html',
  styleUrls: ['./mostrar-<%= nombreGuiones %>-lista.component.scss'],
})
export class Mostrar<%= nombreMayuscula %>ListaComponent implements OnInit {

  @Input()
  registro?: <%= nombreMayuscula %>Interface;


  @Input()
  componente: Ruta<%= nombreMayuscula %>Component | any = {};

  abierto = false;

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }

  async abrirPerfil() {
    const modal = await this.modalController.create({
      component: Perfil<%= nombreMayuscula %>Component,
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
