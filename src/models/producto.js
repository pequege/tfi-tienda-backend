import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    codigo: {
        type: String,
        min: 1,
        max: 9999,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true,
        unique: true
    },
    costo: {
        type: Number,
        min: 1,
        max: 100000,
        required: true
    },
    imagen: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        min: 0,
        max: 1000,
        required: true
    },
    talle: {
        type: String,
        minLength: 1,
        maxLength: 5,
        required: true
    },
    color: {
        type: String,
        minLength: 1,
        maxLength: 15,
        required: true
    },
}, {
    // Opciones del esquema
    toJSON: { getters: true }, // Para que el campo virtual 'precio' se incluya al convertir a JSON
});

productoSchema.virtual('precio').get(function () {
    return (this.costo + (this.costo * 0.5)) * (1 + 0.21);
});

const Producto = model('producto', productoSchema);

export default Producto;
