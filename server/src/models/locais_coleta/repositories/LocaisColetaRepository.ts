import { Locais_coleta, PrismaClient } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { prisma } from '../../../config/database/client'
import { ICreateLocaisColetaDTO } from '../dtos/ICreateLocaisColetaDTO';
import { ILocaisColetaRepository } from './models/ILocaisColetaRepository';

@injectable()
export class LocaisColetaRepository implements ILocaisColetaRepository {

  constructor(
  @inject('PrismaClient')
  private prisma: PrismaClient,
  ){};


  async create(locais_coleta: ICreateLocaisColetaDTO): Promise<Locais_coleta>{
    const createdLocaisColeta = await prisma.locais_coleta.create({
      data: locais_coleta,
    });

    return createdLocaisColeta;
  }

  async delete(id: number): Promise<Locais_coleta> {
    const deletedRecord = await prisma.locais_coleta.delete({
      where: {
        id
      },
    });
    
    return deletedRecord;
  }

  async update(locais_coleta: Locais_coleta): Promise<Locais_coleta> {
    const updatedLocaisColeta = await prisma.locais_coleta.update({
      where: {
        id: locais_coleta.id
      },
      data: locais_coleta,
    });

    return updatedLocaisColeta;
  }
  
  async list(): Promise<Locais_coleta[]> {
    const foundLocaisColeta = await prisma.locais_coleta.findMany();

    return foundLocaisColeta;
  }
}