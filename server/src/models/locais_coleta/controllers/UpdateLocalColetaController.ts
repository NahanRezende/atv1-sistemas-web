import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateLocalColetaService } from "../services/UpdateLocalColetaService";

export class UpdateLocalColetaController {
  async handle(request: Request, response: Response): Promise<Response>{
    const localColeta = request.body;

    const updateLocalColetaService = container.resolve(UpdateLocalColetaService);

    const updatedLocalColeta = await updateLocalColetaService.execute(localColeta);

    return response.json(updatedLocalColeta);
  }
}