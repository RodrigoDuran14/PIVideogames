const { Router } = require("express");
const axios = require("axios")
const {
  getAllVideoGames,
  getVideogamesById,
  postVideogames,
} = require("../handlers/videogameHandler");

const router = Router();

router.get("/", getAllVideoGames);
router.get("/:id", getVideogamesById);
router.post("/", postVideogames);

module.exports = router;
