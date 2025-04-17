import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

// Crear un enrutador
const router = Router();

// Definir la ruta para obtener categorías
router.get("/", categoriaController.getCategorias);//para crud - read
router.post("/", categoriaController.postCategorias);// para crud - create
//Ruta que recibe un parametro
router.get("/:id", categoriaController.getCategory);//para crud - read como updaate READ 1 sola fila
//ruta que recibe parametro id de categoria a borrar
router.delete("/:id", categoriaController.deletegetCategory);//para crud - delete 1 sola fila


export default router;
