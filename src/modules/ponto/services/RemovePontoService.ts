import { getCustomRepository } from "typeorm";
import Ponto from "../typeorm/entities/Ponto";
import PontoRepository from "../typeorm/repository/PontoRepository";

interface IRequest{
    id: string;
}

export default class RemovePontoService{
    public async execute({id}:IRequest): Promise<any>{
        const pontoRepository = getCustomRepository(PontoRepository);

        const ponto = await pontoRepository.findOne(id)

        await pontoRepository.remove(ponto)

    }
}