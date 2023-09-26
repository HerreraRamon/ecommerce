//Commerce
import { Router } from 'express';
import * as prodServController from '../controllers/prodServ.controller';
const router = Router();
//ficRouter.get('/list', ProdServController.getProdServList);
router.get('/', prodServController.getProdServList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get('/:id', prodServController.getProdServItem);
export default router;

router.post('/', prodServController.postProdServItem);

router.put('/:id', prodServController.putProdServItem);

router.delete('/:id', prodServController.deleteProdServItem);