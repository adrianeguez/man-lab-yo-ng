import KonstaContainer from "~/components/KonstaContainer";
import type {<%= nombreMayuscula %>Class} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.class";
import type {LoaderFunction} from "@remix-run/node";
import {useLoaderData, useNavigate} from "@remix-run/react";
import {useContext, useEffect, useState} from "react";
import {<%= nombreMayuscula %>Mostrar} from "~/components/<%= nombreGuiones %>/<%= nombreMayuscula %>Mostrar";
import {<%= nombreMayuscula %>InstanceHttp} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>-instance.http";
import toast from "react-hot-toast";
import {CommonSortFieldsConstant} from "~/constantes/common-sort-fields.constant";
import {SortFieldInterface} from "~/interfaces/sort-field.interface";
import {<%= nombreMayuscula %>FindDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-find.dto";
import {NavigateFunction} from "react-router";
import RutaComun from "~/components/ruta/RutaComun";
import {NavbarSoloTituloInterface} from "~/components/ruta/interfaces/navbar-solo-titulo.interface";
import {motion} from "framer-motion";
import {SkipTakeInterface} from "~/interfaces/skip-take.interface";
import ComponenteError from "~/components/error/ComponenteError";
import {Actions, ActionsButton, ActionsGroup, ActionsLabel} from "konsta/react";
import {<%= nombreMayuscula %>MostrarEnum} from "~/components/<%= nombreGuiones %>/enums/<%= nombreGuiones %>-mostrar.enum";
import {DeshabilitarRegistroHttp} from "~/functions/http/deshabilitar-registro.http";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import SheetContenedor from "~/components/util/SheetContenedor";
import {ExportarDescargarCsvExport} from "~/functions/export-data/exportar-descargar-csv.export";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from 'jspdf'
import autotable from 'jspdf-autotable'
import {<%= nombreMayuscula %>FiltroForm} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>-filtro.form";
import {<%= nombreMayuscula %>MostrarCompleto} from "~/components/<%= nombreGuiones %>/<%= nombreMayuscula %>MostrarCompleto";
import {<%= nombreMayuscula %>FiltroAccordionForm} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>-filtro-accordion.form";
import {CampoFormularioInterface} from "~/components/form/lib/interfaces/campo-formulario.interface";
import {KonstaContainerContext} from "~/root";
import {UtilNavegacion} from "~/functions/ruta/util-navegacion";
import {UtilAutocomplete} from "~/functions/ruta/util-autocomplete";
import {<%= nombreMayuscula %>Loader, <%= nombreMayuscula %>LoaderData} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.loader";
import {<%= nombreMayuscula %>SortFields} from "~/http/<%= nombreGuiones %>/sort/<%= nombreGuiones %>.sort-fields";
import SubirArchivoContenedor from "~/components/subir-archivos/SubirArchivoContenedor";
import {TipoArchivoEnum} from "~/enum/tipo-archivo.enum";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import BackupIcon from '@mui/icons-material/Backup';
import {SisHabilitadoCrearEnum} from "~/enum/sis-habilitado-crear.enum";
import {NuevoArchivoInterface} from "~/classes/interfaces/nuevo-archivo.interface";
import {<%= nombreMayuscula %>Tabla} from "~/components/<%= nombreGuiones %>/<%= nombreMayuscula %>Tabla";
import {Permission} from "~/generated/graphql";
import {verificarSessionFrontend} from "~/functions/auth/verificar-session-frontend";
import {ErrorHttp} from "~/classes/abstract.http";

// Carga de datos en backend
export const loader: LoaderFunction = <%= nombreMayuscula %>Loader;

export default function <%= nombreMayuscula %>() {
    // Hooks Librearias y variables globales
    const loaderData = useLoaderData<<%= nombreMayuscula %>LoaderData>();
    const navigate: NavigateFunction = useNavigate();
    const path = '/<%= nombreGuiones %>';
    const navbar: NavbarSoloTituloInterface = {
        titulo: '<%= nombreEspacioMayuscula %>',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Book.svg/1200px-Book.svg.png',
        textoDescripcion: 'Gestione sus <%= nombreEspacioMayuscula %>',
        colorClaseBanner: '<%= nombreGuiones %>-banner',
        colorTituloClase: 'texto-oscuro',
    };
    const {
        campoFormularioAutocompleteGlobal,
        setActionAutocompleteAbierto,
        seleccionoListaAutocomplete,
        textoAutocompleteBusqueda,
        setListaAutocomplete,
        setLoading,
        setGenerarComponente,
        useFormReturnAutocompleteActual
    } = useContext(KonstaContainerContext);

    // Inicializar variables useState
    const [sortFields] = useState([
        ...CommonSortFieldsConstant,
        ...<%= nombreMayuscula %>SortFields
    ] as SortFieldInterface[]);
    const [abrioOpciones, setAbrioOpciones] = useState(false);
    const [subirImagenAbierto, setSubirImagenAbierto] = useState(false);
    const [subirArchivoAbierto, setSubirArchivoAbierto] = useState(false);
    const [registroSeleccionadoRuta, setRegistroSeleccionadoRuta] = useState({} as <%= nombreMayuscula %>Class);
    const [visualizacionRegistroAbierto, setVisualizacionRegistroAbierto] = useState(false);
    const [camposFiltrosBusqueda, setCamposFiltrosBusqueda] = useState([...<%= nombreMayuscula %>FiltroForm()]);
    const [accordeonCamposFiltro] = useState(<%= nombreMayuscula %>FiltroAccordionForm());
    const tieneCampoFormulario = Object.keys(campoFormularioAutocompleteGlobal ? campoFormularioAutocompleteGlobal : {}).length > 0;
    const navegarUtil = UtilNavegacion(navigate, path, loaderData);
    const autocompleteUtil = UtilAutocomplete(
        setActionAutocompleteAbierto,
        setCamposFiltrosBusqueda,
        camposFiltrosBusqueda,
        seleccionoListaAutocomplete,
        useFormReturnAutocompleteActual
    );
    // Funciones Util

    // Use Effects
    // Use Effect - Componente inicializado
    useEffect(
        () => {
            if (loaderData.error) {
                toast.error('Error del servidor');
            } else {
                if (loaderData.mensaje) {
                    toast.success(loaderData.mensaje);
                } else {
                    toast.success('Cargo datos exitosamente');
                }
            }
            actualizarVisualizarComponenteAutocomplete();
        }, []
    )

    useEffect(
        () => {
            buscarAutocomplete().then().catch();
        },
        [textoAutocompleteBusqueda]
    )
    useEffect(
        () => {
            if (tieneCampoFormulario) {
                setActionAutocompleteAbierto(true);
                buscarAutocomplete().then().catch();
            } else {
                setActionAutocompleteAbierto(false);
            }
        },
        [campoFormularioAutocompleteGlobal]
    )
    useEffect(
        () => {
            if (seleccionoListaAutocomplete.registro) {
                actualizarValorCampoAutocompleteGlobal();
            }
        },
        [seleccionoListaAutocomplete]
    )

    // Funciones UI
    // Funciones UI - Comunes tabla
    const deshabilitarRecurso = async () => {
        const permisos = [
            Permission.<%= nombreMayuscula %>EditarHabilitado
        ];
        if (loaderData.sesion) {
            const tienePermisos = verificarSessionFrontend(loaderData.sesion, permisos);
            if (!tienePermisos) {
                toast.error('No tiene permisos');
            } else {
                const respuestaDeshabilitar = await DeshabilitarRegistroHttp(<%= nombreMayuscula %>InstanceHttp, registroSeleccionadoRuta);
                const error = respuestaDeshabilitar as ErrorHttp;
                if (error.statusCode) {
                    toast.error('Error cargando archivo');
                } else {
                    toast.success('Registro actualizado');
                }
                setAbrioOpciones(false);
                recargarPaginaConNuevosQueryParams();
            }
        }
    };
    const visualizarRegistro = () => {
        setAbrioOpciones(false);
        setVisualizacionRegistroAbierto(true);
    };
    const descargarCSV = () => {
        const registros = loaderData.registros;
        if (registros) {
            const campos = ['id', 'sisHabilitado', 'sisCreado', 'sisModificado'];
            ExportarDescargarCsvExport(campos, registros[0]);
        }
    };
    const descargarPDF = () => {
        const registros = loaderData.registros;
        if (registros) {
            const cabeceras = [
                {header: 'ID', dataKey: 'id'},
                {header: 'Habilitado', dataKey: 'sisHabilitado'},
                {header: 'Creado', dataKey: 'sisCreado'},
                {header: 'Modificado', dataKey: 'sisModificado'},
            ];
            const doc = new jsPDF({
                orientation: "landscape"
            }) as any;
            autotable(doc, ({
                columnStyles: {europe: {halign: 'center'}}, // European countries centered
                body: registros[0],
                columns: cabeceras,
            } as any));
            doc.save('table.pdf');
        }
    };
    // Funciones UI - Eventos
    const eventoBuscar = (data: <%= nombreMayuscula %>FindDto) => {
        // PARA FILTROS CON CAMPOS RELACIONADOS USAR LAS SIGUIENTES LINEAS
        // POR CADA CAMPO RELACIONADO:

        // if(data.campoRelacion && typeof data.campoRelacion === 'object'){
        //     const campoRelacion = data.campoRelacion as CampoRelacionInterface;
        //     data.campoRelacion = campoRelacion.id.toString();
        // }
        // if(!data.campoRelacion && loaderData.findDto.campoRelacion){
        //     data.campoRelacion = loaderData.findDto.campoRelacion;
        // }
        recargarPaginaConNuevosQueryParams({
            findDto: {
                ...loaderData.findDto,
                skip: '0',
                ...data  // tiene que ir al final
            }
        });
    };
    const eventoLimpiarBusqueda = ()=>{
        recargarPaginaSinQueryParams();
    }
    const eventoClicBotonOpciones = (
        registro: <%= nombreMayuscula %>Class,
        nombreEvento: <%= nombreMayuscula %>MostrarEnum
    ) => {
        setRegistroSeleccionadoRuta(registro);
        switch (nombreEvento) {
            case <%= nombreMayuscula %>MostrarEnum.IconoNavegar:
                navegarParametrosEditar(registro);
                break;
            case <%= nombreMayuscula %>MostrarEnum.IconoOpciones:
                setAbrioOpciones(true);
                break;
            default:
                break;
        }
    };
    // Funciones UI - Navegacion
    const navegarParametrosNuevo = navegarUtil.navegarParametrosNuevo;
    const navegarParametrosEditar = navegarUtil.navegarParametrosEditar;
    const obtenerQueryParams = () => navegarUtil.obtenerQueryParams;
    const recargarPaginaConNuevosQueryParams = navegarUtil.recargarPaginaConNuevosQueryParams;
    const eventoSeleccionoSort = navegarUtil.eventoSeleccionoSort;
    const recargarPaginaSinQueryParams = navegarUtil.recargarPaginaSinQueryParams;

    // Autocomplete
    const actualizarValorCampoAutocompleteGlobal = autocompleteUtil.actualizarValorCampoAutocompleteGlobal;
    const actualizarVisualizarComponenteAutocomplete = () => {
        setGenerarComponente({
            ...generarComponenteAutocompletePorFormControlName
        });
    };
    const generarComponenteAutocompletePorFormControlName = {
        // PARA AUTOCOMPLETE DESCOMENTAR ESTO Y COLOCAR EL nombreCampoRelacion y el NombreCampoRelacionMostrar
        // nombreCampoRelacion: (registro: NombreCampoRelacionInterface, campoFormulario: CampoFormularioInterface) => {
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

    // Metodos REST
    // const buscarAutocompleteCampoNombreCampoRelacion = async () => {
        // PARA AUTOCOMPLETE DESCOMENTAR ESTO Y COLOCAR EL nombreCampoRelacion y el NombreCampoRelacion
        // const respuesta = await NombreCampoRelacionInstanceHttp.buscarNombreCampoRelacion(
        //     textoAutocompleteBusqueda,
        //     setLoading,
        //     toast
        // );
        // setListaAutocomplete(respuesta[0]);
    // }
    const subirArchivo = () => {
        setSubirArchivoAbierto(true)
    };
    const subirImagen = () => {
        setSubirImagenAbierto(true)
    };
    const subirArchivoHTTP = async (data?: FileList) => {
        if (data) {
            if (registroSeleccionadoRuta.id) {
                const archivo: NuevoArchivoInterface = {
                    id: registroSeleccionadoRuta.id,
                    file: data[0],
                    sisHabilitado: SisHabilitadoCrearEnum.Activo,
                    tipo: TipoArchivoEnum.Archivo,
                    nombreIdentificador: path.replace('/', '')
                };
                const resultado = await <%= nombreMayuscula %>InstanceHttp.subirArchivoPrincipal(archivo);
                const error = resultado as ErrorHttp;
                if (error.statusCode) {
                    toast.error('Error cargando archivo');
                } else {
                    toast.success('Archivo subido con exito');
                }
                setSubirArchivoAbierto(false);
            }
        }
        setAbrioOpciones(false);
        recargarPaginaConNuevosQueryParams();

    };
    const subirImagenHTTP = async (data?: FileList) => {
        if (data) {
            if (registroSeleccionadoRuta.id) {
                const archivo: NuevoArchivoInterface = {
                    id: registroSeleccionadoRuta.id,
                    file: data[0],
                    sisHabilitado: SisHabilitadoCrearEnum.Activo,
                    tipo: TipoArchivoEnum.Imagen,
                    nombreIdentificador: path.replace('/', '')
                };
                const resultado = await <%= nombreMayuscula %>InstanceHttp.subirArchivoPrincipal(archivo);
                const error = resultado as ErrorHttp;
                if (error.statusCode) {
                    toast.error('Error cargando imagen');
                } else {
                    toast.success('Imagen subida con exito');
                }
                setSubirImagenAbierto(false);
            }
        }
        setAbrioOpciones(false);
        recargarPaginaConNuevosQueryParams();
    };
    // Componente
    return (
        <KonstaContainer titulo="<%= nombreEspacioMayuscula %>">
            {loaderData.registros &&
                <>
                    {/* Ruta */}
                    <RutaComun<<%= nombreMayuscula %>Class, <%= nombreMayuscula %>FindDto>
                        eventoLimpiarBusqueda={eventoLimpiarBusqueda}
                        findDto={loaderData.findDto}
                        navbar={navbar}
                        navigateFabNewFunction={() => {
                            navegarParametrosNuevo()
                        }}
                        registrosEncontrados={loaderData.registros}
                        sortFieldsArray={sortFields}
                        eventoSeleccionoSort={eventoSeleccionoSort}
                        eventoBuscar={eventoBuscar}
                        mostrarFab={true}
                        camposFiltro={camposFiltrosBusqueda}
                        accordeonCamposFiltro={accordeonCamposFiltro}
                        mostrarItemEnLista={(registro, indice) => (<>
                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 0}}
                                transition={{delay: indice * 0.001}}
                                key={registro.id}>
                                <<%= nombreMayuscula %>Mostrar
                                    registro={registro}
                                    dioClicBoton={eventoClicBotonOpciones}/>
                            </motion.div>
                        </>)
                        }
                        activarVisualizarTabla={(registros) => <<%= nombreMayuscula %>Tabla registros={registros}
                                                                                     dioClicBoton={eventoClicBotonOpciones}/>
                        }
                    />
                </>
            }
            {/* Opciones */}
            <Actions
                opened={abrioOpciones}
                onBackdropClick={() => setAbrioOpciones(false)}
            >
                <ActionsGroup>
                    <ActionsLabel>Seleccione una accion</ActionsLabel>
                    <ActionsButton onClick={() => visualizarRegistro()} bold>
                        Visualizar <VisibilityIcon className={'ml-2'}/>
                    </ActionsButton>
                    <ActionsButton onClick={() => deshabilitarRecurso()} bold>
                        <div
                            className={registroSeleccionadoRuta.sisHabilitado ? 'text-red-500' : ''}>
                            {registroSeleccionadoRuta.sisHabilitado ? 'Deshabiliar' : 'Habilitar'}{` ${registroSeleccionadoRuta.id}`}
                            <span className={'ml-2'}>
                                {registroSeleccionadoRuta.sisHabilitado ? <CancelIcon/> : <CheckCircleIcon/>}
                            </span>
                        </div>
                    </ActionsButton>
                    <ActionsButton onClick={() => descargarCSV()} bold>
                        Descargar CSV <AssignmentReturnedIcon className={'ml-2'}/>
                    </ActionsButton>
                    <ActionsButton onClick={() => descargarPDF()} bold>
                        Descargar PDF <PictureAsPdfIcon className={'ml-2'}/>
                    </ActionsButton>
                    <ActionsButton onClick={() => subirArchivo()} bold>
                        Gestionar Archivos <UploadFileIcon className={'ml-2'}/>
                    </ActionsButton>
                    <ActionsButton onClick={() => {
                        subirImagen()
                    }} bold>
                        Gestionar Imagenes <BackupIcon className={'ml-2'}/>
                    </ActionsButton>
                    {/*<ActionsButton onClick={() => {*/}
                    {/*Se puede seleccionar la variable registroSeleccionadoRuta para obtener la informacion del registro actual*/}
                    {/*    navigate(`/ruta-a-navegar?queryParams=${registroSeleccionadoRuta.id}`)*/}
                    {/*}} bold>*/}
                    {/*    Navegar otra ruta*/}
                    {/*</ActionsButton>*/}
                    <ActionsButton
                        onClick={() => setAbrioOpciones(false)}
                        colors={{text: 'text-red-500'}}
                    >
                        Cancelar
                    </ActionsButton>
                </ActionsGroup>
            </Actions>
            {/*Subir archivos*/}
            <SubirArchivoContenedor sheetOpened={subirArchivoAbierto}
                                    tipoArchivo={TipoArchivoEnum.Archivo}
                                    setSheetOpened={setSubirArchivoAbierto}
                                    accept={'application/pdf'}
                                    tamanioMaximoEnBytes={1000 * 1024 * 0.5}
                                    eventoDioClicSubirArchivoOImagen={subirArchivoHTTP}
                                    registroSeleccionadoRuta={registroSeleccionadoRuta}
            />
            <SubirArchivoContenedor sheetOpened={subirImagenAbierto}
                                    tipoArchivo={TipoArchivoEnum.Imagen}
                                    setSheetOpened={setSubirImagenAbierto}
                                    accept={'.png,.jpg'}
                                    tamanioMaximoEnBytes={1000 * 1024 * 0.5}
                                    eventoDioClicSubirArchivoOImagen={subirImagenHTTP}
                                    registroSeleccionadoRuta={registroSeleccionadoRuta}
            />
            {/* Visualizacion */}
            <SheetContenedor setVisualizacionAbierto={setVisualizacionRegistroAbierto}
                             visualizacionAbierto={visualizacionRegistroAbierto}>
                <<%= nombreMayuscula %>MostrarCompleto registro={registroSeleccionadoRuta}></<%= nombreMayuscula %>MostrarCompleto>
            </SheetContenedor>
            {/* Error */}
            {loaderData.error && <ComponenteError linkTo={path}/>}
        </KonstaContainer>
    )
}