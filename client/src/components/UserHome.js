import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react"
import OrgOverview from './OrgOverview';
import OrgHome from "./OrgHome"

function UserHome({currentUser, setCurrentUser}){
const[userOrgs,setUserOrgs]=useState({})
let navigate = useNavigate();

useEffect(()=>{
    fetch(`/organizations/${currentUser.organization_id}`)
    .then(res=> res.json())
    .then(org => setUserOrgs(org))
},[])

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
        {console.log(currentUser.organization_id)}
        {currentUser.organization_id ? <OrgOverview currentUser={currentUser} org={userOrgs}/>: <OrgHome currentUser={currentUser}/>}
        </div>)
}

export default UserHome;