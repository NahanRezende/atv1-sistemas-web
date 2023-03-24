import { Pessoas } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { PessoasRepository } from "../repositories/PessoasRepository";

@injectable()
export class DeletePessoaService {
  async execute(id: number): Promise<Pessoas>{
    const pessoasRepository = container.resolve(PessoasRepository)

    return pessoasRepository.delete(id);
  }
}