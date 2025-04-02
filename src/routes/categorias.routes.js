import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";
//creamos el enrutador
const router = Router();
//get se configuro respuesta desde server metodo http get
router.get("/", categoriaController.getCategorias
)

//se hace disponible a router en toda la app
export default router;