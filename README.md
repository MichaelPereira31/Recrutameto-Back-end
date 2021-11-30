1. Para rodar a apicação basta ter o docker-compose intalado e rodar o seguinte comando `docker-compose up -d --build`
    PROJECT_NAME=teste # nome do projeto
    POSTGRES_USER=postgres # user do postgres
    POSTGRES_PASSWORD=root # password do postgres
    POSTGRES_DB=postgres # nome do banco
2.No fim desse processo, o servidor estará rodando na url: http://localhost:3333

3. Para ter acesso as rotas basta utilizar as seguintes URL com os seus respctivos methods
Clientes
    http://localhost:3333/api/v1/clientes
Endereços
    http://localhost:3333/api/v1/enderecos
Pontos
    http://localhost:3333/api/v1/pontos
Contratos
    http://localhost:3333/api/v1/contratos
