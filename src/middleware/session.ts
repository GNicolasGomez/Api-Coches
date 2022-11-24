import { NextFunction, Request, Response} from "express";
import { Jwt, JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request {
    user?: string | JwtPayload 
}

const checkJwt = (req: RequestExt, res: Response, next:NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        console.log(isUser);
        // Verificamos que tenga una sesion valida o que no se haya venncido el token 
        if(!isUser) return res.status(401).send({msg:'NO_TIENES_UN_JWT_VÁLIDO'});


        req.user= isUser
        console.log({jwtByUser});
        next()
        
    } catch (error) {
        console.log(error);
        res.status(400).send('SESSION_NO_VALIDA');
    }
}

export {
    checkJwt
}