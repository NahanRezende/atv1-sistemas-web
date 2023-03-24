import { Pessoas } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { PessoasRepository } from "../repositories/PessoasRepository";

@injectable()
export class UpdatePessoaService {
  async execute(pessoa: Pessoas): Promise<Pessoas>{
    const pessoasRepository = container.resolve(PessoasRepository)

    return pessoasRepository.update(pessoa);
  }
}