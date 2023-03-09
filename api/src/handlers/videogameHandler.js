const {
  getAllGames,
  getVideogameByName,
  getVideogameById,
} = require("../controllers/videogamesControllers");
const { validatePostVideogame } = require("../controllers/validation");
const { Videogame, Genre } = require("../db");

const getVideoGames = async (req, res, next) => {
  try {
    const { name } = req.query;
    if (name) {
      const resultByName = await getVideogameByName(name);

      resultByName.length
        ? res.send(resultByName)
        : res.status(400).send({
            name: "The name doesn't correspond to an existing videogame, please enter a valid name",
          });
    } else {
      const allGames = await getAllGames();
      res.send(allGames);
    }
  } catch (error) {
    next(error);
  }
};

const getVideogamesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getVideogameById(id);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const postVideogames = async (req, res, next) => {
  try {
      const { name, description, rating, image, platforms, released, genres } =
      req.body;

      validatePostVideogame(req.body);

      const postGame = await Videogame.create({
          name,
          description,
          image,
          rating,
          platforms,
          released,
      });

      const dbgenres = await Genre.findAll({ where:  {name: genres} });

      await postGame.addGenres(dbgenres);

    res.send("post videogame");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getVideoGames,
  getVideogamesById,
  postVideogames,
};
