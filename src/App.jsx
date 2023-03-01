import React, { useState } from 'react';
import { getRandomNumber } from './utils/getRandomNumber';
import users from './assets/user.json';

const App = () => {
  const [userIndex, setUserIndex] = useState(getRandomNumber(0, users.length - 1));
  const user = users[userIndex];
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  const changeUser = () => {
    const newUserIndex = getRandomNumber(0, users.length - 1);
    setUserIndex(newUserIndex);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <div>
        <img src={user.picture.large} alt="user_profile" />
      </div>
      <div className="text-white text-center mt-5">
        <h2>{fullName}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
      </div>
      <button onClick={changeUser}>change</button>
    </div>
  );
};

export default App;
