import { Doacoes } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { ICreateDoacaoDTO } from "../dtos/ICreateDoacaoDTO";
import { DoacoesRepository } from "../repositories/DoacoesRepository";

@injectable()
export class CreateDoacaoService {
  async execute(doacao: ICreateDoacaoDTO): Promise<Doacoes>{
    const doacoesRepository = container.resolve(DoacoesRepository)

    return doacoesRepository.create(doacao);
  }
}