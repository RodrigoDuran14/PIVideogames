const { Router } = require("express");
const {
  getVideoGames,
  getVideogamesById,
  postVideogames,
} = require("../handlers/videogameHandler");

const router = Router();

router.get("/", getVideoGames);
router.get("/:id", getVideogamesById);
router.post("/", postVideogames);

module.exports = router;
