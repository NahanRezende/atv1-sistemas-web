import { Locais_coleta, Pessoas } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { LocaisColetaRepository } from "../repositories/LocaisColetaRepository";

@injectable()
export class UpdateLocalColetaService {
  async execute(local_coleta: Locais_coleta): Promise<Locais_coleta>{
    const locaisColetaRepository = container.resolve(LocaisColetaRepository)

    return locaisColetaRepository.update(local_coleta);
  }
}