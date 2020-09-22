import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    isSignIn: false,
    error: ''
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}  >
      <Login />
    </UserContext.Provider>
  );
}

export default App;
