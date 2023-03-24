import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateDoacaoService } from "../services/UpdateDoacaoService";

export class UpdateDoacaoController {
  async handle(request: Request, response: Response): Promise<Response>{
    const doacao = request.body;

    const updateDoacaoService = container.resolve(UpdateDoacaoService);

    const updatedDoacao = await updateDoacaoService.execute(doacao);

    return response.json(updatedDoacao);
  }
}