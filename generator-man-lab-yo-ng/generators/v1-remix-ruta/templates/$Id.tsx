import type {ActionFunction} from "@remix-run/node";
import {LoaderFunction, redirect} from "@remix-run/node";
import {
    <%= nombreMayuscula %>CrearEditarLoader,
    <%= nombreMayuscula %>CrearEditarLoaderData
} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>-crear-editar.loader";
import {<%= nombreMayuscula %>CrearEditarAction} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>-crear-editar.action";
import PopUpContenedor from "~/components/util/PopUpContenedor";
import {BlockTitle, Button, List} from "konsta/react";
import {Form, useLoaderData, useNavigate} from "@remix-run/react";
import {<%= nombreMayuscula %>Class} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.class";
import {useContext, useEffect, useState} from "react";
import {motion} from "framer-motion";
import {convertirQueryParams} from "~/functions/http/convertir-query-params";
import {SubmitHandler, useForm} from "react-hook-form";
import {CampoFormularioInterface} from "~/components/form/lib/interfaces/campo-formulario.interface";
import {<%= nombreMayuscula %>Form} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>.form";
import {GenerateDefaultValues} from "~/functions/form/generate-default-values";
import CamposFormulario from "~/components/form/lib/CamposFormulario";
import {KonstaContainerContext} from "~/root";
import toast from "react-hot-toast";
import {<%= nombreMayuscula %>Enum} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>.enum";
import {FormularioComunEnum} from "~/enum/formulario-comun.enum";
import {<%= nombreMayuscula %>AccordionForm} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>-accordion.form";

// Loader
export const loader: LoaderFunction = <%= nombreMayuscula %>CrearEditarLoader;
// Action
export const action: ActionFunction = <%= nombreMayuscula %>CrearEditarAction

export default function <%= nombreCamel %>Id() {
    // Hooks
    const navigate = useNavigate();
    const path = '/<%= nombreGuiones %>';
    const data: <%= nombreMayuscula %>CrearEditarLoaderData = useLoaderData();
    let estaEditando: <%= nombreMayuscula %>Class | undefined;
    if (data.registro) {
        estaEditando = data.registro;
    }
    const camposFormulario: CampoFormularioInterface[] = [...<%= nombreMayuscula %>Form()]
        .map(
            (campo) => {
                if (estaEditando) {
                    // if (campo.formControlName === <%= nombreMayuscula %>Enum.Nombre) {
                    //     campo.initialValue = estaEditando.nombre
                    // }
                    // if (campo.formControlName === FormularioComunEnum.SisHabilitado) {
                    //     campo.initialValue = estaEditando.sisHabilitado
                    // }
                    // if (campo.formControlName === <%= nombreMayuscula %>Enum.CampoRelacion) {
                    //     if (typeof estaEditando.campoRelacion === 'object') {
                    //         campo.initialValue = estaEditando.campoRelacion.id;
                    //
                    //     }
                    //     if (typeof estaEditando.campoRelacion === 'number') {
                    //         campo.initialValue = estaEditando.campoRelacion;
                    //     }
                    // }
                }
                return campo;
            }
        );
    const {
        // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
        // campoFormularioAutocompleteGlobal,
        // setActionAutocompleteAbierto,
        // seleccionoListaAutocomplete,
        // textoAutocompleteBusqueda,
        // setListaAutocomplete,
        // setGenerarComponente,
        // useFormReturnAutocompleteActual,
        // setCampoFormularioAutocompleteGlobal,

        setLoading,
    } = useContext(KonstaContainerContext);
    // const tieneCampoFormulario = Object.keys(campoFormularioAutocompleteGlobal ? campoFormularioAutocompleteGlobal : {}).length > 0;

    // Inicializar variables
    const [popupOpened, setPopupOpened] = useState(false);
    const [camposFormularioCrearEditar, setCamposFormularioCrearEditar] = useState(
        [...camposFormulario] as CampoFormularioInterface[]
    );
    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
    // const [camposFiltrosBusqueda, setCamposFiltrosBusqueda] = useState([
           // // Aqui filtramos todos los campos autocomplete descritos en el formulario
    //     <%= nombreMayuscula %>FiltroForm().find((a) => a.formControlName === <%= nombreMayuscula %>Enum.CampoRelacion)
    // ]);
    // const autocompleteUtil = UtilAutocomplete(
    //     setActionAutocompleteAbierto,
    //     setCamposFiltrosBusqueda,
    //     camposFiltrosBusqueda,
    //     seleccionoListaAutocomplete,
    //     useFormReturnAutocompleteActual
    // );

    const useFormReturn = useForm<any>({
        defaultValues: {
            ...GenerateDefaultValues(camposFormularioCrearEditar),
        },
        mode: 'all',
    });
    const {formState: {isValid}} = useFormReturn;

    // Custom Hooks
    // Custom Hooks - Campo Formulario
    const [eventoAutocomplete, setEventoAutocomplete, CamposFormularioComponente] = CamposFormulario({
        useFormReturn,
        campos: camposFormularioCrearEditar,
        accordeonCampos: <%= nombreMayuscula %>AccordionForm()
    });

    // Use Effects
    // Use Effect - Componente inicializado
    useEffect(
        () => {
            setTimeout(
                () => {
                    setPopupOpened(true);
                    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
                    // actualizarVisualizarComponenteAutocomplete();
                },
                1
            );
        },
        []
    )

    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
    // useEffect(
    //     () => {
    //         setCampoFormularioAutocompleteGlobal(eventoAutocomplete as CampoFormularioInterface);
    //     },
    //     [eventoAutocomplete]
    // )

    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
    // useEffect(
    //     () => {
    //         buscarAutocomplete().then().catch();
    //     },
    //     [textoAutocompleteBusqueda]
    // )


    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
    // useEffect(
    //     () => {
    //         if (tieneCampoFormulario) {
    //             setActionAutocompleteAbierto(true);
    //             buscarAutocomplete().then().catch();
    //         } else {
    //             setActionAutocompleteAbierto(false);
    //         }
    //     },
    //     [campoFormularioAutocompleteGlobal]
    // )

    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
    // useEffect(
    //     () => {
    //         if (seleccionoListaAutocomplete.registro) {
    //             actualizarValorCampoAutocompleteGlobal();
    //             // Por cada campo relacion se tiene que mandar el trigger
    //             useFormReturn.trigger(<%= nombreMayuscula %>Enum.CampoRelacion as any).then()
    //         }
    //     },
    //     [seleccionoListaAutocomplete]
    // )

    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
    // // Autocomplete
    // const actualizarValorCampoAutocompleteGlobal = autocompleteUtil.actualizarValorCampoAutocompleteGlobal;

    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
    // const actualizarVisualizarComponenteAutocomplete = () => {
    //     setGenerarComponente({
    //         ...generarComponenteAutocompletePorFormControlName
    //     });
    // };

    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
    const generarComponenteAutocompletePorFormControlName = {
        // PARA AUTOCOMPLETE DESCOMENTAR ESTO Y COLOCAR EL nombreCampoRelacion y el NombreCampoRelacionMostrar
        // nombreCampoRelacion: (registro: NombreCampoRelacionClass, campoFormulario: CampoFormularioInterface) => {
        //     return (<><NombreCampoRelacionMostrar registro={registro}/></>)
        // },
    };

    const buscarAutocomplete = async () => {
        switch (campoFormularioAutocompleteGlobal.formControlName) {
            // PARA AUTOCOMPLETE DESCOMENTAR ESTO Y COLOCAR EL nombreCampoRelacion y el NombreCampoRelacion
            // case 'nombreCampoRelacion':
            //     buscarAutocompleteCampoNombreCampoRelacion();
            //     break;
            default:
                break;
        }
    };

    // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
    // // Metodos REST
    // const buscarAutocompleteCampoNombreCampoRelacion = async () => {
        // PARA AUTOCOMPLETE DESCOMENTAR ESTO Y COLOCAR EL nombreCampoRelacion y el NombreCampoRelacion
        // const respuesta = await NombreCampoRelacionInstanceHttp.buscarNombreCampoRelacion(
        //     textoAutocompleteBusqueda,
        //     setLoading,
        //     toast
        // );
        // setListaAutocomplete(respuesta[0]);
    // }

    // Metodos Page
    const salir = () => {
        setPopupOpened(false);
        setTimeout(
            () => {
                navigate({pathname: `/<%= nombreGuiones %>?${convertirQueryParams(data.findDto)}`})
            },
            500
        );
    }
    // Metodos Formulario
    const onSubmit: SubmitHandler<any> = async (dataForm: <%= nombreMayuscula %>CreateDto | <%= nombreMayuscula %>UpdateDto) => {
        const formData = new FormData(document.getElementById('form') as any);
        // DESCOMENTAR SI NECESITAN AUTOCOMPLETE:
        // // Si usamos campos autocompletes debemos de settear manualmente el formulario cada campo autocomplete
        // if(typeof dataForm[<%= nombreMayuscula %>Enum.CampoRelacion] === 'object'){
        //     // se puede settear cualquier otro campo que se desee que no este en el formulario
        //     formData.set(<%= nombreMayuscula %>Enum.CampoRelacion, dataForm[<%= nombreMayuscula %>Enum.CampoRelacion].id);
        // }
        // if(typeof dataForm[<%= nombreMayuscula %>Enum.CampoRelacion] === 'number'){
        //     formData.set(<%= nombreMayuscula %>Enum.CampoRelacion, dataForm[<%= nombreMayuscula %>Enum.CampoRelacion]);
        // }
        setLoading(true);
        try {
            if (estaEditando && data.registro) {
                formData.set('id', data.registro.id + '')
            }
            const respuesta = await fetch(`/<%= nombreGuiones %>/new?${convertirQueryParams(data.findDto)}`, {
                method: 'POST',
                body: formData
            })
            if (respuesta.redirected) {
                window.location.replace(respuesta.url);
                setLoading(false);
            } else {
                if (respuesta.status === 400) {
                    setLoading(false);
                    toast('Parametros para peticion incorrectos', {icon: '⛔'});
                    console.error({error: respuesta, mensaje: 'Error creando nuevo registro'});
                } else {
                    setLoading(false);
                    toast.error('Error del servidor');
                    console.error({error: respuesta, mensaje: 'Error creando nuevo registro'});
                }
            }
        } catch (error) {
            setLoading(false);
            toast.error('Error del servidor');
            console.error({error, mensaje: 'Error creando nuevo registro'});
        }
    };

    return (
        <>
            <motion.div
                variants={{
                    animate: {opacity: 1},
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{duration: 1}}
            >
                <PopUpContenedor popupOpened={popupOpened} estaEditando={estaEditando} eventoSalir={salir}>

                    <Form id="form" action="/<%= nombreGuiones %>/new" method="post"
                          onSubmit={useFormReturn.handleSubmit(onSubmit)} noValidate>
                        <BlockTitle>Ingrese un nuevo <%= nombreEspacioMayuscula %></BlockTitle>
                        <br/>
                        <div className="space-y-4 popup-modal m-4">
                            <List hairlines={true}>
                                {CamposFormularioComponente}
                            </List>

                        </div>
                        <Button className={'mb-4'} disabled={!isValid} large typeof={'submit'}>
                            {estaEditando ? 'Editar' : 'Crear'}
                        </Button>
                    </Form>
                </PopUpContenedor>
            </motion.div>
        </>
    )
}