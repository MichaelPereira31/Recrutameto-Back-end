import {Request,Response} from "express"
import CreatePontoService from "../services/CreatePontoService"
import ListPontoService from "../services/ListPontoService"
import RemovePontoService from "../services/RemovePontoService"

export default class PontoController{
    
    public async index(request: Request, response: Response): Promise<Response>{
        const listPonto = new ListPontoService()
        
        const pontos = await listPonto.execute()
        
        return response.json(pontos)
    }

    public async create(request: Request, response: Response):Promise<Response>{
        const {endereco_id,cliente_id} = request.body
        const createPonto = new CreatePontoService()
        console.log(endereco_id)
        const ponto = await createPonto.execute({
            endereco_id,
            cliente_id
        })
        console.log(ponto)
        return response.json(ponto)
    }

    public async remove(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const removePonto = new RemovePontoService()
        
        const ponto = await removePonto.execute({id})
        
        return response.json(ponto)
    }
}