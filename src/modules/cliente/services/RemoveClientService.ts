import { getCustomRepository } from "typeorm";
import { Client } from "../typeorm/entities/Client";

import { ClientRepository } from "../typeorm/repository/ClienteRepository";


interface IRequest {
    id: string
}

export default class RemoveClientService {
    public async execute({ id }: IRequest): Promise<Client> {
        const clientRepository = getCustomRepository(ClientRepository)

        const client = await clientRepository.findOne(id)

        if (!client) {
            throw new Error('cliente não encontrado')
        }

        await clientRepository.remove(client)

        return client
    }
}