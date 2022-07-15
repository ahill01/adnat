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

    function joinOrg(org){
      fetch(`/users/${currentUser.id}`,
      {method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...currentUser,organization_id:org.id})
      })
      .then(res => res.json())
      .then(user => {
          console.log(user)
          setCurrentUser(user)})
  }

  function deleteOrg(org){
    fetch(`/organizations/${org.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
 })
 .then(res=> {
  if(!res.ok) throw new Error(res.status);
  else {
      setCurrentUser({...currentUser,organization_id:null})
      return res.json()};
 })
  .catch((error) =>{
      console.log('error: '+error)
  })
  }


    return(<div>
        <h1>Organizations</h1>
        <OrgList currentUser={currentUser} orgs={orgs} setOrgs={setOrgs} joinOrg={joinOrg}/>
        <NewOrgForm orgs={orgs} setOrgs={setOrgs} joinOrg={joinOrg}/>
        </div>)
}

export default OrgHome;