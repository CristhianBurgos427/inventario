import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

// Crear un enrutador
const router = Router();

// Definir la ruta para obtener categorías
router.get("/", categoriaController.getCategorias);

export default router;
