import {CampoFormularioType} from "~/components/form/lib/enum/campo-formulario.type";
import {<%= nombreMayuscula %>Enum} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>.enum";
import {CampoFormularioInterface} from "~/components/form/lib/interfaces/campo-formulario.interface";

export function <%= nombreMayuscula %>Form(): CampoFormularioInterface[] {
    return [
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Nombre,
        //     help: 'Ingrese un nombre',
        //     label: 'Nombre',
        //     initialValue: '',
        //     actualValue: '',
        //     type: CampoFormularioType.Text,
        //     valid: false,
        //     placeholder: 'EJ: Adrian',
        //     validators: {
        //         required: true,
        //         minLength: {
        //             value: 4,
        //             mensaje: 'No '
        //         },
        //         maxLength: {
        //             value: 9,
        //             mensaje: 'No '
        //         },
        //         pattern: {
        //             pattern: new RegExp(/([A-Z])\w+/),
        //             mensaje: 'Ingrese solo letras'
        //         }
        //     }
        // },
        //
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Password,
        //     help: 'Ingrese un password',
        //     label: 'Password',
        //     initialValue: '',
        //     actualValue: '',
        //     type: CampoFormularioType.Password,
        //     valid: false,
        //     placeholder: 'EJ: xxxxxxxx',
        //     validators: {
        //         required: true,
        //         // no validators
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Email,
        //     help: 'Ingrese un correo',
        //     label: 'Email',
        //     initialValue: '',
        //     actualValue: '',
        //     type: CampoFormularioType.Email,
        //     valid: false,
        //     placeholder: 'EJ: a@a.com',
        //     validators: {
        //         required: true,
        //         // no validators
        //         email: {
        //             mensaje: 'Ingrese un correo valido'
        //         }
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.URL,
        //     help: 'Ingrese un URL',
        //     label: 'URL',
        //     initialValue: '',
        //     actualValue: '',
        //     type: CampoFormularioType.Url,
        //     valid: false,
        //     placeholder: 'EJ: https://...',
        //     validators: {
        //         required: true,
        //         // no validators
        //         url: {
        //             mensaje: 'Ingrese un url correctamente'
        //         }
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Telefono,
        //     help: 'Ingrese su telefono',
        //     label: 'Telefono',
        //     initialValue: '',
        //     actualValue: '',
        //     type: CampoFormularioType.Url,
        //     valid: false,
        //     placeholder: 'EJ: 0995774444',
        //     validators: {
        //         required: true,
        //         // no validators
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Fecha,
        //     help: 'Ingrese la fecha de nacimiento',
        //     label: 'Fecha nacimiento',
        //     initialValue: '', //new Date().toISOString().slice(0, 10),
        //     actualValue: '',
        //     type: CampoFormularioType.Date,
        //     valid: false,
        //     placeholder: 'EJ: 0995774444',
        //     validators: {
        //         required: true,
        //         // no validators
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.FechaHora,
        //     help: 'Ingrese la fecha hora de logeo',
        //     label: 'Fecha hora logeo',
        //     initialValue: '', //new Date().toISOString().slice(0, 16),
        //     actualValue: '',
        //     type: CampoFormularioType.DateTime,
        //     valid: false,
        //     placeholder: 'EJ: 0995774444',
        //     validators: {
        //         required: true,
        //         // no validators
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Textarea,
        //     help: 'Ingrese una descripcion',
        //     label: 'Descripcion',
        //     initialValue: ``,
        //     actualValue: '',
        //     type: CampoFormularioType.Textarea,
        //     valid: false,
        //     placeholder: 'EJ: El dia 10 de ...',
        //     validators: {
        //         required: true,
        //         // no validators
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Select,
        //     help: 'Seleccione un dia de la semana',
        //     label: 'Dia semana',
        //     initialValue: ``,
        //     actualValue: '',
        //     type: CampoFormularioType.Select,
        //     valid: false,
        //     placeholder: 'EJ: Lun/Mart',
        //     validators: {
        //         required: true,
        //         // no validators
        //     },
        //     select: {
        //         opciones: [
        //             {
        //                 id: 'x',
        //                 label: 'Seleccione uno',
        //                 value: '',
        //             },
        //             {
        //                 id: 'lunes',
        //                 label: 'Lunes',
        //                 value: 'lunes',
        //             },
        //             {
        //                 id: 'martes',
        //                 label: 'Martes',
        //                 value: 'martes',
        //             },
        //             {
        //                 id: 'miercoles',
        //                 label: 'Miercoles',
        //                 value: 'miercoles',
        //             }
        //         ]
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Numero,
        //     help: 'Ingrese su sueldo',
        //     label: 'Sueldo',
        //     initialValue: '',
        //     actualValue: '',
        //     type: CampoFormularioType.Number,
        //     valid: false,
        //     placeholder: 'EJ: 10.02',
        //     validators: {
        //         required: true,
        //         max: {
        //             value: 100,
        //             validationFn: (v) => v < 100 ? true : 'No mayor a 100'
        //         },
        //         min: {
        //             value: 1,
        //             validationFn: (v) => v >= 1 ? true : 'No menor a 0'
        //         }
        //     },
        //     number: {
        //         step: 0.1,
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Autocomplete,
        //     help: 'Seleccione un <%= nombreMayuscula %>',
        //     label: '<%= nombreMayuscula %>',
        //     initialValue: '',
        //     actualValue: '',
        //     type: CampoFormularioType.Autocomplete,
        //     valid: false,
        //     placeholder: 'EJ: <%= nombreMayuscula %> 1',
        //     validators: {
        //         required: true,
        //     },
        //     autocomplete: {
        //         nombrePropiedadObjeto: 'id'
        //     }
        // },
        // {
        //     formControlName: <%= nombreMayuscula %>Enum.Toggle,
        //     help: 'Selecciono si esta habilitado',
        //     label: 'Habilitado',
        //     initialValue: false,
        //     actualValue: '',
        //     type: CampoFormularioType.Toggle,
        //     valid: false,
        //     placeholder: '',
        //     validators: {},
        //     toggle: {
        //         opcionNegativaLabel: 'Deshabilitado',
        //         opcionPositivaLabel: 'Habilitado'
        //     }
        // },
    ] as CampoFormularioInterface[]
}