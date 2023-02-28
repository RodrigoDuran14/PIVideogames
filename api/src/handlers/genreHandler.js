const {allGenres, verifyDb} = require("../controllers/genresControllers")

const getAllGenres = async (req, res, next) => {
  try {
    verifyDb()
    const dbGenres = await allGenres();
    res.send(dbGenres)
  } catch (error) {
    next(error)
  }
};

module.exports = { getAllGenres };
