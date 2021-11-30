import { getCustomRepository } from "typeorm";
import Address from "../typeorm/entities/Address";
import AddressRepository from "../typeorm/repository/AddressRepository";



interface IRequest {
    id: string;
}


export default class RemoveAddresService {
    public async execute({ id }: IRequest): Promise<void | undefined> {
        const addressRepository = getCustomRepository(AddressRepository)

        const address = await addressRepository.findOne(id)

        if (!address) {
            throw new Error("endereço não encontrado")
        }

        await addressRepository.delete(address)



    }
}