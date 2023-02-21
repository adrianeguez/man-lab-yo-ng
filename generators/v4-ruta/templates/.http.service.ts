import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {<%= nombreMayuscula %>Dto} from "../dto/<%= nombreGuiones %>.dto";
import {<%= nombreMayuscula %>FindDto} from "../dto/<%= nombreGuiones %>.find.dto";
import {<%= nombreMayuscula %>CreateDto} from "../dto/<%= nombreGuiones %>.create.dto";
import {<%= nombreMayuscula %>UpdateDto} from "../dto/<%= nombreGuiones %>.update.dto";

@Injectable()
export class <%= nombreMayuscula %>HttpService extends HttpAbstract<<%= nombreMayuscula %>Dto, <%= nombreMayuscula %>FindDto, ModificarHabilitadoDto, <%= nombreMayuscula %>CreateDto, <%= nombreMayuscula %>UpdateDto> {
    constructor(private readonly _httpClient: HttpClient) {
        super(
            _httpClient,
            CONFIG_ANGULAR.urlManticoreBackendModulo<%= nombreMayusculaModulo %>
        );
        this.identificadorRuta = '<%= nombreGuiones %>';
        this.urlSegmento = '/' + this.identificadorRuta;
    }
}
