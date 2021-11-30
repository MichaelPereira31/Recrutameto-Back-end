import { getCustomRepository } from "typeorm";
import Contratos from "../typeorm/entities/Contratos";
import ContratosRepository from "../typeorm/repository/ContratoRepository";

export default class ListContratoService {
    public async execute(): Promise<Contratos[]> {
        const contratoRepository = getCustomRepository(ContratosRepository);

        const contratos = await contratoRepository.find({ relations: ['ponto_id'] })

        return contratos
    }
}