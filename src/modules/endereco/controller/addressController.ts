import { Request, Response } from "express";
import CreateAddresService from "../services/CreateAddresService";
import ListAddresService from "../services/ListAddresService";
import RemoveAddresService from "../services/RemoveAddresService";
import ShowAddresService from "../services/ShowAddresService";
import UpdateAddresService from "../services/UpdateAddresService";

export default class AddressController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listAddress = new ListAddresService()
        const address = await listAddress.execute()

        return response.json(address)

    }
    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const showAddress = new ShowAddresService()
        const address = await showAddress.execute(id)

        return response.json(address)

    }


    public async create(request: Request, response: Response): Promise<Response> {
        const { logradouro, bairro, numero } = request.body;
        const createAddress = new CreateAddresService()

        const address = await createAddress.execute({
            logradouro,
            bairro,
            numero
        })

        return response.json(address)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { logradouro, bairro, numero } = request.body;
        const updateAddress = new UpdateAddresService()
        const address = await updateAddress.execute({
            id,
            logradouro,
            bairro,
            numero
        })

        return response.json(address)
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const removeAddress = new RemoveAddresService()
        const address = await removeAddress.execute(id)

        return response.json(address)

    }
}