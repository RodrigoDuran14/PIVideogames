import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_BY_ID,
  GET_VIDEOGAME_BY_NAME,
  GET_GENRES,
  FILTER_BY_GENRE,
  FILTER_BY_ORIGIN,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  POST_VIDEOGAME,
} from "../actions/action_types.js";

const initialState = {
  videogames: [],
  allVideogames: [],
  gamesDetails: [],
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };

    case GET_VIDEOGAME_BY_ID:
      return {
        ...state,
        gamesDetails: action.payload,
      };

    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case FILTER_BY_GENRE:
      const allGames = state.allVideogames;
      const genreFilter =
        action.payload === "All"
          ? allGames
          : allGames.filter((g) => g.genres.includes(action.payload));
      return {
        ...state,
        videogames: genreFilter,
      };

    case FILTER_BY_ORIGIN:
      const originGame = state.allVideogames;
      const originFilter =
        action.payload === "created"
          ? originGame.filter((g) => g.createdInDb)
          : originGame.filter((g) => !g.createdInDb);
      return {
        ...state,
        videogames:
          action.payload === "All" ? state.allVideogames : originFilter,
      };

    case ORDER_BY_NAME:
      let sortedByName =
        action.payload === "ASC"
          ? state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortedByName,
      };

    case ORDER_BY_RATING:
      let sortedByRating =
        action.payload === "ASC"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortedByRating,
      };

    default:
      return state;
  }
};

export default rootReducer;
