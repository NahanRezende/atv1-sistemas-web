import { Tipos_Sanguineos } from "@prisma/client";
import { ICreateTiposSanguineosDTO } from "../../dtos/ICreateTiposSanguineosDTO";

export interface ITiposSanguineosRepository {
  create(tipo_sanguineo: ICreateTiposSanguineosDTO): Promise<Tipos_Sanguineos>;
  delete(id: number): Promise<Tipos_Sanguineos>;
  update(tipo_sanguineo: Tipos_Sanguineos): Promise<Tipos_Sanguineos>;
  list(): Promise<Tipos_Sanguineos[]>
}