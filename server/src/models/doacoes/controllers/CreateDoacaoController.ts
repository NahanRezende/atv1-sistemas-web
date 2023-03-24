import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDoacaoService } from "../services/CreateDoacaoService";

export class CreateDoacaoController {
  async handle(request: Request, response: Response): Promise<Response>{
    const doacao = request.body;

    const createDoacaoService = container.resolve(CreateDoacaoService);

    const createdDoacao = await createDoacaoService.execute(doacao);

    return response.json(createdDoacao);
  }
}