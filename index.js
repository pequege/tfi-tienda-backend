import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import 'dotenv/config'
import './src/database/dbConnection'
import productosRouter from "./src/routes/producto.routes";
//inicializamos express
const app = express();
//usar un puerto

app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev')); //provee un "console.log" de las peticiones al server
app.use(cors()); //permitir conexiones remotas
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
//rutas
app.use('/apitienda', productosRouter);
//loop del servidor
app.listen(app.get('port'), ()=>{
    console.log("estoy en el puerto " + app.get('port'));
})