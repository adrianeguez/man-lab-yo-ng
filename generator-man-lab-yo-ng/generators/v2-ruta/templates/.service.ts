import {Injectable} from '@angular/core';
import {<%= nombreMayuscula %>Module} from './<%= nombreGuiones %>.module';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
<% if(!esFirebase){ %>
import {<%= nombreMayuscula %>BusquedaDto} from '../../dto/<%= nombreGuiones %>-busqueda.dto';
import {HttpClient} from '@angular/common/http';
<% } %>
<% if(esFirebase){ %>
import {FirestoreServicioAbstractClass} from '@manticore-labs/firebase-angular';
import {AngularFirestore} from '@angular/fire/firestore';
<% } %>
@Injectable({
  providedIn: <%= nombreMayuscula %>Module
})
export class <%= nombreMayuscula %>Service
<% if(!esFirebase){ %>
  extends ServicioComunMlabs<<%= nombreMayuscula %>Interface, <%= nombreMayuscula %>BusquedaDto> {
  constructor(
      private readonly _httpClient: HttpClient,
      private readonly _notificacionService: NotificacionService,
      private readonly _confirmationService: ConfirmationService,
  ) {
    super(
        '<%= nombreGuiones %>',
        _httpClient,
        <%= nombreMayuscula %>BusquedaDto,
        '<%= nombreHabilitado %>',
        '<%= id %>',
        _notificacionService,
        _confirmationService,

    );
  }
<% } %>
<% if(esFirebase){ %>
  extends FirestoreServicioAbstractClass<<%= nombreMayuscula %>Interface> {
  constructor(
      private readonly servicioFirebase: AngularFirestore,
      private readonly firebaseUtilService: FirebaseUtilService,
  ) {
    super(
        '<%= nombreGuiones %>',
        servicioFirebase,
        firebaseUtilService,
        TAKE,
        [
            // {
            //   collectionName: 'entrenador' // Escribir los nombres de las colecciones superiores
            // }
        ],
        '<%= nombreHabilitado %>',
        [
            // 'nombre',
            // 'codigo',
        ], // llenar con los campos de busqueda pertinentes
    );
  }
<% } %>
}
