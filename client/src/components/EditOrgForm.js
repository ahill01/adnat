import React, {useState, useEffect} from "react"

function EditOrgForm({userOrgs,setAllOrgs,org}){
const[orgInfo,setOrgInfo]=useState(org)

    function editUserOrg(e){
        setOrgInfo({...orgInfo,[e.target.name]:e.target.value})
    }

    function updateOrg(e){
      e.preventDefault()
    fetch(`/organizations/${orgInfo.id}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name:orgInfo.name,hourly_rate:orgInfo.hourly_rate}) 
   })
   .then(res => res.json())
   .then(updated_org => {
    alert("organization has been updated")
    setAllOrgs(prevState => prevState.filter((org_elem) => org_elem.id !== org.id))
    setAllOrgs(prevState => [...prevState,org])
  })
    }

    function deleteOrg(org){
      fetch(`/organizations/${org.id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
   })
   .then(res=> {
    if(!res.ok) throw new Error(res.status);
    else {
        return res.json()};
   })
    .catch((error) =>{
        console.log('error: '+error)
    })
    }

    return(<div>
  <h3>Edit Organization</h3>
<form onSubmit={updateOrg}>
    <label htmlFor="name">Organization Name</label>
    <input type="text" name="name" value={`${orgInfo.name}`} onChange={editUserOrg}></input>
    <br></br>
    <label htmlFor="hourly_rate">Hourly Rate</label>
    <input type="text" name="hourly_rate" value={`${orgInfo.hourly_rate}`} onChange={editUserOrg}></input>
    <br/>
   <button type="submit">Update</button>
</form>
        <button onClick={()=>deleteOrg(org)}>Delete</button>
    </div>)
}

export default EditOrgForm;