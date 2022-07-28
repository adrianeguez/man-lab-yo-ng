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

    async buscar<%= nombreMayuscula %>(texto: string, setLoading, toast) {
        try {
            let librosBiblioteca: [<%= nombreMayuscula %>Interface[], number] = [[], 0];
            setLoading(true);
            librosBiblioteca = await <%= nombreMayuscula %>InstanceHttp.find({
                busqueda: texto
            });
            toast(`${librosBiblioteca[0].length} registros consultados`, {
                icon: '📑'
            });
            setLoading(false);
            return librosBiblioteca;
        } catch (error) {
            console.error({
                error,
                mensaje: 'Error consultado autocomplete libro biblioteca'
            });
            toast.error('Error del servidor');
            setLoading(false);
            return [[],0];
        }
    }
}