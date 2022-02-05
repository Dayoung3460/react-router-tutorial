import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Profiles from "./Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about?detail=true">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/*" element={<Profiles/>}/>
      </Routes>
    </div>

  );
}

export default App;
