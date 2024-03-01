import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarProducto = [
    check("codigo")
      .notEmpty()
      .withMessage("El código del producto es obligatorio")
      .isLength({ min: 2, max: 4 })
      .withMessage(
        "El código del producto debe tener entre 2 y 4 caracteres como máximo"
      ),
    check("descripcion")
      .notEmpty()
      .withMessage("La descripción del producto es obligatoria")
      .isLength({ min: 2, max: 100 })
      .withMessage(
        "La descripción del producto debe tener entre 2 y 100 caracteres como maximo"
      ),
    check('costo')
        .notEmpty()
        .withMessage('El costo es un dato obligatorio')
        .isNumeric()
        .withMessage('El costo debe ser un número')
        .custom(((value)=>{
          if( value >= 1 && value<=100000){
            return true;
          }else{
            throw new Error('El precio debe estar entre 1 y 100000')
          }
        })),
    check('imagen')
        .notEmpty()
        .withMessage('La url de la imagen es obligatoria')
        .matches(/(https?:\/\/.*\.(?:png|jpeg))/)
        .withMessage('Debe ser una URL de imagen valida, con extension (png|jpeg) '),
    check('categoria')
    .notEmpty()
    .withMessage('La categoria es obligatoria'),
    check('marca')
      .notEmpty()
      .withMessage('La Marca es un dato obligatorio')
      .isLength({ min: 2, max: 100 })
      .withMessage(
        "La Marca del producto debe tener entre 2 y 100 caracteres como maximo"
      ),
    check('cantidad')
      .notEmpty()
      .withMessage('La cantidad es un dato obligatorio')
      .isNumeric()
      .withMessage('La cantidad debe ser un número')
      .custom(((value)=>{
        if( value >= 0 && value<=1000){
          return true;
        }else{
          throw new Error('La cantidad debe estar entre 0 y 1000')
        }
      })),
      check('talle')
      .notEmpty()
      .withMessage('El talle es un dato obligatorio')
      .isLength({ min: 2, max: 100 })
      .withMessage(
        "El talle del producto debe tener entre 1 y 5 caracteres como maximo"
      ),
      check('color')
      .notEmpty()
      .withMessage('El color es un dato obligatorio')
      .isLength({ min: 2, max: 100 })
      .withMessage(
        "El color del producto debe tener entre 1 y 15 caracteres como maximo"
      ),
    (req, res, next )=>{ resultadoValidacion(req, res, next) }
  ]

  export default validarProducto;