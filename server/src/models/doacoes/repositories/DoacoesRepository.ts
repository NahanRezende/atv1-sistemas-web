import { Doacoes, PrismaClient } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { prisma } from '../../../config/database/client'
import { ICreateDoacaoDTO } from '../dtos/ICreateDoacaoDTO';
import { IDoacoesRepository } from './models/IDoacoesRepository';

@injectable()
export class DoacoesRepository implements IDoacoesRepository {

  constructor(
  @inject('PrismaClient')
  private prisma: PrismaClient,
  ){};


  async create(doacao: ICreateDoacaoDTO): Promise<Doacoes>{
    const createdDoacao = await prisma.doacoes.create({
      data: doacao,
    });

    return createdDoacao;
  }

  async delete(id: number): Promise<Doacoes> {
    const deletedRecord = await prisma.doacoes.delete({
      where: {
        id
      },
    });
    
    return deletedRecord;
  }

  async update(doacao: Doacoes): Promise<Doacoes> {
    const updatedDoacao = await prisma.doacoes.update({
      where: {
        id: doacao.id
      },
      data: doacao,
    });

    return updatedDoacao;
  }
  
  async list(): Promise<Doacoes[]> {
    const foundDoacoes = await prisma.doacoes.findMany();

    return foundDoacoes;
  }
}