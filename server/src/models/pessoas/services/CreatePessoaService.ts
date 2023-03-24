import { Pessoas } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { ICreatePessoaDTO } from "../dtos/ICreatePessoaDTO";
import { PessoasRepository } from "../repositories/PessoasRepository";

@injectable()
export class CreatePessoaService {
  async execute(pessoa: ICreatePessoaDTO): Promise<Pessoas>{
    const pessoasRepository = container.resolve(PessoasRepository)

    return pessoasRepository.create(pessoa);
  }
}