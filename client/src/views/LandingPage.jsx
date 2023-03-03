import React from "react";
import {Link} from "react-router-dom";
import Card from "../components/Card";
import style from "../styles/LandingPage.module.css"

export default function LandingPage(){
  return (
    <div className={style.container}>
      <h1>WELCOME TO VIDEOGAMES APP</h1>
    <Link to="/home">
      <button className={style.btn}>ACCESS</button>
    </Link>

    <Card />
    </div>
  )
}

