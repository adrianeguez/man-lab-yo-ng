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
<% if(internacionalizar){ %>
import {TranslocoService} from '@ngneat/transloco';
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
      public readonly translocoService: TranslocoService
  ) {
    super(
        '<%= nombreGuiones %>',
        _httpClient,
        <%= nombreMayuscula %>BusquedaDto,
        '<%= nombreHabilitado %>',
        '<%= id %>',
        environment.url,
        _notificacionService,
        _confirmationService,
        <% if(internacionalizar){ %>

      {
        crear: (clase: <%= nombreMayuscula %>Service) => {
          const texto = this.translocoService.translate('generales.modalConfirmacion.mensajeCrear');
          return texto;
        },
            actualizar: (clase: <%= nombreMayuscula %>Service) => {
        const texto = this.translocoService.translate('generales.modalConfirmacion.mensajeActualizar');
        return texto;
      },
          mensajeCancelacion: (clase: <%= nombreMayuscula %>Service) => {
        return {
          titulo: this.translocoService.translate('generales.modalConfirmacion.mensajeCancelarTitulo'),
          detalle: this.translocoService.translate('generales.modalConfirmacion.mensajeCancelarDescripcion')
        };
      },
          habilitar: (clase: <%= nombreMayuscula %>Service) => {
        const texto = this.translocoService.translate('generales.modalConfirmacion.mensajeHabilitar');
        return texto;
      },
          aceptar: (clase: <%= nombreMayuscula %>Service) => {
        const texto = this.translocoService.translate('generales.modalConfirmacion.aceptar');
        return texto;
      },
          cancelar: (clase: <%= nombreMayuscula %>Service) => {
        const texto = this.translocoService.translate('generales.modalConfirmacion.cancelar');
        return texto;
      },
      }
        <% } %>
    );

    <% if(ionic){ %>
      this.confirmarCrear = false;
      this.confirmarActualizar = false;
      this.confirmarHabilitar = false;
    <% } %>
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
