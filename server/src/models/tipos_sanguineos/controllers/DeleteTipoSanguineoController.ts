import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTipoSanguineoService } from "../services/DeleteTipoSanguineoService";

export class DeleteTipoSanguineoController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params; 

    const deleteTipoSanguineoService = container.resolve(DeleteTipoSanguineoService);

    const deletedTipoSanguineo = await deleteTipoSanguineoService.execute(Number(id));

    return response.json(deletedTipoSanguineo);
  }
}