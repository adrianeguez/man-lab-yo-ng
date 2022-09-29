import type {<%= nombreMayuscula %>FindDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-find.dto";
import {AbstractHttp, ErrorHttp} from "~/classes/abstract.http";
import {<%= nombreMayuscula %>CreateDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-create.dto";
import {<%= nombreMayuscula %>Class} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.class";
import {<%= nombreMayuscula %>InstanceHttp} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>-instance.http";
import {<%= nombreMayuscula %>UpdateDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-update.dto";
import {<%= nombreMayuscula %>RespuestaBusquedaDto} from "~/generated/api-solo-back";

export class <%= nombreMayuscula %>Http extends AbstractHttp<<%= nombreMayuscula %>FindDto, <%= nombreMayuscula %>CreateDto, <%= nombreMayuscula %>RespuestaBusquedaDto, <%= nombreMayuscula %>UpdateDto, <%= nombreMayuscula %>Class>{
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
            const respuestaFind = await <%= nombreMayuscula %>InstanceHttp.find({
                    busqueda: texto
                });
            const error = respuestaFind as ErrorHttp;
            if (error.statusCode) {
                toast.error('Error consultando datos');
            } else {
                registros = respuestaFind as [<%= nombreMayuscula %>Class[], number];
                toast(`${registros[0].length} registros consultados`, {
                    icon: '📑'
                });
            }
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