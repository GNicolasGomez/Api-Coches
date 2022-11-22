import express from 'express';
import { Request, Response } from 'express';
import { getItems, getItem , postItem, updateItem, deleteItem } from '../controllers/item.controller';
const router = express.Router();

/**
 * http://localhost:3001/items [GET]
*/
router.get('/', getItems);

/**
 * http://localhost:3001/items/:id [GET]
*/
router.get('/:id', getItem);


/**
 * http://localhost:3000/item [POST]
 */
router.post('/', postItem);



/**
 * http://localhost:3000/item/:id [UPDATE]
 */
 router.put('/:id', updateItem);



 /**
 * http://localhost:3000/item/:id [DELETE]
 */
 router.delete('/:id', deleteItem);




export {router}