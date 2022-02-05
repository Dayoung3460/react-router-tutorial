import React, {Component, useEffect} from 'react';
import {useNavigate , useParams} from "react-router-dom";
import {usePrompt} from "./Blocker";

const HistorySample = () => {
  let navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  const goHome = () => {
    navigate('/')
  }

  usePrompt('Are you sure to leave?', true)

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <button onClick={goHome}>Home</button>
    </div>
  )
}

export default HistorySample;
