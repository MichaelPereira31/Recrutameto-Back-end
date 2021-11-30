import { getCustomRepository } from "typeorm";
import Contratos from "../typeorm/entities/Contratos";
import ContratosRepository from "../typeorm/repository/ContratoRepository";

interface IRequest{
    id: string;
}
export default class ShowContratoService{
    public async execute({id}:IRequest):Promise<Contratos>{
        const contratoRepository = getCustomRepository(ContratosRepository)

        const contrato = await contratoRepository.findById(id)
      
        if(!contrato){
            throw new Error("contrato não encontrado")
        }

        return contrato
    }
}