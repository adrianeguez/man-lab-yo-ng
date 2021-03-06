import {Expose} from 'class-transformer';

export class <%= nombreMayuscula %>BusquedaDto extends BusquedaComunDto {
    @Expose()
    <%= id %>?: number;
}
