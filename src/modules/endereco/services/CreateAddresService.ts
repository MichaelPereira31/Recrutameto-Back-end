import { getCustomRepository } from "typeorm";
import Address from "../typeorm/entities/Address";
import AddressRepository from "../typeorm/repository/AddressRepository";

interface IRequest{
    logradouro: string;
    bairro: string;
    numero: number;
}
export default class CreateAddresService{
    public async execute({logradouro,bairro,numero}:IRequest): Promise<Address>{
        const addressRepository = getCustomRepository(AddressRepository)

        const address = await addressRepository.create({
            logradouro,
            bairro,
            numero
        })

        await addressRepository.save(address)

        return address
    }
}