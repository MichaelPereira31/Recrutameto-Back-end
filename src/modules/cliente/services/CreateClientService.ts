import { getCustomRepository } from "typeorm";
import { Client } from "../typeorm/entities/Client";
import { ClientRepository } from "../typeorm/repository/ClienteRepository";

interface IRquest {
    nome: string;
    tipo: any;
}
export default class {
    public async execute({ nome, tipo }: IRquest): Promise<Client> {
        const clientRepository = getCustomRepository(ClientRepository)

        const clienteExiste = await clientRepository.findByName(nome)


        if (clienteExiste) {
            throw new Error(`Cliente ${nome} already exists`)
        }

        const client = await clientRepository.create({
            nome,
            tipo
        })

        await clientRepository.save(client)

        return client
    }
}