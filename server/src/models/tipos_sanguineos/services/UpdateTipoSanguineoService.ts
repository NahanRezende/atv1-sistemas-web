import { Tipos_Sanguineos } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { TiposSanguineosRepository } from "../repositories/TiposSanguineosRepository";

@injectable()
export class UpdateTipoSanguineoService {
  async execute(tipo_sanguineo: Tipos_Sanguineos): Promise<Tipos_Sanguineos>{
    const tiposSanguineosRepository = container.resolve(TiposSanguineosRepository)

    return tiposSanguineosRepository.update(tipo_sanguineo);
  }
}