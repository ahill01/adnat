import React, {useState, useEffect} from "react"
function NewOrgForm({currentUser,setCurrentUser,orgs,setOrgs}){
const [newOrg, setNewOrg]=useState({name:"",rate:""})

function updateOrg(e){
    setNewOrg({...newOrg,[e.target.name]:e.target.value})
}

function createOrg(e){
    e.preventDefault()
    fetch('/organizations',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({newOrg}) 
   })
   .then(res => res.json())
   .then(org => {
    joinOrg(org)
    setOrgs(...orgs,org)
    console.log.log(orgs)})
}

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

    return(<div>
        <h3>Create a New Organization</h3>
<form onSubmit={createOrg}>
    <label htmlFor="name">Organization Name</label>
    <input type="text" name="name" value={`${newOrg.name}`} onChange={updateOrg}></input>
    <br></br>
    <label htmlFor="hourly_rate">Hourly Rate</label>
    <input type="text" name="hourly_rate" value={`${newOrg.hourly_rate}`} onChange={updateOrg}></input>
    <br/>
   <button type="submit">Create & Join Organization</button>
</form>
        </div>)
}

export default NewOrgForm;