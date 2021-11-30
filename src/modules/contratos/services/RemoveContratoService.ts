import { getCustomRepository } from "typeorm";
import ContratosRepository from "../typeorm/repository/ContratoRepository";

interface IRequest {
    id: string
}
export default class RemoveContratoService {
    public async execute({ id }: IRequest): Promise<void> {
        const contratoRepository = getCustomRepository(ContratosRepository)
        const contrato = await contratoRepository.findOne(id)

        if (!contrato) {
            throw new Error("contrato não encontrado")
        }

        await contratoRepository.remove(contrato)

    }
}