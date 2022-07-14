import React, {useState, useEffect} from "react"
import Shifts from "./Shifts"

function OrgOverview({currentUser, org}){
const [shifts,setShifts]=useState([])
const [viewShifts,setViewShifts]=useState(false)

    useEffect(()=>{
        console.log("fetching shifts")
        fetch(`/organizations/shifts/${currentUser.organization_id}`)
        .then(res=> res.json())
        .then(shifts => setShifts(shifts))
    },[])

        return(<div>
    <h2>{org.name}</h2>
    <button onClick={() => setViewShifts(!viewShifts)}>View Shifts</button>
    <button>Edit</button>
    <button>Leave</button>
    {viewShifts ? <Shifts currentUser={currentUser} shifts={shifts}/>:null}
        </div>)
    }
    
    export default OrgOverview;