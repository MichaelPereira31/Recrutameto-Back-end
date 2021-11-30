import { EntityRepository, Repository } from "typeorm";
import Ponto from "../entities/Ponto";

@EntityRepository(Ponto)
export default class PontoRepository extends Repository<Ponto>{
    public async finById(id: string): Promise<Ponto>{
        const ponto = await this.findOne({
            where: {
                id
            }
        })
        return ponto
    }
}