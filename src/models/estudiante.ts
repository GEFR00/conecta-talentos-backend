import { Postulacion } from "./postulacion";

export class Estudiante {
    id: number;
    nombre: string;
    apellidos: string;
    edad: number;
    profesion: string;
    email: string;
    postulaciones: Postulacion[];

    constructor(
        id: number, 
        nombre: string, 
        apellidos: string, 
        edad: number, 
        profesion: string, 
        email: string,
        postulaciones: Postulacion[]
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.profesion = profesion;
        this.email = email;
        this.postulaciones = postulaciones;
    }

}