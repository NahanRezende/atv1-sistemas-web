import { Doacoes } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { DoacoesRepository } from "../repositories/DoacoesRepository";

@injectable()
export class UpdateDoacaoService {
  async execute(doacao: Doacoes): Promise<Doacoes>{
    const doacoesRepository = container.resolve(DoacoesRepository)

    return doacoesRepository.update(doacao);
  }
}