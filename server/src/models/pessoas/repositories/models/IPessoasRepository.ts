import { Pessoas } from "@prisma/client";
import { ICreatePessoaDTO } from "../../dtos/ICreatePessoaDTO";

export interface IPessoasRepository {
  create(pessoa: ICreatePessoaDTO): Promise<Pessoas>;
  delete(id: number): Promise<Pessoas>;
  update(pessoa: Pessoas): Promise<Pessoas>;
  list(): Promise<Pessoas[]>
}