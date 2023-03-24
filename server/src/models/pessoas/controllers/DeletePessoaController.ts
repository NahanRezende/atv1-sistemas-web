import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeletePessoaService } from "../services/DeletePessoaService";

export class DeletePessoaController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params; 

    const deletePessoaService = container.resolve(DeletePessoaService);

    const deletedPessoa = await deletePessoaService.execute(Number(id));

    return response.json(deletedPessoa);
  }
}