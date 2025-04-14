import express from "express";
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js";

const app = express();

// Middleware para que express pueda interpretar JSON en las solicitudes
app.use(express.json());

// Setear un puerto a mi servidor web
app.set("port", 5000);
app.use(cors());

// Rutas
app.use("/api/categorias", categoriaRoutes);

// Hago disponible a mi servidor para toda la aplicación
export default app;
