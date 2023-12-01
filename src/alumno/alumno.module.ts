import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Curso } from './entities/curso.entity';

@Module({
  controllers: [AlumnoController],
  providers: [AlumnoService],
  imports:[
    TypeOrmModule.forFeature([Alumno, Curso])
  ]
})
export class AlumnoModule {}
