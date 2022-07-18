import React, {useState, useEffect} from "react"
function NewOrgForm({orgs,setOrgs,joinOrg}){
const [newOrg, setNewOrg]=useState({name:"",hourly_rate:0.00})

function updateNewOrg(e){
    setNewOrg({...newOrg,[e.target.name]:e.target.value})
}

function createOrg(e){
    e.preventDefault()
    fetch('/organizations',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name:newOrg.name,hourly_rate:newOrg.hourly_rate}) 
   })
   .then(res => res.json())
   .then(org => {
    joinOrg(org)
    setOrgs(...orgs,org)
    })
}

    return(<div>
        <h3>Create a New Organization</h3>
<form onSubmit={createOrg}>
    <label htmlFor="name">Organization Name</label>
    <input type="text" name="name" value={`${newOrg.name}`} onChange={updateNewOrg}></input>
    <br></br>
    <label htmlFor="hourly_rate">Hourly Rate</label>
    <input type="text" name="hourly_rate" value={`${newOrg.hourly_rate}`} onChange={updateNewOrg}></input>
    <br/>
   <button type="submit">Create & Join Organization</button>
</form>
        </div>)
}

export default NewOrgForm;