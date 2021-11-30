import {Request,Response} from 'express'
import ListPontoService from '../../ponto/services/ListPontoService';
import CreateContratoService from '../services/CreateContratoService'
import RemoveContratoService from '../services/RemoveContratoService';
import ShowContratoService from '../services/ShowContratoService';

export default class ContratoController{

    public async index(request:Request, response:Response):Promise<Response> {
        

        const listContrato = new ListPontoService()
        const contrato = await listContrato.execute()
        return response.json(contrato)
    }

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
        const contrato = await showContrato.execute({id})
        return response.json(contrato)
    }

    public async remove(request:Request, response:Response):Promise<Response> {
        const {id} = request.params

        const removeContrato = new RemoveContratoService()
        const contrato = await removeContrato.execute({id})
        return response.json(contrato)
    }
}