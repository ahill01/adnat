import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import LoginPage from './components/LoginPage'
import SignupForm from './components/SignupForm';
import UserHome from "./components/UserHome"
import JoinOrgsPage from "./components/JoinOrgsPage"
function App() {
const [currentUser,setCurrentUser]=useState({})
const [allOrgs, setAllOrgs]=useState([])
const [userOrgs, setUserOrgs]=useState([])

useEffect(()=>{
fetch(`/sessions/`)
.then(res=> res.json())
.then(user => setCurrentUser(user))},[])

useEffect(()=>{
  fetch(`/organizations/`)
  .then(res=> res.json())
  .then(orgs => setAllOrgs(orgs))},[])

  useEffect(()=>{
    console.log("getting user orgs")
    fetch(`/users/${currentUser.id}/organizations`)
    .then(res=> res.json())
    .then(orgs => setUserOrgs(orgs))},[allOrgs])


  return (
    <div className="App">
      <h1>Adnat</h1>
      <Router>
      <Routes>
      <Route path="/" element={<LoginPage setCurrentUser={setCurrentUser}/>}/>
      <Route path="/signup" element={<SignupForm setCurrentUser={setCurrentUser} />}/>
      <Route path="/home" element={<UserHome currentUser={currentUser} setCurrentUser={setCurrentUser} userOrgs={userOrgs} setUserOrgs={setUserOrgs} setAllOrgs={setAllOrgs}/>}/>
      <Route path ="/join" element={<JoinOrgsPage currentUser={currentUser} setCurrentUser={setCurrentUser} allOrgs={allOrgs} setAllOrgs={setAllOrgs} setUserOrgs={setUserOrgs}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
