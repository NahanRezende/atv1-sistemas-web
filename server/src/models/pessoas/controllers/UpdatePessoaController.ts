import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePessoaService } from "../services/UpdatePessoaService";

export class UpdatePessoaController {
  async handle(request: Request, response: Response): Promise<Response>{
    const pessoa = request.body;

    const updatePessoaService = container.resolve(UpdatePessoaService);

    const updatedPessoa = await updatePessoaService.execute(pessoa);

    return response.json(updatedPessoa);
  }
}