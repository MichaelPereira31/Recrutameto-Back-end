import { getCustomRepository } from "typeorm";
import { Client } from "../typeorm/entities/Client";
import { ClientRepository } from "../typeorm/repository/ClienteRepository";


export default class ListClientService {
    public async execute(): Promise<any> {

        const clientRepository = getCustomRepository(ClientRepository)

        const clients = await clientRepository.find()
        const dados = { dados: clients }

        return dados
    }
}
