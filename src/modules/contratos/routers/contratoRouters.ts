import { Router } from "express";
import ContratoController from "../controller/ContratoController";



const contratoRouters = Router();
const contratoController = new ContratoController()



contratoRouters.get('/:id', contratoController.show)
contratoRouters.post('/', contratoController.create)


export default contratoRouters