
import { Router } from "express";
import { methodHTTP as empleadosController } from "../controllers/empleados.controllers.js";

const router = Router();

// Ruta para obtener empleados
router.get("/", empleadosController.getEmpleados);

export default router;

