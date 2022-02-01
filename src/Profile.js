import React from 'react';
import {useParams} from "react-router-dom";

const data = {
  clara: {
    name: 'Dayoung Kim',
    description: 'front-end developer'
  },
  gildong: {
    name: 'Gildong Hong',
    description: 'man'
  }
}

const Profile = () => {
  const match = useParams()
  const { username } = match
  const profile = data[username]
  if(!profile) {
    return <div>Unknown user</div>
  }
  return (
    <div>
      <h3>{ username }({ profile.name })</h3>
      <p>{ profile.description }</p>
    </div>
  );
};

export default Profile;
