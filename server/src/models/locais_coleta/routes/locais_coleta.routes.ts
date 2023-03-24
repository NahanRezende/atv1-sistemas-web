import { Router } from 'express';
import { CreateLocalColetaController } from '../controllers/CreateLocalColetaController';
import { DeleteLocalColetaController } from '../controllers/DeleteLocalColetaController';
import { ListLocaisColetaController } from '../controllers/ListLocaisColetaController';
import { UpdateLocalColetaController } from '../controllers/UpdateLocalColetaController';

const locaisColetaRouter = Router();

const createLocalColetaController = new CreateLocalColetaController();
const listLocaisColetaController = new ListLocaisColetaController();
const deleteLocalColetaController = new DeleteLocalColetaController();
const updateLocalColetaController = new UpdateLocalColetaController()

locaisColetaRouter.post('/', createLocalColetaController.handle);

locaisColetaRouter.get('/', listLocaisColetaController.handle);

locaisColetaRouter.delete('/', deleteLocalColetaController.handle);

locaisColetaRouter.put('/', updateLocalColetaController.handle);

export { locaisColetaRouter }