import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entities/Client";

@EntityRepository(Client)
export class ClientRepository extends Repository<Client>{
    public async findById(id: string): Promise<Client | undefined> {
        const cliente = await this.findOne({
            where:{
                id
            }
        });
        return cliente
    }

    public async findByName(nome: string): Promise<Client | undefined>{
        const cliente = await this.findOne({
            where: { 
                nome
            }
        });
        return cliente
    }

    public async findByType(tipo: any): Promise<Client | undefined>{
        const cliente = await this.findOne({
            where: { 
                tipo
            }
        });
        return cliente
    }
}