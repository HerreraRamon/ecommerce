import {Router} from 'express';
import * as institutesController from '../controllers/institutes.controller'

const router = Router();
router.get('/',institutesController.getInstitutesAll);
//router.post()
//router.put()
//router.delete()

export default router;