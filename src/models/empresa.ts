import { OfertaLaboral } from './ofertaLaboral';

export class Empresa {
    id: number;
    nombre: string;
    tipo: 'pequeña' | 'mediana' | 'grande';
    sitioWeb: string;
    ofertaLaboral: OfertaLaboral[];

    constructor(
        id: number, 
        nombre: string, 
        tipo: 'pequeña' | 'mediana' | 'grande', 
        sitioWeb: string,
        ofertaLaboral: OfertaLaboral[]
    ) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.sitioWeb = sitioWeb;
        this.ofertaLaboral = ofertaLaboral;
    }
}