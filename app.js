//1. Declarar e iniciar las librerías necesarias.
const express = require('express');
const cors = require('cors');

//2. Importar las variables necesarias.
const db = require('./db/conexion'); //Importando la conexión a DB.

//3. Realizar la conexión a la base de datos.
db.conectarDB();

//4. Almacenar el servidor.
const app = express();

//5. Establecer el directorio público.
app.use(express.static("./public"));

//6. Setear express (Configurar las cabeceras).
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//7. Obtener las rutas.
var personajeRutas = require('./routes/personaje');

//8. Cargar las rutas al servidor.
app.use("/api/personaje", personajeRutas);

//9. Cargar la ruta Not Found.
app.get("*", function(request, response) {
    
});

module.exports = app; //Exportando el servidor.