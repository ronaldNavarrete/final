import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePaqueteDTO, CreatePaqueteLogDTO } from './dto';
import { UpdatePaqueteDTO } from './dto';
import { Servicio } from './service';

@Controller('paquetes')
export class Controlador {
  constructor(private servicio: Servicio) {}
  @Get()
  getAll() {
    return this.servicio.findUsers();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number,) {
    return this.servicio.findOne(id);
  }

  @Post()
  create(@Body() dtoCreate: CreatePaqueteDTO) {
    return this.servicio.createUser(dtoCreate);
  }

  /*@Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdatePaqueteDTO,
  ) {
    await this.servicio.updateUser(id, updateUserDto);
  }*/

  @Delete(':id')
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    await this.servicio.deleteUser(id);
  }

  @Post('/filtrar_cedula')
  async filtrar_cedulaRecibe(@Body('cedula') cedula: string) {
    const user = await this.servicio.findAllByCedulaRecibe(cedula);
    return user;
  }

}
