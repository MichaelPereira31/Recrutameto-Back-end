import { EntityRepository, Repository } from "typeorm";
import Address from "../entities/Address";

@EntityRepository(Address)
export default class AddressRepository extends Repository<Address> {
    public async findById(id:string):Promise<Address> {
        const address = await this.findOne({
            where:{
                id,
            },
        });
        return address;
    }

    public async findByName(lagradouro:string):Promise<Address>{
        const address = await this.findOne({
            where:{
                lagradouro,
            },
        })
        return address
    }
}