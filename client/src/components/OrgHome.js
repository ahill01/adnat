import {Navigate, useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react"
import OrgList from "./OrgList"
import NewOrgForm from "./NewOrgForm"
import EditOrgForm from "./EditOrgForm"

function OrgHome({currentUser,setCurrentUser}){
const [orgs, setOrgs]=useState([])
let navigate = useNavigate()

useEffect(()=>{
  setOrgs(currentUser.orgs)
},[currentUser])

    function joinOrg(org){
      fetch(`/organization_users`,
      {method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user_id:currentUser.id,organization_id:org.id})
      })
      .then(res => res.json())
      .then(organization_user => {
          console.log(organization_user)
          navigate("/home")})
  
  }

    return(<div>
        <h1>Organizations</h1>
        <OrgList currentUser={currentUser} orgs={orgs} setOrgs={setOrgs} joinOrg={joinOrg}/>
        <NewOrgForm orgs={orgs} setOrgs={setOrgs} joinOrg={joinOrg}/>
        </div>)
}

export default OrgHome;