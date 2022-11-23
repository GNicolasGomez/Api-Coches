import express from 'express';
import { Request, Response } from 'express';
import { loginCtrl, registerCtrl } from '../controllers/auth.controller';

const router = express.Router();


/**
 * http://localhost:3000/auth/register [POST]
 */

router.post('/register',registerCtrl);
router.post('/login', loginCtrl)




export {router}