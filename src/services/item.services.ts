import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item.models"


const insertCar = async (item: Car) => {
    const responseIsert = await ItemModel.create(item);
    return responseIsert;
}

const getCars = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
}
const getCar = async (id:string) => {
    const responseItem = await ItemModel.findOne({_id: id});
    return responseItem;
}

export { insertCar, getCars, getCar }