import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "./curso.entity";

@Entity()
export class Alumno {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    nombre: string;

    @Column('int', {
        default: 0,
    })
    edad: number;

    @Column('text', {
        unique: true,
    })
    materia: string;    

    //relacion Many-to-One (Muchos a Uno):

    @ManyToOne(() => Curso, curso => curso.alumnos)
  curso: Curso;



}
