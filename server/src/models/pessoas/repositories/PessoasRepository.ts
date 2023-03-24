import { Pessoas, PrismaClient } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { prisma } from '../../../config/database/client'
import { ICreatePessoaDTO } from '../dtos/ICreatePessoaDTO';
import { IPessoasRepository } from './models/IPessoasRepository';

@injectable()
export class PessoasRepository implements IPessoasRepository {

  constructor(
  @inject('PrismaClient')
  private prisma: PrismaClient,
  ){};


  async create(pessoa: ICreatePessoaDTO): Promise<Pessoas>{
    const createdPessoa = await prisma.pessoas.create({
      data: pessoa,
    });

    return createdPessoa;
  }

  async delete(id: number): Promise<Pessoas> {
    const deletedRecord = await prisma.pessoas.delete({
      where: {
        id
      },
    });
    
    return deletedRecord;
  }

  async update(pessoa: Pessoas): Promise<Pessoas> {
    const updatedPessoa = await prisma.pessoas.update({
      where: {
        id: pessoa.id
      },
      data: pessoa,
    });

    return updatedPessoa;
  }
  
  async list(): Promise<Pessoas[]> {
    const foundPessoas = await prisma.pessoas.findMany();

    return foundPessoas;
  }
}