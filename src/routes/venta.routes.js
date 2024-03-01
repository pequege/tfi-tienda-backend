import { Router } from "express";
import { borrarVenta, obtenerVenta, obtenerVentas } from "../controllers/ventaController";
import { check } from "express-validator";

const router = Router();

//path y callback a ejecutar cuando se haga esta petición
router.route('/ventas').get(obtenerVentas).
  post([check("codigo").
  notEmpty().withMessage('El id de venta es obligatorio').
  isLength({min: 1, max: 10}).
  withMessage('El id de venta debe tener en 1 y 10 caracteres')
], crearProducto);
router
  .route("/venta/:id")
  .get(obtenerVenta)
  .delete(borrarVenta)
export default router;