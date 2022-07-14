import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react"
import OrgList from "./OrgList"
import NewOrgForm from "./NewOrgForm"
import EditOrgForm from "./EditOrgForm"

function OrgHome({currentUser, orgs, setOrgs}){
const[userOrgs,setUserOrgs]=useState([])
useEffect(()=>{
    fetch(`/organizations/${currentUser.organization_id}`)
    .then(res=> res.json())
    .then(org => setUserOrgs(org))
},[])

    return(<div>
        <p>logged in as {`${currentUser.name}`}</p>
        {currentUser.organization_id ? <EditOrgForm org={userOrgs}/>:<p>You aren't currently a part of any organizations. Please join or create one.</p>}
        <h1>Organizations</h1>
        <OrgList currentUser={currentUser} orgs={orgs} setOrgs={setOrgs}/>
        <NewOrgForm currentUser={currentUser} orgs={orgs} setOrgs={setOrgs}/>
        </div>)
}

export default OrgHome;