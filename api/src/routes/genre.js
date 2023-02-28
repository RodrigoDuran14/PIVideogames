const { Router } = require("express");
const { getAllGenres } = require("../handlers/genreHandler");

const router = Router();

router.get("/", getAllGenres);

module.exports = router;
