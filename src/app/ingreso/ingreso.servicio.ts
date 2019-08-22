import {Ingreso} from './ingreso.model';

export class IngresoServicio {
    ingreso: Ingreso[] = [
        new Ingreso('saladrio', 4000),
        new Ingreso('venta de auto', 500)
    ];
}
