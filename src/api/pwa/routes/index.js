import {Router} from  'express';
import config from '../../../config/config';

//FIC: aqui se agregan los import de cada router de api que se cree
//-----------------------------------------------------------------
import institutesRoutes from '../routes/institutes.routes';
const routerAPI = (app) => {

    const router = Router();

    const api = config.API_URL;

    app.use(api,router);

    router.use('/pwa/institutes', institutesRoutes);

    //Aqui se agrega la ruta de toda API nueva que se agregue.
    //--------------------------------------------------------
    return router;
};

module.exports = routerAPI;