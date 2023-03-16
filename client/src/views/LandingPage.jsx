import {Link} from "react-router-dom";
import style from "../styles/LandingPage.module.css"

export default function LandingPage(){
  return (
    <div className={style.container}>
      <div classname={style.title}>
      <h1>WELCOME TO VIDEOGAMES APP</h1>
      </div>
    <Link to="/home">
      <button className={style.btn}>ACCESS</button>
    </Link>
    </div>
  )
}

