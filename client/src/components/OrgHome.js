import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react"
import OrgList from "./OrgList"
import NewOrgForm from "./NewOrgForm"
import EditOrgForm from "./EditOrgForm"

function OrgHome({currentUser,setCurrentUser}){
const [orgs, setOrgs]=useState([])

useEffect(() => {
      fetch('/organizations')
    .then(res => res.json())
    .then(orgsList => setOrgs(orgsList))}, [])


    return(<div>
        <h1>Organizations</h1>
        <OrgList currentUser={currentUser} orgs={orgs} setOrgs={setOrgs}/>
        <NewOrgForm currentUser={currentUser} setCurrentUser={setCurrentUser} orgs={orgs} setOrgs={setOrgs}/>
        </div>)
}

export default OrgHome;