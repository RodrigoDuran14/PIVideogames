import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { LandingPage } from "./views";
import NavBar from "./components/NavBar.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={LandingPage} />
    </div>
  );
}

export default App;
