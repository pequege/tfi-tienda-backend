import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next)=>{
    const errors = validationResult(req);
    //errors.isEmpty(); es true cuando no hay errores, caso contrario devuelve false
    //si hay errores
    if(!errors.isEmpty()){
      return res.status(400).json({
        errores: errors.array()
      })
    }
    next();
}

export default resultadoValidacion;