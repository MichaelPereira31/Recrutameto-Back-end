import { getCustomRepository } from "typeorm";
import Address from "../typeorm/entities/Address";
import AddressRepository from "../typeorm/repository/AddressRepository";



interface IRequest{
    id:string;
}


export default class RemoveAddresService{
    public async execute({id}:IRequest): Promise<Address | undefined> {
        const addressRepository = getCustomRepository(AddressRepository)

        const address = await addressRepository.findOne(id)

        if(!address){
            throw new Error(`Product not found`)
        }

        await addressRepository.delete(address)

        return address

    }
}