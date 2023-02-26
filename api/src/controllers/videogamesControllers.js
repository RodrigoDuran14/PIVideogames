const axios = require("axios")
require('dotenv').config();
const { URL_API, API_KEY } = process.env;

const getApiVideogames = async () => {
  const allgames = []

  let url = `${URL_API}/games?key=${API_KEY}` 

  for(let i = 1; i < 6; i++){
    let pages = await axios.get(url)

    url = pages.data.next;
    
    pages.data.results.map(g =>{
      allgames.push({
        id: g.id,
        name: g.name,
        image: g.background_image,
        genres: g.genres.map(genre => genre.name),
        rating: g.rating,
        platforms: g.platforms.map(p => p.platform.name),
      })
    })
    
  }

  return allgames


  //const games = await axios.get(`${URL_API}/games?key=${API_KEY}`)
//
  //  const filter = allgames.data.results.map(game =>{
  //    return {
  //      id: game.id,
  //    name: game.name,
  //    image: game.background_image,
  //    genres: game.genres.map(g => g.name),
  //    platforms: game.platforms.map(p =>p.platform.name),
  //    rating: game.rating,
  //    released: game.released
  //    }
  //  })
  //  return filter
}


module.exports = {getApiVideogames}