const validatePostVideogame = (data) => {
  const {name, description, rating, image, platforms, released, genres} = data

  if(!name || !description || !rating || !platforms || !released || !genres){
    throw new Error("All the fields are required")
  }

  //---------name--------------

  if(typeof name !== "string"){
    throw new Error("Name must be a string")
  }

  if(name.length < 3){
    throw new Error("Name must be at least 3 character long");
  }

  if(!/^[a-zA-ZñÑ0-9\s._\-]+$/i.test(name)){
    throw new Error("Name must contain numbers, letters, '.', '_' and '-' characters")
  }

  //-----------description-------------

  if(typeof description !== "string"){
    throw new Error("Description must be a string")
  }

  if(description.length < 10){
    throw new Error("Description must be at least 10 character long");
  }

  //--------rating-----------------

  if(typeof rating !== "number"){
    throw new Error("Rating must be a number")
  }

  if(rating <= 0 || rating >6){
    throw new Error("Rating must be a number between 0 and 5")
  }

  if(!/^[0-9.]+$/i.test(rating)){
    throw new Error("Rating must be a number between 0 and 5")

  }

  //----------image----------------

  //if(typeof image !== "string"){
  //  throw new Error("Image must be a string")
  //}

  //------------released---------------

  if(typeof released !== "string"){
    throw new Error("Released must be a string")
  }

  if(!/^[0-9_-]+$/i.test(released)){
    throw new Error("Released must contain numbers and '_', '-' characters")
  }
}

module.exports = {validatePostVideogame}