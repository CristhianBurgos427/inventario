import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

// Definir las rutas
router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);
router.get("/:id", categoriaController.getCategory);
router.delete("/:id", categoriaController.deleteCategory);  // Corregido el nombre de la función
router.put("/:id", categoriaController.updateCategorias);

export default router;
