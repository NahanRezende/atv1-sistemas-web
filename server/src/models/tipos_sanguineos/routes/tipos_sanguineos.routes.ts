import { Router } from 'express';
import { CreateTipoSanguineoController } from '../controllers/CreateTipoSanguineoController';
import { DeleteTipoSanguineoController } from '../controllers/DeleteTipoSanguineoController';
import { ListTiposSanguineosController } from '../controllers/ListTiposSanguineosController';
import { UpdateTipoSanguineoController } from '../controllers/UpdateTipoSanguineoController';

const tiposSanguineosRouter = Router();

const createTipoSanguineoController = new CreateTipoSanguineoController();
const listTiposSanguineosController = new ListTiposSanguineosController();
const deleteTipoSanguineoController = new DeleteTipoSanguineoController();
const updateTipoSanguineoController = new UpdateTipoSanguineoController()

tiposSanguineosRouter.post('/', createTipoSanguineoController.handle);

tiposSanguineosRouter.get('/', listTiposSanguineosController.handle);

tiposSanguineosRouter.delete('/', deleteTipoSanguineoController.handle);

tiposSanguineosRouter.put('/', updateTipoSanguineoController.handle);

export { tiposSanguineosRouter }