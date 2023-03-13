import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGenres, postVideogame } from "../redux/actions";
import style from "../styles/Create.module.css";

let platforms = [
  " PC",
  " PlayStation 5",
  " PlayStation 4",
  " Xbox One",
  " Xbox Series S/X",
  " Nintendo Switch",
  " iOS",
  " Android",
  " Nintendo 3DS",
  " Nintendo DS",
  " Nintendo DSi",
  " macOS",
  " Linux",
  " Xbox 360",
  " Xbox",
  " PlayStation 3",
  " PlayStation 2",
  " PlayStation",
  " PS Vita",
  " PSP",
  " Wii U",
  " Wii",
  " GameCube",
  " Nintendo 64",
  " Game Boy Advance",
  " Game Boy Color",
  " Game Boy",
  " SNES",
  " NES",
  " Classic Macintosh",
  " Apple II",
  " Commodore / Amiga",
  " Atari 7800",
  " Atari 5200",
  " Atari 2600",
  " Atari Flashback",
  " Atari 8-bit",
  " Atari ST",
  " Atari Lynx",
  " Atari XEGS",
  " Genesis",
  " SEGA Saturn",
  " SEGA CD",
  " SEGA 32X",
  " SEGA Master System",
  " Dreamcast",
  " 3DO",
  " Jaguar",
  " Game Gear",
  " Neo Geo",
  " Web",
];

const validate = (input) => {
  const btn = document.querySelector("#error");
  var errors = {};

  if (
    !input.name ||
    input.name.length < 3 ||
    !/^[a-zA-ZñÑ0-9\s._-]+$/i.test(input.name)
  ) {
    errors.name =
      "the field Name are required, must contain numbers, letters, '.', '_' and '-' characters and must be at least 3 characters";
    btn.disabled = true;
  } 

  if (!input.description || input.description.length < 10) {
    errors.description =
      "the field Description are required, must be at least 10 characters long";
    btn.disabled = true;
  } 
  if (
    !input.rating ||
    input.rating <= 0 ||
    input.rating >= 6 ||
    !/^[0-9.]+$/i.test(input.rating)
  ) {
    errors.rating =
      "the field Rating are required, must be a number between 0 and 5";
    btn.disabled = true;
  } 

  if (!input.released) {
    errors.released = "the field Release Date are required";
    btn.disabled = true;
  } 

  if (!input.platforms || input.platforms.length === 0) {
    errors.platforms = "select at least one platforms";
    btn.disabled = true;
  } 

  if (input.platforms.length > 1) {
    for (let i = 0; i < input.platforms.length; i++) {
      for (let j = i + 1; j < input.platforms.length; j++) {
        if (input.platforms[i] === input.platforms[j]) {
          errors.platforms = "Platforms cannot be repeated";
          btn.disabled = true;
        } 
      }
    }
  }

  if (!input.genres || input.genres.length === 0) {
    errors.genres = "select at least one genres";
    btn.disabled = true;
  }
  if (input.genres.length > 1) {
    for (let i = 0; i < input.genres.length; i++) {
      for (let j = i + 1; j < input.genres.length; j++) {
        if (input.genres[i] === input.genres[j]) {
          errors.genres = "Genres cannot be repeated";
          btn.disabled = true;
        }
      }
    }
  }

  

  return errors;
};

export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.genres);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    description: "",
    rating: Number(""),
    //image: "",
    released: "",
    platforms: [],
    genres: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSelectPlatform = (e) => {
    if (!input.platforms.length) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          platforms: e.target.value,
        })
      );
    } else {
      if (!input.platforms.includes(e.target.value)) {
        setInput({
          ...input,
          platforms: [...input.platforms, e.target.value],
        });
        setErrors(
          validate({
            ...input,
            platforms: e.target.value,
          })
        );
      } else {
        setErrors(
          validate({
            ...input,
            platforms: "",
          })
        );
      }
    }
  };

  const handleSelectGenre = (e) => {
    if (!input.genres.length) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          genres: e.target.value,
        })
      );
    } else {
      if (!input.genres.includes(e.target.value)) {
        setInput({
          ...input,
          genres: [...input.genres, e.target.value],
        });
        setErrors(
          validate({
            ...input,
            genres: e.target.value,
          })
        );
      } else {
        setErrors(
          validate({
            ...input,
            genres: "",
          })
        );
      }
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleChangeRating = (e) => {
    setInput({
      ...input,
      rating: Number(e.target.value),
    });
    setErrors(
      validate({
        ...input,
        rating: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postVideogame(input));

    setInput({
      name: "",
      description: "",
      rating: Number(""),
      //image: "",
      released: "",
      platforms: [],
      genres: [],
    });
    alert("Videogame created");
    history.push("/home");
  };

  const handleDeletePlatforms = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((p) => p !== e),
    });
    if (input.platforms.length < 1) {
      setErrors(
        validate({
          ...input,
          platforms: [],
        })
      );
    }
  };

  const handleDeleteGenres = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter((g) => g !== e),
    });
    if (input.genres.length < 1) {
      setErrors(
        validate({
          ...input,
          genres: [],
        })
      );
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
        <div className={style.title}>
          <h3>Create videogame</h3>
        </div>
        <div>
          <label>NAME: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>DESCRIPTION: </label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => handleChange(e)}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div>
          <label>RATING:</label>
          <input
            type="number"
            name="rating"
            min={0}
            max={5}
            value={input.rating}
            onChange={(e) => handleChangeRating(e)}
          />
          {errors.rating && <p>{errors.rating}</p>}
        </div>
        {/*<div>
          <label>IMAGE: </label>
          <input type="text" name="image" value={input.image} onChange={e => handleChange(e)}/>
        </div>*/}
        <div>
          <label>RELEASE DATE: </label>
          <input
            type="date"
            name="released"
            value={input.released}
            onChange={(e) => handleChange(e)}
          />
          {errors.released && <p>{errors.released}</p>}
        </div>
        <div>
          <label>PLATFORMS: </label>
          <select onChange={(e) => handleSelectPlatform(e)}>
            <option disable>Platforms</option>
            {platforms.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.platforms && <p>{errors.platforms}</p>}
        </div>
        <div>
          <label>GENRES: </label>
          <select onChange={(e) => handleSelectGenre(e)}>
            <option disable>Genres</option>
            {genres.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          {errors.genres && <p>{errors.genres}</p>}
        </div>

        <button
          type="submit"
          disabled={
            (
            !input.name ||
            !input.description ||
            !input.rating ||
            !input.released ||
            !input.platforms.length > 0 ||
            !input.genres.length >0
            ) 
              ? true
              : false
          }
          id="error"
          className={style.btn}
        >
          ENVIAR
        </button>
      </form>
      <div className={style.selectContainer} >
        <div>
          {input.platforms.length > 0 ? <h6 className={style.titleCard} >Platforms</h6> : <></>}
          {input.platforms &&
            input.platforms.map((p) => (
              <div className={style.card}>
                <p>{p}</p>
                <button className={style.btnX} onClick={() => handleDeletePlatforms(p)}>X</button>
              </div>
            ))}
        </div>
        <div className={style.separador}></div>
        <div>
        {input.genres.length > 0 ? <h6 className={style.titleCard} >Genres</h6> : <></>}
          {input.genres &&
            input.genres.map((g) => (
              <div className={style.card}>
                <p>{g}</p>
                <button className={style.btnX} onClick={() => handleDeleteGenres(g)}>X</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
