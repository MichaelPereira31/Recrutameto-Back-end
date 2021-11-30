import { send } from "process";
import { getCustomRepository } from "typeorm";
import { Client } from "../typeorm/entities/Client";
import { ClientRepository } from "../typeorm/repository/ClienteRepository";

interface IRquest {
    id: string;
    nome: string;
    tipo: any;
}

export default class UpdateClienteService {
    public async execute({ id, nome, tipo }: IRquest): Promise<Client> {
        const clienteRepository = getCustomRepository(ClientRepository)

        const cliente = await clienteRepository.findById(id)

        if (!cliente) {
            throw new Error("Cliente não encontrado")
        }

        cliente.nome = nome
        cliente.tipo = tipo

        await clienteRepository.save(cliente)

        return cliente
    }
}