import React from 'react';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  }

  return (
    <div>
      <h3>User List</h3>
      <ul>
        <li>
          <NavLink to="/profiles/clara" style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Clara</NavLink>
        </li>
        <li>
          <NavLink to="/profiles/gildong" style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Gildong</NavLink>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<div>Select user</div>}
        />
        <Route
          path="/:username"
          element={<Profile/>}
        />
      </Routes>

    </div>
  );
};

export default Profiles;
