import { Router } from "express";
import PontoController from "../controller/PontoController";



const pontoRouters = Router();
const ponotController = new PontoController()

pontoRouters.get('/', ponotController.index)
pontoRouters.post('/', ponotController.create)
pontoRouters.delete('/:id', ponotController.remove)


export default pontoRouters