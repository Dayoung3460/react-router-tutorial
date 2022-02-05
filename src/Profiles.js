import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        <li>
          <Link to="/profiles/clara">Clara</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">Gildong</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<div>Select user</div>}
        />
        <Route
          path=":username"
          element={<Profile/>}
        />
      </Routes>

    </div>
  );
};

export default Profiles;
