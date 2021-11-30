import express = require("express");
import "reflect-metadata";

import {createConnection} from "typeorm";
import routers from "./routes";


createConnection()

const app = express();
app.use(express.json());
app.use(routers)

app.listen(3333,() => {
    console.log("server")
})
