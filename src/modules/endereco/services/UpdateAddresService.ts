import { getCustomRepository } from "typeorm";
import Address from "../typeorm/entities/Address";
import AddressRepository from "../typeorm/repository/AddressRepository";

interface IRquest{
    id: string;
    logradouro:string;
    bairro:string;
    numero:number;
}

export default class UpdateAddresService{
    public async execute({id,logradouro,bairro,numero}:IRquest): Promise<Address>{
        const addressRepository = getCustomRepository(AddressRepository)

        const address = await addressRepository.findById(id)

        if(!address){
            throw new Error("Endereço não encontrado")
        }

        address.logradouro = logradouro
        address.bairro = bairro
        address.numero = numero

        await addressRepository.save(address)

        return address
    }
}