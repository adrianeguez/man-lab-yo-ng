import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-<%= nombreGuiones %>-perfil',
    templateUrl: './<%= nombreGuiones %>-perfil.component.html',
    styleUrls: ['./<%= nombreGuiones %>-perfil.component.scss']
})
export class <%= nombreMayuscula %>PerfilComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
