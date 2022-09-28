import type {<%= nombreMayuscula %>FindDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-find.dto";
import {AbstractHttp} from "~/classes/abstract.http";
import {<%= nombreMayuscula %>CreateDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-create.dto";
import {<%= nombreMayuscula %>Class} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.class";
import {<%= nombreMayuscula %>InstanceHttp} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>-instance.http";

export class <%= nombreMayuscula %>Http extends AbstractHttp<<%= nombreMayuscula %>FindDto, <%= nombreMayuscula %>CreateDto, <%= nombreMayuscula %>BusquedaDto, <%= nombreMayuscula %>UpdateDto, <%= nombreMayuscula %>Class>{
    constructor(url:string) {
        super(
            url,
            <%= nombreMayuscula %>Class
        );
    }

    async buscar<%= nombreMayuscula %>(texto: string, setLoading:any, toast:any): Promise<[<%= nombreMayuscula %>Class[], number] > {
        try {
            let registros: [<%= nombreMayuscula %>Class[], number] = [[], 0];
            setLoading(true);
            registros = await <%= nombreMayuscula %>InstanceHttp.find({
                busqueda: texto
            });
            registros = respuesta as any;
            registros[0] = registros[0].map((a) => new AutorLibroClass(a))
            toast(`${registros[0].length} registros consultados`, {
                icon: '📑'
            });
            setLoading(false);
            return registros;
        } catch (error) {
            console.error({
                error,
                mensaje: 'Error consultado registros'
            });
            toast.error('Error del servidor');
            setLoading(false);
            return [[],0];
        }
    }
}