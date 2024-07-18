import { Estudiante } from './estudiante';
import { OfertaLaboral } from './ofertaLaboral';

export class Postulacion {
    id: number;
    fechaPostulacion: Date;
    estudiante: Estudiante;
    ofertaLaboral: OfertaLaboral;
    estado: 'pendiente' | 'aprobado' | 'rechazado';

    constructor(
        id: number, 
        fechaPostulacion: Date, 
        estudiante: Estudiante, 
        ofertaLaboral: OfertaLaboral, 
        estado: 'pendiente' | 'aprobado' | 'rechazado'
    ) {
        this.id = id;
        this.fechaPostulacion = fechaPostulacion;
        this.estudiante = estudiante;
        this.ofertaLaboral = ofertaLaboral;
        this.estado = estado;
    }
}