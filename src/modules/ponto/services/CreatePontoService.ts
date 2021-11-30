import { getCustomRepository } from "typeorm";
import Ponto from "../typeorm/entities/Ponto";
import PontoRepository from "../typeorm/repository/PontoRepository";

interface IRequest{
    endereco_id: any;
    cliente_id: any;
}

export default class CreatePontoService{
    public async execute({endereco_id, cliente_id}:IRequest): Promise<Ponto>{
        const pontoRepository = getCustomRepository(PontoRepository)

        const ponto = await pontoRepository.create({
            endereco_id,
            cliente_id
        })

        await pontoRepository.save(ponto)

        return ponto
    }
}