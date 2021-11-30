import {Request,Response} from 'express'
import CreateContratoService from '../services/CreateContratoService'
import ShowContratoService from '../services/ShowContratoService';

export default class ContratoController{
    public async create(request:Request, response:Response):Promise<Response>{
        const {ponto_id} = request.body;
        const createContrato = new CreateContratoService()

        const contrato = await createContrato.execute({
            ponto_id
        })

        return response.json(contrato);
    }

    public async show(request:Request, response:Response):Promise<Response> {
        const {id} = request.params

        const showContrato = new ShowContratoService()
        const contrato = showContrato.execute({id})
        return response.json(contrato)
    }
}