import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react"
import OrgOverview from './OrgOverview';
import OrgHome from "./OrgHome"

function UserHome({currentUser, setCurrentUser}){
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
        {currentUser.org ? null: <p>You aren't currently a member of any organizations. Join an existing organization or create a new one.</p>}
        {currentUser.org ? <OrgOverview currentUser={currentUser} setCurrentUser={setCurrentUser}/>: <OrgHome currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
        </div>)
}

export default UserHome;