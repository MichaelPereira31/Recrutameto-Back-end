import { Request, Response } from "express";
import CreateClientService from "../services/CreateClientService";
import ListClientService from "../services/ListClientService";
import RemoveClientService from "../services/RemoveClientService";
import showClientService from "../services/showClientService";
import UpdateClienteService from "../services/UpdateClientService";



export default class ClientController {

    public async index(request: Request, response: Response): Promise<Response> {

        const listClients = new ListClientService();

        const clients = await listClients.execute()

        return response.json(clients)
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { nome, tipo } = request.body

        const createCliente = new CreateClientService()

        const cliente = await createCliente.execute({
            nome,
            tipo
        })

        return response.status(201).json(cliente)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const listClients = new showClientService();

        const clients = await listClients.execute(id)

        return response.json(clients)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { nome, tipo } = request.body

        const updateClient = new UpdateClienteService()

        const client = await updateClient.execute({
            id,
            nome,
            tipo
        })

        return response.status(201).json(client)
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const removClients = new RemoveClientService();

        const clients = await removClients.execute(id)

        return response.status(204).json(clients)
    }

}