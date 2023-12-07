const PersonajeControlador = require('../controllers/personaje'); 

const express = require('express');
var router = express.Router();

router.get("/test-get", PersonajeControlador.testGet);
router.post("/test-post", PersonajeControlador.testPost);
router.get("/get-personajes/:limite?", PersonajeControlador.getPersonajes);

module.exports = router;