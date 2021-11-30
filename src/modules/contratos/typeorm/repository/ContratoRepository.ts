import { EntityRepository, Repository } from "typeorm";
import Contratos from "../entities/Contratos";

@EntityRepository(Contratos)
export default class ContratosRepository extends Repository<Contratos>{
    public async findById(id: string): Promise<Contratos>{
        const contrato = await this.findOne({
            where:{
                id
            }
        })
        return contrato
    }
}