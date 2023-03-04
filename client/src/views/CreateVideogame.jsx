import { useState } from "react"

export default function CreateVideogame(){

  const [input, setInput] = useState({
    name: "",
    decription: "",
    platforms: [],
    image:"",
    released: "",
    rating:"",
    genres: [],
  }) 

  return(
    <form>
      <div>
        <label>Name: </label>
        <input type="text" value={input.name}  />
      </div>
    </form>
  )
}