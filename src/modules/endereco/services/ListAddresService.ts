import { getCustomRepository } from "typeorm";
import Address from "../typeorm/entities/Address";
import AddressRepository from "../typeorm/repository/AddressRepository";

export default class ListAddresService{
    public async execute():Promise<any>{
        const listAddress = getCustomRepository(AddressRepository)

        const address = await listAddress.find()
        const dados = {dados:address}
        return dados
    }
}