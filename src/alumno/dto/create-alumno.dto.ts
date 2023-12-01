import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateAlumnoDto {
   

    @IsString()
    @IsOptional()
    nombre?: string

    @IsInt()
    @IsOptional()
    @Type(()=> Number)
    edad?: number

    @IsString()
    @IsOptional()
    materia?: string




}
