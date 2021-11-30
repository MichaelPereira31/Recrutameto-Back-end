import { getCustomRepository } from "typeorm";
import { Client } from "../typeorm/entities/Client";
import { ClientRepository } from "../typeorm/repository/ClienteRepository";

interface IRequest {
    id: string
}

export default class showClientService {
    public async execute({ id }: IRequest): Promise<Client> {
        const clientRepository = getCustomRepository(ClientRepository)

        const client = await clientRepository.findById(id)

        if (!client) {
            throw new Error('cliente não encontrado')
        }

        return client
    }
}