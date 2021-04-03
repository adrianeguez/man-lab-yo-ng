import {HttpClient} from '@angular/common/http';
import {TRANSLOCO_SCOPE} from '@ngneat/transloco';

export const NOMBRE_SCOPE_<%= nombreSoloMayusculas %> = NOMBRE_MODULO + '<%= nombreMayuscula %>';

export const SCOPE_<%= nombreSoloMayusculas %> = (http: HttpClient) => {
  const loader<%= nombreMayuscula %> = ['es', 'en'].reduce((acc: any, lang) => {
    acc[lang] = () => http.get(`/assets/i18n/LLENAR_NOMBRE_MODULO/<%= nombreGuiones %>/${lang}.json`).toPromise();
    return acc;
  }, {});

  return {scope: NOMBRE_SCOPE_<%= nombreSoloMayusculas %>, loader: loader<%= nombreMayuscula %>};
};

export const LOADER_<%= nombreSoloMayusculas %> = {
  provide: TRANSLOCO_SCOPE,
  deps: [HttpClient],
  useFactory: SCOPE_<%= nombreSoloMayusculas %>,
  multi: true
};
