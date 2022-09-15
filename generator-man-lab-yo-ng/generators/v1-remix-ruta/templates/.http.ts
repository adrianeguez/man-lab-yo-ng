import type {<%= nombreMayuscula %>FindDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-find.dto";
import {AbstractHttp} from "~/classes/abstract.http";
import {<%= nombreMayuscula %>CreateDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-create.dto";
import {<%= nombreMayuscula %>Interface} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.interface";
import {<%= nombreMayuscula %>InstanceHttp} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>-instance.http";

export class <%= nombreMayuscula %>Http extends AbstractHttp<<%= nombreMayuscula %>FindDto, <%= nombreMayuscula %>CreateDto, <%= nombreMayuscula %>Interface>{
    constructor(url:string) {
        super(
            url
        );
    }

    async buscar<%= nombreMayuscula %>(texto: string, setLoading:any, toast:any) {
        try {
            let registros: [<%= nombreMayuscula %>Interface[], number] = [[], 0];
            setLoading(true);
            registros = await <%= nombreMayuscula %>InstanceHttp.find({
                busqueda: texto
            });
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