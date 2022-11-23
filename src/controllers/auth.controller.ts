import { Request, Response } from "express"
import { registerNewUser, loginUser } from "../services/auth.services"

const registerCtrl = async ({body}:Request, res:Response) => {
    const responses = await registerNewUser(body);
    res.send(responses);

}

const loginCtrl = async ({body}:Request, res:Response) => {
    const {email, password} = body
    const responses = await loginUser({email,password});
    res.send(responses);
} 

export {
    registerCtrl,
    loginCtrl
}