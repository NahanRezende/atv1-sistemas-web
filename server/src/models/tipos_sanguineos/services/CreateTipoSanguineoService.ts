import { Tipos_Sanguineos } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { ICreateTiposSanguineosDTO } from "../dtos/ICreateTiposSanguineosDTO";
import { TiposSanguineosRepository } from "../repositories/TiposSanguineosRepository";

@injectable()
export class CreateTipoSanguineoService {
  async execute(pessoa: ICreateTiposSanguineosDTO): Promise<Tipos_Sanguineos>{
    const tiposSanguineosRepository = container.resolve(TiposSanguineosRepository)

    return tiposSanguineosRepository.create(pessoa);
  }
}