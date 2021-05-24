import {Injectable} from '@angular/core';
import {PokemonModule} from './pokemon.module';
import {PokemonInterface} from '../../interfaces/pokemon.interface';

import {PokemonBusquedaDto} from '../../dto/pokemon-busqueda.dto';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: PokemonModule
})
export class PokemonService

  extends ServicioComunMlabs<PokemonInterface, PokemonBusquedaDto> {
  constructor(
      private readonly _httpClient: HttpClient,
      private readonly _notificacionService: NotificacionService,
      private readonly _confirmationService: ConfirmationService,
      public readonly translocoService: TranslocoService
  ) {
    super(
        'pokemon',
        _httpClient,
        PokemonBusquedaDto,
        'sisHabilitado',
        'id',
        environment.url,
        _notificacionService,
        _confirmationService,
        
    );
  }


}
