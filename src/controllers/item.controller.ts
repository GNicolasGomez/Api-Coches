import { Request, Response } from "express";
import { insertCar, getCars, getCar } from "../services/item.services";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({params}:Request, res:Response) => {
    try {
        const {id} = params;
        const response = await getCar(id);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }

}

const getItems = async (req:Request, res:Response) => {
    try {
        const responseItems = await getCars();
        res.send(responseItems);
    } catch (error) {
        res.status(500);
        res.send('ERROR_GET_ITEMS');
    }

}


const updateItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEMS');
    }

}

const postItem = async ({body} :Request, res:Response) => {
    try {
        const responseItem =  await insertCar(body);
        console.log(responseItem);
        res.send(responseItem);

    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM',e);
    }

}


const deleteItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }

}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}