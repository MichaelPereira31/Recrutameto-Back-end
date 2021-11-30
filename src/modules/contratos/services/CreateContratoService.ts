import { getCustomRepository } from "typeorm";
import Contratos from "../typeorm/entities/Contratos";
import ContratosRepository from "../typeorm/repository/ContratoRepository";

interface IRequest{
    ponto_id:any
}

export default class CreateContratoService{
    public async execute({ponto_id}:IRequest):Promise<Contratos>{
        const contratoRepository = getCustomRepository(ContratosRepository)

        const contrato = await contratoRepository.create({
           ponto_id,
        })

        await contratoRepository.save(contrato)

        return contrato
    }
}