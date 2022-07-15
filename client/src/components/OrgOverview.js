import React, {useState, useEffect} from "react"
import Shifts from "./Shifts"
import EditOrgForm from "./EditOrgForm"

function OrgOverview({currentUser,setCurrentUser}){
const [shifts,setShifts]=useState([])
const [viewShifts,setViewShifts]=useState(false)
const[editMode,setEditMode]=useState(false)

    
useEffect(()=>{
    console.log("fetching shifts")
    fetch(`/organizations/shifts/${currentUser.org.id}`)
    .then(res=> res.json())
    //TODO: add if res.ok? logic
    .then(shifts => setShifts(shifts))
},[])

    function leaveOrg(){
        fetch(`/users/${currentUser.id}`,
      {method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...currentUser,organization_id:null})
      })
      .then(res => res.json())
      .then(user => {
          setCurrentUser(user)})
    }
        return(<div>
    <h2>{currentUser.org? currentUser.org.name:null}</h2>
    <button onClick={() => setViewShifts(!viewShifts)}>View Shifts</button>
    <button onClick={() => setEditMode(!editMode)}>Edit</button>
    <button onClick={leaveOrg}>Leave</button>
    {editMode ? <EditOrgForm currentUser={currentUser} org={currentUser.org} setCurrentUser={setCurrentUser}/> : null}
    {viewShifts ? <Shifts currentUser={currentUser} shifts={shifts}/>:null}
        </div>)
    }
    
    export default OrgOverview;