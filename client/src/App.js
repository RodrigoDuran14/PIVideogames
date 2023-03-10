import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { LandingPage, Home, Create, Detail } from "./views";
import NavBar from "./components/NavBar.jsx";

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
