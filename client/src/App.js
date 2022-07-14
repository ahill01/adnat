import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import LoginPage from './components/LoginPage'
import SignupForm from './components/SignupForm';
import OrgHome from "./components/OrgHome"

function App() {
const [currentUser,setCurrentUser]=useState({})
const [orgs, setOrgs]=useState([])

useEffect(() => {
  fetch('/organizations')
.then(res => res.json())
.then(orgsList => setOrgs(orgsList))}, [])

  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<LoginPage setCurrentUser={setCurrentUser}/>}/>
      <Route path="/signup" element={<SignupForm setCurrentUser={setCurrentUser} />}/>
      <Route path="/orghome" element={<OrgHome currentUser={currentUser} setCurrentUser={setCurrentUser} orgs={orgs} setOrgs={setOrgs}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
