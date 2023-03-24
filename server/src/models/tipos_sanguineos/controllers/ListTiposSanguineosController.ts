import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTiposSanguineosService } from "../services/ListTiposSanguineosService";

export class ListTiposSanguineosController {
  async handle(request: Request, response: Response): Promise<Response>{
    const listTiposSanguineosService = container.resolve(ListTiposSanguineosService);

    const tiposSanguineos = await listTiposSanguineosService.execute();

    return response.json(tiposSanguineos);
  }
}