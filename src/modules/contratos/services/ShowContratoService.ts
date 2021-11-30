import { getCustomRepository } from "typeorm";
import PontoRepository from "../../ponto/typeorm/repository/PontoRepository";
import Contratos from "../typeorm/entities/Contratos";
import ContratosRepository from "../typeorm/repository/ContratoRepository";

interface IRequest {
    id: string;
}
interface IClient {
    id: string;
    nome: string;
    tipo: string;
}

interface IEndereco {
    id: string;
    logradouro: string;
    bairro: string;
    numero: string;
}
export default class ShowContratoService {
    public async execute({ id }: IRequest): Promise<any> {
        const contratoRepository = getCustomRepository(ContratosRepository)
        const pontoRepository = getCustomRepository(PontoRepository)

        const contrato = await contratoRepository.findOne(id, { relations: ['ponto_id'] })
        const pontos = await pontoRepository.findOne(contrato.ponto_id["id"], { relations: ['endereco_id', 'cliente_id'] })

        const dados = {
            id: contrato.id,
            cliente_id: pontos.cliente_id["id"],
            cliente_nome: pontos.cliente_id["nome"],
            cliente_tipo: pontos.cliente_id["tipo"],
            endereco_id: pontos.endereco_id["id"],
            endereco_logradouro: pontos.endereco_id["logradouro"],
            endereco_bairro: pontos.endereco_id["bairro"],
            endereco_numero: pontos.endereco_id["numero"]

        }
        console.log(contrato.ponto_id["id"])





        if (!contrato) {
            throw new Error("contrato não encontrado")
        }

        return dados
    }
}