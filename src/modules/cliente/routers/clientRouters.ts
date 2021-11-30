import { Router } from "express";
import ClientController from "../controller/clientController";


const clientRouters = Router();
const clientController = new ClientController()

clientRouters.get('/', clientController.index)

clientRouters.get('/:id', clientController.show)

clientRouters.post('/', clientController.create)

clientRouters.put('/:id', clientController.update)

clientRouters.delete('/:id', clientController.remove)


export default clientRouters