import {Router} from 'express';
import { getItems } from '../controllers/order.controller';
import { checkJwt } from '../middleware/session';

const router = Router();



/**
 *Esta ruta Pueden Acceder solo las personas que tiene la sesion activa
 *que tengan un jwt valido
 */

 router.get('/',checkJwt, getItems)


export { router }