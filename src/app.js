//importo al framework express
import express from "express";

//asigno a app toda funcionalidad para mi server web
const app = express();

//setear un puerto a mi web server
app.set("port",5000)

//hago disponible a mi server app para toda la aplicacion
export default app;