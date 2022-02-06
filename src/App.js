import './App.css';
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  let location = useLocation()

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
        <li>
          <Link to="/history">History Example</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/*" element={<Profiles/>}/>
        <Route path="/history" element={<HistorySample/>}/>
        <Route path="/*" element={
          <div>
            <h1>Not Found</h1>
            <p>{location.pathname}</p>
          </div>
          }/>
      </Routes>
    </div>

  );
}

export default App;
