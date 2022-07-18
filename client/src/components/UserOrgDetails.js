import React, {useState, useEffect} from "react"
import Shifts from "./Shifts"
import EditOrgForm from "./EditOrgForm"

function UserOrgDetails({currentUser,setCurrentUser, setUserOrgs, setAllOrgs, org}){
const [shifts,setShifts]=useState([])
const [viewShifts,setViewShifts]=useState(false)
const[editMode,setEditMode]=useState(false)

    
useEffect(()=>{
    console.log("fetching shifts")
    fetch(`/organizations/shifts/${org.id}`)
    .then(res=> res.json())
    //TODO: add if res.ok? logic
    .then(shifts => setShifts(shifts))
},[])

    function leaveOrg(){
        fetch(`/organization_users/user/${currentUser.id}/${org.id}`,
      {method:'DELETE',
      headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(user_org => {
        setUserOrgs(prevOrgs => prevOrgs.filter(org => org.id !== user_org.organization.id))
    })
    }
        return(<div>
    <h2>{org.name}</h2>
    <button onClick={() => setViewShifts(!viewShifts)}>View Shifts</button>
    <button onClick={() => setEditMode(!editMode)}>Edit</button>
    <button onClick={leaveOrg}>Leave</button>
    {editMode ? <EditOrgForm currentUser={currentUser} setAllOrgs={setAllOrgs} org={org} setCurrentUser={setCurrentUser}/> : null}
    {viewShifts ? <Shifts currentUser={currentUser} org={org} shifts={shifts} setShifts={setShifts}/>:null}
        </div>)
    }
    
    export default UserOrgDetails;