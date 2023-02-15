import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Mostrar<%= nombreMayuscula %>ListaComponent} from '../mostrar-<%= nombreGuiones %>-lista/mostrar-<%= nombreGuiones %>-lista.component';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';

@Component({
  selector: 'app-perfil-<%= nombreGuiones %>',
  templateUrl: './perfil-<%= nombreGuiones %>.component.html',
  styleUrls: ['./perfil-<%= nombreGuiones %>.component.scss'],
})
export class Perfil<%= nombreMayuscula %>Component implements OnInit {

  @Input()
  componenteModal?: Mostrar<%= nombreMayuscula %>ListaComponent;

  constructor(public modalController: ModalController,) {
  }

  ngOnInit() {
  }

  cerrar(registro: <%= nombreMayuscula %>Interface){
    this.modalController.dismiss({
      registro
    });
  }

  abrirModalSeleccionarGeolocalizacion(){
    this.componenteModal.componente.abrirModalSeleccionarGeolocalizacion();

  }

}
