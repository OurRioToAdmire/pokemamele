import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from './entities/movimiento.entity.js';
import { MovimientoService } from './movimientos.service.js';
import { MovimientoController } from './movimientos.controller.js';
import { Tipo } from '../tipos/entities/tipo.entity.js';
import { TipoDano } from '../tipo_dano/entities/tipo_dano.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([
      Movimiento, Tipo, TipoDano])],
  controllers:[MovimientoController],
  providers:[MovimientoService],
  exports:[MovimientoService]
})
export class MovimientoModule {}
