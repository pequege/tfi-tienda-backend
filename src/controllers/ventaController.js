import { validationResult } from 'express-validator';
import Venta from '../models/venta';

export const obtenerVentas = async (req, res) => {
    try {
        const ventas = await Producto.find();
        res.status(200).json(ventas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las ventas',
        });
    }
};
export const obtenerVenta = async (req, res) => {
    try {
        const venta = await Venta.findById(req.params.id)
        res.status(200).json(venta);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error no se encontro la venta solicitada',
        });
    }
};

export const crearVenta = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty){
            return res.status(400).json({
                errores : errors.array()
            })
        }
        const ventaNueva = new Venta(req.body);
        await ventaNueva.save();
        res.status(201).json({
            mensaje: 'La venta se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear la venta',
        });
    }
};

export const borrarVenta = async (req, res) => {
    try {
        await Venta.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La venta se eliminó correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error no se pudo eliminar la venta',
        });
    }
}
/* 
export const editarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'El producto fue editado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar editar el producto',
        });
    }
} */
