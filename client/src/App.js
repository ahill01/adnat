import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import LoginPage from './components/LoginPage'
import SignupForm from './components/SignupForm';

function App() {
const [currentUser,setCurrentUser]=useState({})

  return (
    <div className="App">
      <LoginPage setCurrentUser={setCurrentUser}/>
      <SignupForm setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
