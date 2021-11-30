import { getCustomRepository } from "typeorm";
import Ponto from "../typeorm/entities/Ponto";
import PontoRepository from "../typeorm/repository/PontoRepository";


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

export default class ListPontoService {
    public async execute(): Promise<any> {
        const pontoRepository = getCustomRepository(PontoRepository)
        const pontos = await pontoRepository.find(
            { relations: ['cliente_id', 'endereco_id'] }
        );
        const dados = {
            dados: pontos.map((ponto) => {

                var client: IClient = Object(ponto.cliente_id);
                var endereco: IEndereco = Object(ponto.endereco_id);

                return {
                    id: ponto.id,
                    cliente_id: client.id,
                    cliente_nome: client.nome,
                    cliente_tipo: client.tipo,
                    endereco_id: endereco.id,
                    endereco_logradouro: endereco.logradouro,
                    endereco_bairro: endereco.bairro,
                    endereco_numero: endereco.numero
                }
            }),

        }

        return dados
    }
}