import {Injectable} from '@angular/core';
import {<%= nombreMayuscula %>Module} from './<%= nombreGuiones %>.module';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
import {<%= nombreMayuscula %>BusquedaDto} from '../../dto/<%= nombreGuiones %>-busqueda.dto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: <%= nombreMayuscula %>Module
})
export class <%= nombreMayuscula %>Service
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
}
