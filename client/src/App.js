import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { LandingPage, Home, Create, Detail } from "./views";
import NavBar from "./components/NavBar.jsx";
import axios from "axios";
axios.defaults.baseURL= "https://pivideogames-production-aee2.up.railway.app/"

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/games/:id" component={Detail} />
    </div>
  );
}

export default App;
