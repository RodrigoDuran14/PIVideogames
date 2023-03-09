import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postVideogame } from "../redux/actions";
import style from "../styles/Create.module.css";

let platforms = [
  "PC",
  "PlayStation 5",
  "PlayStation 4",
  "Xbox One",
  "Xbox Series S/X",
  "Nintendo Switch",
  "iOS",
  "Android",
  "Nintendo 3DS",
  "Nintendo DS",
  "Nintendo DSi",
  "macOS",
  "Linux",
  "Xbox 360",
  "Xbox",
  "PlayStation 3",
  "PlayStation 2",
  "PlayStation",
  "PS Vita",
  "PSP",
  "Wii U",
  "Wii",
  "GameCube",
  "Nintendo 64",
  "Game Boy Advance",
  "Game Boy Color",
  "Game Boy",
  "SNES",
  "NES",
  "Classic Macintosh",
  "Apple II",
  "Commodore / Amiga",
  "Atari 7800",
  "Atari 5200",
  "Atari 2600",
  "Atari Flashback",
  "Atari 8-bit",
  "Atari ST",
  "Atari Lynx",
  "Atari XEGS",
  "Genesis",
  "SEGA Saturn",
  "SEGA CD",
  "SEGA 32X",
  "SEGA Master System",
  "Dreamcast",
  "3DO",
  "Jaguar",
  "Game Gear",
  "Neo Geo",
  "Web",
];

export default function Create() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const [input, setInput] = useState({
    name:"",
    description:"",
    rating: Number(""),
    image:"",
    released:"",
    platforms:[],
    genres:[],
  }) 

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSelectPlatform = (e)=>{
    if(!input.platforms.length){
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value]
      })
    }else{
      if(!input.platforms.includes(e.target.value)){
        setInput({
          ...input, 
          platforms: [...input.platforms, e.target.value]
        })
      }
    }
  }

  const handleSelectGenre = (e) =>{
    setInput({
      ...input,
      genres: [...input.genres, e.target.value]
    })
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeRating = (e) => {
    setInput({
      ...input,
      rating: Number(e.target.value),
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(postVideogame(input));

    setInput({
      name: "",
      description: "",
      rating: Number(""),
      image: "",
      released: "",
      platforms: [],
      genres: [],
    })
    alert("Videogame created");
    console.log("SUBMIT: ", input);
  }

  return (
    <div className={style.container} >
      <form onSubmit={e => handleSubmit(e)} className={style.form} >
        <div className={style.title}>
          <h3>Create videogame</h3>
        </div>
        <div>
          <label>NAME: </label>
          <input type="text" name="name" value={input.name} onChange={e => handleChange(e)}/>
        </div>
        <div>
          <label>DESCRIPTION: </label>
          <input type="text" name="description" value={input.description} onChange={e => handleChange(e)}/>
        </div>
        <div>
          <label>RATING:</label>
          <input type="number" name="rating" min={0} max={5} value={input.rating} onChange={e => handleChangeRating(e)}/>
        </div>
        <div>
          <label>IMAGE: </label>
          <input type="text" name="image" value={input.image} onChange={e => handleChange(e)}/>
        </div>
        <div>
          <label>RELEASE DATE: </label>
          <input type="date" name="released"  value={input.released} onChange={e => handleChange(e)}/>
        </div>
        <div>
          <label>PLATFORMS: </label>
          <select onChange={e => handleSelectPlatform(e)}>
            <option disabled >Platforms</option>
            {platforms.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          {input.platforms && input.platforms.map(p => (
            <div><p>{p}</p></div>
          ))}
        </div>
        <div>
          <label>GENRES: </label>
          <select onChange={e => handleSelectGenre(e)} >
          <option disabled >Genres</option>
            {genres.map((g) => (
                <option value={g}>
                  {g}
                </option>
              ))}
          </select>
        </div>
        <div>
          {input.genres && input.genres.map(g => (
            <div><p>{g}</p></div>
          ))}
        </div>

        <button type="submit" className={style.btn}>ENVIAR</button>
      </form>
    </div>
  );
}
