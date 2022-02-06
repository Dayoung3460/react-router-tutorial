import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";

const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h4>Location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly style={{ width: '300px' }}/>

      <h4>Params</h4>
      <textarea value={JSON.stringify(params)} readOnly style={{ width: '300px' }}/>
      <p><button onClick={() => navigate('/')}>홈으로</button></p>

    </>
  );
};

export default WithRouterSample;
