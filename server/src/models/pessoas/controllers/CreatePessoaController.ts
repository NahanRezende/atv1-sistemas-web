import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePessoaService } from "../services/CreatePessoaService";

export class CreatePessoaController {
  async handle(request: Request, response: Response): Promise<Response>{
    const pessoa = request.body;

    const createPessoaService = container.resolve(CreatePessoaService);

    const createdPessoa = await createPessoaService.execute(pessoa);

    return response.json(createdPessoa);
  }
}