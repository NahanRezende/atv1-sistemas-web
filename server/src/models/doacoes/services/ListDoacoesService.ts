import { Doacoes } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { DoacoesRepository } from "../repositories/DoacoesRepository";

@injectable()
export class ListDoacoesService {
  async execute(): Promise<Doacoes[]>{
    const doacoesRepository = container.resolve(DoacoesRepository)

    return doacoesRepository.list();
  }
}