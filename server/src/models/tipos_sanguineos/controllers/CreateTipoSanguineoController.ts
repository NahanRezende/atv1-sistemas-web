import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTipoSanguineoService } from "../services/CreateTipoSanguineoService";

export class CreateTipoSanguineoController {
  async handle(request: Request, response: Response): Promise<Response>{
    const tipoSanguineo = request.body;

    const createTipoSanguineoService = container.resolve(CreateTipoSanguineoService);

    const createdTipoSanguineo = await createTipoSanguineoService.execute(tipoSanguineo);

    return response.json(createdTipoSanguineo);
  }
}