import { Router } from "express";
import ContratoController from "../controller/ContratoController";



const contratoRouters = Router();
const contratoController = new ContratoController()



contratoRouters.get('/:id', contratoController.show)
contratoRouters.get('/', contratoController.index)
contratoRouters.post('/', contratoController.create)
contratoRouters.delete('/:id', contratoController.remove)


export default contratoRouters