import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { NotificationService } from "@vendure/admin-ui/core";
import { <%= nombreMayuscula %>Permissions } from "./<%= nombreGuiones %>.permissions";

@Injectable({providedIn: 'root'})
export class <%= nombreMayuscula %>Guard extends CanActivateMantiAbstact implements CanActivate {

  constructor(
      private readonly authMantiService: AuthMantiService,
      private readonly notificationService: NotificationService,
  ) {
    super(authMantiService, notificationService);
  }
  canActivate(): Observable<boolean> {
    return of(this.revisarPermiso([<%= nombreMayuscula %>Permissions.Buscar]))
  }

}