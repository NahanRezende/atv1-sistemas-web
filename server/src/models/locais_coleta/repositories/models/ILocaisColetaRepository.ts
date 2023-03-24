import { Locais_coleta } from "@prisma/client";
import { ICreateLocaisColetaDTO } from "../../dtos/ICreateLocaisColetaDTO";

export interface ILocaisColetaRepository {
  create(locais_coleta: ICreateLocaisColetaDTO): Promise<Locais_coleta>;
  delete(id: number): Promise<Locais_coleta>;
  update(locais_coleta: Locais_coleta): Promise<Locais_coleta>;
  list(): Promise<Locais_coleta[]>
}