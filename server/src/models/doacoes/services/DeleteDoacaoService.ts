import { Doacoes } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { DoacoesRepository } from "../repositories/DoacoesRepository";

@injectable()
export class DeleteDoacaoService {
  async execute(id: number): Promise<Doacoes>{
    const doacoesRepository = container.resolve(DoacoesRepository)

    return doacoesRepository.delete(id);
  }
}