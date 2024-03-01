import { validationResult } from 'express-validator';
import Producto from '../models/producto';

export const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();//FIND trae toda la colección de productos
        res.status(200).json(productos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los productos',
        });
    }
};
export const obtenerProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id)
        res.status(200).json(producto);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error no se encontro el producto',
        });
    }
};

export const crearProducto = async (req, res) => {
    try {
        // console.log(req.body);
        const errors = validationResult(req);
        if(!errors.isEmpty){
            return res.status(400).json({
                errores : errors.array()
            })
        }
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: 'El producto se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear el producto',
        });
    }
};

export const borrarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El producto fue eliminado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error no se pudo eliminar el producto',
        });
    }
}

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
}
