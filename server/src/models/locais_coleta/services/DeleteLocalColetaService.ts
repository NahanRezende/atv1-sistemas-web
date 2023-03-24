import { Locais_coleta } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { LocaisColetaRepository } from "../repositories/LocaisColetaRepository";

@injectable()
export class DeleteLocalColetaService {
  async execute(id: number): Promise<Locais_coleta>{
    const locaisColetaRepository = container.resolve(LocaisColetaRepository)

    return locaisColetaRepository.delete(id);
  }
}