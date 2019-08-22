import {Component, OnInit} from '@angular/core';
import {Ingreso} from './ingreso.model';
import {IngresoServicio} from './ingreso.servicio';

@Component({
    selector: 'app-ingreso',
    templateUrl: './ingreso.component.html',
    styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
    ingresos: Ingreso[] = [];

    constructor(private IngresoServicio: IngresoServicio) {
    }

    ngOnInit() {
        this.ingresos = this.IngresoServicio.ingresos;
        console.log(this.ingresos);
    }

    eliminarIngreso(ingreso: Ingreso) {
        this.IngresoServicio.eliminar(ingreso);
    }
}
