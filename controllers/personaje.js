const Personaje = require('../models/personaje');

var controlador = {};

controlador.testGet = async function(request, response) {
    return response.status(200).send({
        mensaje: "SERVIDOR: Soy Test-Get del controlador Personaje" 
    });
}

controlador.testPost = async function(request, response) {
    return response.status(200).send({
        mensaje: "SERVIDOR: Soy Test-Post del controlador Personaje" 
    });
}

controlador.getPersonajes = async function(request, response) {
    var params = request.params;

    var limite = params.limite; //Esta variable podría ser "undefined".

    Personaje.find({}).sort({}).limit(Number(limite)).exec(function(error, personajesObtenidos) { //NOTA: Cuando se le entrega un parámetro "undefined" a una función Mongoose, la función se anula.
        if (error) return response.status(500).send({mensaje: "SERVIDOR: Error al devolver los datos"});
        if (!personajesObtenidos) return response.status(404).send({mensaje: "SERVIDOR: No hay personajes para mostrar"});

        return response.status(200).send({
            personajes: personajesObtenidos
        });
    });
}

module.exports = controlador;