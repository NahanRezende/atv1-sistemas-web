import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDoacoesService } from "../services/ListDoacoesService";

export class ListDoacoesController {
  async handle(request: Request, response: Response): Promise<Response>{
    const listDoacoesService = container.resolve(ListDoacoesService);

    const doacoes = await listDoacoesService.execute();

    return response.json(doacoes);
  }
}