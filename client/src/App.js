import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import LoginPage from './components/LoginPage'
import SignupForm from './components/SignupForm';
import UserHome from "./components/UserHome"

function App() {
const [currentUser,setCurrentUser]=useState({})

useEffect(()=>{
fetch(`/sessions/`)
.then(res=> res.json())
.then(user => setCurrentUser(user))},[])

  return (
    <div className="App">
      <h1>Adnat</h1>
      <Router>
      <Routes>
      <Route path="/" element={<LoginPage setCurrentUser={setCurrentUser}/>}/>
      <Route path="/signup" element={<SignupForm setCurrentUser={setCurrentUser} />}/>
      <Route path="/home" element={<UserHome currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
