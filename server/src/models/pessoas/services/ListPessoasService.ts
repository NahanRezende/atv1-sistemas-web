import { Pessoas } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { PessoasRepository } from "../repositories/PessoasRepository";

@injectable()
export class ListPessoasService {
  async execute(): Promise<Pessoas[]>{
    const pessoasRepository = container.resolve(PessoasRepository)

    return pessoasRepository.list();
  }
}