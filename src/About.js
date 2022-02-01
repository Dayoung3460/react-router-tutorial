import React from 'react';
import {useLocation} from "react-router-dom";
import qs from "qs";

const About = () => {
  const location = useLocation()
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // ignore '?'
  })
  return(
    <div>
      <h1>Intro</h1>
      <p>This is react router tutorial</p>
      { query.detail }
    </div>
  )
};

export default About;
