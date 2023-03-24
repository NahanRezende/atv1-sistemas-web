import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteLocalColetaService } from "../services/DeleteLocalColetaService";

export class DeleteLocalColetaController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params; 

    const deleteLocalColetaService = container.resolve(DeleteLocalColetaService);

    const deletedLocalColeta = await deleteLocalColetaService.execute(Number(id));

    return response.json(deletedLocalColeta);
  }
}