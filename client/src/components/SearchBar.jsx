import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameByName } from "../redux/actions";
import style from "../styles/SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideogameByName(name));
    setName("");
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder="search by name"
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <button
        className={style.btn}
        onClick={(e) => handleSubmit(e)}
        type="submit"
      >
        Search
      </button>
    </div>
  );
}
