import { Router } from 'express';
import { CreatePessoaController } from '../controllers/CreatePessoaController';
import { DeletePessoaController } from '../controllers/DeletePessoaController';
import { ListPessoasController } from '../controllers/ListPessoasController';
import { UpdatePessoaController } from '../controllers/UpdatePessoaController';

const pessoasRouter = Router();

const createPessoaController = new CreatePessoaController();
const listPessoasController = new ListPessoasController();
const deletePessoaController = new DeletePessoaController();
const updatePessoaController = new UpdatePessoaController()

pessoasRouter.post('/', createPessoaController.handle);

pessoasRouter.get('/', listPessoasController.handle);

pessoasRouter.delete('/', deletePessoaController.handle);

pessoasRouter.put('/', updatePessoaController.handle);

export { pessoasRouter }