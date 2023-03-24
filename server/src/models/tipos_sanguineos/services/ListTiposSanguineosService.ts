import { Tipos_Sanguineos } from "@prisma/client";
import { container, injectable } from "tsyringe";
import { TiposSanguineosRepository } from "../repositories/TiposSanguineosRepository";

@injectable()
export class ListTiposSanguineosService {
  async execute(): Promise<Tipos_Sanguineos[]>{
    const tiposSanguineosRepository = container.resolve(TiposSanguineosRepository)

    return tiposSanguineosRepository.list();
  }
}