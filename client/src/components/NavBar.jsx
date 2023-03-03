import { Link, useLocation } from "react-router-dom";
import style from "../styles/NavBar.module.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <div className={style.navBar}>
      {console.log(location.pathname)}
      {location.pathname !== "/home" && <Link to="/home" className={style.link}>HOME</Link>}
      {location.pathname !== "/create" && (
        <Link to="/create" className={style.link}>NEW VIDEOGAME</Link>
      )}
    </div>
  );
}
