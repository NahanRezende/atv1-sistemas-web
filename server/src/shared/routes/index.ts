import {  doacoesRouter } from '../../models/doacoes/routes/doacoes.routes';
import {  locaisColetaRouter } from '../../models/locais_coleta/routes/locais_coleta.routes';
import { pessoasRouter } from '../../models/pessoas/routes/pessoas.routes';
import { tiposSanguineosRouter } from '../../models/tipos_sanguineos/routes/tipos_sanguineos.routes';
import { Router } from 'express';

const router = Router();

router.use('/doacoes', doacoesRouter);
router.use('/locais-coleta', locaisColetaRouter);
router.use('/pessoas', pessoasRouter);
router.use('/tipos-sanguineos', tiposSanguineosRouter);

export { router };