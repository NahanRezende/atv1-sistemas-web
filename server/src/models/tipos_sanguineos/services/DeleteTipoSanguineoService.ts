import { Tipos_Sanguineos } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { TiposSanguineosRepository } from "../repositories/TiposSanguineosRepository";

@injectable()
export class DeleteTipoSanguineoService {
  async execute(id: number): Promise<Tipos_Sanguineos>{
    const tiposSanguineosRepository = container.resolve(TiposSanguineosRepository)

    return tiposSanguineosRepository.delete(id);
  }
}