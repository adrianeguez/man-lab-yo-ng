import {Injectable} from '@angular/core';
import {ServicioLogisticoModule} from './servicio-logistico.module';
import {ServicioLogisticoInterface} from '../../interfaces/servicio-logistico.interface';
import {ServicioLogisticoBusquedaDto} from '../../dto/servicio-logistico-busqueda.dto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: ServicioLogisticoModule
})
export class ServicioLogisticoService
  extends ServicioComun<ServicioLogisticoInterface, ServicioLogisticoBusquedaDto> {

  constructor(
    private readonly _httpClient: HttpClient,
  ) {
    super(
      'servicio-logistico',
      _httpClient,
        ServicioLogisticoBusquedaDto,
      'habilitado',
      'id'
    );
  }
}
