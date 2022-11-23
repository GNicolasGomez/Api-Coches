import { Request, Response } from "express";
import { Car } from "../interfaces/car.interface";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.services";
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


const updateItem = async ({params, body} :Request, res:Response) => {
    try {
        const {id} = params;
        const response = await updateCar(id, body);
        res.send(response);
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


const deleteItem = async ({params}:Request, res:Response) => {
    try {
        const {id} = params;
        const response = await deleteCar(id);
        const data = response ? response : 'NOT_FOUND';
        res.send(data);
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