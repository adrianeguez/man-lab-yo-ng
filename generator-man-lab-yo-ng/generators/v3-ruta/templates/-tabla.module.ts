import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {<%= nombreMayuscula %>TablaComponent} from './<%= nombreGuiones %>-tabla.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {<%= nombreMayuscula %>PerfilModule} from '../<%= nombreGuiones %>-perfil/<%= nombreGuiones %>-perfil.module';


@NgModule({
  declarations: [
    <%= nombreMayuscula %>aTablaComponent
  ],
  exports: [
    <%= nombreMayuscula %>TablaComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    <%= nombreMayuscula %>PerfilModule,
    FormContainerModule
  ],
})
export class <%= nombreMayuscula %>TablaModule {
}
