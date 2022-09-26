import {ActionFunction, redirect} from "@remix-run/node";
import {LoaderSetQueryparams} from "~/functions/http/loader-set-queryparams";
import {<%= nombreMayuscula %>InstanceHttp} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>-instance.http";
import {<%= nombreMayuscula %>CreateDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-create.dto";
import {convertirQueryParams} from "~/functions/http/convertir-query-params";
import {eliminarUndNullVacio} from "~/functions/util/eliminar-und-null-vacio";
import {<%= nombreMayuscula %>Enum} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>.enum";
import {<%= nombreMayuscula %>UpdateDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-update.dto";
import {FormularioComunEnum} from "~/enum/formulario-comun.enum";
import {SisHabilitadoCrearEnum} from "~/enum/sis-habilitado-crear.enum";

export const <%= nombreMayuscula %>CrearEditarAction: ActionFunction = async (dataFunctionArgs) => {
    // Cargar Queryparams
    const requestUrl = dataFunctionArgs.request.url;
    const findDto = LoaderSetQueryparams(requestUrl);

    // Generar Body
    const body = await dataFunctionArgs.request.formData();
    try {
        let respuesta: any;
        const id = body.get('id');
        if (id) {
            const permisosCrear = [
                Permission.<%= nombreMayuscula%>Editar
            ];
            const tienePermisos = await verificarSessionPermisos(dataFunctionArgs.request, permisosCrear);
            if(!tienePermisos){
                return redirect(CONFIG.LOGOUT_URL)
            }
            const updateDto: <%= nombreMayuscula %>UpdateDto = {
                // nombre: body.get(<%= nombreMayuscula %>Enum.Nombre) as string,
            };
            respuesta = await <%= nombreMayuscula %>InstanceHttp.updateById(updateDto, +id);
        } else {
            const permisosEditar = [
                Permission.<%= nombreMayuscula%>Editar
            ];
            const tienePermisos = await verificarSessionPermisos(dataFunctionArgs.request, permisosEditar);
            if(!tienePermisos){
                return redirect(CONFIG.LOGOUT_URL)
            }
            const createDto: <%= nombreMayuscula %>CreateDto = {
                sisHabilitado: body.get(FormularioComunEnum.SisHabilitado) as unknown as SisHabilitadoCrearEnum,
                // nombre: body.get(<%= nombreMayuscula %>Enum.Nombre) as string,
            };
            respuesta = await <%= nombreMayuscula %>InstanceHttp.create(createDto);
        }
        if (respuesta.statusCode) {
            if (respuesta.statusCode === 400) {
                console.error({error: respuesta.message, mensaje: 'Error creando registro'});
                return new Response(null as any, {status: 400}) as any;
            } else {
                console.error({mensaje: 'Error creando registro'});
                return new Response(null as any, {status: 500}) as any;
            }
        }
        // fetch POST <%= nombreGuiones %> NESTJS
        return redirect(`/<%= nombreGuiones %>?${convertirQueryParams(eliminarUndNullVacio(findDto))}&mensaje=Registro creado`) as any;
    } catch (error) {
        console.error({error, mensaje: 'Error gestionando registro'});
        return new Response(null as any, {status: 500}) as any;
    }
};