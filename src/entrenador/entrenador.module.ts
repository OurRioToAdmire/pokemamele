import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrenador } from './entities/entrenador.entity.js';
import { EntrenadorService } from './entrenador.service.js';
import { EntrenadorController } from './entrenador.controller.js';
import { Usuario } from '../usuario/entities/usuario.entity.js';
import { Region } from '../region/entities/region.entity.js';
@Module({
  imports:[TypeOrmModule.forFeature([Entrenador, Usuario, Region])],
  controllers:[EntrenadorController],
  providers:[EntrenadorService],
  exports:[EntrenadorService]
})
export class EntrenadorModule {}
