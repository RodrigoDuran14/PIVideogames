const { Router } = require("express");
const axios = require("axios");
const { getAllGenres } = require("../handlers/genreHandler");

const router = Router();

router.get("/", getAllGenres);

module.exports = router;
