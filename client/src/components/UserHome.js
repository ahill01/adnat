import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react"
import UserOrgDetails from './UserOrgDetails';
import OrgHome from "./OrgHome"
import OrgList from "./OrgList"

function UserHome({currentUser, setCurrentUser,setUserOrgs,setAllOrgs, userOrgs}){
let navigate = useNavigate();

function handleLogout(){
    fetch('/logout', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
   })
   .then(res=> {
    if(!res.ok) throw new Error(res.status);
    else {
        setCurrentUser({})
        navigate('/')
        return res.json()};
   })
    .catch((error) =>{
        console.log('error: '+error)
    })
}

    return(<div>
        <p>logged in as {`${currentUser.name}`}</p>
        <button onClick={() => handleLogout()}> Log Out</button>
        <button onClick={() => navigate("/join")}>Join Another Organization</button>
        <br></br>
        {currentUser.no_orgs ? <p>You aren't currently a member of any organizations. Join an existing organization or create a new one.</p> :null}
        <h2>Your Organizations</h2>
        {userOrgs.map((org) => <UserOrgDetails key={org.id} currentUser={currentUser} setCurrentUser={setCurrentUser} setUserOrgs={setUserOrgs} setAllOrgs={setAllOrgs} org={org}/> )}
        <br></br>
        </div>)
}

export default UserHome;