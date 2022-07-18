import {Navigate, useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react"
import OrgList from "./OrgList"
import NewOrgForm from "./NewOrgForm"
import EditOrgForm from "./EditOrgForm"

function JoinOrgsPage({currentUser,allOrgs,setAllOrgs,setUserOrgs}){
let navigate=useNavigate()

    function joinOrg(org){
      fetch(`/organization_users`,
      {method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user_id:currentUser.id,organization_id:org.id})
      })
      .then(res => res.json())
      .then(organization_user => {
        console.log(org)
        setUserOrgs(prevState=>[...prevState,org])
            navigate("/home")})
  }

    return(<div>
         <p>logged in as {`${currentUser.name}`}</p>
         {/* <button onClick={handleLogout}>Log Out</button> */}
        {currentUser.no_orgs ? <p>You aren't currently a member of any organizations. Join an existing organization or create a new one.</p>:null}
        <h1>Join an Organization</h1>
        <OrgList currentUser={currentUser} orgs={allOrgs} joinOrg={joinOrg} />
        <NewOrgForm orgs={allOrgs} setOrgs={setAllOrgs} joinOrg={joinOrg}/>
        </div>)
}

export default JoinOrgsPage;