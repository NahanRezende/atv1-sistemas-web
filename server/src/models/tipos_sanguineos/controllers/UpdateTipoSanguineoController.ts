import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTipoSanguineoService } from "../services/UpdateTipoSanguineoService";

export class UpdateTipoSanguineoController {
  async handle(request: Request, response: Response): Promise<Response>{
    const tipoSanguineo = request.body;

    const updateTipoSanguineoService = container.resolve(UpdateTipoSanguineoService);

    const updatedTipoSanguineo = await updateTipoSanguineoService.execute(tipoSanguineo);

    return response.json(updatedTipoSanguineo);
  }
}