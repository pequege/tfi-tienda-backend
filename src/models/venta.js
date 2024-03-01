import { Schema, model } from "mongoose";

const lineaVentaSchema = new Schema({
  codigoProducto: {
    minLength: 1,
    maxLength: 5,
    required: true,
    type: String,
  },
  descripcion: {
    minLength: 2,
    maxLength: 100,
    type: String,
    required: true
  },
  cantidad: {
    min: 1,
    max: 100,
    type: Number,
    required: true
  },
  precio: {
    min: 1,
    max: 100000,
    type: Number,
    required: true
  }
});

const ventaSchema = new Schema({
  codigo: {
    type: String,
    min: 1,
    max: 9999,
    required: true,
    unique: true
  },
  datosCliente: {
    anoExpiracion: {
      type: String,
      required: true
    },
    codigoSeguridad: {
      type: String,
      required: true
    },
    dniTitular: {
      minlength: 7,
      maxlength: 8,
      type: String,
      required: true
    },
    mesExpiracion: {
      type: String,
      required: true,
      validate: {
        validator: function(value) {
          return /^(0[1-9]|1[0-2])$/.test(value);
        },
        message: props => `${props.value} no es un mes de expiración válido. Debe estar entre 01 y 12.`
      }
    },
    nombreTitular: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    numeroTarjeta: {
      type: String,
      required: true,
      validate: {
        validator: function(value) {
          return /^\d{16}$/.test(value);
        },
        message: 'El número de tarjeta debe tener 16 dígitos'
      }
    }
  },
  lineasDeVenta: {
    type: [lineaVentaSchema],
    required: true
  }
})

const Venta = model('venta', ventaSchema);

export default Venta;