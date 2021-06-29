import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

@Injectable()
export class <%= nombreMayuscula %>Guard implements CanActivate {
    nombrePermiso = '<%= nombreGuiones %>Buscar';

    constructor(
        private readonly _seguridadService: SeguridadService,
        private readonly _router: Router,
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const tienePermiso = this._seguridadService.encontrarPermisoPorNombre(this.nombrePermiso);
        if (tienePermiso) {
            return true;
        } else {
            this._router.navigate(['/no-tiene-permisos']);
            return false;
        }
    }
}
