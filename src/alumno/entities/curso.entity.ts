import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./alumno.entity";

@Entity()
export class Curso {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    nivel: string;

    @Column('text', {
        unique: true,
    })
    NombreDelCurso: string; 


    //relacion Many-to-One (Muchos a Uno):

    @OneToMany(() => Alumno, alumno => alumno.curso)
    alumnos: Alumno[];
   

}
