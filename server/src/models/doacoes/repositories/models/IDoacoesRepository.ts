import { Doacoes } from "@prisma/client";
import { ICreateDoacaoDTO } from "../../dtos/ICreateDoacaoDTO";

export interface IDoacoesRepository {
  create(doacoes: ICreateDoacaoDTO): Promise<Doacoes>;
  delete(id: number): Promise<Doacoes>;
  update(doacoes: Doacoes): Promise<Doacoes>;
  list(): Promise<Doacoes[]>
}