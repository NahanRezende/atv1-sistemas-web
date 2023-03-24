import { Locais_coleta} from "@prisma/client";
import { container, injectable } from "tsyringe";
import { ICreateLocaisColetaDTO } from "../dtos/ICreateLocaisColetaDTO";
import { LocaisColetaRepository } from "../repositories/LocaisColetaRepository";

@injectable()
export class CreateLocalColetaService {
  async execute(locais_coleta: ICreateLocaisColetaDTO): Promise<Locais_coleta>{
    const locaisColetaRepository = container.resolve(LocaisColetaRepository)

    return locaisColetaRepository.create(locais_coleta);
  }
}