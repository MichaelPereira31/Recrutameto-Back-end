
import { getCustomRepository } from "typeorm";
import Address from "../typeorm/entities/Address";
import AddressRepository from "../typeorm/repository/AddressRepository";

interface IRquest{
    id: string;
}

export default class ShowAddresService{
    public async execute({id}:IRquest):Promise<Address>{

        const addressRepository = getCustomRepository(AddressRepository)

        const address = await addressRepository.findById(id)

        

        if(!address){
            throw new Error('endereço não encontrado')
        }
        return address
    }
}