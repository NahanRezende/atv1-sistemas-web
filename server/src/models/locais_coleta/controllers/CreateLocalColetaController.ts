import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLocalColetaService } from "../services/CreateLocalColetaService";

export class CreateLocalColetaController {
  async handle(request: Request, response: Response): Promise<Response>{
    const localColeta = request.body;

    const createLocalColetaService = container.resolve(CreateLocalColetaService);

    const createdLocalColeta = await createLocalColetaService.execute(localColeta);

    return response.json(createdLocalColeta);
  }
}