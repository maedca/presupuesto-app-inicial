import {Component, OnInit} from '@angular/core';
import {IngresoServicio} from '../ingreso/ingreso.servicio';
import {EgresoServicio} from '../egreso/egreso.servicio';
import {Egreso} from '../egreso/egreso.model';
import {Ingreso} from '../ingreso/ingreso.model';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
    tipo: string = 'ingresoOperacion';
    descripcionInput: string = '';
    valorInput: number = 0;

    constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) {
    }

    ngOnInit() {
    }

    tipoOperacion(event) {
        this.tipo = event.target.value;
    }

    agregarValor() {
        if (this.tipo === 'ingresoOperacion') {
            this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
        } else {
            this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
        }
    }
}
