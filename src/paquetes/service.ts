import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paquetes, Paquetes_estados } from './entities';
import {
  CreatePaqueteParams,
  UpdatePaqueteParams,
} from '../utils/types';

@Injectable()
export class Servicio {
  constructor(
    @InjectRepository(Paquetes) private tablaBD: Repository<Paquetes>,
  ) {}

  findUsers() {
    return this.tablaBD.find();
  }

  findOne(id_paquete: number) {
    //return this.tablaBD.findBy({ id_paquete });
    return this.tablaBD.createQueryBuilder('paquetes')
    .leftJoinAndSelect(
      'paquetes.paquetes_estados',
      'paquetes_estados',
      'paquetes_estados.id_paquete = paquetes.id_paquete',
    )
    .where('paquetes.id_paquete = :id', { id: id_paquete })
    .orderBy('paquetes_estados.createdAt', 'DESC')
    .getOne();
  }

  createUser(userDetails: CreatePaqueteParams) {
    const newUser = this.tablaBD.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.tablaBD.save(newUser);
  }

  updateUser(id_paquete: number, updateUserDetails: CreatePaqueteParams) {
    return this.tablaBD.update({ id_paquete }, { ...updateUserDetails });
  }

  deleteUser(id_paquete: number) {
    return this.tablaBD.delete({ id_paquete });
  }

  async findByCedulaRecibe(receiver_cedula: string): Promise<Paquetes | undefined> {
    return this.tablaBD.findOne({ where: { receiver_cedula } });
  }

  async findAllByCedulaRecibe(receiver_cedula: string): Promise<Paquetes[]> {
    return this.tablaBD.find({ where: { receiver_cedula } });
  }

}
