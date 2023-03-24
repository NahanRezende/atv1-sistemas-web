import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPessoasService } from "../services/ListPessoasService";

export class ListPessoasController {
  async handle(request: Request, response: Response): Promise<Response>{
    const listPessoasService = container.resolve(ListPessoasService);

    const pessoas = await listPessoasService.execute();

    return response.json(pessoas);
  }
}