import { Router } from "express";
import { crearProducto, obtenerProducto, obtenerProductos, borrarProducto, editarProducto } from "../controllers/productoController";
import { check } from "express-validator";

const router = Router();

//path y callback a ejecutar cuando se haga esta petición
router.route('/productos').get(obtenerProductos).
  post([check("nombreProducto").
  notEmpty().withMessage('El nombre del producto es obligatorio').
  isLength({min: 2, max: 100}).
  withMessage('El nombre del producto debe tener en 2 y 100 caracteres')
], crearProducto);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(editarProducto);
export default router;