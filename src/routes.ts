import { Router } from "express";
import clientRouters from "./modules/cliente/routers/clientRouters";
import contratoRouters from "./modules/contratos/routers/contratoRouters";
import addressRouters from "./modules/endereco/routers/addressRouters";
import pontoRouters from "./modules/ponto/routers/PontoRouters";

const routers = Router();

routers.use('/api/v1/clientes',clientRouters)
routers.use('/api/v1/enderecos',addressRouters)
routers.use('/api/v1/pontos',pontoRouters)
routers.use('/api/v1/contratos',contratoRouters)

routers.get('/',() =>{
    console.log("olá")
})

export default routers
