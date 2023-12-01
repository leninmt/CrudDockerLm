import { Injectable, Controller, NotFoundException } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';
import { PaginacionDto } from '../common/dto/paginacion.dto';

@Injectable()
export class AlumnoService {
  
  constructor(
    @InjectRepository(Alumno)
    private readonly producRepository: Repository<Alumno>,){}

  async create(createAlumnoDto: CreateAlumnoDto) {
   try {
      const alumnos = this.producRepository.create(createAlumnoDto);
      await this.producRepository.save(alumnos);
      return alumnos;
   } catch (error) {
      console.log(error)
      throw new Error("No se pudo realizar el ingreso al bdd")
    
   }
  }

  findAll(paginacionDto: PaginacionDto) {
    const {limit=10, offset=1} = paginacionDto;

    return this.producRepository.find({
      take: limit,
      skip: offset
    });
  }

  async findOne(id: number) {
    const alumnos = await this.producRepository.findOneBy({id});
    if (!alumnos)
    throw new NotFoundException(id)
    return alumnos;

  }

  async update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    const alumnos = await this.producRepository.preload({
      id:id,
      ...updateAlumnoDto
    }) 
  if (!alumnos)
  throw new NotFoundException("No se pudo Eliminar");
    await this.producRepository.save(alumnos);
    return alumnos;
  }

  async remove(id: number) {
    const alumnos = await this.findOne(id);
    this.producRepository.delete(alumnos);  
  } 
}
