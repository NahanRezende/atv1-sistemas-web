import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteDoacaoService } from "../services/DeleteDoacaoService";

export class DeleteDoacaoController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params; 

    const deleteDoacaoService = container.resolve(DeleteDoacaoService);

    const deletedDoacao = await deleteDoacaoService.execute(Number(id));

    return response.json(deletedDoacao);
  }
}