import { Router } from "express";
import { methodHTTP as productosController } from "../controllers/productos.controllers.js";

const router = Router();

// Ruta para obtener productos y actualizar productos
router.get("/", productosController.getProductos);
router.put("/:id", productosController.putProducto);

export default router;
