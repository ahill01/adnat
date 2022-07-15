import React, {useState, useEffect} from "react"
import EditOrgForm from "./EditOrgForm";

function OrgDetails({currentUser, org,joinOrg}){
const[editMode,setEditMode]=useState(false)

    return(<div>
<p>{org.name}</p>
<button onClick={() => setEditMode(!editMode)}>edit</button>
<button onClick={() => joinOrg(org)}>join</button>
{editMode ? <EditOrgForm org={org}/> : null}
    </div>)
}

export default OrgDetails;