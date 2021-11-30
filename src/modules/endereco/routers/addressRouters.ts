import { Router } from "express";
import AddressController from "../controller/addressController";



const addressRouters = Router();
const addressController = new AddressController()

addressRouters.get('/', addressController.index)
addressRouters.get('/:id', addressController.show)
addressRouters.post('/', addressController.create)
addressRouters.put('/:id', addressController.update)
addressRouters.delete('/:id', addressController.remove)



export default addressRouters