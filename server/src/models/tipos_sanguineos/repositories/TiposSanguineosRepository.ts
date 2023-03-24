import { Tipos_Sanguineos, PrismaClient } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { prisma } from '../../../config/database/client'
import { ICreateTiposSanguineosDTO } from '../dtos/ICreateTiposSanguineosDTO';
import { ITiposSanguineosRepository } from './models/ITiposSanguineosRepository';

@injectable()
export class TiposSanguineosRepository implements ITiposSanguineosRepository {

  constructor(
  @inject('PrismaClient')
  private prisma: PrismaClient,
  ){};


  async create(tipos_sanguineos: ICreateTiposSanguineosDTO): Promise<Tipos_Sanguineos>{
    const createdTipoSanguineo = await prisma.tipos_Sanguineos.create({
      data: tipos_sanguineos,
    });

    return createdTipoSanguineo;
  }

  async delete(id: number): Promise<Tipos_Sanguineos> {
    const deletedRecord = await prisma.tipos_Sanguineos.delete({
      where: {
        id
      },
    });
    
    return deletedRecord;
  }

  async update(tipo_sanguineo: Tipos_Sanguineos): Promise<Tipos_Sanguineos> {
    const updatedTipoSanguineo = await prisma.tipos_Sanguineos.update({
      where: {
        id: tipo_sanguineo.id
      },
      data: tipo_sanguineo,
    });

    return updatedTipoSanguineo;
  }
  
  async list(): Promise<Tipos_Sanguineos[]> {
    const foundTipoSanguineo = await prisma.tipos_Sanguineos.findMany();

    return foundTipoSanguineo;
  }
}