import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLocaisColetaService } from "../services/ListLocaisColetaService";

export class ListLocaisColetaController {
  async handle(request: Request, response: Response): Promise<Response>{
    const listLocaisColetaService = container.resolve(ListLocaisColetaService);

    const LocaisColeta = await listLocaisColetaService.execute();

    return response.json(LocaisColeta);
  }
}