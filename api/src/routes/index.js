const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogame = require("./videogame");
const genre = require("./genre");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/games", videogame);
router.use("/genres", genre)

module.exports = router;
