const mongoose = require('mongoose');

var schema = mongoose.Schema;

var PersonajeSchema = schema({
    nombre: String,
    frase: String,
    direccion: String,
    imagen: String
}, {
    collection: "personaje",
    versionKey: false
});

module.exports = mongoose.model("Personaje", PersonajeSchema);