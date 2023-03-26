import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paquetes, Paquetes_estados } from './entities';
import { Controlador } from './controller';
import { Servicio } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Paquetes, Paquetes_estados])],
  controllers: [Controlador],
  providers: [Servicio],
})
export class UsersModule {}
