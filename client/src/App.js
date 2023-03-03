import "./App.css";
import { Route } from "react-router-dom";
import {Home, LandingPage} from "./views";

function App() {
  return (
      <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
      </div>
  );
}

export default App;
