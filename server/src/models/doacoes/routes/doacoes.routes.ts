import { Router } from 'express';
import { CreateDoacaoController } from '../controllers/CreateDoacaoController';
import { DeleteDoacaoController } from '../controllers/DeleteDoacaoController';
import { ListDoacoesController } from '../controllers/ListDoacoesController';
import { UpdateDoacaoController } from '../controllers/UpdateDoacaoController';

const doacoesRouter = Router();

const createDoacaoController = new CreateDoacaoController();
const listDoacoesController = new ListDoacoesController();
const deleteDoacaoController = new DeleteDoacaoController();
const updateDoacaoController = new UpdateDoacaoController()

doacoesRouter.post('/', createDoacaoController.handle);

doacoesRouter.get('/', listDoacoesController.handle);

doacoesRouter.delete('/', deleteDoacaoController.handle);

doacoesRouter.put('/', updateDoacaoController.handle);

export { doacoesRouter }